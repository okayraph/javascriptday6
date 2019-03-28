var Library = {
	linebreak:function(noOfBreak = 0){
		document.write("<br/>");
		if(noOfBreak){
			for(var i = 0; i < noOfBreak - 1; ++i)
			document.write("<br/>");
		}
	},
	
	writer:function(content){
		document.write(content);
	}
}