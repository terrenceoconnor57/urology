const router = require('express').Router();
let Infertility = require('../models/infertility.model');

router.route('/').get((req, res) => {
  Infertility.find()
    .then(infertility => res.json(infertility))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const institution = req.body.institution;
  const presentation = req.body.presentation;
  const speaker = req.body.speaker;
  const date = req.body.date;
  const link = req.body.link;

  const newInfertility = new Infertility({
    institution,
    presentation,
    speaker,
    date,
    link,
  });

  newInfertility.save()
  .then(() => res.json('Video added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
