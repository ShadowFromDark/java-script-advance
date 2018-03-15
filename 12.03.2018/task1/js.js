/*
методами
split (вернули масив "h" "e" "l" "l" "o"),
revers (развернули масив(поменяли порядок элементов массива) "o" "l" "l" "e" "h"),
join (обединили все елементы в строку "olleh")
делаем задание
 */
var a = prompt("hello")
	function reverseString(){
		return a.split("").reverse().join("");
	}

	alert(reverseString(a));



/*
return - возврат значения, находиться где угодно, но как только доходим до return функция завершаеться
если число от пользователя (num) 0 — выводим 1, в других случаях начинаем запись в стек с конца (num=5, num=4, num=3, num=2, num=1, num=0 (тоесть повторяем цикл столько раз, сколько захотел пользователь (поворение цикла == итерация))) и выводим через алерт наше число
*/

	var num = prompt("number")
	function factorialize(num) {
		if (num == 0){
		return 1;
		}
		else{
		return num * factorialize(num-1);
		}
	}

	alert(factorialize(num));