import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NotFound from './NotFound';
import { Categories } from '../products';
import { SearchContext } from '../SearchContext';
import { CartContext } from '../Components/CartContext';
import ProductDescription from './ProductDescription';

const SearchResults = () => {
  const location = useLocation();
  const { searchQuery } = useContext(SearchContext);
  const { addToCart } = useContext(CartContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState(''); // State for notification message

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

  const handleAddToCart = (product, e) => {
    e.stopPropagation(); // Prevent the modal from opening
    addToCart(product);
    
    // Show notification message
    setNotification(`${product.name} has been added to the cart.`);
    
    // Hide notification message after 3 seconds
    setTimeout(() => {
      setNotification('');
    }, 3000);
  };

  return (
    <div className="w-[91%] p-4 relative">
      {filteredProducts.length === 0 ? (
        <NotFound searchTerm={query} />
      ) : (
        <div>
          <h2 className="text-2xl ml-2 font-bold mb-2 text-white">Search Results for "{query}"</h2>
          <p className='ml-2 mt-1 mb-3 text-white'>{filteredProducts.length} products found</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product, index) => (
              <div key={index} className="border border-gray-500 hover:scale-105 duration-300 m-1 p-4 rounded hover:shadow-lg shadow cursor-pointer" onClick={() => setSelectedProduct(product)}>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-xl text-center text-white font-semibold">{product.name}</h2>
                <p className=" text-center text-white">${Number(product.price).toFixed(2)}</p> {/* Ensure price is formatted */}
                <button
                  className="mt-2 flex mx-auto bg-red-500 text-white py-2 px-4 rounded"
                  onClick={(e) => handleAddToCart(product, e)} // Handle Add to Cart
                >
                  Add to Cart
                </button>
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
      
      {/* Notification message */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50">
          {notification}
        </div>
      )}

      {/* Modal for Product Description */}
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-3/4 max-w-4xl relative">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <ProductDescription product={selectedProduct} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
