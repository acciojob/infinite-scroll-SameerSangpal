//your code here!
const list = document.getElementById("infi-list");
let count = 1;

function addListItems(num){
	for(let i = 0; i < num; i++){
		const li = document.createElement("li");
		li.textContent = `Item ${count++}`;
		list.appendChild(li);
	}
}
addListItems(10);
list.addEventListener("scroll", function(){
	if(list.scrollTop + list.clientHeight >= list.scrollHeight){
		addListItems(2);
	}
});
