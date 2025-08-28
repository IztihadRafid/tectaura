import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <div className='w-[80%] mx-auto md:flex my-6 gap-10'>
            <div className='w-1/2'>
                <h1 className='md:text-2xl text-xl font-semibold'>Delivery Information</h1>
                <form action="">
                    <div className='flex gap-6'>
                        <input className='border-b-1 shadow-lg shadow-gray-300 p-1 mr-1 mb-6 w-full' type="text" name='firstName' placeholder='First name' />
                        <input className='border-b-1 shadow-lg shadow-gray-300 p-1 mr-1 mb-6 w-full' type="text" name='lastName' placeholder='Last name' />
                    </div>
                    
                        <input className='border-b-1 shadow-lg shadow-gray-300 p-1 mr-1 mb-6 w-full' type="email" name='email' placeholder='Email' />
                        <input className='border-b-1 shadow-lg shadow-gray-300 p-1 mr-1 mb-6 w-full' type="text" placeholder='Street' />
                  
                    <div className='flex gap-6'>
                        <input className='border-b-1 shadow-lg shadow-gray-300 p-1 mr-1 mb-6 w-full' type="text" placeholder='City' />
                        <input className='border-b-1 shadow-lg shadow-gray-300 p-1 mr-1 mb-6 w-full' type="text" placeholder='State' />
                    </div>
                    <div className='flex gap-6'>
                        <input className='border-b-1 shadow-lg shadow-gray-300 p-1 mr-1 mb-6 w-full' type="text" placeholder='Zip code' />
                        <input className='border-b-1 shadow-lg shadow-gray-300 p-1 mr-1 mb-6 w-full' type="text" placeholder='Country' />
                    </div>
                    <input className='border-b-1 p-1 shadow-lg shadow-gray-300 mr-1 mb-2 w-full' type="number" placeholder='Phone' />
                </form>
            </div>
            <div className='w-1/2'>
                <div className=''>
                    <h2 className='text-2xl font-semibold'>Cart Total</h2>
                    <div className=''>
                        <div className='flex justify-between my-2'>
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()} Tk/-</p>
                        </div>

                        <div className='flex justify-between'>
                            <p>Delivery Fee</p>
                             <p>{getTotalCartAmount()===0?0: 60} Tk/-</p>
                        </div>
                        <hr />
                        <div className='flex justify-between my-2'>
                            <p>Total</p>
                              <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+60} Tk/-</p>
                        </div>
                    </div>
                    <button className='btn btn-neutral'>Proceed To Payment</button>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;