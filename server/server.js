const express = require('express');
const { resolve } = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(resolve(__dirname, '../dist')));

app.listen(PORT, () => {
  console.log(`Listining on port: `, PORT);
});