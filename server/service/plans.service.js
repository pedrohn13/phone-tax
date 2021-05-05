var planData = require('./../data/plan-info.json');

function getAllPlans() {
    return planData.plans;
}

module.exports = {
    getAllPlans: getAllPlans
}