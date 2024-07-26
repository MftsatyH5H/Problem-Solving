function veryBigSum(ar) {
    let sum = 0;
    for (const num of ar){
        sum += num;
    }
    return sum;

}
// console.log(veryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));