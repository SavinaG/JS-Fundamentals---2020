function evenOddSubstract(arrey){
    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i < arrey.length; i ++){
        let num = Number(arrey[i]);
        if(num % 2 === 0){
            evenSum += num;
        }else{
            oddSum += num;
        }
    }
    console.log(evenSum - oddSum);
}
evenOddSubstract([1,2,3,4,5,6])