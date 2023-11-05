import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import HiddenNavbar from "./HiddenNavbar/HiddenNavbar";
import MainLayout from "./MainLayout/MainLayout";
import Navbars from "../../SharedComponents/Navbar/Navbars";

const ImageGallery = () => {
  const [fileArr, setFileArr] = useState([
    {
      id: 1,
      fileUrl: "/public/images/image-1.webp",
      detail: "",
      checked: false,
    },
    {
      id: 2,
      fileUrl: "/public/images/image-2.webp",
      detail: "",
      checked: false,
    },
    {
      id: 3,
      fileUrl: "/public/images/image-3.webp",
      detail: "",
      checked: false,
    },
    {
      id: 4,
      fileUrl: "/public/images/image-4.webp",
      detail: "",
      checked: false,
    },
    {
      id: 5,
      fileUrl: "/images/image-5.webp",
      detail: "",
      checked: false,
    },
    {
      id: 6,
      fileUrl: "/public/images/image-6.webp",
      detail: "",
      checked: false,
    },
    {
      id: 7,
      fileUrl: "/public/images/image-7.webp",
      detail: "",
      checked: false,
    },
    {
      id: 8,
      fileUrl: "/public/images/image-8.webp",
      detail: "",
      checked: false,
    },
    {
      id: 9,
      fileUrl: "/public/images/image-9.webp",
      detail: "",
      checked: false,
    },
    {
      id: 10,
      fileUrl: "/public/images/image-10.jpeg",
      detail: "",
      checked: false,
    },
    {
      id: 11,
      fileUrl: "/public/images/image-11.jpeg",
      detail: "",
      checked: false,
    },
  ]);

  const onInputClick = (event) => {
    event.target.value = "";
  };

  const onFilesAdded = (e) => {
    let fileList = [...fileArr];
    let file = URL.createObjectURL(e.target.files[0]);
    let fileDetail = {
      id: uuidv4(),
      fileUrl: file,
      checked: false,
      detail: e.target.files[0],
    };
    fileList = [fileDetail, ...fileList];
    setFileArr(fileList);
  };

  const filteredObjects = fileArr.filter((obj) => obj.checked === true);

  const handleDelete = (selectedFiles) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${selectedFiles.length} item${
        selectedFiles.length > 1 ? "s" : ""
      }?`
    );
    if (confirmDelete) {
      const newArr = fileArr.filter((obj) => obj.checked !== true);
      setFileArr(newArr);
      window.alert(
        `You have successfully deleted ${selectedFiles.length} item${
          selectedFiles.length > 1 ? "s" : ""
        }.`
      );
    }
  };


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
      <div className="bg-gray-100">
      <div
        className={`z-10 container-xl mx-auto xl:px-56 ${
          navfix ? " top-0 h-[8%] w-full fixed bg-white " : ""
        }`}
      >
        <Navbars />
      </div>
        <HiddenNavbar
          handleDelete={handleDelete}
          filteredObjects={filteredObjects}
        />
        <MainLayout
          fileArr={fileArr}
          setFileArr={setFileArr}
          onInputClick={onInputClick}
          onFilesAdded={onFilesAdded}
        />
      </div>
    </>
  );
};

export default ImageGallery;
