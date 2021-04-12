function storeProvision(store, order){

    let shop = {};

    for (let i = 0; i < store.length; i+=2) {
        const element = store[i];
        shop[element] = Number(store[i + 1]);
    }
    for (let i = 0; i < order.length; i+=2) {
        const element = order[i];
        if( !shop.hasOwnProperty(element)){
            shop[element] = 0;
        }
        shop[element] += Number(order[i + 1]);
    }
    Object.keys(shop).forEach(key =>{
        console.log(`${key} -> ${shop[key]}`);
    })

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])