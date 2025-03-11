import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Play Game", href: "/game" },
    { label: "Shop", href: "/shop" },
    { label: "Blogs", href: "/blog" },
  ]

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
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lego-logo-pkH7e9qCovvEJv9YhDV2UvYoRgVWSH.png"
              alt="Lego Logo"
              className="h-10 w-20"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center ml-auto">
            <nav>
              <ul className="flex gap-8">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href} // ✅ Corrected `to` instead of `href`
                      className="relative text-base font-medium text-[#2b2b2b] transition-colors hover:text-[#E3000B] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#E3000B] after:transition-all hover:after:w-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Login Button */}
            <Button className="rounded-full ml-5 bg-[#E3000B] px-8 py-4 text-white transition-transform hover:scale-105 hover:bg-[#E3000B]/90">
              Login / Sign Up
            </Button>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  )
}
