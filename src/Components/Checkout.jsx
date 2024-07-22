import React from 'react'
import Country from '../Components/Country2'

const Checkout = () => {
  return (
    <div className='h-[750px] w-[90%] mx-auto relative'>
      <h1 className='mt-20 mb-5 text-4xl text-white font-bold text-center font-poppins'>Place Order</h1>
      <div className='flex mx-auto w-[80%]'>
        <div className=' mx-auto h-[500px]'>
          <form className=' w-[700px] bg-black/50 mt-10 border-white border-4 rounded-xl p-5'>
            <h1 className='text-3xl font-bold text-center my-2 text-white font-poppins'>Billing Details</h1>
            <div className='flex gap-6 my-6'>
              <input className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='First Name' />
              <input className='w-full mx-auto rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Last Name' />
            </div>
            <input className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Street Address' />
            <div className='flex gap-6 my-6'>
              <input className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='City' />
              <input className='w-full mx-auto rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='State' />
            </div>
            <div className='flex gap-6'>           
              <input className='w-full mx-auto h-12 rounded-lg pl-3 py-1 border-red-500 border-2 mb-2 mt-1' type="text" placeholder='Postal Code' />
              <Country/>
            </div>
          </form>
        </div>
        {/* Right Side */}
        <div className='w-[800px] '>
          <div className='w-full flex items-center h-full justify-center'>
            <div className='w-[70%] bg-black/50 rounded-xl border-4 p-6 text-white'>
              <h1 className='font-semibold text-2xl mb-1 font-poppins'>Your Order</h1>
              <hr className='border border-gray-600 mb-5'/>
              <div className='flex justify-between border-b border-red-500'>
                <h1 className='font-semibold text-lg font-poppins'>Items</h1>
                <p className='font-poppins'>0 items, 0 pieces</p>
              </div>
              <div className='flex justify-between border-b border-red-500 mt-3'>
                <h1 className='font-semibold text-lg font-poppins'>Total</h1>
                <p className='font-poppins'>Rs. 0.00</p>
              </div>
              <button className='w-full bg-red-500 py-2 rounded-xl font-poppins mt-7 hover:bg-red-600 text-white font-semibold'>Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout