import React, { useState, useContext } from 'react';
import { CartContext } from '../Components/CartContext'; // Import CartContext

const ProductDescription = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false); // State for showing the message
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
          <p className="mb-4">{product.description}</p>

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
