function dictionary(arr){
    let dict = {};

    for (const line of arr) {
        let obj = JSON.parse(line);
        dict = Object.assign(dict, obj);
    }

    let sorted = Object.keys(dict);
    sorted.sort((a, b) => a.localeCompare(b));

    for (const terms of sorted) {
        let def = dict[terms];
        console.log(`Term: ${terms} => Definition: ${def}`);
    }

}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);