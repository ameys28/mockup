import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import   Blog from "./components/Blog";
import { Forum } from "./components/Forum";
import { Footer } from "./components/Home/Footer/Footer";
import { CreativeSection } from "./components/Home/CreativeSection/CreativeSection";
import { MarqueeSection } from "./components/Home/Marquee/MarqueeSection";
import { Newsletter } from "./components/Home/NewsLetter/NewsLetter";
import { ProductsSection } from "./components/Home/FeaturedProducts/ProductSection";
import { Navbar } from "./components/Home/Navbar/Navbar";
import { MovieSection } from "./components/Home/MovieSection/MovieSection";

import BlogDetails from "./components/BlogDetails";
import PlayGame from "./components/PlayGame/PlayGame";
import { HeroSection } from "./components/Home/MainPage/HeroSection";
import Main from "./components/Home/Main";

const App = () => {

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/foot" element={<Footer/>} />
          <Route path="/mr" element={<MarqueeSection/>} />
          <Route path="/cr" element={<CreativeSection/>} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/nl" element={<Newsletter />} />
          <Route path="/pr" element={<ProductsSection />} />
          <Route path="/mv" element={<MovieSection />} />
          <Route path="/game" element={<PlayGame />} />
          <Route path="/home" element={<HeroSection />} />
          <Route path="/gg" element={<Main />} />
        </Routes>
    </Router>
  )
}

export default App
