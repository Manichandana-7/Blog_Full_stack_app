// import { useEffect, useState } from "react";
// import axios from "axios";
// import Bloglist from "./Bloglist"; // Import your Bloglist component
// import Navbar from "./Navbar";

// const BlogListPage = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/blogs"); // Replace with your backend URL
//         setBlogs(response.data); // Assuming the data returned is an array of blogs
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div className="flex">
//       {/* Navbar */}
//       <div className="w-1/6">
//         <Navbar />
//       </div>

//       {/* Content (List of Blogs) */}
//       <div className="w-5/6 p-10">
//         <h1 className="text-3xl font-bold mb-6">All Blogs</h1>
//         <Bloglist blogs={blogs} />
//       </div>
//     </div>
//   );
// };

// export default BlogListPage;
