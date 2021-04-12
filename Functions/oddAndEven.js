function oddAndEven(n){
    let str = String(n).split("");
    let odd = 0;
    let even = 0;

    for (let i = 0; i < str.length; i++) {
        let element = Number(str[i]);
        if(element % 2 === 0){
            even += element;
        }else{
            odd += element;
        }
    }
    return ` Odd sum = ${odd}, Even sum = ${even}`
}
console.log(oddAndEven(1000435));