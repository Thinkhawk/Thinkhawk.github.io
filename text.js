function openNav() {
     document.getElementById("mySidenav").style.width = "400px";
}
openNav();

function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
}
closeNav();

function done(){
	alert("Your details have been submitted. We will contact you in the following days. Thank you.");
}




function newevent() {
	var mail = document.getElementById("mail");
	mail.style.right="120px";
	mail.style.visibility="visible";
	mail.style.transition="1s";
	mail.style.height="20px";
	mail.style.padding="10px";
	mail.style.width="280px";

	var notify = document.getElementById("notify");
	notify.style.visibility="visible";
	notify.style.right="35px";
	notify.style.transition="1s";
	notify.style.height="38px";
	notify.style.width="80px";

	var close = document.getElementById("close");
	close.style.visibility="visible";
	close.style.right="15px";
	close.style.transition="1s";
}

function notify() {
	var mail = document.getElementById("mail");
	mail.style.right="-500px";
	mail.style.visibility="visible";
	mail.style.transition="1s";
	mail.value=" ";
	mail.style.height="0px";
	mail.style.padding="0px";
	mail.style.width="0px";

	var notify = document.getElementById("notify");
	notify.style.visibility="visible";
	notify.style.right="-500px";
	notify.style.transition="1s";
	notify.style.height="0px";
	notify.style.width="0px";

	var close = document.getElementById("close");
	close.style.visibility="visible";
	close.style.right="-500px";
	close.style.transition="1s";

	var confirmation = document.getElementById("confirmation");
	confirmation.style.top="115px";
	confirmation.style.transition="2s";

	var popup1 = document.getElementById("popup1");
	popup1.style.right="35px";
	popup1.style.transition="4s";
	popup1.style.height="70px";
	popup1.style.padding="5px";
	popup1.style.width="400px";
	popup1.style.paddingTop="15px";
	popup1.style.fontSize="13px";
	popup1.addEventListener("mouseover",function hoverIn(){
		popup1.style.backgroundColor="black";
		popup1.style.color="#24B9B2";
		popup1.style.transition=".3s";
		popup1.style.paddingTop="5px";

	});
	popup1.addEventListener("mouseout",function hoverOut(){
		popup1.style.backgroundColor="white";
		popup1.style.color="#173266";
		popup1.style.transition=".3s";
		popup1.style.paddingTop="15px";

	});
	popup1.addEventListener("click",function popclick1(){
		popup1.style.right="-500px";
		popup2.style.top="220px";
		popup3.style.top="340px";
		popclose1.style.right="-500px";
		popclose2.style.top="200px";
		popclose3.style.top="320px";
		popup1.style.transition="1s";
		popup2.style.transition="1s";
		popup3.style.transition="1s";
		popclose1.style.transition="1s";
		popclose2.style.transition="1s";
		popclose3.style.transition="1s";
	})

	var popup2 = document.getElementById("popup2");
	popup2.style.right="35px";
	popup2.style.transition="3.5s";
	popup2.style.height="70px";
	popup2.style.padding="5px";
	popup2.style.width="400px";
	popup2.style.paddingTop="15px";
	popup2.style.fontSize="13px";
	popup2.style.top="340px";
	popup2.addEventListener("mouseover",function hoverIn(){
		popup2.style.backgroundColor="black";
		popup2.style.color="#24B9B2";
		popup2.style.transition=".3s";
		popup2.style.paddingTop="5px";

	});
	popup2.addEventListener("mouseout",function hoverOut(){
		popup2.style.backgroundColor="white";
		popup2.style.color="#173266";
		popup2.style.transition=".3s";
		popup2.style.paddingTop="15px";

	});
	popup2.addEventListener("click",function popclick2(){
		popup2.style.right="-500px";
		popup3.style.top="340px";
		popclose2.style.right="-500px";
		popclose3.style.top="320px";
		popup1.style.transition="1s";
		popup2.style.transition="1s";
		popup3.style.transition="1s";
		popclose2.style.transition="1s";
		popclose3.style.transition="1s";		
	})	

	var popup3 = document.getElementById("popup3");
	popup3.style.right="35px";
	popup3.style.transition="3s";
	popup3.style.height="70px";
	popup3.style.padding="5px";
	popup3.style.width="400px";
	popup3.style.paddingTop="15px";
	popup3.style.fontSize="13px";
	popup3.style.top="460px";
	popup3.addEventListener("mouseover",function hoverIn(){
		popup3.style.backgroundColor="black";
		popup3.style.color="#24B9B2";
		popup3.style.transition=".3s";
		popup3.style.paddingTop="5px";

	});
	popup3.addEventListener("mouseout",function hoverOut(){
		popup3.style.backgroundColor="white";
		popup3.style.color="#173266";
		popup3.style.transition=".3s";
		popup3.style.paddingTop="15px";

	});
	popup3.addEventListener("click",function popclick3(){
		popup3.style.right="-500px";
		popclose3.style.right="-500px";
		popup3.style.transition="1s";
		popclose3.style.transition="1s";		
	})

	var popclose1 = document.getElementById("popclose1");
	popclose1.style.right="15px";
	popclose1.style.transition="4s";
	popclose1.addEventListener("click",function closepop1(){
		popup1.style.right="-500px";
		popup2.style.top="220px";
		popup3.style.top="340px";
		popclose1.style.right="-500px";
		popclose2.style.top="200px";
		popclose3.style.top="320px";
		popup1.style.transition="1s";
		popup2.style.transition="1s";
		popup3.style.transition="1s";
		popclose1.style.transition="1s";
		popclose2.style.transition="1s";
		popclose3.style.transition="1s";
	})

	var popclose2 = document.getElementById("popclose2");
	popclose2.style.right="15px";
	popclose2.style.transition="3.5s";
	popclose2.style.top="320px";
	popclose2.addEventListener("click",function closepop2(){
		popup2.style.right="-500px";
		popup3.style.top="340px";
		popclose2.style.right="-500px";
		popclose3.style.top="320px";
		popup1.style.transition="1s";
		popup2.style.transition="1s";
		popup3.style.transition="1s";
		popclose2.style.transition="1s";
		popclose3.style.transition="1s";
	})

	var popclose3 = document.getElementById("popclose3");
	popclose3.style.right="15px";
	popclose3.style.transition="3s";
	popclose3.style.top="440px";
	popclose3.addEventListener("click",function closepop3(){
		popup3.style.right="-500px";
		popclose3.style.right="-500px";
		popup3.style.transition="1s";
		popclose3.style.transition="1s";
	})
}

function hide(){
	var confirmation = document.getElementById("confirmation");
	confirmation.style.top="20px";
	confirmation.style.transition="2s";
}

function close1(){
	var mail = document.getElementById("mail");
	mail.style.visibility="visible";
	mail.style.transition="1s";
	mail.style.right="-500px";
	mail.style.height="0px";
	mail.style.padding="0px";
	mail.style.width="0px";
	mail.value=" ";

	var notify = document.getElementById("notify");
	notify.style.visibility="visible";
	notify.style.right="-500px";
	notify.style.transition="1s";
	notify.style.height="0px";
	notify.style.width="0px";

	var close = document.getElementById("close");
	close.style.visibility="visible";
	close.style.right="-500px";
	close.style.transition="1s";
}

