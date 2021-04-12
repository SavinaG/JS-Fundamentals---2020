function triangleOfNumbers(n){
    n = Number(n);

    for(let i = 1; i <= n; i++){
        let line = "";
        for(let j = 1; j <= i; j++){
            line += i + " ";
        }console.log(line);
    }
}
triangleOfNumbers(6)