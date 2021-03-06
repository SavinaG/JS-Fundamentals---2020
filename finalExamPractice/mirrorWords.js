function mirrorWords([input]) {
    let regexp = /([@#])(?<word1>[A-Za-z]{3,})\1{2}(?<word2>[A-Za-z]{3,})\1/g;
    let validPairs = [];
    let validPair = null;
    while (validPair = regexp.exec(input)) {
        validPairs.push(validPair.groups);
    }
    console.log(validPairs.length ? `${validPairs.length} word pairs found!` : 'No word pairs found!');
    let mirrorWords = validPairs.filter(pair => isMirrorPair(pair));
    if (mirrorWords.length) {
        console.log('The mirror words are:');
        console.log(mirrorWords.map(pair => `${pair.word1} <=> ${pair.word2}`).join(', '))
    } else {
        console.log('No mirror words!');
    }

    function isMirrorPair(pair) {
        return pair.word1 === pair.word2.split('').reverse().join('');
    }
}
mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ]);