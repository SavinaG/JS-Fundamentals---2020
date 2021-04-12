function sumFirstLast(array){
    array = array.map(Number);
    let first = array.shift();
    let last = array.pop();

    return first + last;

}
console.log(sumFirstLast(['20', '30', '40']));
