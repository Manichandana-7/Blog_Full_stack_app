import { Home, PlusCircle, Phone,BookOpen } from 'lucide-react'; // Import Lucide icons
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-1/6 bg-sky-700 text-white flex flex-col p-5 space-y-6 shadow-lg">
      <h1 className="text-3xl font-bold text-center text-white mb-7 mt-3">VividVoices</h1>
      <ul className="space-y-4 flex flex-col justify-between">
        {/*Home page*/}
        <li className="flex items-center space-x-1 m-6 mb-7 cursor-pointer">
        <Link to="/" className="flex items-center space-x-1">
        <Home className="w-6 h-6" />
            <span className="text-lg">Home</span>
          </Link>
        </li>
        {/* All blogs */}
        <li className="flex items-center space-x-1 m-6 mb-7 cursor-pointer">
        <Link to="/blogs" className="flex items-center space-x-1">
            
            <BookOpen className="w-6 h-6" />
            <span className="text-lg">All Blogs</span>
          </Link>
        </li>

        {/* Create blog */}
        <li className="flex items-center space-x-1 m-6 mb-7 cursor-pointer">
        <Link to="/addblog" className="flex items-center space-x-1">
          <PlusCircle className="w-6 h-6" />
          <span className="text-lg">Add Blog</span>
          </Link>
        </li>

        {/* Contact Us */}
        <li className="flex items-center space-x-1 m-6 mb-7 cursor-pointer">
          <Phone className="w-6 h-6" />
          <span className="text-lg">ContactUs</span>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
