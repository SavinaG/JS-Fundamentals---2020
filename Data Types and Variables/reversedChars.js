function reversedChars(charOne, charTwo, charThree){
    let result = "";
    result = charOne + charTwo + charThree;
    result = result.split("");
    result = result.reverse();
    result = result.join(" ")

    console.log(result);

}
reversedChars('A',
'B',
'C')