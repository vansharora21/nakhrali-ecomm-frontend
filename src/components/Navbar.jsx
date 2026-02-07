import { useState, useContext } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Heart, ShoppingCart, Menu, Search, User, X } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from '../context/ShopContext';

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const textColor = "text-[#F5F5DC]";

  return (
    <>
      <motion.div
        className="bg-[#C06014] text-white text-center py-2 text-[10px] font-bold tracking-widest uppercase"
        animate={{ height: isScrolled ? 0 : "auto", opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        Free Shipping on orders over ₹1999
      </motion.div>

      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3 }}
        className={`sticky top-0 z-50 px-6 md:px-20 py-4 transition-all duration-300 border-b border-[#F5F5DC]/10 ${isScrolled
          ? "bg-[#1A1A1A]/90 backdrop-blur-xl shadow-xl"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link to='/'>
            <motion.h2
              className={`text-2xl md:text-3xl font-black uppercase tracking-tighter ${textColor}`}
            >
              Ethnic<span className="opacity-70">Era</span>
            </motion.h2>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `text-sm font-bold uppercase tracking-wide px-4 py-2 relative rounded-lg ${textColor} flex items-center`}
                onMouseEnter={() => setActiveLink(link.name)}
              >
                {link.name}
                {link.name === activeLink && (
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className={`flex items-center gap-4 ${textColor}`}>
            <motion.div whileHover={{ scale: 1.2, rotate: 15 }} transition={{ type: "spring" }}>
              <Search onClick={() => setShowSearch(true)} className="w-5 h-5 cursor-pointer hover:text-primary transition-all duration-300" />
            </motion.div>

            <div className='group relative'>
              <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring" }}>
                <User onClick={() => token ? null : navigate('/login')} className="w-5 h-5 cursor-pointer hover:text-primary transition-all duration-300" />
              </motion.div>
              {/* Dropdown Menu */}
              {token &&
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                  <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                    <p className='cursor-pointer hover:text-black'>My Profile</p>
                    <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                    <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                  </div>
                </div>}
            </div>

            <Link to='/cart' className='relative'>
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                <ShoppingCart className="w-5 h-5 group-hover:text-primary transition-all duration-300" />
                <motion.span
                  className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-lg"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {getCartCount()}
                </motion.span>
              </motion.div>
            </Link>

            <Menu onClick={() => setVisible(true)} className="w-5 h-5 cursor-pointer sm:hidden text-primary" />
          </div>
        </div>
      </motion.header>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#1A1A1A] z-50 transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-[#F5F5DC]'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer border-b border-[#F5F5DC]/10'>
            <div className='h-4 rotate-180 flex items-center gap-2'>
              <X className='h-6 text-[#F5F5DC]' />
            </div>
            <p>Back</p>
          </div>
          {navLinks.map((link) => (
            <NavLink key={link.name} onClick={() => setVisible(false)} className='py-2 pl-6 border' to={link.path}>{link.name.toUpperCase()}</NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
