function fatorial(n) {
    let fat = 1;
    for (let i = n; i > 1; i--) {
        fat *= i;
    }
    return fat;
}

console.log(fatorial(5));



function fatorialRecursiva(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorialRecursiva(n - 1);
    }
}

console.log(fatorialRecursiva(5));
