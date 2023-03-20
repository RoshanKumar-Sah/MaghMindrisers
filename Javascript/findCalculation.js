function findCalculation(multiplier, intial_multiplicand, upto_multiplicand) {
    for (multiplicand = intial_multiplicand; multiplicand <= upto_multiplicand; multiplicand++) {
        let product = multiplier * multiplicand
        console.log(`${multiplier} x ${multiplicand} = ${product}`);
        
    }
    console.log("---------------------");
}



findCalculation(8, 1, 20)
findCalculation(5, 1, 15)


