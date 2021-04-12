function softUniKaraoke(input){
    let contestens = input.shift();
    let songsList = input.shift();

    let winers = {
        names: [],
        awards: []
    };

    for (const line of input) {  
        if(line === "dawn"){
            break;
        }
        let [name, song, award] = line.split(", ");
        if(contestens.includes(name) && songsList.includes(song)){
            if(!winers.hasOwnProperty(name)){
                winers.names.push(name) ;
            }
            if(!winers.names.hasOwnProperty(award)){
                winers.awards.push(award);
                
            }
        }
    }
    console.log(winers);
}
softUniKaraoke([
    'Trifon, Vankata, Gesha',
    "Dragana - Kukavice, Bon Jovi - It's my life, Lorde - Royals",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn'
  ]
  );
  console.log("...........................");
softUniKaraoke([
    'Gesha',
    "Bon Jovi - It's my life",
    "Gesha, Bon Jovi - It's my life, Best Rock",
    'Vankata, Dragana - Kukavice, Best Srabsko',
    'Vankata, Dragana - Kukavice, Stiga Tolko Srabsko',
    'Vankata, PHP Web, Educational 101',
    'dawn'
  ]
  );
  console.log("............................");
softUniKaraoke([ 'Sino', 'Vasko Naidenov - Nova Godina', 'dawn' ]);