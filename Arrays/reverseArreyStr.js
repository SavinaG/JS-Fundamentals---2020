function reverseArreyStr(arrey){
    let result = "";

    for(let i = arrey.length - 1; i >=0; i--){
        result += arrey[i] + " ";
    }
    console.log(result);
}
reverseArreyStr(['a', 'b', 'c', 'd', 'e'])