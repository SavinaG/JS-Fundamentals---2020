function maxNumber(nums){
    let result = "";

    for(let i = 0; i < nums.length; i++){
        let element = nums[i];
        let isMax = true;
        for(let j = i + 1; j < nums.length; j++){
            let nextElement = nums[j];
            if(element <= nextElement){
                isMax = false;
                break
            }
        }
        if(isMax){
            result += `${element} `
        }
    }
    console.log(result);
}
maxNumber([14, 24, 3, 19, 15, 17])