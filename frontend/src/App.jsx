import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";  
import toast, { Toaster } from 'react-hot-toast';
import Landing from "./components/Landing";
const App = () => {

  useEffect(()=>{
    toast.success("Here is the toast!",{
      position:'bottom-center'
    });
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
