import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { accessories_list, cartItems, setCartItems, addToCart, removeFromCart ,getTotalCartAmount} = useContext(StoreContext)
    const navigate = useNavigate()
    return (
        <div className='w-[90%] mx-auto'>

            <table className="table w-full">
                {/* head */}
                <thead className="hidden sm:table-header-group">
                    <tr>
                        <th>Item</th>
                        <th>Title</th>
                        <th>Price(BDT)</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accessories_list.map((item, index) => {
                            if (cartItems[item._id] > 0) {
                                return (
                                    <tr key={item._id} className='border-t-2 border-b-2 flex flex-col sm:table-row'>
                                        <td className="block sm:table-cell">
                                            <img className='w-24 sm:w-32 mx-auto sm:mx-0' src={item?.image} alt="product image" />
                                        </td>
                                        <td className="block sm:table-cell text-center sm:text-left">
                                            <p className='text-sm font-semibold'>{item?.name}</p>
                                        </td>
                                        <td className="block sm:table-cell text-center sm:text-left">
                                            <span className="sm:hidden font-semibold">Price: </span>{item?.price} Tk/-
                                        </td>
                                        <td className="block sm:table-cell text-center sm:text-left">
                                            <span className="sm:hidden font-semibold">Quantity: </span>{cartItems[item._id]}
                                        </td>
                                        <td className="block sm:table-cell text-center sm:text-left">
                                            <span className="sm:hidden font-semibold">Total: </span>{item.price * cartItems[item._id]} Tk/-
                                        </td>
                                        <td className="block sm:table-cell text-center sm:text-left">
                                            <p onClick={() => removeFromCart(item._id)} className='cursor-pointer text-red-500 bg-red-200 hover:bg-red-600 hover:text-white btn inline-block'>x</p>
                                        </td>
                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </table>

            <div className='lg:flex justify-between w-full gap-5 md:mt-10 mt-7'>
                <div className='lg:w-1/2'>
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
                    <button onClick={()=>{navigate('/order')}} className='btn btn-neutral'>Proceed To Checkout</button>
                </div>
                <div className="lg:w-1/2 ">
                    <div className='flex justify-end'>
                        <div className='my-2'>
                            <p className='mb-3'>If you have a promo code, Enter it Here.</p>
                            <div className='cart-promocode-input'>
                                <input className='bg-slate-200 px-3 py-2' type="text" placeholder='Promo code' />
                                <button className='btn btn-neutral'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;