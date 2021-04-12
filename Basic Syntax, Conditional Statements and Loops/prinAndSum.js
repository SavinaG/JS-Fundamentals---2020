function prinAndSum(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    let line = "";
    let sum = 0;

    for(let i = num1; i <= num2; i++){
        line += i + " ";
        sum += i;
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}
prinAndSum(5, 10)