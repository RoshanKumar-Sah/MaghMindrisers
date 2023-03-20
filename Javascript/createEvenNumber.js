
let generateEvenNumber = (upto) => {
    for (start = 2; start <= upto; (start += 2)) {
        console.log(start);
    }
    console.log("\n");
}

generateEvenNumber(10)
generateEvenNumber(20)


/* 
    TODO: 1
    create a function generateEvenNumber 
    and if we pass an arguement 10,
    then output should be 2, 4, 6, 8 ,10 

*/

function identifyEvenNumber(number) {
    if (typeof (number) == "number") {

        let verified = number % 2 == 0 ? `Yes it is an even number` : `No it is not an even number`
        console.log(verified);

        /*
        if(number%2==0){
        console.log(`Yes it is an even number`);
    }
    else{
        console.log(`Not it is not even number`);
    }
    */

    }
    else {
        console.log(`Provided data is not number`);
    }
}

identifyEvenNumber(2)
identifyEvenNumber(3)
identifyEvenNumber("John")



/* 

    TODO: 2
    create a function identifyEvenNumber
    if we pass an arguement 2, 
    the result should be yes it is an even number

    if we pass an arguement 1, 
    the result should be No it is not an even number

    if we pass an arguement "hello", 
    the result should be the provided data is not an number. 




*/