function searchForNumbers(field, searchInfo){
    let count = 0;
    let element = searchInfo[2];

    let arr = field.slice(0, searchInfo[0]);
    arr = arr.slice(searchInfo[1]);

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === element){
            count++;
        }
        
    }
    console.log(`Number ${element} occurs ${count} times.`)

}
searchForNumbers([5, 2, 3, 4, 1, 6],
    [5, 2, 3])