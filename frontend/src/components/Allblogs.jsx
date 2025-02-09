import { useEffect, useState } from "react";
import axios from "axios";
import Bloglist from "./Bloglist";
import Navbar from "./Navbar";

const Allblogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs"); // Replace with your backend URL
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="flex">
      {/* Navbar */}
      <div className="w-1/6">
        <Navbar />
      </div>

      {/* Content (All Blogs) */}
      <div className="w-5/6 p-10">
        <h1 className="text-3xl text-center text-sky-800 p-3 bg-gray-100 font-bold mb-6">ALL BLOGS</h1>
        <Bloglist blogs={blogs} showAll={true} />
      </div>
    </div>
  );
};

export default Allblogs;
