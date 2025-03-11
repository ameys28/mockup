import { motion } from "framer-motion";

export function CreativeSection() {
    return (
        <section className="bg-white min-h-[80vh] flex items-center overflow-hidden px-4">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-8">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 flex justify-center items-center"
                >
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xXdpTRgM5tx8wVe72hc9awr86r2M6v.png"
                        alt="LEGO Creativity"
                        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[80%] h-auto object-cover rounded-2xl"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left px-4 md:px-10"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2b2b2b]">
                        Unleash Your Creative Potential
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-[#2b2b2b]/80 mt-4">
                        Creativity is the ability to come up with ideas that are new, surprising, and valuable—an essential 21st-century skill. Systematic creativity combines logic and reasoning with playfulness and imagination.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
