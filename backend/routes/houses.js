const router = require('express').Router();
let Houses = require('../models/houses.model');

router.route('/').get((req, res) => {
  Houses.find()
    .then(houses => res.json(houses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const program = req.body.program;
  const description = req.body.description;
  const date = req.body.date;
  const link = req.body.link;

  const newHouses = new Houses({
    program,
    description,
    date,
    link,
  });

  newHouses.save()
  .then(() => res.json('Open house added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
