const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('howdy');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
