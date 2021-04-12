function sumFirstLast(input){
    let first = Number(input.shift());
    let second = Number(input.pop());

    console.log(first + second);

}
sumFirstLast(['20', '30', '40'])