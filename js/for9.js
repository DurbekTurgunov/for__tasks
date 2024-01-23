let a = 15;
let s = 1;

for (let i = 0; i <= a; i++) {
    console.log(i**2);
    s *= a;
}

console.log(`The sum is = ${s}`)