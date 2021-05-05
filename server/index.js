const express = require('express');
const cors = require('cors');

const calculatorService = require('./service/calculator.service.js');
const taxService = require('./service/taxes.service.js');
const planService = require('./service/plans.service.js');


const CalculateRequest = require('./model/calculate-request.js')

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Express server currently running on port ${PORT}`));

app.get('/taxes', (request, response) => {
  response.send(taxService.getAllTaxes());
});

app.get('/plans', (request, response) => {
  response.send(planService.getAllPlans());
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

