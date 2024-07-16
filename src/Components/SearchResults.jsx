// SearchResults.js
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';
import { Categories } from '../products';
import { SearchContext } from '../SearchContext'; // Import SearchContext

const SearchResults = () => {
  const location = useLocation();
  const { searchQuery } = useContext(SearchContext); // Get searchQuery from context

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || searchQuery; // Use query from URL or context

  const allProducts = Categories.flatMap(category => 
    category.subCat.flatMap(subCat => subCat.products)
  );

  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="w-[91%] p-4">
      {filteredProducts.length === 0 ? (
        <NotFound searchTerm={query} />
      ) : (
        <div>
          <h2 className="text-2xl ml-2 font-bold mb-4">Search Results for "{query}"</h2>
          <p className='ml-2'>{filteredProducts.length} products found</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="border m-1 p-4 rounded hover:shadow-lg shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
            </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
