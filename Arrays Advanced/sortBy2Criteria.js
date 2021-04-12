function sortBy2Criteria(array){

    array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    

    console.log(array.join("\n"));

}
sortBy2Criteria(["alpha", "beta", "gamma"])