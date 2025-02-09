import Navbar from "./Navbar";
import Bloglist from "./Bloglist";
import { useState, useEffect } from "react";
import axios from "axios";


const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs/");
        setBlogs(response.data); // Ensure API returns an array
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex h-screen w-screen">
      {/* Fixed Navbar (1/6 of screen width) */}
      <div className="w-1/6">
        <Navbar />
      </div>

      {/* Blog Section (5/6 of screen width) */}
      <div className="w-5/6 flex flex-col items-center p-5 bg-gray-100">
        
        {/* Welcome Message */}
        <h1 className="text-3xl font-bold text-sky-800 mb-4">Welcome to VividVoices Blog Platform</h1>

       
        
        {/* Blog List */}
        <Bloglist blogs={blogs} />
     
      </div>
    </div>
  );
};

export default Home;
