import React from 'react'

const EditPassword = () => {
  return (
    <div className='container h-[400px] relative mx-auto '>
        <h1 className='text-3xl text-white font-semibold text-center mt-16 mb-4'>Change Your Password</h1>
        <div className='w-full flex justify-center items-center'>
            <div className='w-full text-center mt-5'>
                <label className='block font-semibold mt-3 text-sm text-white'>Password</label>
                <input className='w-[50%] rounded-lg pl-4 py-1 border-red-500 border-2 mb-2 mt-1' type="password" placeholder='••••••••' required />
                <label className='font-semibold text-sm mt-3 text-white block'>Confirm Password</label>
                <input className='w-[50%] rounded-lg pl-4 py-1 border-red-500 border-2 mb-5 mt-1' type="password" placeholder='••••••••' required />
                <button className='block w-[50%] mx-auto mt-2 rounded-lg bg-red-500 py-2 text-white font-semibold hover:bg-red-600'>Change Password</button>
            </div>
        </div>
    </div>
  )
}

export default EditPassword