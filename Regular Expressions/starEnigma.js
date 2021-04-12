function starEnigma(input){
    let obj = {
        attacked: [],
        destroyed: []
    };

    for (let line of input.slice(1)) {
        let keyPattern = /[star]/gmi;
        let key = line.match(keyPattern) ? line.match(keyPattern).length : 0;
        let msg = line.split("").map((c) => String.fromCharCode((c.charCodeAt(0) - key))).join("");
        let msgPattern = /@(?<name>[A-Za-z]+)(?:[^@\-!:>]+)?:(?<population>[\d]+)(?:[^@\-!:>]+)?!(?<attac>[A|D])!(?:[^@\-!:>]+)?->(?<solders>[\d]+)/gm;
        let matches = msgPattern.exec(msg);
        if(matches){
            let {name, population, attac, solders} = matches.groups;
            if(attac === "A"){
                obj.attacked.push(name);
            }else{
                obj.destroyed.push(name);
            }
        }
    }
    let attackedLength = obj.attacked.length;
    let destroyedLength = obj.destroyed.length;

    console.log(`Attacked planets: ${attackedLength}`);

    if(attackedLength > 0){
        obj.attacked.sort((a, b) => a.localeCompare(b)).forEach((name) => console.log(`-> ${name}`));
    }
    console.log(`Destroyed planets: ${destroyedLength}`);

    if(destroyedLength > 0){
        obj.destroyed.sort((a, b) => a.localeCompare(b)).forEach((name) => console.log(`-> ${name}`));
    }
}
starEnigma([ 
    '3', "tt(''DGsvywgerx>6444444444%H%1B9444", 
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);