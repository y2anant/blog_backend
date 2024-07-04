const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    // Assuming user information is fetched from database based on authentication
    const user = await User.findById(req.userId).select('-password'); // Fetch user data excluding password
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
