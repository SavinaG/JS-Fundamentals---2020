function wordOccurrences(input){
    let text = new Map();

    for (let line of input) {
        let word = line;
        if(!text.has(word)){
            text.set(word, 0);
        }
        text.set(word, text.get(word) +1);
    }
    let sorted = Array.from(text).sort((a, b) => b[1] - a[1]);
    
    sorted.forEach( el =>
        console.log(`${el[0]} -> ${el[1]} times`)
    )
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", 
"another", "sentence", "And", "finally", "the", "third", "sentence"]);
