function computerStore(input){
    let index = 0;
    let command = input[index];
    let price = 0;
    let totalPrice = 0;
    let taxes = 0;

    while(command !== "special" && command !== "regular"){
        let parts = Number(command);
        if(parts < 0){
            console.log("Invalid price!");
        }else{
            price += parts;
        }
        index++
        command = input[index];
    }
    taxes = price * 0.20;
    totalPrice = price + taxes;
    if(command == "special"){
        totalPrice *= 0.90;
    }if(totalPrice == 0){
        console.log("Invalid order!");  
    }else{
    console.log(
   `Congratulations you've just bought a new computer!
    Price without taxes: ${price.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${totalPrice.toFixed(2)}$`);
    }
}
/*computerStore([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]);*/
    computerStore([
       'regular'
        ])