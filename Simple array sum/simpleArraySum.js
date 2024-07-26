function veryBigSum(ar) {
    let sum = 0;
    for (const num of ar){
        sum += num;
    }
    return sum;

}
console.log(veryBigSum([1,2,3]));