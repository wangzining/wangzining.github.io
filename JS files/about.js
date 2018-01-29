var count = 0;
function displayLinkin() {
	var link = document.createElement('a');
    //document.getElementById("LinkedinWebpage").innerHTML = "https://www.linkedin.com/in/wangzining43/";
    link.innerHTML = "https://www.linkedin.com/in/wangzining43/";
    link.href = "https://www.linkedin.com/in/wangzining43/";
    if(count == 0){
    	document.getElementById("LinkedinWebpage").appendChild(link);
    	count = 1;
    }
    
    
	// var linkText = document.createTextNode("my title text");
	// link.appendChild(linkText);
	// link.title = "my title text";
	// link.href = "https://www.linkedin.com/in/wangzining43/";
	// document.body.appendChild(lik);
}