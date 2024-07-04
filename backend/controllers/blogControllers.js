const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  const { title, author, content,public_id } = req.body;
  try {
    console.log(title, author, content,public_id);
    const blog = new Blog({ title, author, content,public_id });
    await blog.save();
    res.status(201).json({ message: 'Blog created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ blogs });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ msg: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// exports.getBlogs = async (req, res) => {
//   const { page = 1, limit = 5 } = req.query;
//   try {
//     const blogs = await Blog.find()
//       .limit(limit * 1)
//       .skip((page - 1) * limit)
//       .exec();
//     const count = await Blog.countDocuments();
//     res.json({
//       blogs,
//       totalPages: Math.ceil(count / limit),
//       currentPage: page
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
