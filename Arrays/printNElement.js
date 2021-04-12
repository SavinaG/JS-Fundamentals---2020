function printNElement(arr){
    let result = [];
    let n = Number(arr.pop())

    for(let i = 0; i < arr.length; i+=n){
        let element = arr[i]; 
        result += element + " "
    }
    console.log(result);
}
printNElement(["dsa", "asd", "test", "test", "2"])