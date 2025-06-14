//your JS code here. If required.
let para = document.querySelector(".counter");
let ibtn = document.querySelector(".incrementBtn");
function fun(){
	let count = parseInt(para.innerText)+1;
	para.innerText = count;
}
ibtn.addEventListener("click",fun);