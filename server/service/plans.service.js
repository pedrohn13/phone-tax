var planData = require('./../data/plan-info.json');

function getAllPlans() {
    return planData.plans;
}

function getPlanByName(name) {
    return planData.plans.find(p => { return p.name === name });
}

module.exports = {
    getAllPlans: getAllPlans,
    getPlanByName: getPlanByName
}