function santaCookies(input){
    input = input.map(Number);
    let batchesCount = input.shift();
    let cookieGrams = 25;
    let cup = 140;
    let smallSpoon = 10;
    let bigSpoon = 20;
    let cookiesPerBox = 5;
    let totalBoxes = 0;

    for (let i = 0; i < batchesCount; i++) {
        let flour = input.shift();
        let sugar = input.shift();
        let cocoa = input.shift();

        flour = Math.floor(flour / cup);
        sugar = Math.floor(sugar / bigSpoon);
        cocoa = Math.floor(cocoa / smallSpoon);
        
        if((flour && sugar && cocoa) <= 0){
            console.log('Ingredients are not enough for a box of cookies.');
            continue;
        }else{
            let totalCookies = ((cup + smallSpoon + bigSpoon) * Math.min(flour, sugar, cocoa)) / cookieGrams;
            let batchBoxes = Math.floor(totalCookies /cookiesPerBox);
            totalBoxes += batchBoxes;

            console.log(`Boxes of cookies: ${Math.floor(batchBoxes)}`);
        }
    }
    console.log(`Total boxes: ${Math.floor(totalBoxes)}`);

}
santaCookies([ '1', '1400', '200', '100' ])