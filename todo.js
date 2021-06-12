var button=document.querySelector(".btn");
var task=document.querySelector("#task");

function maker(){

	var text=document.createTextNode(task.value);
	
	if(text.length===0){
		window.alert("Please enter your task");
	}

	if(text.length!==0){
		console.log(text.length);
	
	var ul= document.querySelector(".ul");
	var div=document.createElement("div");
	var liText =document.createElement("div");
	var li=document.createElement("li");
	var delbtn=document.createElement("button");
	var chkbtn =document.createElement("button");

	li.className += "li";
	delbtn.className +="delbtn";
	chkbtn.className +="chkbtn";
	liText.className +="liText";

	liText.appendChild(text);
	li.appendChild(liText);
	div.appendChild(li);
	div.appendChild(chkbtn);
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
		chkDelbtn.className +="CDbtn";
		
		cLi.appendChild(text);
		div.appendChild(cLi);		
		div.appendChild(chkDelbtn);
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
}


button.addEventListener("click", maker);
task.addEventListener("keyup", function(e){
	if(e.keyCode===13){
		maker();
	}
});

