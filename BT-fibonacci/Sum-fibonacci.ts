
// Dãy số fibonacci là sau 0,1 số tiếp theo là trổng 2 số liền kề trước đó ;
function showFibonacci(num:number):number{
    let a: number = 0;
    let b: number = 1;
    let nextNumber: number ;// tổng 2 số ban đầu a,b: 0,1
    let sum:number = 1;
    console.log(a)
    console.log(b)
    for (let i =1 ; i <= num-2; i++) {
        nextNumber = a+ b;
        console.log(nextNumber);
        sum+=nextNumber;
        a=b;
        b=nextNumber;
    }
    return sum
}

console.log(`sum is `+showFibonacci(5));
// showFibonacci(5);
// console.log(showFibonacci(3));
// console.log(showFibonacci(5));
