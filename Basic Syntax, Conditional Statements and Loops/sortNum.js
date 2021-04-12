function sortNum(first, second, third){
    let max = Math.max(first, second, third);

    if(max == first){
        console.log(first);
        console.log(Math.max(second, third));
        console.log(Math.min(second, third));
    }else if(max == second){
        console.log(second);
        console.log(Math.max(first, third));
        console.log(Math.min(first, third));
    }else{
        console.log(third);
        console.log(Math.max(first, second));
        console.log(Math.min(first, second));
    }

}
sortNum(-1, 6, 3)