import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Trash2, Minus, Plus, ChevronRight, ShoppingCart } from 'lucide-react'; // Added ShoppingCart import
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, navigate, getCartAmount } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            const tempData = [];
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            size: item,
                            quantity: cartItems[items][item]
                        })
                    }
                }
            }
            setCartData(tempData);
        }
    }, [cartItems, products])

    const totalAmount = getCartAmount() === 0 ? 0 : getCartAmount() + 10;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 300 }
        }
    };

    return (
        <div className='min-h-screen py-20 px-4 max-w-6xl mx-auto'>
            {/* Header */}
            <motion.div
                className='text-center mb-20'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className='inline-flex items-center gap-3 mb-4 bg-[#252525] px-6 py-3 rounded-full shadow-lg border border-[#F5F5DC]/10'>
                    <div className='w-2 h-2 bg-primary rounded-full'></div>
                    <p className='text-xl font-bold text-[#F5F5DC] tracking-wider'>
                        YOUR CART ({cartData.length} ITEMS)
                    </p>
                </div>
            </motion.div>

            {/* Cart Items Section */}
            <motion.div
                className='grid lg:grid-cols-3 gap-8 mb-16'
                variants={containerVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
                {/* Cart Items */}
                <motion.div
                    className='lg:col-span-2 space-y-6'
                    variants={containerVariants}
                >
                    {cartData.length === 0 ? (
                        <motion.div
                            className='text-center py-24'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <div className='w-24 h-24 mx-auto mb-6 bg-[#252525] rounded-2xl flex items-center justify-center border border-[#F5F5DC]/10'>
                                <ShoppingCart className='w-12 h-12 text-[#F5F5DC]/50' />
                            </div>
                            <h3 className='text-2xl font-bold text-[#F5F5DC] mb-2'>Your cart is empty</h3>
                            <p className='text-[#F5F5DC]/60 mb-8'>Add some beautiful ethnic wear to get started</p>
                            <Link
                                to='/'
                                className='inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl'
                            >
                                Continue Shopping
                                <ChevronRight className='w-4 h-4' />
                            </Link>
                        </motion.div>
                    ) : (
                        cartData.map((item, index) => {
                            const productData = products.find((product) => product._id === item._id);
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className='group bg-[#252525] border border-[#F5F5DC]/10 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-500 overflow-hidden'
                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-start gap-4 flex-1'>
                                            <div className='relative'>
                                                <img
                                                    className='w-20 h-24 object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300'
                                                    src={productData.image[0]}
                                                    alt={productData.name}
                                                />
                                                <div className='absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shadow-lg'>
                                                    {item.quantity}
                                                </div>
                                            </div>
                                            <div className='flex-1 min-w-0'>
                                                <h3 className='font-semibold text-[#F5F5DC] text-lg leading-tight line-clamp-2 mb-2'>
                                                    {productData.name}
                                                </h3>
                                                <div className='flex items-center gap-3 mb-3'>
                                                    <span className='text-primary font-bold text-lg'>
                                                        {currency}{productData.price}
                                                    </span>
                                                    <span className='px-3 py-1 bg-[#F5F5DC]/10 text-[#F5F5DC] text-xs font-medium rounded-full'>
                                                        {item.size}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className='flex items-center gap-3 ml-4'>
                                            <div className='flex items-center bg-[#1A1A1A] rounded-full p-1 border border-[#F5F5DC]/10'>
                                                <button
                                                    onClick={() => updateQuantity(item._id, item.size, Math.max(1, item.quantity - 1))}
                                                    className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#333] transition-colors duration-200'
                                                >
                                                    <Minus className='w-4 h-4 text-[#F5F5DC]' />
                                                </button>
                                                <span className='px-4 font-semibold text-[#F5F5DC] min-w-[2.5rem] text-center'>
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item._id, item.size, item.quantity + 1)}
                                                    className='w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#333] transition-colors duration-200'
                                                >
                                                    <Plus className='w-4 h-4 text-[#F5F5DC]' />
                                                </button>
                                            </div>
                                            <motion.button
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => updateQuantity(item._id, item.size, 0)}
                                                className='p-2 text-red-400 hover:bg-red-400/10 rounded-xl hover:shadow-md transition-all duration-200'
                                            >
                                                <Trash2 className='w-5 h-5' />
                                            </motion.button>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    )}
                </motion.div>

                {/* Cart Summary */}
                <motion.div
                    className='lg:sticky lg:top-24 space-y-6'
                    variants={itemVariants}
                >
                    <div className='bg-[#252525] border border-[#F5F5DC]/10 rounded-2xl p-8 shadow-xl'>
                        <div className='inline-flex items-center gap-2 mb-8 bg-[#1A1A1A] px-6 py-3 rounded-full border border-[#F5F5DC]/5'>
                            <p className='text-[#F5F5DC]/70'>CART</p>
                            <p className='w-12 h-[1px] bg-[#F5F5DC]/20'></p>
                            <span className='text-lg font-bold text-[#F5F5DC]'>TOTALS</span>
                        </div>

                        <div className='space-y-4 mb-8'>
                            <div className='flex justify-between items-center py-3 border-b border-[#F5F5DC]/10'>
                                <span className='text-[#F5F5DC]/70'>Subtotal</span>
                                <span className='font-semibold text-[#F5F5DC]'>{currency} {getCartAmount()}.00</span>
                            </div>
                            <div className='flex justify-between items-center py-3 border-b border-[#F5F5DC]/10'>
                                <span className='text-[#F5F5DC]/70'>Shipping</span>
                                <span className='font-semibold text-[#F5F5DC]'>{currency} 10.00</span>
                            </div>
                            <div className='flex justify-between items-center pt-4'>
                                <span className='text-xl font-bold text-[#F5F5DC]'>Total</span>
                                <span className='text-2xl font-black text-primary'>
                                    {currency} {totalAmount}.00
                                </span>
                            </div>
                        </div>

                        <motion.button
                            onClick={() => navigate('/place-order')}
                            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                            whileTap={{ scale: 0.98 }}
                            className='w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-2xl hover:from-gray-900 hover:to-black transition-all duration-300 uppercase tracking-wide flex items-center justify-center gap-2'
                        >
                            Proceed to Checkout
                            <ChevronRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                        </motion.button>

                        <div className='mt-6 pt-6 border-t border-gray-100 text-center'>
                            <p className='text-xs text-gray-500'>Free shipping on orders over ₹1999</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Cart
