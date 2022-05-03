let numbers = [6, 3, 7, 2, 5]

function weekNumbersToWords(pArray) {
    for (let i = 0; i < pArray.length; i++) {
        switch (pArray[i]) {
            case 1:
                pArray[i] = "Monday";
                break;
            case 2:
                pArray[i] = "Tuesday";
                break;
            case 3:
                pArray[i] = "Wednesday";
                break;
            case 4:
                pArray[i] = "Thursday";
                break;
            case 5:
                pArray[i] = "Friday";
                break;
            case 6:
                pArray[i] = "Saturday";
                break;
            case 7:
                pArray[i] = "Sunday";
                break;
            default:
                return "The values you entered could not be matched.";
        }
    }
    return pArray;
}

console.log(weekNumbersToWords(numbers))

