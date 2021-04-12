function polindrom(array){
    let result = "";
    let length = parseInt(array.length / 2);

    for (let nums of array) {
        nums = String(nums)
        for (let i = 0; i <= length; i++) {
            if(nums[i] === nums[nums.length - 1 - i]){
                result = "true"
            }else{
                result = "false"
                break;
            }
        }
        console.log(result);
    }

}
polindrom([32,2,232,1010])