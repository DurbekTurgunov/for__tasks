let n = 3;
let s = 0;

for (let i = 1.1; i < n; i += 0.1) {
    console.log(i);
    n *= i;
}

console.log(n)