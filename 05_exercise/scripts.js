let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
let fruits = ["Apple", "Orange", "Banana", "Melon", "Kiwi"];
let carsModel = ["Opel", "Tesla", "Mercedes", "Ferrari", "Toyota", "Fiat"]

function getLastValue(pArray) {
    pArray.sort((a, b) => {
        return a < b ? -1 : a > b ? 1 : 0;
    });
    return pArray[pArray.length - 1]
}

console.log(`${getLastValue(days)} is the last value of the array.`);
console.log(`${getLastValue(fruits)} is the last value of the array.`);
console.log(`${getLastValue(carsModel)} is the last value of the array.`);