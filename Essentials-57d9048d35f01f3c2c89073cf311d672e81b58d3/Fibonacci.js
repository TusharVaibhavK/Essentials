function fibonacci(n) {
    let fib = [0, 1]; // Starting values for Fibonacci series

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Sum of two previous numbers
    }

    return fib; // Return the sequence
}

console.log(fibonacci(10)); // Prints first 10 Fibonacci numbers