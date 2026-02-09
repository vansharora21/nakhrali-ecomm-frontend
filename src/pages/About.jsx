import React from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

// Professional animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <motion.section
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-24"
        >
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-slate-400 rounded-full" />
              <span className="text-lg font-medium text-slate-500 tracking-wide uppercase">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Forever Shopping
              <span className="block text-3xl md:text-4xl lg:text-5xl text-slate-600 font-light mt-4">Experience</span>
            </h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We revolutionize e-commerce through innovation, quality products, and exceptional customer service.
          </motion.p>
        </motion.section>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img
                className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop"
                alt="Team collaboration"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-slate-200" />
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Our Journey</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              From Vision to Reality
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              Forever was founded with a simple mission: create the world's best online shopping experience. 
              Today we serve millions with premium products and seamless service.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">2020</h4>
                <p className="text-slate-600 font-medium">Founded</p>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="text-2xl font-bold text-slate-900 mb-2">2026</h4>
                <p className="text-slate-600 font-medium">1M+ Customers</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Mission Vision Values */}
        <section className="mb-24 py-16 bg-white rounded-3xl shadow-sm border border-slate-100">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-8 mx-auto">
              <div className="w-8 h-[2px] bg-slate-200" />
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Core Principles</span>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                title: 'Mission', 
                desc: 'Deliver exceptional shopping experiences through quality products and seamless service.',
                icon: '🎯'
              },
              { 
                title: 'Vision', 
                desc: 'Become the most trusted e-commerce platform worldwide by 2030.',
                icon: '🔭'
              },
              { 
                title: 'Values', 
                desc: 'Quality first, customer focus, continuous innovation, sustainability.',
                icon: '⚖️'
              }
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group p-8 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 mb-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-3xl">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: '1.2M', label: 'Customers', icon: '👥' },
                { num: '85K', label: 'Products', icon: '📦' },
                { num: '99.9%', label: 'Satisfaction', icon: '⭐' },
                { num: '500+', label: 'Partners', icon: '🤝' }
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="space-y-3"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                    {stat.icon}
                    <span>{stat.num}</span>
                  </div>
                  <p className="text-slate-200 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <section>
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-8 mx-auto">
              <div className="w-10 h-[2px] bg-slate-200" />
              <span className="text-lg font-semibold text-slate-500 uppercase tracking-wide">Why Choose Us</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Quality Assurance',
                desc: 'Rigorous testing ensures every product meets our premium standards.',
                icon: '✅'
              },
              {
                title: 'Fast Delivery',
                desc: 'Efficient logistics with real-time tracking across 200+ countries.',
                icon: '🚚'
              },
              {
                title: '24/7 Support',
                desc: 'Dedicated customer service available round the clock.',
                icon: '📞'
              }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-white border border-slate-100 p-10 rounded-2xl shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 h-full"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mt-24 pt-20 border-t border-slate-100">
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group w-20 h-20 md:w-24 md:h-24 mx-auto bg-slate-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <span className="text-xl font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                    👤
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
