function staircase(n) {
    let stair = []
    for(let i = 0; i < n; i++){
        stair.push(' ');
    }
    for(let i = 0; i < n; i++){
        stair[n - 1 - i] = '#'
        console.log(stair.toString().replaceAll(',',''));
    }
}
// staircase(6);