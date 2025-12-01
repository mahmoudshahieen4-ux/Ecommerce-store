import logo from "../assets/logo.png";
import darkLogo from "../assets/dark-logo.png";
import { Menu, XIcon, Search, ShoppingCart, Heart, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { getCartCount, wishlistItems } = useAppContext();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="w-full fixed z-[9999] top-0 transition-all duration-300 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/Ecommerce-store" className="flex items-center gap-2">
              <img
                src={darkMode ? darkLogo : logo}
                alt="Site Logo"
                className="h-16 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-full leading-5 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-all duration-200"
                placeholder="Search products..."
              />
            </div>
          </div>

          {/* Desktop Icons & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <Moon className="h-6 w-6" />
            </button>

            <Link to="/wishlist" className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Heart className="h-6 w-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            <Link to="/cart" className="relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-primary rounded-full">
                  {getCartCount()}
                </span>
              )}
            </Link>

            <div className="flex items-center gap-2 ml-2">
              <Link to="/login" className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
                Login
              </Link>
              <Link to="/signup" className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-dark-primary rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-4">
            <Link to="/cart" className="relative p-2 text-gray-600 dark:text-gray-300">
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-primary rounded-full">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none z-[9999]"
            >
              {isOpen ? <XIcon className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Navbar - Categories */}
      <div className="hidden md:block border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 h-10 overflow-x-auto no-scrollbar">
            {['Electronics', 'Toys', 'Decor', 'Clothes', 'Tools', 'Jewelry & Watches', 'Appliances'].map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors whitespace-nowrap"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden fixed inset-y-0 left-0 z-[9999] w-64 bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200 dark:border-gray-800 shrink-0">
            <span className="text-lg font-bold text-gray-900 dark:text-white">Menu</span>
            <button onClick={() => setIsOpen(false)} className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <XIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                className="w-full pl-9 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="Search..."
              />
            </div>

            <nav className="space-y-2">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors">Home</Link>
              <Link to="/products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors">Products</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors">Contact</Link>
            </nav>

            {/* Mobile Categories */}
            <div className="border-t border-gray-200 dark:border-gray-800 pt-4">
              <span className="block px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Categories</span>
              <nav className="space-y-1">
                {['Electronics', 'Toys', 'Decor', 'Clothes', 'Tools', 'Jewelry & Watches', 'Appliances'].map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                    className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-4 space-y-4">
              <div className="flex items-center justify-between px-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${darkMode ? 'bg-primary' : 'bg-gray-200'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Link to="/login" className="flex justify-center items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="flex justify-center items-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-primary hover:bg-dark-primary shadow-sm transition-colors">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
