function perfectNumber(n){
    let sum = 1;

    for (let i = 2; i <= n/2; i++) {
        if(n % i == 0){
            sum += i
        }
        
    }
    if(sum == n){
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }

}
perfectNumber(1236498)