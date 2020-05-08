const router = require('express').Router();
let Video = require('../models/videos.model');

router.route('/').get((req, res) => {
  Video.find()
    .then(videos => res.json(videos))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const institution = req.body.institution;
  const presentation = req.body.presentation;
  const speaker = req.body.speaker;
  const date = req.body.date;
  const link = req.body.link;

  const newVideo = new Video({
    institution,
    presentation,
    speaker,
    date,
    link,
  });

  newVideo.save()
  .then(() => res.json('Video added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
