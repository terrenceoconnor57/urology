const router = require('express').Router();
let Female = require('../models/female.model');

router.route('/').get((req, res) => {
  Female.find()
    .then(female => res.json(female))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const institution = req.body.institution;
  const presentation = req.body.presentation;
  const speaker = req.body.speaker;
  const date = req.body.date;
  const link = req.body.link;

  const newFemale = new Female({
    institution,
    presentation,
    speaker,
    date,
    link,
  });

  newFemale.save()
  .then(() => res.json('Video added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
