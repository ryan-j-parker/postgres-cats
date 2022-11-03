const { Router } = require('express');
// const { cats } = require('../cats-data');
const CartoonCat = require('../models/CartoonCat');

// TODO -- update this file to use your database and models instead of hard-coded cats data
// all tests should still pass
module.exports = Router()
  .get('/', async (req, res) => {
    const cats = await CartoonCat.getAll();
    const filtered = cats.map(({ id, name }) => ({ id, name }));
    res.json(filtered);
  })
  .get('/:id', async (req, res) => {
    const cat = await CartoonCat.getById(req.params.id);
    // const cat = cats.find((cat) => cat.id === req.params.id);
    res.json(cat);
  });
