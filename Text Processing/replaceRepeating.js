function replaceRepeating(input){
    let result = "";

    for (let i = 0; i < input.length; i++) {
        if(input[i] === input[i + 1]){
            continue
        }else{
            result += input[i];
        }
    }
    console.log(result);
}
replaceRepeating("qqqwerqwecccwd")