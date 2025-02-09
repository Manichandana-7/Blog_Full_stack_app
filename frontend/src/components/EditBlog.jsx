import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    desc: "",
    imgurl: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5000/blogs/${id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();
        setFormData({
          title: data.title,
          author: data.author,
          desc: data.desc,
          imgurl: data.imgurl,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/blogs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update blog");

      navigate(`/blogs/${id}`); // Redirect to updated blog page
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-6">
      <form onSubmit={handleUpdate} className="bg-white border-1 border-gray-300 shadow-lg rounded-2xl p-8 w-full max-w-lg">
        <h2 className="font-bold text-xl text-center text-sky-800 mb-5">Edit Blog</h2>

        <div className="mb-4">
          <label className="text-md block font-bold mb-2 text-sky-800">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="border-1 rounded-md w-full p-1 bg-gray-50"
          />
        </div>

        <div className="mb-4">
          <label className="text-md block font-bold mb-2 text-sky-800">Author</label>
          <input
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Author name"
            className="border-1 rounded-md w-full p-1 bg-gray-50"
          />
        </div>

        <div className="mb-4">
          <label className="text-md block font-bold mb-2 text-sky-800">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            placeholder="Write the blog content..."
            rows="6"
            className="border-1 rounded-md w-full p-1 bg-gray-50"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="text-md block font-bold mb-2 text-sky-800">Image URL</label>
          <input
            name="imgurl"
            value={formData.imgurl}
            onChange={handleChange}
            placeholder="Paste image URL"
            className="border-1 rounded-md w-full p-1 bg-gray-50"
          />
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-sky-700 text-white rounded-md hover:bg-sky-600"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
