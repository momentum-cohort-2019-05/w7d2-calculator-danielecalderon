window.onload = function (){
	let button = document.getElementsByTagName("button");
	let display = document.querySelectorAll(' p')[0];
	let clear =   document.getElementsByClassName('clear')[0];
	
	for(var i=0; i<button.length; i+=1){
		  if(button[i].innerHTML === '='){
            button[i].addEventListener("click", calculate(i));
		  }else{
			   button[i].addEventListener("click", operations(i));
		  }
	}
	

	
	
	function operations (i){
		return function(){
			if (button[i].innerHTML === "÷") {
               display.innerHTML  +=  "/ " ;
      }else if(button[i].innerHTML === "x"){
			      display.innerHTML += "*";
		   } else{
			   display.innerHTML  += button[i].innerHTML;
		   }
	  };
   }
 


   clear.onclick = function () {
    display.innerHTML = '';
  }; 

 function calculate(i) {
    return function () {
        display.innerHTML = eval(display.innerHTML);
    };
  }
};