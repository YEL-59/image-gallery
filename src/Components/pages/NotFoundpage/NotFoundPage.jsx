import { Link } from "react-router-dom"

const NotFoundpage = () => {
  return (
   <>
   <section className="bg-white ">
    <div >
        <div className="flex justify-center items-center h-screen">
            <div className="text-center p-2 lg:p-0">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Something &#39;s missing.</p>
            <p className="mb-4 text-lg font-light text-gray-500 ">Sorry, we can&#39;t find that page. You&#39;ll find lots to explore on the home page. </p>
           <Link to={"/"} className="inline-flex text-white bg-[#2c6777] hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Back to Homepage</Link> 
            </div>
        </div>   
    </div>
</section></>
  )
}

export default NotFoundpage