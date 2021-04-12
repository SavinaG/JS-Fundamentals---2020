function distinctArray(array){

    let newArray = [];
    for (let element of array) {
        if(!newArray.includes(element)){
            newArray.push(element)
        }
    }

    console.log(newArray.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])