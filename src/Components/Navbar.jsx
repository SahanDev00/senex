import React, { useContext } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { FaUserLarge } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../Components/CartContext'; // Adjust the path as needed

const Navbar = () => {
    const location = useLocation();
    const { getTotalItems } = useContext(CartContext); // Get the total number of items from the context

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className='w-[85%] mx-auto relative'>
            <div className='flex justify-between items-center w-full h-[120px]'>
                <div>
                    <Link to='/' className='text-6xl font-bold text-red-600 cursor-pointer'>SENƎX</Link>
                </div>
                <div className='flex items-center float-to-right'>
                    <ul className='flex gap-8 font-bold text-lg mr-14'>
                        <Link to='/' exact className={`cursor-pointer hover:text-red-600 pl-2 ${isActive('/') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>HOME</Link>
                        <Link to='/product' exact className={`cursor-pointer hover:text-red-600 pl-2 ${isActive('/product') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>PRODUCTS</Link>
                        <Link to='/about-us' className={`cursor-pointer hover:text-red-600 pl-2 ${isActive('/about-us') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>ABOUT US</Link>
                        <Link to='/contact-us' className={`cursor-pointer hover:text-red-600 pl-2 ${isActive('/contact-us') ? "text-red-500 border-l-2 border-red-500" : "text-white"}`}>CONTACT US</Link>
                    </ul>
                    <div className='flex items-center gap-5'>
                        <Link to='/cart'>
                            <div className='relative'>
                                <TiShoppingCart className={`hover:text-red-600 cursor-pointer ${isActive('/cart') || isActive('/checkout') ? 'text-red-500' : 'text-white'}`} size={35}/>
                                {getTotalItems() > 0 && (
                                    <p className={`absolute -top-3 -right-2 font-semibold rounded-full p-1 px-2 text-xs ${isActive('/cart') || isActive('/checkout') ? 'bg-white text-red-600' : 'bg-red-600 text-white'}`}>
                                        {getTotalItems()}
                                    </p>
                                )}
                            </div>
                        </Link>
                        {/*<Link to='/login'>
                            <FaUserLarge className={`hover:text-red-600 cursor-pointer ${isActive('/login') ? 'text-red-500' : 'text-white'}`} size={25}/>
                        </Link> */}
                        <Link to='/profile'>
                            <FaUserLarge className={`hover:text-red-600 cursor-pointer ${isActive('/profile') ? 'text-red-500' : 'text-white'}`} size={25}/>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='border'/>
        </div>
    );
}

export default Navbar;
