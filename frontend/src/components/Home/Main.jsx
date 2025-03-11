import { CreativeSection } from "./CreativeSection/CreativeSection"
import { ProductsSection } from "./FeaturedProducts/ProductSection"
import { Footer } from "./Footer/Footer"
import { HeroSection } from "./MainPage/HeroSection"
import { MarqueeSection } from "./Marquee/MarqueeSection"
import { MovieSection } from "./MovieSection/MovieSection"
import { Newsletter } from "./NewsLetter/NewsLetter"

const Main = () => {
    return (
        <>
            <HeroSection/>
            <MarqueeSection/>
            <MovieSection/>
            <CreativeSection/>
            <ProductsSection/>
            <Newsletter/>
            <Footer/>
        </>
    )
}

export default Main