import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 24 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        }
    }

    return (
        <div className='min-h-screen bg-slate-50 py-20 px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='text-center mb-20 lg:mb-28'
                >
                    <motion.div variants={fadeInUp} className='mb-6'>
                        <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight'>
                            Contact Us
                        </h1>
                    </motion.div>
                    <motion.p 
                        variants={fadeInUp}
                        className='text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed'
                    >
                        Get in touch with our team for business inquiries, support, or partnership opportunities.
                    </motion.p>
                </motion.div>

                {/* Main Content */}
                <div className='grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16'>
                    {/* Contact Information */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className='lg:col-span-5 space-y-8'
                    >
                        <ContactCard
                            icon={<Phone className="w-6 h-6" />}
                            title="Phone"
                            detail="+91 98765 43210"
                            description="Business hours: Mon-Fri 9AM-6PM IST"
                            link="tel:+919876543210"
                        />
                        
                        <ContactCard
                            icon={<Mail className="w-6 h-6" />}
                            title="Email"
                            detail="hello@forever.com"
                            description="Response within 24 business hours"
                            link="mailto:hello@forever.com"
                        />
                        
                        <ContactCard
                            icon={<MapPin className="w-6 h-6" />}
                            title="Location"
                            detail="Jaipur, Rajasthan, India"
                            description="C-301, Mansarovar Sector 5"
                        />

                        <ContactCard
                            icon={<Clock className="w-6 h-6" />}
                            title="Support Hours"
                            detail="24/7 Email Support"
                            description="Live chat: Mon-Fri 10AM-7PM IST"
                        />
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='lg:col-span-7'
                    >
                        <div className='bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm'>
                            <div className='mb-8'>
                                <h3 className='text-2xl font-bold text-slate-900 mb-2'>
                                    Send us a message
                                </h3>
                                <p className='text-slate-600'>
                                    Our team will respond within 24 hours.
                                </p>
                            </div>

                            <form className='space-y-6'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <div>
                                        <label className='block text-sm font-semibold text-slate-700 mb-2'>
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className='w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 transition-all duration-200'
                                        />
                                    </div>
                                    <div>
                                        <label className='block text-sm font-semibold text-slate-700 mb-2'>
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            className='w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 transition-all duration-200'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-slate-700 mb-2'>
                                        Phone (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        className='w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 transition-all duration-200'
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-slate-700 mb-2'>
                                        Message *
                                    </label>
                                    <textarea
                                        rows="5"
                                        required
                                        className='w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-300 resize-vertical transition-all duration-200 min-h-[120px]'
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className='w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md'
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

const ContactCard = ({ icon, title, detail, description, link }) => (
    <motion.div
        whileHover={{ y: -2 }}
        className='group bg-white border border-slate-100 p-6 rounded-xl hover:shadow-md transition-all duration-200 hover:border-slate-200 cursor-default'
    >
        <div className='flex items-start gap-4'>
            <div className='w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors mt-1'>
                {React.cloneElement(icon, { 
                    className: "w-6 h-6 text-slate-700 group-hover:text-slate-900 transition-colors" 
                })}
            </div>
            <div className='flex-1 min-w-0'>
                <h4 className='font-semibold text-lg text-slate-900 mb-1'>{title}</h4>
                {link ? (
                    <a 
                        href={link}
                        className='block text-slate-700 hover:text-slate-900 font-medium text-base mb-2 hover:underline transition-colors'
                    >
                        {detail}
                    </a>
                ) : (
                    <p className='text-slate-700 font-medium text-base mb-2'>{detail}</p>
                )}
                <p className='text-sm text-slate-500 leading-relaxed'>{description}</p>
            </div>
        </div>
    </motion.div>
)

export default Contact
