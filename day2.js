let n = +prompt('input');
let digit = 0;
let sum = 0;
for(let i = 1; i >= n;){
    digit = n % 10;
    sum += digit;
    n /= 10;
}
alert(sum);