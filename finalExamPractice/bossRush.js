function bossRush(input){
    let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;
    for (let line of input) {
        let match = pattern.exec(line);
        if (match) {
            console.log(match.groups.boss + ', ' + 'The ' + match.groups.title);
            console.log(`>> Strength: ${match.groups.boss.length}`);
            console.log(`>> Armour: ${match.groups.title.length}`);
        } else {
            console.log(`Access denied!`);
        }

    }


}
bossRush([
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#',
    ]);