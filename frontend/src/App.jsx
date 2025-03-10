import { useEffect } from "react";
import Counter from "./components/Counter"
import { RoundedCornerOutlined } from "@mui/icons-material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import CampaignDetailsPage from "./components/campaign/CampaignDetailsPage";
import toast, { Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button";
import CampaignsPage from "./components/campaign/CampaignsPage";
const App = () => {

  useEffect(()=>{
    toast.success("Here is the toast!",{
      position:'bottom-center'
    });
  },[]);

  return (
    <>
    home

      </>
  )
}

export default App
