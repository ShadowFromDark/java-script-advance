/*Vitalii Telychko, [19.03.18 10:45]
1. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.*/
var arr = [12, 15, 20, 25, 59, 79], sum = 0, i = 0, len = arr.length;
for (i; i<len; i +=1){
	sum += arr[i]/len;
} 
console.log(sum);
console.log("********************************************");

/*Vitalii Telychko, [19.03.18 10:48]
2. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел
Метод Math.sqrt() возвращает квадратный корень числа*/
var arr = [12, 15, 20, -25, -59, -79], numPositive = [], i = 0, len = arr.length;
for (i; i<len; i+=1){
	if(arr[i]>0){
		numPositive.push(arr[i]);
		console.log(arr[i]+Math.sqrt(numPositive[i]));
	}
}
console.log("********************************************")

// Vitalii Telychko, [20.03.18 13:43]
// 1. Return Largest Numbers in Arrays Complete (Freecodecamp)
function largestNumber(arr) {
	var res = [], len = arr.length, i = 0;
	for(i; i<len; i+=1){
		res.push(Math.max.apply(Math, arr[i]));
	}
	return res;
}
console.log(largestNumber([[12, 15, 20, 25, 59, 79], [12, 15, 20, 25, 59],[12, 15, 20, 25]]));
console.log("********************************************")

// Vitalii Telychko, [20.03.18 13:43]
// 2. Confirm the Ending Complete (Freecodecamp)
function confirmEnding(str, target) {
	var i = target.length;
	if(str.slice(-i) === target) {
		return true;
	}else {
		return false;
	}
}
console.log(confirmEnding("qqqa", "q"));
console.log(confirmEnding("qqqb", "qb"));
console.log(confirmEnding("qqqab", "baq"));
console.log(confirmEnding("qqqq", "q"));
console.log("********************************************")

// Vitalii Telychko, [20.03.18 13:44]
// 3. Сделайте функцию, которая считает и выводит количество своих вызовов.
// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4
var counter = 0;
function count() {
	console.log(++counter);
	}
count();
count();
count();
count();


// Vitalii Telychko, [20.03.18 13:45]
// 4. Прочтитать что означает числа Фибоначчи. Написать на Javascript. Использовать цикл.
function fibonacchi(num) {
var sumFibonacci, numberOne, numberTwo, newArr = [], counter = 0, i;
for (i = 1; i <= num; i++) {
	sumFibonacci = numberOne + numberTwo || 1;
	numberOne = numberTwo;
	numberTwo = sumFibonacci;
	newArr.push(sumFibonacci);
	counter++;
	}
	console.log(newArr);
	console.log("Итераций " + counter);
}
fibonacchi(10);
console.log("********************************************")

// Vitalii Telychko, [19.03.18 22:32]
// Сегодня были проблемы с камерой и записать не удалось. Извини. Говорили про замыкание. Ознакомься  самостоятельно - будут вопросы - пиши. https://learn.javascript.ru/functions-closures

