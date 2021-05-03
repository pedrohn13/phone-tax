class CalculateRequest {

    constructor(originCode, destinationCode, callDuration, plan) {
        this.originCode = originCode;
        this.destinationCode = destinationCode;
        this.callDuration = callDuration;
        this.plan = plan;
    }
}

module.exports = CalculateRequest;
