const router = require('express').Router();
let Urologic = require('../models/urologic.model');

router.route('/').get((req, res) => {
  Urologic.find()
    .then(urologic => res.json(urologic))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const institution = req.body.institution;
  const presentation = req.body.presentation;
  const speaker = req.body.speaker;
  const date = req.body.date;
  const link = req.body.link;

  const newUrologic = new Urologic({
    institution,
    presentation,
    speaker,
    date,
    link,
  });

  newUrologic.save()
  .then(() => res.json('Video added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
