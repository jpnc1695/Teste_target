function fibonacci(x){
    const fib = [0,1]

    for (let i = 2; i < x + 4 ; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    if (fib.includes(x) == true ){
        return console.log(`O número ${x} pertence a sequência Fibonacci`)
    }else{
        return console.log(`O número ${x} não pertence a sequência Fibonacci`)
    }
}


console.log(fibonacci(2))
console.log(fibonacci(10))
