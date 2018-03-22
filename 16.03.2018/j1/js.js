/*num1*/
/*
var num = 1000, i = 0;
while(num>50){
	num /=2;
	i++;
}
console.log(num, i);*/




/*num2*/
// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// var recognition = new SpeechRecognition();
// recognition.interimResults = true:
// var p = document.createElement("p");
// var words = document.querySelector(".words");
// words.appendChild(p);

// recognition.addEventListener("result", function (e) {
// 	p.textContent = Array.from(e.results)
// 		.map(function(result) {
// 			return result[0];
// 		})
// 		.map(function (result) {
// 			return result.transcript
// 		}) .join("");
// 		// console.log(transcript);
// 		if(e.results[0].isFinal){
// 			p = document.createElement("p");
// 			words.appendChild(p);
// 		}
// });

// recognition.addEventListener("end", recognition.start);
// recognition.start();





/*num3*/
function palindrome(str){
	return str.toLowerCase === str.split("").reverse().join("").toLowerCase();
}
console.log(palindrome("eye"));

/*num4*/
function boo (bool){
	return typeof bool === "boolean";
}

console.log(boo(true));