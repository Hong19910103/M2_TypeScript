let number: number[] = [0, 1, 2, 3, 5, 6, 7, 9, 10];
let arr: number[] = [];
function putNumber() {
    for (let i = 0; i < 11; i++) {
        if(number.indexOf(i)===-1){
         arr.push(i)   ;
        }
    }
    return arr;
}

console.log(putNumber());