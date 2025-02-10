import { Home, PlusCircle, Phone,BookOpen } from 'lucide-react'; // Import Lucide icons
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-1/6 bg-sky-700 text-white flex flex-col items-center p-5 space-y-6 shadow-lg">
      <h1 className="text-4xl font-bold text-center text-white mb-10 mt-5">VividVoices</h1>
      <ul className="space-y-4 flex flex-col justify-between">
        {/*Home page*/}
        <li className="flex items-center space-x-1 m-10  cursor-pointer">
        <Link to="/" className="flex items-center space-x-1">
        <Home className="w-8 h-8" />
            <span className="text-xl">Home</span>
          </Link>
        </li>
        {/* All blogs */}
        <li className="flex items-center space-x-1 m-10 cursor-pointer">
        <Link to="/blogs" className="flex items-center space-x-1">
            
            <BookOpen className="w-8 h-8" />
            <span className="text-xl">All Blogs</span>
          </Link>
        </li>

        {/* Create blog */}
        <li className="flex items-center space-x-1 m-10 cursor-pointer">
        <Link to="/addblog" className="flex items-center space-x-1">
          <PlusCircle className="w-8 h-8" />
          <span className="text-xl">Add Blog</span>
          </Link>
        </li>

        {/* Contact Us */}
        <li className="flex items-center space-x-1 m-10 cursor-pointer">
          <Phone className="w-8 h-8" />
          <span className="text-xl">ContactUs</span>
        </li>
      </ul>
      <div className="absolute bottom-0">
        
      </div>
    </div>
  );
};

export default Navbar;
