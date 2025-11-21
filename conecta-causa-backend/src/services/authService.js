const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const register = async ({name,email,password,role,skills,location,availability}) => {
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({name,email,password: hashed,role,skills,location,availability});
  return user;
};

const login = async ({email,password}) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Invalid credentials');
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid credentials');
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });
  return { user, token };
};

module.exports = { register, login };
