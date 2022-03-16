const router = require('express').Router();

module.exports = async (next, db) => {

  router.get('/', (req, res) => {
    res.send("Page is https://localhost:8000/api/admin")
  })

  return router;
}