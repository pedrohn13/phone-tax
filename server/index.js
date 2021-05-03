const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

app.get('/', (request, response) => {
    response.send('Hello');
  });