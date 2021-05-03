var planData = require('./../data/plan-info.json');
var taxData = require('./../data/tax-info.json');

module.exports = {
    calculateTax: function(calculationRequest) {

        const valueWithoutPlan = calculateWithoutPlan(calculationRequest);
        const valueWithPlan = calculateWithPlan(calculationRequest);        

        return generateResponse(valueWithPlan, valueWithoutPlan, calculationRequest);
    }
}

function calculateWithPlan(calculationRequest) {    
    const plan = planData.plans.find(p => { return p.name === calculationRequest.plan });

    if (plan.tolerance >= calculationRequest.callDuration) {
        return 0;
    }

    const surplusTime = calculationRequest.callDuration - plan.tolerance;

    const origin = getOriginByCode(calculationRequest.originCode);
    const taxDestination = getTaxByDestinationCode(origin.destinations, calculationRequest.destinationCode);

    if (!taxDestination) {
        return '-';
    }

    const totalTax = surplusTime * taxDestination.tax;

    return totalTax + (totalTax * taxData.surplusPenalty);
}

function calculateWithoutPlan(calculationRequest) {
    const origin = getOriginByCode(calculationRequest.originCode);
    const taxDestination = getTaxByDestinationCode(origin.destinations, calculationRequest.destinationCode);    

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

function getOriginByCode(code) {
    return taxData.taxes.find(t => { return t.code === code });;
}

function getTaxByDestinationCode(destinations, code) {
    return destinations.find(d => { return d.code === code });
}