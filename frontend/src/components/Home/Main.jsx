import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CreativeSection } from "./CreativeSection/CreativeSection";
import { ProductsSection } from "./FeaturedProducts/ProductSection";
import { Footer } from "./Footer/Footer";
import { HeroSection } from "./MainPage/HeroSection";
import { MarqueeSection } from "./Marquee/MarqueeSection";
import { MovieSection } from "./MovieSection/MovieSection";
import { Newsletter } from "./NewsLetter/NewsLetter";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
    const mainRef = useRef(null);

    useEffect(() => {
        const sections = gsap.utils.toArray(".fade-in");

        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <main ref={mainRef} className="bg-[#121212] text-white">
            <HeroSection />
            <MarqueeSection />
            <MovieSection className="fade-in" />
            <CreativeSection className="fade-in" />
            <ProductsSection className="fade-in" />
            <Newsletter className="fade-in" />
            <Footer />
        </main>
    );
};

export default Main;
