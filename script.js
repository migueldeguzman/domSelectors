var button = document.getElementById("enter");
var input = document.getElementById("userinput");
ul = document.querySelector("ul");
function inputLength() {
	return input.value.length;
}	 

function createListELement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function addListAfterClick() {
	if (inputLength()>0){
		createListELement();	
	}
} 

function addListAfterKeypress(event) {
	if (inputLength()>0 && event.keyCode === 13) {
		createListELement();
	}
}

button.addEventListener("click",addListAfterClick); 	
input.addEventListener("keypress", addListAfterKeypress);

console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByClassName("second")[0]);
console.log(document.getElementById("first"));
console.log("querySelector", document.querySelector("li"));
console.log("querySelectorAll", document.querySelectorAll("li"));
console.log("getAttribute", document.querySelector("li").getAttribute("random"));
console.log("setAttribute to 1000", document.querySelector("li").setAttribute("random", "1000"));
console.log("querySelector", document.querySelector("li"));

//changingstyles, ALWAYS store on variables so it will load up once the browser is initiated by the user, 
//the practice is called cache selectors
document.querySelector("h1").style.background = 'yellow';
document.querySelector("li").classList.toggle("done");
document.querySelector("h1").innerHTML = "<strong>New list</strong>";
console.log(document.querySelectorAll("li")[1]);
console.log(document.querySelectorAll("li")[1].parentElement);
console.log(document.querySelectorAll("li")[1].parentElement.parentElement);
console.log(document.querySelectorAll("li")[2].parentElement.parentElement.parentElement);
console.log(document.querySelectorAll("li")[3].parentElement.parentElement.children);
console.log(document.querySelectorAll("li")[1].parentElement.children);
console.log(document.querySelectorAll("li")[1].children);