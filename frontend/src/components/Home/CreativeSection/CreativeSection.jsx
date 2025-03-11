import { motion } from "framer-motion";

export function CreativeSection() {
    return (
        <section className="bg-white h-[80vh] flex items-center overflow-hidden">
            <div className="container mx-auto px-4 flex items-center h-full">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-1/2 h-full flex justify-center items-center"
                >
                    <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xXdpTRgM5tx8wVe72hc9awr86r2M6v.png"
                        alt="LEGO Creativity"
                        className="w-[80%] h-[80%] object-cover rounded-2xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-1/2 flex flex-col justify-center text-left px-10"
                >
                    <h2 className="text-3xl font-bold text-[#2b2b2b] md:text-4xl lg:text-5xl">
                        Unleash Your Creative Potential
                    </h2>
                    <p className="text-lg leading-relaxed text-[#2b2b2b]/80 md:text-xl mt-4">
                        Creativity is the ability to come up with ideas that are new, surprising, and valuable—an essential 21st-century skill. Systematic creativity combines logic and reasoning with playfulness and imagination.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
