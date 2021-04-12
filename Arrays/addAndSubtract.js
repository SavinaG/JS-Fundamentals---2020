function addAndSubstract(arr){
    let newArr = [];
    let sum = 0;
    let newSum = 0;

    for(let i = 0; i < arr.length; i++){
        let num = Number(arr[i])
        sum += num
        if(num % 2 === 0){
            num += i;
        }else{
            num -= i;
        }
        newArr[i] = num;
        newSum += num;
    }
    console.log(newArr);
    console.log(sum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35])