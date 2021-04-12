function heroes(input){
    let actions = {
        CastSpell: (heroes, [name, mpCost, spell]) => {
            mpCost = Number(mpCost);
            let hero = heroes[name];
            if(hero.mp >= mpCost){
                hero.mp -= mpCost;
                console.log(`${name} has successfully cast ${spell} and now has ${hero.mp} MP!`);
            }else{
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
        },
        TakeDamage: (heroes, [name, damage, source]) => {
            damage = Number(damage);
            let hero = heroes[name];
            hero.hp -= damage;
            if(hero.hp > 0){
                console.log(`${name} was hit for ${damage} HP by ${source} and now has ${hero.hp} HP left!`);
            }else{
                console.log(`${name} has been killed by ${source}!`);
                delete heroes[name];
            }

        },
        Recharge: (heroes, [name, mpAmt]) => {
            mpAmt = Number(mpAmt);
            let hero = heroes[name];
            if(hero.mp + mpAmt > 200){
                mpAmt = 200 - hero.mp;
            }
            hero.mp += mpAmt;
            console.log(`${name} recharged for ${mpAmt} MP!`);
        },
        Heal: (heroes, [name, hpAmt]) => {
            hpAmt = Number(hpAmt);
            let hero = heroes[name];
            if(hero.hp + hpAmt > 100){
                hpAmt = 100 - hero.hp;
            }
            hero.hp += hpAmt;
            console.log(`${name} healed for ${hpAmt} HP!`);
        }
    }

    let heroesCount = Number(input.shift());

    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let [name, hp, mp] = input.shift().split(" ");
        heroes[name] = {
            hp: Number(hp),
            mp: Number(mp)
        };
    }
    while(input[0] != 'End'){
        let [command, ...args] = input.shift().split(" - ");
        let action = actions[command];
        action(heroes, args);
    }
    let sorted = Object
        .entries(heroes)
        .sort(compareHeros);

        for(let hero of sorted){
            console.log(hero[0]);
            console.log(`  HP: ${hero[1].hp}`);
            console.log(`  MP: ${hero[1].mp}`);
        }

    function compareHeros(a, b){
        let heroA = a[1];
        let heroB = b[1];
        let result = heroB.hp - heroA.hp;
        if(result == 0){
            result = a[0].localeCompare(b[0]);
        }
        return result;
    }
}
heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ]
  )