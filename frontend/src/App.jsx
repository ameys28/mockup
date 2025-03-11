import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";  
import toast, { Toaster } from 'react-hot-toast';
import { Layout } from "./components/Layout";
import Landing from "./components/Landing";
import { Home } from "./components/Home";
import { Blog } from "./components/Blog";
import { Forum } from "./components/Forum";
const App = () => {

  useEffect(()=>{
    toast.success("Here is the toast!",{
      position:'bottom-center'
    });
  },[]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
