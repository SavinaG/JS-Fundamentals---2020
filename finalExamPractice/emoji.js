function emoji(input){
    let coolEmojis = [];
    
    for (let line of input) {
        let coolnes = line.match(/\d/g).map(Number).reduce((a, b) => a * b);
        let emojis = line.match(/(:{2}|\*{2})(?<name>[A-Z][a-z]{2,})\1/g);
        if(emojis){
            for (let name of emojis) {
                let sum = name.split("").slice(2, -2).reduce((a, b) => a + b.charCodeAt(0), 0);
                if(sum > coolnes){
                    coolEmojis.push(name);
                }
            }
        }   
        console.log(`Cool threshold: ${coolnes}`);
        console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
        console.log(coolEmojis.join("\n"));
    }
}
emoji([
    "It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."
  ]
  );