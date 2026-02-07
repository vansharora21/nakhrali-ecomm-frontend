import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageSquare, Globe } from 'lucide-react'

const Contact = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <div className='min-h-screen bg-background text-[#F5F5DC] selection:bg-primary/30 overflow-hidden relative'>
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-900/20 blur-[120px] rounded-full" />
            </div>

            <div className='max-w-7xl mx-auto px-6 py-24 relative z-10'>
                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className='mb-20 text-center md:text-left'
                >
                    <motion.span
                        variants={fadeUp}
                        className='text-primary font-bold tracking-widest uppercase text-xs mb-4 block'
                    >
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        variants={fadeUp}
                        className='text-5xl md:text-7xl font-serif font-bold text-[#F5F5DC] mb-6 tracking-tight'
                    >
                        Let's craft something <br />
                        <span className='italic text-primary'>
                            extraordinary together.
                        </span>
                    </motion.h1>
                </motion.div>

                <div className='grid lg:grid-cols-12 gap-16'>
                    {/* Left Column: Contact Methods */}
                    <div className='lg:col-span-5 space-y-12'>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className='space-y-8'
                        >
                            <ContactMethod
                                icon={<Mail className="w-6 h-6" />}
                                title="Email us"
                                detail="hello@ethnicera.com"
                                description="Our team usually responds within 24 hours."
                            />
                            <ContactMethod
                                icon={<MessageSquare className="w-6 h-6" />}
                                title="Live Chat"
                                detail="Available Mon-Fri"
                                description="9:00 AM to 6:00 PM IST"
                            />
                            <ContactMethod
                                icon={<MapPin className="w-6 h-6" />}
                                title="Visit our Studio"
                                detail="Jaipur, Rajasthan"
                                description="54709 Willms Station, Suite 350"
                            />
                        </motion.div>

                        {/* Social Proof/Trust Bar */}
                        <div className='pt-8 border-t border-[#F5F5DC]/10'>
                            <p className='text-[#F5F5DC]/50 text-sm mb-4'>Trusted by creators worldwide</p>
                            <div className='flex gap-6 grayscale opacity-60'>
                                <Globe className='w-8 h-8 text-[#F5F5DC]' />
                                <div className='h-8 w-[1px] bg-[#F5F5DC]/20' />
                                <span className='font-bold text-xl italic font-serif text-[#F5F5DC]'>EthnicEra Studio</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className='lg:col-span-7'
                    >
                        <div className='bg-[#252525]/60 backdrop-blur-xl border border-[#F5F5DC]/10 p-8 md:p-12 rounded-[2rem] shadow-xl'>
                            <form className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <div className='space-y-2'>
                                    <label className='text-sm font-bold text-[#F5F5DC]/70 ml-1 uppercase tracking-wide'>Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className='w-full bg-[#1A1A1A] border border-[#F5F5DC]/10 rounded-xl px-4 py-3 text-[#F5F5DC] focus:outline-none focus:border-primary transition-colors'
                                    />
                                </div>
                                <div className='space-y-2'>
                                    <label className='text-sm font-bold text-[#F5F5DC]/70 ml-1 uppercase tracking-wide'>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className='w-full bg-[#1A1A1A] border border-[#F5F5DC]/10 rounded-xl px-4 py-3 text-[#F5F5DC] focus:outline-none focus:border-primary transition-colors'
                                    />
                                </div>
                                <div className='col-span-1 md:col-span-2 space-y-2'>
                                    <label className='text-sm font-bold text-[#F5F5DC]/70 ml-1 uppercase tracking-wide'>Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us about your project..."
                                        className='w-full bg-[#1A1A1A] border border-[#F5F5DC]/10 rounded-xl px-4 py-3 text-[#F5F5DC] focus:outline-none focus:border-primary transition-colors resize-none'
                                    ></textarea>
                                </div>
                                <div className='col-span-1 md:col-span-2 pt-4'>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className='w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 hover:bg-orange-700 transition-colors'
                                    >
                                        Send Message
                                        <Send className='w-4 h-4' />
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

const ContactMethod = ({ icon, title, detail, description }) => (
    <div className='flex gap-5 group'>
        <div className='w-12 h-12 rounded-2xl bg-[#252525] flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 border border-[#F5F5DC]/10'>
            {icon}
        </div>
        <div>
            <h3 className='font-bold text-lg text-[#F5F5DC]'>{title}</h3>
            <p className='text-primary font-medium'>{detail}</p>
            <p className='text-[#F5F5DC]/50 text-sm mt-1'>{description}</p>
        </div>
    </div>
)

export default Contact