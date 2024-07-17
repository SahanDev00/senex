import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Categories } from '../products';
import { SearchContext } from '../SearchContext';

const ProductsPage = () => {
  const { searchQuery, clearSearchQuery } = useContext(SearchContext);
  const { subCategoryName } = useParams();

  // Clear the search query when navigating to a new category
  useEffect(() => {
    clearSearchQuery();
  }, [subCategoryName, clearSearchQuery]);

  // Function to find products based on subCategoryName and apply search filter
  const findProducts = (subCategoryName) => {
    for (const category of Categories) {
      for (const subCat of category.subCat) {
        if (subCat.name === subCategoryName) {
          return subCat.products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
      }
    }
    return [];
  };

  const products = findProducts(subCategoryName);

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  return (
    <div className="w-[91%] p-4">
      <h1 className="text-2xl font-bold mb-3">{subCategoryName} Products</h1>
      {products.length > 0 ? (
        <div>
          <p className="mb-2">{products.length} products found</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="border bg-white hover:scale-105 duration-300 m-1 p-5 rounded hover:shadow-lg shadow">
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
      ) : (
        <p>0 products found</p>
      )}
    </div>
  );
};

export default ProductsPage;
