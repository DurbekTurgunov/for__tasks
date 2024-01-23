let n = 8;

for (let i = 1; i <= n; i++) {
    let k = 1;

    for (let j = 1; j <= i; j++) {
        k *= j;
    }

    console.log(k);
}

