var button=document.querySelector(".btn");
var task=document.querySelector("#task");

function maker(){

	var ul= document.querySelector(".ul");
	var div=document.createElement("div");
	var li=document.createElement("li");
	var delbtn=document.createElement("button");
	var chkbtn =document.createElement("button");
	var text=document.createTextNode(task.value);

	li.className += "li";
	delbtn.className +="delbtn";
	chkbtn.className +="chkbtn";

	li.appendChild(text);
	div.appendChild(chkbtn);
	div.appendChild(li);
	div.appendChild(delbtn);
	ul.appendChild(div);
	
	task.value="";
	
	delbtn.addEventListener("click", function(e){
		li.remove();
		delbtn.remove();
		chkbtn.remove();
	})

	chkbtn.addEventListener("click", function(e){
		var cUl=document.querySelector(".C-ul");
		var cLi=document.createElement("li");
		var div=document.createElement("div");
		var chkDelbtn=document.createElement("button");
		
		cLi.className +="C-li";	
		
		cLi.appendChild(text);
		div.appendChild(chkDelbtn);
		div.appendChild(cLi);
		cUl.appendChild(div);

		li.remove();
		delbtn.remove();
		chkbtn.remove();

		chkDelbtn.addEventListener("click", function(e){
		cLi.remove();
		chkDelbtn.remove();	
		})


	})
}

button.addEventListener("click", maker);
task.addEventListener("keyup", function(e){
	if(e.keyCode===13){
		maker();
	}
});

