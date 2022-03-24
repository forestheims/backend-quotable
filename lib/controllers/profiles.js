const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  // TODO: Implement me!
  try {
    const profile = await ProfileService.create(req.body.name);
    res.json(profile);
  } catch (error) {
    error.status = 404;
    next(error);
  }
});
