function plusMinus(arr) {
    let minusNums = 0;
    let positiveNums = 0;
    let zeros = 0;
    for(const i of arr){
        if(i > 0){
            positiveNums += 1
        }
        if(i < 0){
            minusNums += 1
        }
        if(i === 0){
            zeros += 1
        }
    }
    console.log(positiveNums/arr.length + "\n" + minusNums/arr.length + "\n" + zeros/arr.length + "\n")
}
plusMinus([1,1,0,-1,-1])