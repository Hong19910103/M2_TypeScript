// Dãy số fibonacci là sau 0,1 số tiếp theo là trổng 2 số liền kề trước đó ;
function showFibonacci(num) {
    var a = 0;
    var b = 1;
    var nextNumber; // tổng 2 số ban đầu a,b: 0,1
    var sum = 1;
    console.log(a);
    console.log(b);
    for (var i = 1; i <= num - 2; i++) {
        nextNumber = a + b;
        console.log(nextNumber);
        sum += nextNumber;
        a = b;
        b = nextNumber;
    }
    return sum;
}
console.log("sum is " + showFibonacci(5));
// showFibonacci(5);
// console.log(showFibonacci(3));
// console.log(showFibonacci(5));
