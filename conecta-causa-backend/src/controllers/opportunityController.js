const { Opportunity, Application } = require('../models');
const matchService = require('../services/matchService');

exports.create = async (req,res,next) => {
  try {
    const opp = await Opportunity.create(req.body);
    res.status(201).json(opp);
  } catch(e){ next(e); }
};

exports.list = async (req,res) => {
  const { page = 1, limit = 10, skill } = req.query;
  const where = {};
  const all = await Opportunity.findAll();
  // simple filter by skill tag
  let filtered = all;
  if(skill) filtered = all.filter(o => (o.skills || []).includes(skill));
  const start = (page-1)*limit;
  const data = filtered.slice(start, start+Number(limit));
  res.json({ page, limit, total: filtered.length, data });
};

exports.match = async (req,res) => {
  const { Opportunity } = require('../models');
  const user = req.user;
  const opps = await Opportunity.findAll();
  const computed = opps.map(o => {
    const oppPlain = {
      id: o.id,
      title: o.title,
      skills: o.skills || [],
      location: o.location || {},
      schedule: o.schedule || {}
    };
    const score = matchService.compute(user, oppPlain);
    return { opportunity: oppPlain, score };
  });
  computed.sort((a,b) => b.score.score - a.score.score);
  res.json(computed);
};

exports.apply = async (req,res,next) => {
  try {
    const oppId = req.params.id;
    const app = await Application.create({ userId: req.user.id, opportunityId: oppId });
    res.status(201).json(app);
  } catch(e){ next(e); }
};
