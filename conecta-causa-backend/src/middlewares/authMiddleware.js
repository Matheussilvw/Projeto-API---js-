const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = async (req,res,next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({error: 'Missing token'});
  const token = auth.split(' ')[1];
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const user = await User.findByPk(data.id);
    if(!user) return res.status(401).json({error: 'Invalid token'});
    req.user = user;
    next();
  } catch(e) {
    return res.status(401).json({error: 'Invalid token'});
  }
};
