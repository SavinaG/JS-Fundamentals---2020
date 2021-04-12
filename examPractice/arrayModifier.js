function arrayModifier(array){
    let newArray = array.shift().split(" ");

    for (let i = 0; i < array.length; i++) {
        let modifier = array[i].split(" ");
        let command = modifier[0];
        if(command == "swap"){
            let firstIndex = Number(modifier[1]);
            let secondIndex = Number(modifier[2]);
            let result = [];
            result.push(newArray[firstIndex], newArray[secondIndex])
            newArray.splice(firstIndex, 1, result[1]);
            newArray.splice(secondIndex, 1, result[0]);
        }else if(command == "multiply"){
            let firstIndex = Number(modifier[1]);
            let secondIndex = Number(modifier[2]);
            let result = Number(newArray[firstIndex]) * Number(newArray[secondIndex]);
            newArray.splice(firstIndex, 1, result);
        }else if(command == "decrease"){
            for(let i = 0; i < newArray.length; i++){
                let number = Number(newArray[i]);
                number -= 1;
                newArray.splice(i, 1, number)
            }
        }else if(command == "end"){
            console.log(newArray.join(", "));
            break;
        } 
    }
}

arrayModifier( [
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])