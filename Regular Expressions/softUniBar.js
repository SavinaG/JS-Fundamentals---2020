function softUniBar(input){
    let finalPrice = 0;

    for (let line of input) {
        let regEx = /%(?<name>[A-Z][a-z]+)%([\W\S_][^\|\$%\.]+)?<(?<product>\w+)>([\W\S_][^\|\$%\.]+)?\|(?<qnt>[\d]+)\|([\W\S_][^\|\$%\.]+)?(?<price>[\d]+\.?[\d]+)\$/g;
        let valid = regEx.exec(line);
        if(valid){
            let totalPrice = Number(valid.groups.qnt) * Number(valid.groups.price);
            console.log(`${valid.groups.name}: ${valid.groups.product} - ${totalPrice.toFixed(2)}`);
            finalPrice += totalPrice
        }
    }
    
    console.log(`Total income: ${finalPrice.toFixed(2)}`);
}
softUniBar([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);