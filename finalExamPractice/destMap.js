function destMap(input) {
    let regEx = /([=|\/])(?<town>[A-Z][A-Za-z]{2,})\1/g;
    let validLocation = input.match(regEx);
    let points = 0;
    let destination = [];
    
    if(validLocation){
        for (let towns of validLocation) {
            towns = towns.slice(1, towns.length - 1);
            points += towns.length;
            destination.push(towns)
        }
    }
    
    console.log(`Destinations: ${destination.join(", ")}`);
    console.log(`Travel Points: ${points}`);
}
destMap('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=');
destMap('ThisIs some InvalidInput')