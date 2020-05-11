const router = require('express').Router();
let Neurourology = require('../models/neurourology.model');

router.route('/').get((req, res) => {
  Neurourology.find()
    .then(neurourology => res.json(neurourology))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const institution = req.body.institution;
  const presentation = req.body.presentation;
  const speaker = req.body.speaker;
  const date = req.body.date;
  const link = req.body.link;

  const newNeurourology = new Neurourology({
    institution,
    presentation,
    speaker,
    date,
    link,
  });

  newNeurourology.save()
  .then(() => res.json('Video added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
