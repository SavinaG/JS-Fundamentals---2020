function hashTag(input){
    let words  = input.split(" ");

    let hashTags = words.filter((word) => word.startsWith("#") && word.length > 1);

    let valid = hashTags.filter((word) => {
        let chars = word.split("").slice(1);
        return (chars.every((char) => isLower(char) || isUper(char)));
    })
    .map((word) => word.substring(1));

    console.log(valid.join("\n"));

    function isLower(char){
        let asciiValue = char.charCodeAt(0);
        return asciiValue >= 97 && asciiValue <= 122;
    }
    function isUper(char){
        let asciiValue = char.charCodeAt(0);
        return asciiValue >= 65 && asciiValue <= 90;
    }
}
hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')