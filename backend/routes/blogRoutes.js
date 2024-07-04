const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers');
const auth = require('../middleware/authMiddleware')

// @route   GET api/blogs
// @desc    Get all blogs
// @access  Public
router.get('/', blogController.getBlogs);

// @route   GET api/blogs/:id
// @desc    Get blog by ID
// @access  Public
router.get('/:id', blogController.getBlogById);

// @route   POST api/blogs/create
// @desc    Create a blog
// @access  Private (example: require admin or superuser role)
router.post('/create',auth, blogController.createBlog);

module.exports = router;
