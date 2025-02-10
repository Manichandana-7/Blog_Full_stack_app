import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { X, Heart, Eye, Pencil, Trash } from "lucide-react";

const UniqBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [likes, setLikes] = useState(0);
  const [views, setViews] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5000/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();
        setBlog(data);
        setLikes(data.likeCount);

        const viewRes = await fetch(`http://localhost:5000/blogs/${id}/view`, { method: "POST" });
        if (!viewRes.ok) throw new Error("Failed to update view count");

        const viewData = await viewRes.json();
        setViews(viewData.viewCount);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
    fetch(`http://localhost:5000/blogs/${id}/like`, { method: "POST" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update like count");
        return res.json();
      })
      .then((data) => setLikes(data.likeCount))
      .catch((error) => setError(error.message));
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const res = await fetch(`http://localhost:5000/blogs/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Failed to delete blog");

        navigate("/"); 
      } catch (error) {
        setError("Error deleting blog: " + error.message);
      }
    }
  };

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!blog) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="relative bg-white shadow-2xl rounded-3xl p-6 w-full max-w-4xl">
        
        {/* Close Button */}
        <button onClick={() => navigate("/")} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition">
          <X size={28} />
        </button>

        {/* Blog Title & Image Side-by-Side */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-6">
          
          {/* Blog Image */}
          <div className="w-full md:w-1/2 h-72 overflow-hidden rounded-xl shadow-md">
            <img src={blog.imgurl} alt={blog.title} className="w-full h-full object-cover rounded-md" />
          </div>

          {/* Blog Title */}
          <div className="w-full md:w-1/2 ">
            <h1 className="text-3xl font-bold text-sky-700">{blog.title}</h1>
            <p className="text-gray-500 mt-5"><strong>Author:</strong> {blog.author || "Unknown"}</p>
            <p className="text-gray-500"><strong>Date:</strong> {new Date(blog.createdDate).toDateString()}</p>
             {/* View Count */}
          <div className="flex items-center space-x-1 mt-5 text-gray-600">
            <Eye size={20} />
            <span>{views} Views</span>
          </div>
          </div>

        </div>

        {/* Blog Description */}
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          {blog.desc}
        </p>

        {/* Like & View Count Section */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-2 px-4 py-2 rounded-lg transition">
          {/* Like Button */}
          <button onClick={handleLike} >
            <Heart size={20} className="text-red-500" />
            
          </button>
          <span>{likes} Likes</span>
          </div>

         

          {/* Edit Button */}
          <button 
            onClick={() => navigate(`/edit/${id}`)} 
            className="flex items-center space-x-2 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
          >
            <Pencil size={20} />
            <span>Edit</span>
          </button>

          {/* Delete Button */}
          <button 
            onClick={handleDelete}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            <Trash size={20} />
            <span>Delete</span>
          </button>

        </div>

      </div>
    </div>
  );
};

export default UniqBlog;
