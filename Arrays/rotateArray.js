function rotateArray(array){
    let rotation = Number(array.pop());
    rotation %= array.length;

    for( let i = 0; i < rotation; i++){
        let element = array.pop();
        array.unshift(element)
    }
    console.log(array.join(" "));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
//rotateArray(['1', '2', '3', '4', '2'])