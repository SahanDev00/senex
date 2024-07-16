// ProductsPage.js
import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Categories } from '../products';
import { SearchContext } from '../SearchContext';

const ProductsPage = () => {
  const { searchQuery, clearSearchQuery } = useContext(SearchContext);
  const { subCategoryName } = useParams();

  useEffect(() => {
    // Clear the search query when navigating to a new category
    clearSearchQuery();
  }, [subCategoryName, clearSearchQuery]);

  const findProducts = (subCategoryName) => {
    for (const category of Categories) {
      for (const subCat of category.subCat) {
        if (subCat.name === subCategoryName) {
          return subCat.products;
        }
      }
    }
    return [];
  };

  const products = findProducts(subCategoryName);

  const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <div className="w-[91%] p-4">
      <h1 className="text-2xl ml-2 font-bold mb-4">{subCategoryName} Products</h1>
      {filteredProducts.length > 0 ? (
        <div>
          <p className='ml-2'>{filteredProducts.length} products found</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border m-1 p-4 rounded hover:shadow-lg shadow">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded">Add to Cart</button>
              </div>
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
