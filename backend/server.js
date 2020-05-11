
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
console.log("MongoDB database connection established successfully");
})

const videosRouter = require('./routes/videos');
const urologicRouter = require('./routes/urologic');
const infertilityRouter = require('./routes/infertility');
const pediatricRouter = require('./routes/pediatric');
const reconstructionRouter = require('./routes/reconstruction');

app.use('/videos', videosRouter);
app.use('/urologic', urologicRouter);
app.use('/infertility', infertilityRouter);
app.use('/pediatric', pediatricRouter);
app.use('/reconstruction', reconstructionRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
