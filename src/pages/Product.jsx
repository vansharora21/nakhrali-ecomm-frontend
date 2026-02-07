import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/assets';
import { Star } from 'lucide-react';
import ProductItem from '../components/ProductItem';

const Product = () => {
    const { productId } = useParams();
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');
    const [related, setRelated] = useState([]);

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        })
    }

    const fetchRelatedProducts = () => {
        if (productData) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item) => productData.category === item.category && productData.subCategory === item.subCategory);
            setRelated(productsCopy.slice(0, 5));
        }
    }

    useEffect(() => {
        fetchProductData();
    }, [productId, products])

    useEffect(() => {
        fetchRelatedProducts();
    }, [productData])

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* Product Data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                {/* Product Images */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    {/* Thumbnail */}
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }
                    </div>
                    {/* Main Image */}
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>

                {/* Product Info */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2 text-[#F5F5DC]'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <Star className='w-3.5 text-primary fill-primary' />
                        <Star className='w-3.5 text-primary fill-primary' />
                        <Star className='w-3.5 text-primary fill-primary' />
                        <Star className='w-3.5 text-primary fill-primary' />
                        <Star className='w-3.5 text-gray-400' />
                        <p className='pl-2 text-[#F5F5DC]/60'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium text-primary'>₹{productData.price}</p>
                    <p className='mt-5 text-[#F5F5DC]/70 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p className='text-[#F5F5DC]'>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button onClick={() => setSize(item)} className={`border border-[#F5F5DC]/20 py-2 px-4 bg-[#252525] text-[#F5F5DC] ${item === size ? 'border-primary text-primary' : ''}`} key={index}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <button className='bg-primary text-white px-8 py-3 text-sm active:bg-orange-700 font-bold hover:shadow-lg transition-all'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5 border-[#F5F5DC]/20' />
                    <div className='text-sm text-[#F5F5DC]/50 mt-5 flex flex-col gap-1'>
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>

            {/* Description & Review Section */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border border-[#F5F5DC]/20 px-5 py-3 text-sm text-[#F5F5DC]'>Description</b>
                    <p className='border border-[#F5F5DC]/20 px-5 py-3 text-sm text-[#F5F5DC]/60'>Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 border border-[#F5F5DC]/20 px-6 py-6 text-sm text-[#F5F5DC]/70'>
                    <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                    <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
                </div>
            </div>

            {/* Related Products */}
            <div className='my-24'>
                <div className='text-center text-3xl py-2'>
                    <div className='inline-flex gap-2 items-center mb-3'>
                        <p className='text-gray-500'>RELATED <span className='text-gray-700 font-medium'>PRODUCTS</span></p>
                        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
                    </div>
                </div>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {related.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>

        </div>
    ) : <div className='opacity-0'></div>
}
export default Product