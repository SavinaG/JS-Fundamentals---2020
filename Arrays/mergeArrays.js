function mergeArrays(arrOne, arrTwo){
    let newArr = [];

    for (let i = 0; i < arrOne.length; i++) {
      
        if(i % 2 === 0){
            newArr.push(Number(arrOne[i]) + Number(arrTwo[i]));
        }else{
            newArr.push(arrOne[i] + arrTwo[i])
        }
    }
    console.log(newArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])