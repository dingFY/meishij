function id(ID){
		return document.getElementById(ID);
	}
function tag(name,father){
		father= father||document;
		return father.getElementsByTagName(name);
	}