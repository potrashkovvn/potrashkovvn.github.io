var asdf = 1;
function showTV(){
	asdf++;
	if(asdf%2 == 0) {
		document.getElementsByClassName("offTV")[0].style.display= "none";
		document.getElementsByClassName("on_off")[0].style.background = "#67E300";
		timerId = window.setInterval(carousel, 1000);  
		function carousel() {
		console.log(asdf+1);
		var i;
		var x = document.getElementsByClassName("mySlides");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		if (myIndex > x.length) {myIndex = 1}    
		x[myIndex-1].style.display = "block";   
		}
	}
	else{
		document.getElementsByClassName("offTV")[0].style.display= "block";
		document.getElementsByClassName("on_off")[0].style.background = "#E40045";
		window.clearInterval(timerId);
	}
}
var myIndex = 0,
bgc = document.getElementsByClassName("on_off")[0].style.background;

function ShowMe() {
		var ea=document.getElementsByName('lockb')[1];
   		var rad=document.getElementsByName('navig');
  		for (var j=0; j < rad.length; j++) {

            console.log(j);
        if (rad[j].checked && ea.checked == false) {
            document.getElementsByClassName("Me")[j].style.display = "block";
            console.log(j);
        }
        else{
        	document.getElementsByClassName("Me")[j].style.display = "none";
        }
    }
}