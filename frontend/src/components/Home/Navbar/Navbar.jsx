import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ✅ Import icons for menu toggle

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ State for mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Play Game", href: "/game" },
    { label: "Shop", href: "/shop" },
    { label: "Blogs", href: "/blog" },
  ];

  return (
    <AnimatePresence>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed left-6 right-6 top-6 z-50 mx-auto rounded-2xl bg-[#FFD502] transition-all duration-300 ${
          scrolled ? "h-[64px] shadow-md" : "h-[80px]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lego-logo-pkH7e9qCovvEJv9YhDV2UvYoRgVWSH.png"
              alt="Lego Logo"
              className="h-10 w-20"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center ml-auto">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="relative text-base font-medium text-[#2b2b2b] transition-colors hover:text-[#E3000B] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#E3000B] after:transition-all hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Login Button (Hidden on Mobile) */}
          <Button className="hidden md:flex rounded-full ml-5 bg-[#E3000B] px-8 py-4 text-white transition-transform hover:scale-105 hover:bg-[#E3000B]/90">
            Login / Sign Up
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#2b2b2b]"
            onClick={() => setIsOpen(!isOpen)}
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
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className="block w-full text-lg font-medium text-[#2b2b2b] hover:text-[#E3000B] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile Login Button */}
                <Button
                  className="w-full mt-4 rounded-full bg-[#E3000B] py-3 text-white hover:bg-[#E3000B]/90"
                  onClick={() => setIsOpen(false)}
                >
                  Login / Sign Up
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
