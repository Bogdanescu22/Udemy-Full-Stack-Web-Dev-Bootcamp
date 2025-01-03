function fibonacciGenerator(n) {

    var fibonacciSequence = [0, 1];

    if (n === 1) {
        return [0];
    }
    
    if (n === 2) {
        return fibonacciSequence;
    }

    for (var i = 2; i < n; i++) {
        
        var nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }
