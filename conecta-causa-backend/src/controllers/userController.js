exports.me = async (req,res) => {
  const u = req.user;
  res.json({ id: u.id, name: u.name, email: u.email, role: u.role, skills: u.skills, location: u.location, availability: u.availability });
};

exports.myApplications = async (req,res) => {
  const { Application, Opportunity } = require('../models');
  const apps = await Application.findAll({ where: { userId: req.user.id }, include: [Opportunity] });
  res.json(apps);
};
