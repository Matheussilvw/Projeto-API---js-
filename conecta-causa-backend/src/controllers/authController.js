const { register, login } = require('../services/authService');

exports.register = async (req,res,next) => {
  try {
    const user = await register(req.body);
    res.status(201).json({id: user.id, email: user.email});
  } catch(e) { next(e); }
};

exports.login = async (req,res,next) => {
  try {
    const result = await login(req.body);
    res.json({ token: result.token, user: { id: result.user.id, email: result.user.email, role: result.user.role }});
  } catch(e) { next(e); }
};
