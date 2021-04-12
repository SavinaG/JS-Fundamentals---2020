function negativePositive(arrayNums){
    let newArray = [];

    for (let i = 0; i < arrayNums.length; i++) {
        let element = arrayNums[i];
        if(element < 0){
            newArray.unshift(element);
        }else{
            newArray.push(element)
        }
    }
    return newArray.join("\n");
}
console.log(negativePositive([7, -2, 8, 9]));