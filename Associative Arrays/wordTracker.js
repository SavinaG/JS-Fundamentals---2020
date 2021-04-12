function wordTracker(input){
    let words = input.shift().split(" ");

    let wordsObj = {};

    for (let word of words) {
        wordsObj[word] = 0;
    }
    for (let word of input) {
        if(wordsObj.hasOwnProperty(word)){
            wordsObj[word]++
        }
    }
    Object.keys(wordsObj).sort((a, b) => wordsObj[b] - wordsObj[a])
    .forEach(el => {
        console.log(`${el} - ${wordsObj[el]}`);
    })
}
wordTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ])