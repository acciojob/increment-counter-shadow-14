//your JS code here. If required.
let para = document.getElementById("counter");
let ibtn = document.getElementById("incrementBtn");
function fun(){
	let count = parseInt(para.innerText);
	alert(count);
	para.innerText = count+1;
}
ibtn.addEventListener("click",fun);