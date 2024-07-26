function compareTriplets(a, b) {
    let alice = 0
    let bob = 0
    for (let i = 0; i < 3; i++){
        if(a[i] > b[i]) {
            alice++;
        }

        if(b[i] > a[i]) {
            bob++;
        }
    }
    return [alice, bob]
}

// console.log(compareTriplets([1,12,3], [9,6,5]))