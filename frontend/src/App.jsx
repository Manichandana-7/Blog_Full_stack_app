import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Addblog from './components/Addblog';
import Home from "./components/Home";
import UniqBlog from "./components/Uniqblog";
import EditBlog from "./components/EditBlog";
import Allblogs from "./components/Allblogs";
// import ContactUs from "./components/ContactUs";
// import BlogListPage from "./components/BlogListPage";
function App() {

  return (
    <>
    {/* <Navbar/>
      <Addblog/> */}
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addblog" element={<Addblog />} />
        <Route path="/blogs" element={<Allblogs/>}/>
        <Route path="/blogs/:id" element={<UniqBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        {/* <Route path="/contactus" element={<ContactUs />} /> */}
        {/* <Route path="/allblogs" element={<BlogListPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
