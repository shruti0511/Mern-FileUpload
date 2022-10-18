const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const routes = require('./routes/api');
require('dotenv').config();
const { default: mongoose } = require('mongoose');
require('dotenv').config()

const app = express();

const port = process.env.PORT || 5000;

mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => { console.log(`Database connected`) })
    .catch((err) => console.log(err))

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.use(bodyParser.json());

app.use("/images", express.static(path.join("images")));
//app.use(express.static('images'))
app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});