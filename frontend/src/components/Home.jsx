import Navbar from "./Navbar";
import Bloglist from "./Bloglist";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer";


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs/");
        setBlogs(response.data); 
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/6">
        <Navbar />
      </div>
      <div className="w-5/6 flex flex-col items-center bg-gray-100">
        <h1 className="text-3xl font-bold text-sky-800 mt-10 mb-10 ">Welcome to VividVoices Blog Platform</h1>
        <div className=" mb-9">
            <Bloglist blogs={blogs} />
        </div>
        
        <div className="w-5/6 absolute bottom-0">
          <Footer/>
        </div>
     
      </div>
    </div>
  );
};

export default Home;
