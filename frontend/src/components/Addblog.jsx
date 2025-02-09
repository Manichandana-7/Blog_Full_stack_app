import { useState } from "react";
import axios from "axios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    imgurl: "",
    author: "",
    createdDate: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/blogs", formData);
      alert("Blog added successfully!");
      // Redirect to the list of blogs after the blog is added successfully
      navigate("/"); 
    } catch (error) {
      alert("Error adding blog:", error);
    }
  };

  return (
    <div className="flex justify-center items-center m-10">
      {/* Container for animation and form */}
      <div className="flex items-center space-x-10 border border-gray-300 rounded-lg shadow-xl p-10">
        
        {/* Lottie Animation */}
        <div className="w-2/5 flex justify-center">
          <DotLottieReact
            src="https://lottie.host/e7f2ed9e-83d5-4677-a327-5a7d3aef4cd6/Uj5k0wRZdm.lottie"
            loop
            autoplay
            style={{ width: "100%", maxWidth: "250px" }}
          />
        </div>
        {/* Form Container */}
        <div className="w-3/5 flex flex-col justify-center p-5">
          <h1 className="font-bold text-xl text-center text-sky-800 mb-5">Add a Blog</h1>

          <form onSubmit={handleSubmit} className="space-y-3">
            <label htmlFor="title" className="text-md block font-bold mb-2 text-sky-800">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              value={formData.title}
              onChange={handleChange}
              className="border-1 rounded-md w-full p-1 bg-gray-50"
            />

            <label htmlFor="desc" className="text-md block font-bold mb-2 text-sky-800">
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="6"
              placeholder="Enter the description"
              value={formData.desc}
              onChange={handleChange}
              className="border-1 rounded-md w-full p-1 bg-gray-50"
            />

            <label htmlFor="imgurl" className="text-md block font-bold mb-2 text-sky-800">
              Image URL:
            </label>
            <input
              type="text"
              id="imgurl"
              name="imgurl"
              placeholder="Enter Image Url"
              value={formData.imgurl}
              onChange={handleChange}
              className="border-1 rounded-md w-full p-1 bg-gray-50"
            />

            <label htmlFor="author" className="text-md block font-bold mb-2 text-sky-800">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter author name"
              value={formData.author}
              onChange={handleChange}
              className="border-1 rounded-md w-full p-1 bg-gray-50"
            />

            <label htmlFor="createdDate" className="text-md block font-bold mb-2 text-sky-800">
              Created Date:
            </label>
            <input
              type="date"
              id="createdDate"
              name="createdDate"
              value={formData.createdDate}
              onChange={handleChange}
              className="border-1 rounded-md w-full p-1 bg-gray-50"
            />

            <button type="submit" className="px-5 py-2 bg-sky-700 text-white rounded-md hover:bg-sky-600">
              Add blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
