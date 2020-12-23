function viewList(item) {
	var newitem = document.createElement("li");
	newitem = document.getElementById("list").innerHTML=item;
	
	if (newitem == "")
		alert("Please provide the valid input");
	else
		document.appendChild(newitem);
}

function inputList() {
	
		var x = document.getElementById("input").value;
		console.log("input:"+x);
		viewList(x);
	
}
