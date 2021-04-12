function sumEvenNum(arrStr){
    let sum = 0;

    for(let i = 0; i < arrStr.length; i ++){
        let num = Number(arrStr[i]);
        if(num % 2 === 0){
            sum += num;
        }
    }
    console.log(sum);
}
sumEvenNum(['1','2','3','4','5','6'])