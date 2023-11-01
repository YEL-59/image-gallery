"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbars = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "ImageGallery", link: "/image_gallery" },
    { name: "About Us", link: "/about_us" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <nav className="md:flex items-baseline justify-between   py-2   ">
          <div className="font-bold text-2xl lg:text-4xl text-[#089bab] ">
            <a href="/">Art House.</a>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-1 cursor-pointer md:hidden"
          >
            {open ? "x" : "+"}

          </div>

		  

          <ul
            className={`md:flex md:items-center  md:bg-inherit   md:pb-0 pb-12 absolute md:static text-[#089bab] bg-white md:z-auto z-[1] right-0 w-full h-screen md:h-full md:w-auto mt-2 md:pl-0 pl-5 transition-all duration-500 ease-in-out ${
              open ? "right-19" : "hidden"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="md:ml-4 md:text-xs truncate  md:my-0 my-7 lg:text-lg"
              >
                <Link to={link.link} className="duration-500  font-medium">
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="md:hidden my-3 truncate">
              <Link to="login">Login</Link>
            </li>
            <li className="md:hidden truncate">
              <Link to="signup">Create An Account</Link>
            </li>
          </ul>

          <div className="hidden md:flex md:items-center ml-2 md:justify-between md:gap-5 ">
            <button className="bg-[#C8D8E5] text-[#089bab] px-5 py-1 rounded font-bold truncate">
              <Link to="/becomea_tutor">Become a Artist</Link>
            </button>

            <button className="bg-[#089bab] text-white px-5 py-1 rounded font-bold truncate">
              <Link to="/signup">Sign in</Link>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbars;
