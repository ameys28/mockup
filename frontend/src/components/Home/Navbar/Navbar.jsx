import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Play Game", to: "/game" },
    { label: "Shop", to: "/shop" },
    { label: "Blogs", to: "/blog" },
  ];

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed left-4 right-4 top-6 z-50 mx-auto rounded-2xl bg-[#FFD502] transition-all duration-300 ${
          scrolled ? "h-[50px] shadow-lg w-[80%]" : "h-[70px] w-[90%]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-8 transition-all duration-300">
          {/* Logo (Always Visible) */}
          <Link to="/" className="flex items-center">
            <motion.img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lego-logo-pkH7e9qCovvEJv9YhDV2UvYoRgVWSH.png"
              alt="Lego Logo"
              className="transition-all duration-300"
              animate={{ height: scrolled ? "30px" : "40px", width: scrolled ? "80px" : "100px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ml-auto">
            <ul className="flex gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="relative text-base font-medium text-[#2b2b2b] transition-colors hover:text-[#E3000B] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#E3000B] after:transition-all hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#FFD502] shadow-lg md:hidden"
            >
              <nav className="px-6 py-4">
                <ul className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="block w-full text-lg font-medium text-[#2b2b2b] hover:text-[#E3000B] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
