function pascalCase(input){
    let indexes = [];
    let charecters = input.split('');

    for (let index in charecters) {
        let char = charecters[index];
        let ascii = char.charCodeAt(0);
        if (ascii >= 65 && ascii <= 90) {
            indexes.push(Number(index));
        }
    }
    let words = [];

    for (let i = 0; i < indexes.length; i++) {
        words.push(input.substring(indexes[i], indexes[i + 1]));
    }
    console.log(words.join(", "));
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')