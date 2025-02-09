const express = require('express');
const blogController = require('../controllers/blogcontrols'); 
const router = express.Router();

router.post('/', blogController.createBlog); 
router.post("/:id/like", blogController.likeBlog);
router.post("/:id/view",blogController.viewBlog );
router.get('/', blogController.getAllBlogs); 
router.get('/:id', blogController.getBlogById); 
router.put('/:id', blogController.updateBlog); 
router.delete('/:id', blogController.deleteBlog); 

module.exports = router;
