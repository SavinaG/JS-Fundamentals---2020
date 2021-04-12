function coffeeShop(arr) {
 
    let n = arr.shift()
    let current = 0;
    let total = 0
    for (let i = 0; i < n; i++) {
        let pricePerCapsule = arr.shift();
        let daysInMonth = arr.shift();
        let capsulesCount = arr.shift();
        current = ((daysInMonth * capsulesCount) * pricePerCapsule)
        console.log(`The price for the coffee is: $${current.toFixed(2)}`)
        total += current
    }
    console.log(`Total: $${total.toFixed(2)}`)
}
coffeeShop();