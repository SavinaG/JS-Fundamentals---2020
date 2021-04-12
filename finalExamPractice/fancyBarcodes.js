function fancyBarcodes(input){
    let count = input.shift();

    for (let line of input) {
        let valid = line.match(/(@#+)[A-Z][a-zA-Z0-9]{4,}[A-Z](@#+)/g);
        if(valid){
            let group = line.match(/\d/g);
            if(!group){
            console.log('Product group: 00');
            }else{
                console.log(`Product group: ${group.join("")}`);
            }
        }else{
            console.log('Invalid barcode');
        }
    }
}
fancyBarcodes([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ]
  )