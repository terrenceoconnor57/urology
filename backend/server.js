
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
const femaleRouter = require('./routes/female');
const endourologyRouter = require('./routes/endourology');
const neurourologyRouter = require('./routes/neurourology');

app.use('/videos', videosRouter);
app.use('/urologic', urologicRouter);
app.use('/infertility', infertilityRouter);
app.use('/pediatric', pediatricRouter);
app.use('/reconstruction', reconstructionRouter);
app.use('/female', femaleRouter);
app.use('/endourology', endourologyRouter);
app.use('/neurourology', neurourologyRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
