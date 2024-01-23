let n = 3;
let s = 0;

for (let i = 1; i < n; i++) {
    s += n**2 + (n + 1)**2 + i;
}

console.log(s)