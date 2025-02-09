import { useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Blogcard from "./Blogcard";

const Bloglist = ({ blogs, showAll = false }) => {
  const sliderRef = useRef(null);

  if (!blogs.length) {
    return <p className="text-center text-gray-500">No blogs available.</p>;
  }

  if (showAll) {
    // Display all blogs as cards
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
        {blogs.map((blog) => (
          <Blogcard 
            key={blog._id} 
            _id={blog._id}
            title={blog.title} 
            desc={blog.desc} 
            imgurl={blog.imgurl} 
            createdDate={blog.createdDate} 
            blogId={blog._id} 
          />
        ))}
      </div>
    );
  }

  // Display only the latest 5 blogs in a carousel
  const recentBlogs = blogs.slice(0, 5);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
  };

  return (
    <div className="relative w-full max-w-4xl">
      {/* Left Navigation Button */}
      {recentBlogs.length > 1 && (
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-sky-700 text-white p-4 rounded-full shadow-lg z-10 hover:bg-sky-600"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* Blog Slideshow */}
      <Slider ref={sliderRef} {...settings}>
        {recentBlogs.map((blog) => (
          <div key={blog._id} className="p-5 transition-transform duration-300 transform hover:scale-105">
            <div className="relative bg-white shadow-2xl rounded-md p-6 flex items-center">
              {/* Image on the Left */}
              <div className="w-1/2 h-90 overflow-hidden rounded-md flex-shrink-0">
                <img src={blog.imgurl} alt={blog.title} className="w-full h-full object-cover" />
              </div>

              {/* Content on the Right */}
              <div className="w-1/2 pl-6">
                <h2 className="text-2xl font-bold text-sky-800 mt-4">{blog.title}</h2>
                <p className="text-gray-600 mt-2 line-clamp-3">
                  {blog.desc.length > 200 ? blog.desc.substring(0, 200) + "..." : blog.desc}
                </p>
                <p className="text-sm text-gray-400 mt-2 absolute bottom-4 p-2">{new Date(blog.createdDate).toDateString()}</p>

                {/* Read More Link */}
                <Link to={`/blogs/${blog._id}`} className="absolute bottom-4 right-4 px-4 py-2 underline text-sky-800 rounded-md">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Right Navigation Button */}
      {recentBlogs.length > 1 && (
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-sky-700 text-white p-4 rounded-full shadow-lg z-10 hover:bg-sky-600"
          onClick={() => sliderRef.current.slickNext()}
        >
          <ChevronRight size={28} />
        </button>
      )}
    </div>
  );
};

export default Bloglist;
