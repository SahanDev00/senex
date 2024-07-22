import React, { useState, useContext } from 'react';
import { CartContext } from '../Components/CartContext'; // Import CartContext

const ProductDescription = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false); // State for showing the message
  const [view, setView] = useState('description'); // State for toggling between description and specifications
  const { addToCart } = useContext(CartContext); // Use CartContext

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity); // Pass quantity to addToCart
    setShowMessage(true); // Show the "Added to Cart" message
    setTimeout(() => setShowMessage(false), 2000); // Hide the message after 2 seconds
  };

  // Ensure product.price is a number
  const formatPrice = (price) => {
    const num = parseFloat(price);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
        <div>
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">${formatPrice(product.price)}</p>

          {/* Toggle Buttons */}
          <div className="flex mb-4">
            <button
              onClick={() => setView('description')}
              className={`py-2 px-4 ${view === 'description' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-l focus:outline-none`}
            >
              Description
            </button>
            <button
              onClick={() => setView('specifications')}
              className={`py-2 px-4 ${view === 'specifications' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} rounded-r focus:outline-none`}
            >
              Specifications
            </button>
          </div>

          {/* Content Area */}
          <div className="mb-4">
            {view === 'description' ? (
              <p>{product.description}</p>
            ) : (
              <ul>
                {product.specifications && product.specifications.length > 0 ? (
                  product.specifications.map((spec, index) => (
                    <li key={index} className="mb-2">
                      <span className="font-semibold">{spec.name}:</span> {spec.value}
                    </li>
                  ))
                ) : (
                  <p>No specifications available.</p>
                )}
              </ul>
            )}
          </div>

          {/* Quantity Adjustment */}
          <div className="flex items-center mb-4">
            <button
              onClick={handleDecrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l focus:outline-none"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-12 text-center border-t border-b border-gray-200 focus:outline-none"
            />
            <button
              onClick={handleIncrease}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r focus:outline-none"
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      {/* Notification Message */}
      {showMessage && (
        <div className="fixed top-4 left-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
          Added to Cart
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
