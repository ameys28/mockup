import { useRef } from "react"
import { motion, useScroll, useSpring, useInView } from "framer-motion"

export function InfiniteMarquee({ direction = "left", images }) {
    const containerRef = useRef(null)
    const isInView = useInView(containerRef)

    const baseVelocity = direction === "left" ? -50 : 50
    const springConfig = { damping: 50, stiffness: 400 }
    const x = useSpring(0, springConfig)

    return (
        <div ref={containerRef} className="relative overflow-hidden py-2 w-full">
            <motion.div
                className="flex"
                animate={{ x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"] }}
                transition={{
                    ease: "linear",
                    duration: 10,
                    repeat: Infinity,
                }}
            >
                {[...images, ...images].map((image, index) => (
                    <motion.div
                        key={`${image.id}-${index}`}
                        className="relative h-48 w-64 flex-shrink-0 overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <img 
                            src={image.src} 
                            alt={image.alt} 
                            className="w-[80%] h-[80%] object-cover"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
