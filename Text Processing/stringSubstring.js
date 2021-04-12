function stringSubstring(word, text){
    text = text.toLowerCase().split(" ");

    if( text.includes(word.toLowerCase())){
        console.log(word);
    }else{
        console.log(`${word} not found!`);
    }

}
stringSubstring('python',
'JavaScript is the best prograpythonmming language')