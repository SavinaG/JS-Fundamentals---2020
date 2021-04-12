function firsLastK(array){
    let k = array.shift();

    let firstK = array.slice(0, k);
    console.log(firstK.join(" "));

    let lastK = array.slice(array.length - k);
    console.log(lastK.join(" "));

}
firsLastK([3,
    6, 7, 8, 9])