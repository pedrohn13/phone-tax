const express = require('express');
const cors = require('cors');

const calculatorService = require('./service/calculator.service.js');
const CalculateRequest = require('./model/calculate-request.js')

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

app.get('/taxes', (request, response) => {
    response.send({id:22});
});

app.get('/plans', (request, response) => {
  response.send({id:22});
});

app.post("/calculate-tax", function(req, res) {

  const calculateRequest = new CalculateRequest(
    req.body.originCode,
    req.body.destinationCode,
    req.body.callDuration,
    req.body.plan
  );
  
  const result = calculatorService.calculateTax(calculateRequest);

  res.send(result);
  
})

