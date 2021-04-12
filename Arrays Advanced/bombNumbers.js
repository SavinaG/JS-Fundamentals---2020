function bombNumbers(target, bombInfo){
    let bomb = bombInfo[0];
    let power = bombInfo[1];

    let index = target.indexOf(bomb);

    while(index > -1){

        target.splice(Math.max((index - power), 0), Math.min(power, index));
        index = target.indexOf(bomb);
        target.splice(index, (power + 1));
        index = target.indexOf(bomb);
    }
        console.log(finalResult(target));

    function finalResult(array){
        let sum = 0;

        for(let n of array){
            sum += n;
        }
        return sum;
    }

}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])