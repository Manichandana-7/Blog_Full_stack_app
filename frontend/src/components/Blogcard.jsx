import { Link } from "react-router-dom";

const BlogCard = ({ _id, title, desc, imgurl, createdDate }) => {
  const snippet = desc.length > 100 ? desc.substring(0, 100) + "..." : desc;

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={imgurl} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h2 className="text-xl font-semibold text-sky-700 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{snippet}</p>
<div className="flex justify-between">
        <p className="text-xs text-gray-500">{new Date(createdDate).toLocaleDateString()}</p>
        <Link 
          to={`/blogs/${_id}`}  
          className="text-sky-700 text-sm font-semibold hover:underline"
        >
          Read more
        </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
