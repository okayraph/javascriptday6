$("#dice").click(function(){ 
	var diceFace = Math.ceil(Math.random()*6);
	
	if(diceFace == 1)	$("#diceHolder").html("<img src='dice/one.png'>");
	if(diceFace == 2)	$("#diceHolder").html("<img src='dice/two.png'>");
	if(diceFace == 3)	$("#diceHolder").html("<img src='dice/three.png'>");
	if(diceFace == 4)	$("#diceHolder").html("<img src='dice/four.png'>");
	if(diceFace == 5)	$("#diceHolder").html("<img src='dice/five.png'>");
	if(diceFace == 6)	$("#diceHolder").html("<img src='dice/six.png'>");
	
});
