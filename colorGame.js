let diff=6;
var colors=createColorArray(diff);
var squares=document.querySelectorAll(".square");
let p=document.querySelector("#display");
let h1=document.querySelector("h1");
let easy=document.querySelector("#easy");
let hard=document.querySelector("#hard");
var resetbutton=document.querySelector("#newColor");
var span=document.querySelector("#correct");
var correctanswer=colors[pickColor(diff)];
span.textContent=" "+correctanswer;


for(var i=0;i<diff;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var correctColor=this.style.backgroundColor;
		if(correctColor===correctanswer){
			for(let j=0;j<diff;j++)
			{
				squares[j].style.background=correctanswer;
			}
			p.textContent="Correct";
			h1.style.backgroundColor= correctanswer;
			resetbutton.textContent="Play Again?"
		}
		else{
			this.style.background="#232323";
			p.textContent="Try Again";
		}
	})
}
easy.addEventListener("click",function(){
	diff=3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors=createColorArray(diff);
	correctanswer=colors[pickColor(diff)];
	h1.style.backgroundColor= "steelblue";
	span.textContent=" "+correctanswer;
	for(var i=3;i<6;i++)
	{
		squares[i].style.display="none";
	}
	for(var i=0;i<diff;i++)
	{
		squares[i].style.background=colors[i];
	}


})
hard.addEventListener("click",function(){
	diff=6;
	colors=createColorArray(diff);
	hard.classList.add("selected");
	easy.classList.remove("selected");
	correctanswer=colors[pickColor(diff)];
	h1.style.backgroundColor= "steelblue";
	span.textContent=" "+correctanswer;
	for(var i=3;i<6;i++)
	{
		squares[i].style.display="block";
	}
	for(var i=0;i<diff;i++)
	{
		squares[i].style.background=colors[i];
	}

})
resetbutton.addEventListener("click",function(){
	resetbutton.textContent="New Colors";
	p.textContent=" ";
	h1.style.backgroundColor= "steelblue";
	colors=createColorArray(diff);
	correctanswer=colors[pickColor(diff)];
	span.textContent=" "+correctanswer;
	for(var i=0;i<diff;i++)
	{
		squares[i].style.background=colors[i];
	}
})
function pickColor(num){
	var pickedColor=Math.floor(Math.random()*num)
	return pickedColor;
}
function createColorArray(number){
	var generate=[];
	for(var i=0;i<number;i++)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		generate[i]="rgb("+r+", "+g+", "+b+")";
	}
		for(var i=0;i<6;i++)
	/*{
		console.log(generate[i]);
			}*/
	return generate;
}

