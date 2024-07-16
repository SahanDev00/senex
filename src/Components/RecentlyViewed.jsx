import React, { useEffect, useState } from 'react';
import { Categories } from '../products';

const RecentlyViewed = () => {

    const [bestSellingItems, setBestSellingItems] = useState([]);

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

  return (
    <div className='w-[84%] h-[50vh] flex mx-auto mt-5'>
      <div className='w-full h-full'>
        <h1 className='font-semibold text-2xl mb-2 text-red-600 '>RECENTLY VIEWED ITEMS</h1>
        <hr />
        <div className='mt-5 w-full h-[370px] overflow-hidden'>
          <div className='flex items-center h-full overflow-x-scroll whitespace-nowrap'>
          {bestSellingItems.map((product, index) => (
              <div key={index} className='w-[260px] h-[320px] rounded-xl mx-4 p-4 shadow hover:shadow-md border-2 flex-shrink-0'>
                <img className='w-full h-40 object-cover mb-4 ' src={product.image} alt='' />
                <h1 className='text-xl mt-2 font-semibold'>{product.name}</h1>
                <p>{product.price}</p>
                <button className='py-2 px-4 rounded mt-2 bg-blue-500 text-white'>Add To Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyViewed;
