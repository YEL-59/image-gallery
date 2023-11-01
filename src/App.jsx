import { Routes, Route, Navigate } from "react-router-dom";




import ImageGallery from "./Components/pages/ImageGallery/ImageGallery";
import Home from "./Components/pages/Home/Home";
import AboutUs from "./Components/pages/AboutUs/AboutUs";
import NotFoundpage from "./Components/pages/NotFoundpage/NotFoundPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
         
        <Route path="/image_gallery" element={<ImageGallery />} />
        <Route path="/about_us" element={<AboutUs />} />
      
        <Route path="/404" element={<NotFoundpage />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};

export default App;