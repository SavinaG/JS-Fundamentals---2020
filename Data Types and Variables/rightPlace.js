function rightPlace(text, char, word){
    let result = text.replace("_", char);

    if(result === word){
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'I', 'Strong')