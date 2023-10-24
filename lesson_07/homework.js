//Задание 1

let array = [1,2,3,4,5,6];
array.reverse();
console.log(array);

//Задание 2

let array2 = [1,2,3,4,5,65,9698,364,907,785524,3489];
let maxNumber = Math.max(...array2);
console.log("Max number:", maxNumber);

//Задание 3

function generateFibonacciSeries(startIndex, length) {
    let fibonacciSeries = [];
    let a = 0;
    let b = 1;
  
    for (let i = 0; i < startIndex + length; i++) {
      let nextNumber = a + b;
      if (i >= startIndex) {
        fibonacciSeries.push(nextNumber);
      }
  
      a = b;
      b = nextNumber;
    }
  
    return fibonacciSeries;
  }
  
  let startIndex = 1;
  let length = 6;
  
  let fibonacciSeries = generateFibonacciSeries(startIndex, length);
  console.log(fibonacciSeries);
  
  // Задание 4
  
  function countMatchingDigits(number1, number2) {
    let number1Array = Array.from(number1.toString());
    let number2Array = Array.from(number2.toString());
  
    let matchingByValueAndPosition = 0;
    let matchingByValue = 0; 
  
    for (let i = 0; i < 4; i++) {
      if (number1Array[i] === number2Array[i]) {
        matchingByValueAndPosition++;
      } else if (number1Array.includes(number2Array[i])) {
        matchingByValue++;
      }
    }
  
    return {
      matchingByValueAndPosition,
      matchingByValue,
    };
  }
  
  let number1 = 4216;
  let number2 = 6612;
  
  let result = countMatchingDigits(number1, number2);
  console.log("Matching By Value And Position:", result.matchingByValueAndPosition); 
  console.log("Matching By Value:", result.matchingByValue); 
  
  // Задание 5

  let numberArray  = [65,1,6,78,343,567,3,0,66,89];
  numberArray.sort(function (a,b) {
    return a-b;
  })
  console.log(numberArray);


  let numberArray2  = [65,1,6,78,343,567,3,0,66,89];
  numberArray2.sort(function (a,b) {
    return b-a;
  })
  console.log(numberArray2);

  //Задание 6 

  let myArray = [56,2,26,26,26,26,45,45,32,9,5,0,2,5,523,-5,32,45,90,34,90];
  let newArray = new Set(myArray);
  let newNumbers = Array.from(newArray);
  console.log(newNumbers);
