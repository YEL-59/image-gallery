import { useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";

const ImageGallery = () => {
  const [navfix, setNavfix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 70) {
      setNavfix(true);
      //console.log(scrollY)
    } else {
      setNavfix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  return (
    <>
      <div
        className={`z-10 container-xl mx-auto xl:px-56 ${
          navfix ? " top-0 h-[8%] w-full fixed bg-white " : ""
        }`}
      >
        <Navbars />
      </div>
    </>
  );
};

export default ImageGallery;
