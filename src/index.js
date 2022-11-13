const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const db = require('./config/db/index.js')
const route = require('./routes')
const port = process.env.PORT || 3001;

const app = express();

db.connect();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

route(app)

app.listen(port, () =>
    console.log(`Server listening at http://localhost:${port}`)
)