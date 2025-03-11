import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
    return (
        <section className="bg-[#1a1a1a] py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl rounded-3xl bg-[#E3000B] p-8 shadow-2xl md:p-12 border-8 border-[#FFD502]"
                >
                    <div className="text-center">
                        <h3 className="text-3xl font-extrabold text-white md:text-4xl tracking-wide">
                            Join the Brick Club! 🏗️
                        </h3>
                        <p className="mx-auto mt-4 max-w-xl text-white/90 text-lg">
                            Stack up your knowledge—subscribe to our newsletter for <span className="font-[700]">exclusive builds, secret blueprints, and
                            surprise Lego drops!</span>
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <Input
                            type="email"
                            placeholder="Enter your email (No bricks required!)"
                            className="flex-1 rounded-lg border-4 border-[#FFD502] bg-white p-4 text-[#2b2b2b] placeholder-[#555] shadow-lg focus:ring-2 focus:ring-[#0033A0]"
                        />
                        <Button className="rounded-lg bg-[#0033A0] px-8 py-5 text-white font-bold shadow-lg hover:bg-[#002366] hover:scale-105 transition-transform duration-200">
                            Build With Us 🏗️
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
