const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const auth = (req, res, next) => {
  const fetchedToken = req.header('Authorization');
  const token = fetchedToken?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = auth;
