function battleManager(input){
    let capacity = input.shift();
    let list = {};

    for (const line of input) {
        let [comm, ...args] = line.split("=");
        if(comm === 'Add'){
            if(!list.hasOwnProperty(args[0])){
                list[args[0]] = {
                    send: Number(args[1]),
                    received: Number(args[2]),
                    total: Number(args[1]) + Number(args[2]) 
                }
            }
        }else if(comm === 'Message'){
            if(list.hasOwnProperty(args[0]) && list.hasOwnProperty(args[1])){
                list[args[1]].received += 1;
                list[args[1]].total++;
                list[args[0]].send += 1;
                list[args[0]].total++;
                if(list[args[0]].total >= capacity){
                    delete list[args[0]];
                    console.log(`${args[0]} reached the capacity!`);
                }if(list[args[1]].total >= capacity){
                    delete list[args[1]];
                    console.log(`${args[1]} reached the capacity!`);
                }
            }
        }else if(comm === "Empty"){
            if(args[0] === "All"){
                list = {};
            }else if(list.hasOwnProperty(args[0])){
                delete list[args[0]];
            }
        }else{
            break;
        }
    }
    console.log(`Users count: ${Object.keys(list).length}`);


    let sorted = Object.entries(list).sort((a, b) => 
       b[1].received - a[1].received || a[0].localeCompare(b[0])
       
    );

    sorted.forEach(el => {
        console.log(`${el[0]} - ${el[1].total}`);
    });

}
battleManager([
    '20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
  ]
  
  )