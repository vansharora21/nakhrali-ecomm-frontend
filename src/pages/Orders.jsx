import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {

    const { products, currency } = useContext(ShopContext);

    return (
        <div className='border-t border-[#F5F5DC]/10 pt-16 min-h-[60vh]'>

            <div className='text-2xl'>
                <div className='inline-flex gap-2 items-center mb-3'>
                    <p className='text-[#F5F5DC]/60'>MY <span className='text-[#F5F5DC] font-medium'>ORDERS</span></p>
                    <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-primary'></p>
                </div>
            </div>

            <div>
                {
                    products.slice(1, 4).map((item, index) => (
                        <div key={index} className='py-4 border-t border-b border-[#F5F5DC]/10 text-[#F5F5DC] flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#252525]/30 p-4 rounded-lg my-2'>
                            <div className='flex items-start gap-6 text-sm'>
                                <img className='w-16 sm:w-20 rounded shadow' src={item.image[0]} alt="" />
                                <div>
                                    <p className='sm:text-base font-medium text-[#F5F5DC]'>{item.name}</p>
                                    <div className='flex items-center gap-3 mt-2 text-base text-[#F5F5DC]/70'>
                                        <p className='text-lg text-primary'>{currency}{item.price}</p>
                                        <p>Quantity: 1</p>
                                        <p>Size: M</p>
                                    </div>
                                    <p className='mt-2'>Date: <span className='text-[#F5F5DC]/50'>25, May, 2024</span></p>
                                </div>
                            </div>
                            <div className='md:w-1/2 flex justify-between'>
                                <div className='flex items-center gap-2'>
                                    <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                    <p className='text-sm md:text-base'>Ready to ship</p>
                                </div>
                                <button className='border border-[#F5F5DC]/20 px-4 py-2 text-sm font-medium rounded-sm hover:bg-[#F5F5DC]/10 transition-colors'>Track Order</button>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default Orders
