import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const heroTexts = ["Build Beyond Imagination", "Create Amazing Stories", "Unleash Your Creativity"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover">
          <source src="https://res.cloudinary.com/ds7sasaqb/video/upload/v1741673374/naw151vuv8k9jhdrcpnl.mp4" type="video/mp4" />
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="LEGO Building"
            className="h-full w-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-4">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="mb-8">
          {/* <LegoLogo className="h-32 w-32" /> */}
        </motion.div>

        <div className="relative h-24">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentText}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              {heroTexts[currentText]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 max-w-xl text-lg text-white/90"
        >
          Join millions of LEGO® enthusiasts and discover a world where imagination knows no bounds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex gap-6"
        >
          <Button className="rounded-full bg-[#E3000B] px-8 py-6 text-white transition-transform hover:scale-105 hover:bg-[#E3000B]/90">
            Start Building
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-2 border-[#FFD502] bg-transparent px-8 py-6 text-[#FFD502] transition-transform hover:scale-105 hover:bg-[#FFD502]/10"
          >
            Watch Story
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

