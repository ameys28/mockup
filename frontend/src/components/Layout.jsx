import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, Search, User, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export function Layout({ children }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? 'text-yellow-400' : '');

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-red-600 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
              <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
                <Home className="w-8 h-8 text-yellow-400" />
                <span className="font-bold text-3xl tracking-tight">LEGO</span>
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-full bg-white/10 focus:bg-white focus:text-black focus:outline-none transition-all" />
              </div>
              <motion.div className="flex space-x-6" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                <Link to="/shop" className={`flex items-center space-x-1 hover:text-yellow-400 transition-colors ${isActive('/shop')}`}>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Shop</span>
                </Link>
                <Link to="/account" className={`flex items-center space-x-1 hover:text-yellow-400 transition-colors ${isActive('/account')}`}>
                  <User className="w-5 h-5" />
                  <span>Account</span>
                </Link>
              </motion.div>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-red-600 text-white">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link to="/shop" className="block py-2">Shop</Link>
            <Link to="/account" className="block py-2">Account</Link>
            <div className="relative py-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 focus:bg-white focus:text-black focus:outline-none" />
            </div>
          </div>
        </motion.div>
      )}
      <main>{children}</main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-yellow-400">About LEGO</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Careers</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Sustainability</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-yellow-400">Contact Us</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Find Building Instructions</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Replacement Parts</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Attractions</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-yellow-400">LEGOLAND® Parks</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">LEGO House</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Stores</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="hover:text-yellow-400">Facebook</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Instagram</Link></li>
                <li><Link to="#" className="hover:text-yellow-400">Twitter</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}