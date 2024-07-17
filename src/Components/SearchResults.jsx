import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';
import { Categories } from '../products';
import { SearchContext } from '../SearchContext';

const SearchResults = () => {
  const location = useLocation();
  const { searchQuery } = useContext(SearchContext);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || searchQuery;

  const allProducts = Categories.flatMap(category => 
    category.subCat.flatMap(subCat => subCat.products)
  );

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  return (
    <div className="w-[91%] p-4">
      {filteredProducts.length === 0 ? (
        <NotFound searchTerm={query} />
      ) : (
        <div>
          <h2 className="text-2xl ml-2 font-bold mb-2">Search Results for "{query}"</h2>
          <p className='ml-2 mt-1 mb-3'>{filteredProducts.length} products found</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product, index) => (
              <div key={index} className="border bg-white hover:scale-105 duration-300 m-1 p-4 rounded hover:shadow-lg shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 mx-1 border rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
