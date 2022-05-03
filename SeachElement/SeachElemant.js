var number = [0, 1, 2, 3, 5, 6, 7, 9, 10];
var arr = [];
// let i: number = 0;
function putNumber() {
    // while(i<11){
    //     if(number[i]!==i){
    //         arr.push(i);
    //         i++
    //     }else {
    //         i++
    //     }
    //
    // }
    // return arr;
    for (var i = 0; i < 11; i++) {
        if (number.indexOf(i) === -1) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(putNumber());
