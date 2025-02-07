const BlogStore = require('../models/BlogStore'); 
//create a blog
const createBlog = async (req, res) => {
  try {
    const newBlog = new BlogStore(req.body); 
    await newBlog.save(); 
    res.status(201).json(newBlog); 
  } catch (err) {
    res.status(500).json({ error: 'Error saving blog' }); 
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogStore.find(); 
    res.status(200).json(blogs); 
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blogs' });
  }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await BlogStore.findById(req.params.id); 
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog); 
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blog' });
  }
};

// Update a blog by ID
const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await BlogStore.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } 
    );
    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(updatedBlog); 
  } catch (err) {
    res.status(500).json({ error: 'Error updating blog' });
  }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await BlogStore.findByIdAndDelete(req.params.id); 
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' }); 
  } catch (err) {
    res.status(500).json({ error: 'Error deleting blog' });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
