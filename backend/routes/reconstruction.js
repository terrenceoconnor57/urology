const router = require('express').Router();
let Reconstruction = require('../models/reconstruction.model');

router.route('/').get((req, res) => {
  Reconstruction.find()
    .then(reconstruction => res.json(reconstruction))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const institution = req.body.institution;
  const presentation = req.body.presentation;
  const speaker = req.body.speaker;
  const date = req.body.date;
  const link = req.body.link;

  const newReconstruction = new Reconstruction({
    institution,
    presentation,
    speaker,
    date,
    link,
  });

  newReconstruction.save()
  .then(() => res.json('Video added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
