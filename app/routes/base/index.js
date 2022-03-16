const router = require('express').Router();


// Pages -> It uses Next to load pages from the /pages directory.
module.exports = async (next, db) => {
  router.get('/', (req, res) => {
    return next.render(req, res, `${req.path}`, req.query);
  })

  router.all('*', (req, res) => {
    return next.render(req, res, `${req.path}`, req.query)
  })

  return router;
}