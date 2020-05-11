const router = require('express').Router();
let Endourology = require('../models/endourology.model');

router.route('/').get((req, res) => {
  Endourology.find()
    .then(endourology => res.json(endourology))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const institution = req.body.institution;
  const presentation = req.body.presentation;
  const speaker = req.body.speaker;
  const date = req.body.date;
  const link = req.body.link;

  const newEndourology = new Endourology({
    institution,
    presentation,
    speaker,
    date,
    link,
  });

  newEndourology.save()
  .then(() => res.json('Video added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
