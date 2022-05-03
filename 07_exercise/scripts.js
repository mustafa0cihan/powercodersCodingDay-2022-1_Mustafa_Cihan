function getReverseNumber(item) {
    let reversedNumber = parseFloat(item.toString().split('').reverse().join("")) * Math.sign(item);
    return console.log(reversedNumber)
}

getReverseNumber(5798);
getReverseNumber(6514465000);
getReverseNumber(-54499631);
getReverseNumber(-4231000);