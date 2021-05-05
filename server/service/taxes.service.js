var taxData = require('./../data/tax-info.json');

function getAllTaxes() {
    return taxData.taxes;
}

function getTaxByCode(code) {
    return getAllTaxes().find(t => { return t.code === code });
}

function getTaxByDestinationCode(originCode, destinationCode) {
    const destinations = getTaxByCode(originCode).destinations;
    
    if (!destinations) {
        return destinations;
    }
    
    return destinations.find(d => { return d.code === destinationCode });
}

module.exports = {
    getAllTaxes: getAllTaxes,
    getTaxByCode: getTaxByCode,
    getTaxByDestinationCode: getTaxByDestinationCode
}