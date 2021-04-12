function processOddNum(array){
    
    let filtered = array.filter(isOddIndex);

    let doubled = filtered.map(x => x * 2);

    console.log(doubled.reverse().join(" "));

    function isOddIndex(value, index){
        return (index % 2) === 1;
    }

}
processOddNum([10, 15, 20, 25])