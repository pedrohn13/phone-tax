const planData = require('./../data/plan-info.json');
const taxData = require('./../data/tax-info.json');
const taxService = require('./taxes.service')
const planService = require('./plans.service')

function calculateTax(calculationRequest) {

    const valueWithoutPlan = calculateWithoutPlan(calculationRequest);
    const valueWithPlan = calculateWithPlan(calculationRequest);   

    return generateResponse(valueWithPlan, valueWithoutPlan, calculationRequest);
}

function calculateWithPlan(calculationRequest) {
    const taxDestination = getTaxByDestinationCode(calculationRequest.originCode, calculationRequest.destinationCode);   
    if (!taxDestination) {
        return '-';
    } 

    const plan = planService.getPlanByName(calculationRequest.plan);

    if (plan.tolerance >= calculationRequest.callDuration) {
        return 0;
    }   
       
    const surplusTime = calculationRequest.callDuration - plan.tolerance;  
    const totalTax = surplusTime * taxDestination.tax;

    return totalTax + (totalTax * taxData.surplusPenalty);
}

function calculateWithoutPlan(calculationRequest) {
    const taxDestination = getTaxByDestinationCode(calculationRequest.originCode, calculationRequest.destinationCode);   
    if (!taxDestination) {
        return '-';
    }    
    return calculationRequest.callDuration * taxDestination.tax;
}

function generateResponse(valueWithPlan, valueWithoutPlan, calculationRequest) {
    return {
        valueWithPlan: valueWithPlan,
        valueWithoutPlan: valueWithoutPlan,
        calculationRequest: calculationRequest
    }
}

function getTaxByDestinationCode(originCode, destinationCode) {
    return taxService.getTaxByDestinationCode(originCode, destinationCode);
}

module.exports = {
    calculateTax: calculateTax
}