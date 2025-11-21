const { Organization } = require('../models');
exports.create = async (req,res,next) => {
  try {
    const org = await Organization.create(req.body);
    res.status(201).json(org);
  } catch(e){ next(e); }
};
exports.get = async (req,res) => {
  const org = await Organization.findByPk(req.params.id);
  if(!org) return res.status(404).json({error:'Not found'});
  res.json(org);
};
exports.update = async (req,res,next) => {
  try{
    const org = await Organization.findByPk(req.params.id);
    if(!org) return res.status(404).json({error:'Not found'});
    await org.update(req.body);
    res.json(org);
  }catch(e){ next(e); }
};
