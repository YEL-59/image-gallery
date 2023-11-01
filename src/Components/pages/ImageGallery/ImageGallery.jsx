import { useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import { motion } from 'framer-motion';


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


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <>
      <div
        className={`z-10 container-xl mx-auto xl:px-56 ${
          navfix ? " top-0 h-[8%] w-full fixed bg-white " : ""
        }`}
      >
        <Navbars />
      </div>

<div>
<motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((index) => (
        <motion.div
          className="grid gap-4"
          key={index}
          variants={itemVariants}
        >
          {[1, 2, 3].map((subIndex) => (
            <motion.div key={subIndex} variants={itemVariants}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-${(index - 1) * 3 + subIndex}.jpg`}
                alt={`Image ${index}-${subIndex}`}
              />
            </motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
</div>



    </>
  );
};

export default ImageGallery;
