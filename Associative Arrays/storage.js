function storage(input){
    let map = new Map();

    for(let line of input){
        let [product, qnt] = line.split(" ");
        qnt = Number(qnt);
        if(map.has(product)){
            qnt += map.get(product)
        }
        map.set(product, qnt);
    }
    for (let [product, qnt] of map) {
        console.log(`${product} -> ${qnt}`);
    }

}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);