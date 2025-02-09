import { Facebook ,Instagram , Linkedin , Twitter} from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" bg-sky-700 text-white py-6 mt-10">
      <div className="border-tl-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">VividVoices</h2>
          <p className="text-gray-400">Sharing knowledge, one post at a time.</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-white">Email: <a href="mailto:contact@vividvoices.com" className="text-gray-400 hover:underline">contact@vividvoices.com</a></p>
          <p className="text-white">Phone: <a href="tel:+1234567890" className="text-gray-400 hover:underline">+1 (234) 567-890</a></p>
        </div>
        <div className="flex space-x-4">
          <Facebook />
          <Instagram/>
          <Linkedin />
          <Twitter/>
        </div>
      </div>
      <div className="text-center text-white text-sm mt-4">
        © {new Date().getFullYear()} VividVoices. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
