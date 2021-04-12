function worldTour(input) {
  let originalTrip = input.shift();

  for (const line of input) {
    let [action, firstArg, secondArg] = line.split(":");
    switch (action) {
      case 'Add Stop': 
      let index = Number(firstArg);
      if(index >= 0 && index <= originalTrip.length){
        originalTrip = originalTrip.slice(0, index) + secondArg + originalTrip.slice(index);
        console.log(originalTrip);
        break;
      }
      case "Remove Stop":
        let start = Number(firstArg);
        let end = Number(secondArg);
        if(start >= 0 && start < originalTrip.length && start <= end && end < originalTrip.length && end > 0){
          originalTrip = originalTrip.slice(0, start) + originalTrip.slice(end + 1);
          console.log(originalTrip);
          break;
        }
      case "Switch":
        if(originalTrip.includes(firstArg)){
          originalTrip = originalTrip.split(firstArg).join(secondArg);
        }
        console.log(originalTrip);
        break;
      case "Travel":
        console.log(`Ready for world tour! Planned stops: ${originalTrip}`);
        break;
    }

  }

}
worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel'
])