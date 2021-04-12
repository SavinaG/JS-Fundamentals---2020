function oddOccurrences(input){
    let array = input.split(" ");

    let occur = new Map();

    for (let word of array) {
        word = word.toLowerCase();
        if(!occur.has(word)){
            occur.set(word, 0);
        }
        occur.set(word, occur.get(word) + 1);
    }
    let keys = Array.from(occur.keys()).filter(x => occur.get(x) % 2 !== 0);
    console.log(keys.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')