function solve(input) {
    let rgx = /!([A-Z][a-z]{2,})!:\[([A-Za-z]{8,})\]/;
    input.shift();
    input.forEach(el => {
        let arr = el.match(rgx);
        if (arr) {
            let tag = arr[1];
            let first = arr[2];
            let result = "";
            for (let i = 0; i < first.length; i++) {
                const element = first[i].charCodeAt();
                result += element + " ";  
            }
            
            console.log(`${tag}: ${result}`);
        } else {
            console.log('The message is invalid');
        }
    });
}
solve([
    '3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
  ])