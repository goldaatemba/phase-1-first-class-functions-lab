// Code your solution in this file!
// Declare returnFirstTwoDrivers with an anonymous function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Declare returnLastTwoDrivers with an anonymous function
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};

// Array selectingDrivers containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function createFareMultiplier
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};

// Declare fareDoubler using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// Declare fareTripler using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// Function selectDifferentDrivers
const selectDifferentDrivers = function(drivers, driverFunction) {
    return driverFunction(drivers);
};
