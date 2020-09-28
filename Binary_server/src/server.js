const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const router = require('./router');

app.use('/static', express.static('public'));
app.use('/api', router);
// app.use('/jungbin/need/MacbookPro')

app.listen(8000, () => {
    console.log("server start!");
});