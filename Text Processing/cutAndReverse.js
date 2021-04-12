function cutAndReverse(str){
    let first = str.substring(0, str.length/2);
    let second = str.substring(str.length/2);
    console.log(first.split("").reverse().join(""));
    console.log(second.split("").reverse().join(""));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')