const router = require('express').Router();
let Upcoming = require('../models/upcoming.models');

router.route('/').get((req, res) => {
  Upcoming.find()
    .then(upcoming => res.json(upcoming))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const program = req.body.program;
  const description = req.body.description;
  const date = req.body.date;
  const link = req.body.link;
  const page = req.body.page;
  const bottomtext = req.body.bottomtext;

  const newUpcoming = new Upcoming({
    program,
    description,
    date,
    link,
    page,
    bottomtext,
  });

  newUpcoming.save()
  .then(() => res.json('Upcoming added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
