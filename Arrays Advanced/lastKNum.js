function lastKNum(n, k){
    let result = [1];

    for (let i = 1; i < n; i++) {
        let lastK = result.slice(-k);
        let sum = 0;
        for (let nums of lastK) {
            sum += nums;
        }
        result.push(sum);
    }
    console.log(result.join(" "));
}
lastKNum(6, 3)