

function operaciones() {
	//alert ('Hola');
	var num1 = document.getElementById(`num2`).value;
	var num2 = document.getElementById(`num1`).value;
    num1=parseInt(num1);
    num2=parseInt(num2);

	if  (num1 < num2){

		alert ('mayor num1');
	}

	else  {
		alert ('mayor num2');
	}
	}