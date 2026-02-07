import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const PlaceOrder = () => {

    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

    const [method, setMethod] = useState('cod');

    return (
        <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-[#F5F5DC]/10'>

            {/* Left Side */}
            <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
                <div className='text-xl sm:text-2xl my-3'>
                    <div className='inline-flex gap-2 items-center mb-3'>
                        <p className='text-[#F5F5DC]/60 font-display'>DELIVERY <span className='text-[#F5F5DC] font-medium'>INFORMATION</span></p>
                        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-primary'></p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <input className='border border-[#F5F5DC]/20 bg-[#252525] text-[#F5F5DC] rounded py-2 px-3.5 w-full focus:border-primary outline-none transition-colors' type="text" placeholder='First name' />
                    <input className='border border-[#F5F5DC]/20 bg-[#252525] text-[#F5F5DC] rounded py-2 px-3.5 w-full focus:border-primary outline-none transition-colors' type="text" placeholder='Last name' />
                </div>
                <input className='border border-[#F5F5DC]/20 bg-[#252525] text-[#F5F5DC] rounded py-2 px-3.5 w-full focus:border-primary outline-none transition-colors' type="email" placeholder='Email address' />
                <input className='border border-[#F5F5DC]/20 bg-[#252525] text-[#F5F5DC] rounded py-2 px-3.5 w-full focus:border-primary outline-none transition-colors' type="text" placeholder='Street' />
                <div className='flex gap-3'>
                    <input className='border border-[#F5F5DC]/20 bg-[#252525] text-[#F5F5DC] rounded py-2 px-3.5 w-full focus:border-primary outline-none transition-colors' type="text" placeholder='City' />
                    <input className='border border-[#F5F5DC]/20 bg-[#252525] text-[#F5F5DC] rounded py-2 px-3.5 w-full focus:border-primary outline-none transition-colors' type="text" placeholder='State' />
                </div>
                <div className='flex gap-3'>
                    <input className='border border-[#F5F5DC]/20 bg-[#252525] text-[#F5F5DC] rounded py-2 px-3.5 w-full focus:border-primary outline-none transition-colors' type="number" placeholder='Zipcode' />
                    <input className='border border-[#F5F5DC]/20 bg-[#252525] text-[#F5F5DC] rounded py-2 px-3.5 w-full focus:border-primary outline-none transition-colors' type="text" placeholder='Country' />
                </div>
                <input className='border border-[#F5F5DC]/20 bg-[#252525] text-[#F5F5DC] rounded py-2 px-3.5 w-full focus:border-primary outline-none transition-colors' type="number" placeholder='Phone' />
            </div>

            {/* Right Side */}
            <div className='mt-8'>
                <div className='mt-8 min-w-80'>
                    {/* Same Cart Total Component - Inline for now or reuse component if available */}
                    <div className='w-full bg-[#252525] p-6 rounded-lg border border-[#F5F5DC]/10'>
                        <div className='text-2xl'>
                            <div className='inline-flex gap-2 items-center mb-3'>
                                <p className='text-[#F5F5DC]/60 font-display'>CART <span className='text-[#F5F5DC] font-medium'>TOTALS</span></p>
                                <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-primary'></p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mt-2 text-sm text-[#F5F5DC]'>
                            <div className='flex justify-between'>
                                <p>Subtotal</p>
                                <p>₹ {getCartAmount()}.00</p>
                            </div>
                            <hr className='border-[#F5F5DC]/10' />
                            <div className='flex justify-between'>
                                <p>Shipping Fee</p>
                                <p>₹ {delivery_fee}.00</p>
                            </div>
                            <hr className='border-[#F5F5DC]/10' />
                            <div className='flex justify-between font-bold text-lg text-primary'>
                                <b>Total</b>
                                <b>₹ {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-12'>
                    <div className='text-2xl'>
                        <div className='inline-flex gap-2 items-center mb-3'>
                            <p className='text-[#F5F5DC]/60 font-display'>PAYMENT <span className='text-[#F5F5DC] font-medium'>METHOD</span></p>
                            <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-primary'></p>
                        </div>
                    </div>

                    {/* Payment Method Selection */}
                    <div className='flex gap-3 flex-col lg:flex-row'>
                        <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border border-[#F5F5DC]/20 p-2 px-3 cursor-pointer hover:border-primary/50 transition-colors'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-primary border-primary' : 'border-[#F5F5DC]/60'}`}></p>
                            <p className='text-[#F5F5DC] text-sm font-medium mx-4'>STRIPE</p>
                        </div>
                        <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border border-[#F5F5DC]/20 p-2 px-3 cursor-pointer hover:border-primary/50 transition-colors'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-primary border-primary' : 'border-[#F5F5DC]/60'}`}></p>
                            <p className='text-[#F5F5DC] text-sm font-medium mx-4'>RAZORPAY</p>
                        </div>
                        <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border border-[#F5F5DC]/20 p-2 px-3 cursor-pointer hover:border-primary/50 transition-colors'>
                            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-primary border-primary' : 'border-[#F5F5DC]/60'}`}></p>
                            <p className='text-[#F5F5DC] text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                        </div>
                    </div>

                    <div className='w-full text-end mt-8'>
                        <button onClick={() => navigate('/orders')} className='bg-primary text-white px-16 py-3 text-sm font-bold tracking-widest hover:bg-orange-700 transition-colors rounded'>PLACE ORDER</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PlaceOrder
