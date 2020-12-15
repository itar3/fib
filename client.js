const button = document.getElementById('button')


fib = (n) => {
    return n< 1 ? 0
           : n<= 2 ? 1
           : fib(n-1) + fib(n-2)    
}


button.addEventListener('click', (e) => {
    const n = document.getElementById('fib').value
    document.getElementById("out").value = fib(n)
})

