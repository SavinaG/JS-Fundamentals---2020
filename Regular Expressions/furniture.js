function furniture(input){
    let result = "Bought furniture:\n";
    let totalPrice = 0;

    for (let line of input) {
        let regEx = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]+)!(?<qnt>[\d]+)/g;
        let match = regEx.exec(line);
        if(match){
            result += match.groups.name + '\n';
            totalPrice += Number(match.groups.price) * Number(match.groups.qnt);
        }
    }
    result += `Total money spend: ${totalPrice.toFixed(2)}`;
    console.log(result);
}
furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
    ]);