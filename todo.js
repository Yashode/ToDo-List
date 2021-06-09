var button=document.querySelector(".btn");
var task=document.querySelector("#task");

function maker(){

	var ul= document.querySelector(".ul");
	var li=document.createElement("li");
	var delbtn=document.createElement("button");

	li.className += "li";
	delbtn.className +="delbtn";
	var text=document.createTextNode(task.value);
	li.appendChild(text);
	li.appendChild(delbtn);
	ul.appendChild(li);
	task.value="";
	
	delbtn.addEventListener("click", function(e){
		li.remove();
		delbtn.remove();
	})
}

button.addEventListener("click", maker);
task.addEventListener("keyup", function(e){
	if(e.keyCode===13){
		maker();
	}
});

