// filter method
const removeElement = (arr, element) => arr.filter(item => item !== element);

// create an array with 10 random numbers
const sampleArray = Array.from({length: 10}, () => Math.floor(Math.random() * 1000));

// add 419 to the array
sampleArray.push(419);

console.log("initial array -> ", sampleArray);

// remove 419 from the array
const filteredArray = removeElement(sampleArray, 419);

console.log("filtered array ->", filteredArray);