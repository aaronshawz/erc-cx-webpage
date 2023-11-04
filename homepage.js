const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/view', (req, res) => {
  const filePath = 'views.txt';
  let number = parseInt(fs.readFileSync(filePath, 'utf-8'));
  number++;
  fs.writeFileSync(filePath, number.toString());
  res.send(number.toString());
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});