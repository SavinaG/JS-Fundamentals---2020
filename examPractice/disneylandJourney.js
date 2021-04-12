function disneylandJourney(input){
   let price = Number(input[0]);
   let mounts = Number(input[1]);
   let money = 0;

   for (let i = 1; i <= mounts; i++) {
       if(i % 2 !== 0 && i !== 1){
           money -= money * 0.16;
        }else if(i % 4 === 0){
            money += money * 0.25;
        }
        money += price * 0.25;
       
   }
   if(money >= price){
       console.log(`Bravo! You can go to Disneyland and you will have ${(money - price).toFixed(2)}lv. for souvenirs.`);
   }
   else{
       console.log(`Sorry. You need ${(price - money).toFixed(2)}lv. more.`);
   }
}

disneylandJourney([ '1000', '4' ])