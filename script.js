// Loop che genere numeri partendo da 1 fino a 100
for (let i = 1; i <= 100; i++) {
    // Se il numero è multiplo sia di 3 che di 5, stampa "FizzBuzz"
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Se il numero è multiplo solo di 3, stampa "Fizz"
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // Se il numero è multiplo solo di 5, stampa "Buzz"
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // Altrimenti, stampa il numero del ciclo
    else {
        console.log(i);
    }
}
