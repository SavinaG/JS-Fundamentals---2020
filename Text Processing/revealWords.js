function revealWords(words, sentence){
    words = words.split(", ");

    for (const word of words) {
        let stars = "*".repeat(word.length);
        
        sentence = sentence.replace(stars, word);
    }
    console.log(sentence);
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')