import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  // Ensure item.price is a number
  const formatPrice = (price) => {
    // Remove any non-numeric characters except for periods
    const cleanedPrice = price.replace(/[^0-9.]/g, '');
    const num = parseFloat(cleanedPrice);
    return isNaN(num) ? '0.00' : num.toFixed(2);
  };

  return (
    <div className="w-[95%] mx-auto mt-10 min-h-[800px] relative">
      <h1 className="text-3xl font-bold mb-4 text-white text-center font-poppins">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className='text-white ml-40 text-xl font-poppins'>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between mb-4 p-4 border-b">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h2 className="text-xl text-white font-semibold font-poppins">{item.name}</h2>
                    <p className="text-white font-poppins">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg text-white font-semibold font-poppins">${formatPrice(item.price)}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-end mt-4">
            <Link to='/checkout'>
              <button className="bg-blue-500 text-white py-2 px-4 rounded font-poppins">Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
