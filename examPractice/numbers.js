function numbers(input){
    let sequence = input.split(" ");
    let sum = 0;
    let average = 0;
    let newArray = [];

    for(let i = 0; i < sequence.length; i++){
        let num = Number(sequence[i]);
        sum += num;
    }
    average = sum / sequence.length;
    for(let j = 0; j < sequence.length; j++){
        let num = Number(sequence[j]);
        if(num > average){
            newArray.push(num);
        }
    }
    if(sum == average){
        console.log("No");
    }
    newArray.sort((a,b)=>a-b);
    newArray.reverse();
    if(newArray.length >= 5){
        newArray.length = 5
    }
    console.log(newArray.join(" "));
}

numbers('10 20 30 40 50');
//numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1 1')