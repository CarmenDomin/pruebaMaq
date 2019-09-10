const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('src'))

const server = app.listen(7000, function () {
  console.log(`Listening on http://localhost:${server.address().port}`);
});
