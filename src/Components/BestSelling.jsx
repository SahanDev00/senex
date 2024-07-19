import React, { useEffect, useState, useContext } from 'react';
import { Categories } from '../products';
import ProductDescription from './ProductDescription';
import { CartContext } from '../Components/CartContext'; // Import CartContext

const BestSelling = () => {
  const [bestSellingItems, setBestSellingItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showMessage, setShowMessage] = useState(false); // State for notification message
  const [message, setMessage] = useState('');
  const { addToCart } = useContext(CartContext); // Use CartContext

  useEffect(() => {
    const allProducts = Categories.flatMap(category =>
      category.subCat.flatMap(subCategory => subCategory.products)
    );

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const randomProducts = shuffleArray(allProducts).slice(0, 10);
    setBestSellingItems(randomProducts);
  }, []);

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Prevent the modal from opening
    addToCart(product); // Add product to cart

    // Show notification message
    setMessage(`${product.name} has been added to the cart.`);
    setShowMessage(true);

    // Hide notification message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className='w-[95%] h-[50vh] bg-black/30 flex mx-auto mt-10 relative border-2 border-red-500 items-center rounded-xl justify-center'>
      <div className='w-[95%] h-[95%]'>
        <h1 className='font-semibold text-3xl mt-2 text-white'>BEST SELLING ITEMS</h1>
      
        <div className='mt-4 w-full h-[370px] overflow-hidden'>
          <div className='flex items-center h-full overflow-x-scroll whitespace-nowrap'>
            {bestSellingItems.map((product) => (
              <div
                key={product.id}
                className='w-[260px] bg-black/60 hover:scale-105 duration-300 h-[320px] rounded-xl mx-4 p-4 shadow hover:shadow-md border-2 border-red-500 flex-shrink-0 cursor-pointer'
                onClick={() => setSelectedProduct(product)}
              >
                <img className='w-full bg-white h-40 object-cover mb-4 border-2 rounded-xl border-white' src={product.image} alt={product.name} />
                <h1 className='text-xl mt-2 font-semibold text-white'>{product.name}</h1>
                <p className='text-white'>${product.price}</p>
                <button
                  className='py-2 px-4 rounded mt-2 bg-red-500 text-white'
                  onClick={(e) => handleAddToCart(e, product)} // Pass event and product
                >
                  Add To Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification message */}
      {showMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50">
          {message}
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

export default BestSelling;
