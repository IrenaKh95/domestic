//Task 1

let string = "345678";
let sumNumbers1 = parseInt(string.substring(0, 3), 10);
let sumNumbers2 = parseInt(string.substring(3), 10);
if (sumNumbers1 === sumNumbers2) {
    console.log("YES")
} else {
    console.log("NO")
};

// Task 2

let n = 1000;
let num = 0;

while (n > 50) {
  n = n / 2;
  num++;
}

console.log("Result:", n);
console.log("Number of iterations:", num); 

//Task 3 

function average(arr) {
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i], 10);
    }
  
    let average = sum / arr.length;
    
    return average;
  }
  
  let arr = ["12", "15", "20", "25", "59", "70"];
  let avg = average(arr);
  console.log("Среднее арифметическое:", avg);
  
  //Task 4

  function insertData(array, index, ...elements) {
    array.splice(index, 0, ...elements);
  }
  let myNumbersArray = [1, 2, 3, 4, 5];
  insertData(myNumbersArray, 3, 'a', 'b', 'c');
  console.log(myNumbersArray);
  
  //Task 5

  function insertElements(array, indexes, elements) {
    for (let i = 0; i < indexes.length; i++) {
      const index = indexes[i];
      const element = elements[i];
      array.splice(index, 0, element);
    }
  }
  
  let myArray = [1, 2, 3, 4, 5];

  let indexesToInsert = [1, 2, 7, 8];
  let elementsToInsert = ['a', 'b', 'c', 'e'];
  
  insertElements(myArray, indexesToInsert, elementsToInsert);
  
  console.log(myArray);

  //Task 6
  
  let arrayToSort = [3, 4, 1, 2, 7, 30, 50];
  console.log(arrayToSort.sort((a,b) => a-b));
  console.log(arrayToSort.sort((a,b) => b-a));