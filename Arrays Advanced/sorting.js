function sorting(array){
    let sorted = [];

    array.sort((a, b) => a - b);
    while(array.length !== 0){
        sorted.push(array[array.length - 1]) && array.pop();
        sorted.push(array[0]) && array.shift();
    }
    console.log(sorted.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])