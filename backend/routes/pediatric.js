const router = require('express').Router();
let Pediatric = require('../models/pediatric.model');

router.route('/').get((req, res) => {
  Pediatric.find()
    .then(pediatric => res.json(pediatric))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const institution = req.body.institution;
  const presentation = req.body.presentation;
  const speaker = req.body.speaker;
  const date = req.body.date;
  const link = req.body.link;

  const newPediatric = new Pediatric({
    institution,
    presentation,
    speaker,
    date,
    link,
  });

  newPediatric.save()
  .then(() => res.json('Video added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
