import { useState } from "react";
import Navbars from "../../SharedComponents/Navbar/Navbars";
import { Link } from "react-router-dom";

const Home = () => {
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

      <div>
       
        <section className="py-4  bg-[#8aaaaa] lg:pt-12">
          <div className="px-4 mx-auto max-w-8xl lg:px-4 lg:text-center">
            <Link  to={'/image_gallery'}
              className="inline-flex items-center justify-between px-1 py-1 pr-4 mb-5 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200"
              role="alert"
              href="/icons/"
            >
              <span className="text-xs bg-[#089bab] rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>
              <span className="mr-2 text-sm font-medium">
                We launched ArtHouse ! See what's new
              </span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                ></path>
              </svg>
            </Link>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-700 lg:font-extrabold lg:text-6xl lg:leading-none  lg:text-center xl:px-36 lg:mb-7">
              Build Gallery even faster with components on top of This library
            </h1>
            <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl xl:px-60">
              Start developing with an open-source library of over 600+ UI
              components, sections, and pages built with the utility classes
              from ArtHouse CSS and designed by yel-59.
            </p>
            <div className="flex flex-col mb-8 md:flex-row lg:justify-center">
              <Link
              to={'/image_gallery'}
                className="text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center"
              >
                Get started
              </Link>
              <Link
               to={'/image_gallery'}
                className="text-gray-600 bg-white-100 hover:bg-gray-100 hover:text-blue-600 border border-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 font-medium rounded-lg text-base px-6 py-2.5 text-center inline-flex justify-center items-center"
              >
                <svg
                  className="w-3.5 h-3.5 mr-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"></path>
                </svg>
                <span className="ml-2">Explore components</span>
              </Link>
            </div>
            
            <iframe  src="https://www.youtube.com/embed/XhOQTxmxbnA?si=_AJtO3FZrzGJaw49" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen  className="relative  w-full max-w-4xl mx-auto mt-12 border border-gray-300 shadow-2xl rounded-3xl lg:mt-20 dark:border-gray-700 yt-video"></iframe>
          </div>
        </section>

        <div className="py-10 sm:py-16 bg-gray-50 lg:py-20 dark:bg-gray-800 border-t border-b border-gray-100 dark:border-gray-700">
          <div className="px-4 mx-auto max-w-8xl">
            <h2 className="mb-4 text-2xl md:text-4xl font-bold tracking-tight text-gray-900 md:font-extrabold lg:leading-none dark:text-white md:text-center lg:mb-7">
              Sign up for our newsletter
            </h2>
            <p className="mb-4 text-base text-gray-500 md:mb-6 dark:text-gray-400 md:text-center md:text-xl lg:px-20 xl:px-56">
              Do you want to get notified when a new component is added to
              Arthouse? Sign up for our newsletter and you will be among the
              first to find out about new features, components, versions, and
              tools.
            </p>
            <div className="mb-4">
              <form
                action=""
                className="formkit-form flex max-w-xl md:mx-auto"
                
              >
                <div className="w-full" data-style="clean">
                  <label  className="hidden">
                    Email address
                  </label>
                  <div className="relative h-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 16"
                      >
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="member_email"
                      name="email_address"
                      className="block w-full px-3 py-4 pl-11 text-base text-gray-900 bg-white border border-gray-200 rounded-l-xl formkit-input focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your email"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="submit"
                    data-element="submit"
                    id="member_submit"
                    className="formkit-submit formkit-submit w-full px-4 py-4 text-base font-medium text-center text-white bg-blue-700 dark:bg-blue-600 dark:border-blue-600 border border-blue-700 cursor-pointer rounded-r-xl formkit-submit hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                    value="Subscribe"
                  />
                </div>
              </form>
            </div>
            <p className="text-sm text-gray-500 md:text-center dark:text-gray-400 font-normal">
              By subscribing, you agree with 
              <a
                rel="nofollow noopener noreferrer"
                className="text-blue-600 dark-text-blue-400 hover:underline"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                className="text-blue-600 dark-text-blue-400 hover:underline"
                rel="nofollow noopener noreferrer"
                href="#"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
