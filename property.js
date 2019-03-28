var property = {
	ikoyi:[
		'ikoyi.png', 
		"Ikoyi ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 	dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.",
		'alabi10@yahoo.com',
		'08034265103'],
		
		ikejaGra:[
		'ikeja-gra.png', 
		"Ikeja GRA ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 	dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.",
		'adebayo@yahoo.com',
		'08034265104'],
		
		lekkiPhaseOne:[
		'lekki-phase-one.png', 
		"Lekki Phase One ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 	dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.",
		'lekkiphaseone@yahoo.com',
		'08034265105'],
		
		bananaIsland:[
		'banana-island.png', 
		"Banana Island ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et 	dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollitanim id est laborum.",
		'bananaisland@yahoo.com',
		'08034265106']
}

$("#banana-island").click(
	function(){
		$("#propertyImage").html("<img src='property/"+property.bananaIsland[0]+"'/>").fadeIn('slow');
		$("#property-description").html("<p>"+property.bananaIsland[1]+"</p>");
		$("#propertyEmail").html("<a href='mailto:"+property.bananaIsland[2]+"'><button id='email'>mail "+property.bananaIsland[2]+"</button></a>");
		$("#propertyPhone").html("<a href='tel:"+property.bananaIsland[3]+"'><button id='email''>call "+property.bananaIsland[3]+"</button></a>");
});

$("#ikoyi").click(
	function(){
		$("#propertyImage").html("<img src='property/"+property.ikoyi[0]+"'/>");
		$("#property-description").html("<p>"+property.ikoyi[1]+"</p>");
		$("#propertyEmail").html("<a href='mailto:"+property.ikoyi[2]+"'><button id='email'>mail "+property.ikoyi[2]+"</button></a>");
		$("#propertyPhone").html("<a href='tel:"+property.ikoyi[3]+"'><button id='email''>call "+property.ikoyi[3]+"</button></a>");
});

$("#ikeja-gra").click(
	function(){
		$("#propertyImage").html("<img src='property/"+property.ikejaGra[0]+"'/>");
		$("#property-description").html("<p>"+property.ikejaGra[1]+"</p>");
		$("#propertyEmail").html("<a href='mailto:"+property.ikejaGra[2]+"'><button id='email'>mail "+property.ikejaGra[2]+"</button></a>");
		$("#propertyPhone").html("<a href='tel:"+property.ikejaGra[3]+"'><button id='email''>call "+property.ikejaGra[3]+"</button></a>");
});

$("#lekki-phase-one").click(
	function(){
		$("#propertyImage").html("<img src='property/"+property.lekkiPhaseOne[0]+"'/>");
		$("#property-description").html("<p>"+property.lekkiPhaseOne[1]+"</p>");
		$("#propertyEmail").html("<a href='mailto:"+property.lekkiPhaseOne[2]+"'><button id='email'>mail "+property.lekkiPhaseOne[2]+"</button></a>");
		$("#propertyPhone").html("<a href='tel:"+property.lekkiPhaseOne[3]+"'><button id='email''>call "+property.lekkiPhaseOne[3]+"</button></a>");
});
