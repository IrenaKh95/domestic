//1) Выполнить сложение различных типов:
//(string+boolean)

let string = "Hello IT Academy! ";
let boolean = true;
let result = string + boolean;
console.log(result);

//(string+number)
let string2 = "How many guests in the house? "
let number = 10;
let result2 = string2 + number;
console.log(result2);

//(number+boolean)
let number2 = 123;
let boolean2 = true;
let result3 = number2 + boolean2; 
console.log(result3);

//2) Выполнить умножение различных типов
//(string * boolean) 
let string3 = '98';
let boolean3 = false;
console.log (string3 * boolean3);

//(string * number)
let string4 = '6';
let number3  = 6;
console.log(string4 * number3);

//(number * boolean)
let number4 = 90;
let boolean4 = true;
console.log (number4 * boolean4);

//3) Выполнить деление различных типов
//(string/boolean) 
let string5 = '90';
let boolean5 = false;
console.log(string5 / boolean5);

let string6 = '90';
let boolean6 = true;
console.log(string6 / boolean6);

//(string/number)
let string7 = '90';
let number5 = 10;
console.log(string7 / number5);

//(number/Boolean)
let number6 = 90;
console.log (number6 / boolean4);

//4) Выполнить явное преобразование 
//(number)
let string8 = '678';
let num = Number(string8)
console.log(num);

//(string)
let number7 = 666;
let string9 = String(number7);
console.log(string9);

//(boolean)
let string10 = "Преобразуй меня в boolean";
let boolean7 = Boolean(string10);
console.log(boolean7);

let string11 = "";
let boolean8 = Boolean(string11);
console.log(boolean8);

let number8 = 0;
let boolean9 = Boolean(number8);
console.log(boolean9);