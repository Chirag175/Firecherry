/* The custom.js is a Javascript file created specifically for firecherry.html in order to carry out 
certain tasks such as validation and updation of HTML elements and every function has been commented
with it's description. */

/* The function 'update()' takes two arguments namely 'product' and 'shade' passed on during the
function call which is used to determine the information which is going to be updated in the 
'selected/non-selected card' and is called by the 'Price buttons' (class="btn btn-outline-success")
when clicked(onclick). */
function update(product, shade){
	document.getElementById('sel').innerHTML = " Selected";
	if(product == 'fxtreme'){
		document.getElementById('product').value = "fxtreme";
		document.getElementById('simg').src = "images/1.png";
		document.getElementById('stitle1').innerHTML = "Firecherry Xtreme";
		document.getElementById('sprice').innerHTML = "AUD 1200";
	}
	else
	if(product == 'fxtremeplus'){
		document.getElementById('product').value = "fxtremeplus";
		document.getElementById('simg').src = "images/2.jpg";
		document.getElementById('stitle1').innerHTML = "Firecherry Xtreme Plus";
		document.getElementById('sprice').innerHTML = "AUD 1500";
	}
	else
	if(product == 'elegantone'){
		document.getElementById('product').value = "elegantone";
		document.getElementById('simg').src = "images/3.jpg";
		document.getElementById('stitle1').innerHTML = "Elegant One";
		document.getElementById('sprice').innerHTML = "AUD 1000";
	}
	else
	if(product == 'elegantones'){
		document.getElementById('product').value = "elegantones";
		document.getElementById('simg').src = "images/4.jpg";
		document.getElementById('stitle1').innerHTML = "Elegant One S";
		document.getElementById('sprice').innerHTML = "AUD 800";
	}
	else
	if(product == 'alphax'){
		document.getElementById('product').value = "alphax";
		document.getElementById('simg').src = "images/5.png";
		document.getElementById('stitle1').innerHTML = "Alpha X";
		document.getElementById('sprice').innerHTML = "AUD 500";
	}
	else
	if(product == 'fnano'){
		document.getElementById('product').value = "fnano";
		document.getElementById('simg').src = "images/6.jpg";
		document.getElementById('stitle1').innerHTML = "Firecherry Nano";
		document.getElementById('sprice').innerHTML = "AUD 400";
	}
	else
	if(product == 'fnanos'){
		document.getElementById('product').value = "fnanos";
		document.getElementById('simg').src = "images/7.png";
		document.getElementById('stitle1').innerHTML = "Firecherry Nano S";
		document.getElementById('sprice').innerHTML = "AUD 300";
	}
	else
	if(product == 'jugnaut'){
		document.getElementById('product').value = "jugnaut";
		document.getElementById('simg').src = "images/8.jpg";
		document.getElementById('stitle1').innerHTML = "Juggernaut";
		document.getElementById('sprice').innerHTML = "AUD 1800";
	}
	else
	if(product == 'jugnautmini'){
		document.getElementById('product').value = "jugnautmini";
		document.getElementById('simg').src = "images/9.jpg";
		document.getElementById('stitle1').innerHTML = "Juggernaut Mini";
		document.getElementById('sprice').innerHTML = "AUD 1600";
	}

	if(shade == 'vb'){
		document.getElementById('shade').value = "vb";
		document.getElementById('stitle2').innerHTML = "Void Black";
	}
	else
	if (shade == 'fw'){
		document.getElementById('shade').value = "fw";
		document.getElementById('stitle2').innerHTML = "Frost White";
	}
	else
	if (shade == 'cg'){
		document.getElementById('shade').value = "cg";
		document.getElementById('stitle2').innerHTML = "Carbon Grey";
	}
	else
	if (shade == 'mb'){
		document.getElementById('shade').value = "mb";
		document.getElementById('stitle2').innerHTML = "Mediterranean Blue";
	}
	else
	if (shade == 'rp'){
		document.getElementById('shade').value = "rp";
		document.getElementById('stitle2').innerHTML = "Rose Pink";
	}
}

/* The function 'upd()' performs the same task as update() but instead, it is called when the values
of the dropdown boxes 'Product' and 'Shade' changes(onchange) and it takes option(opt) as argument
to decide what changes have to be updated. */
function upd(opt){
	var product = document.getElementById('product').value;
	var shade = document.getElementById('shade').value;
	if(opt == 1){
		document.getElementById('sel').innerHTML = " Selected";
		if(product == 'fxtreme'){
			document.getElementById('simg').src = "images/1.png";
			document.getElementById('stitle1').innerHTML = "Firecherry Xtreme";
			document.getElementById('sprice').innerHTML = "AUD 1200";
		}
		else
		if(product == 'fxtremeplus'){
			document.getElementById('simg').src = "images/2.jpg";
			document.getElementById('stitle1').innerHTML = "Firecherry Xtreme Plus";
			document.getElementById('sprice').innerHTML = "AUD 1500";
		}
		else
		if(product == 'elegantone'){
			document.getElementById('simg').src = "images/3.jpg";
			document.getElementById('stitle1').innerHTML = "Elegant One";
			document.getElementById('sprice').innerHTML = "AUD 1000";
		}
		else
		if(product == 'elegantones'){
			document.getElementById('simg').src = "images/4.jpg";
			document.getElementById('stitle1').innerHTML = "Elegant One S";
			document.getElementById('sprice').innerHTML = "AUD 800";			
		}
		else
		if(product == 'alphax'){
			document.getElementById('simg').src = "images/5.png";
			document.getElementById('stitle1').innerHTML = "Alpha X";
			document.getElementById('sprice').innerHTML = "AUD 500";
		}
		else
		if(product == 'fnano'){
			document.getElementById('simg').src = "images/6.jpg";
			document.getElementById('stitle1').innerHTML = "Firecherry Nano";
			document.getElementById('sprice').innerHTML = "AUD 400";
		}
		else
		if(product == 'fnanos'){
			document.getElementById('simg').src = "images/7.png";
			document.getElementById('stitle1').innerHTML = "Firecherry Nano S";
			document.getElementById('sprice').innerHTML = "AUD 300";
		}
		else
		if(product == 'jugnaut'){
			document.getElementById('simg').src = "images/8.jpg";
			document.getElementById('stitle1').innerHTML = "Juggernaut";
			document.getElementById('sprice').innerHTML = "AUD 1800";
		}
		else
		if(product == 'jugnautmini'){
			document.getElementById('simg').src = "images/9.jpg";
			document.getElementById('stitle1').innerHTML = "Juggernaut Mini";
			document.getElementById('sprice').innerHTML = "AUD 1600";
		}
		else
		if(product == ''){
			document.getElementById('sel').innerHTML = " Not Selected";
			document.getElementById('simg').src = "images/cross.jpg";
			document.getElementById('stitle1').innerHTML = "Product";
			document.getElementById('sprice').innerHTML = "AUD";
		}
	}
	else
	if(opt == 2){
		if(shade == 'vb'){
			document.getElementById('stitle2').innerHTML = "Void Black";
		}
		else
		if (shade == 'fw'){
			document.getElementById('stitle2').innerHTML = "Frost White";
		}
		else
		if (shade == 'cg'){
			document.getElementById('stitle2').innerHTML = "Carbon Grey";
		}
		else
		if (shade == 'mb'){
			document.getElementById('stitle2').innerHTML = "Mediterranean Blue";
		}
		else
		if (shade == 'rp'){
			document.getElementById('stitle2').innerHTML = "Rose Pink";
		}
		else
		if (shade == ''){
			document.getElementById('stitle2').innerHTML = "Shade";
		}
	}
}

/* The function 'validation()' performs validation tasks on the 'Order Form' to ensure that all the
data fields are entered when the form is submitted / the submit button is clicked(onclick) to 
prevent insufficient and/or invalid data to be passed. */
function validation(){
	var fname = document.getElementById('fname').value;
	if(fname == ''){
		alert("Please enter your first name into the field");
		return false;
	}
	var lname = document.getElementById('lname').value;
	if(lname == ''){
		alert("Please enter your last name into the field");
		return false;
	}
	var phoneno = document.getElementById('phoneno').value;
	if(phoneno == ''){
		alert("Please enter your phone number into the field");
		return false;
	}
	var email = document.getElementById('email').value;
	if(email == ''){
		alert("Please enter your email id into the field");
		return false;
	}
	var street1 = document.getElementById('street1').value;
	if(street1 == ''){
		alert("Please enter your street address into the field");
		return false;
	}
	var street2 = document.getElementById('street2').value;
	if(street2 == ''){
		alert("Please enter your street address into the field");
		return false;
	}
	var city = document.getElementById('city').value;
	if(city == ''){
		alert("Please enter your city name into the field");
		return false;
	}
	var state = document.getElementById('state').value;
	if(state == ''){
		alert("Please select your state");
		return false;
	}
	var postcode = document.getElementById('postcode').value;
	if(postcode == ''){
		alert("Please enter your postal address code into the field");
		return false;
	}
	var product = document.getElementById('product').value;
	if(product == ''){
		alert("Please select the product of your choice");
		return false;
	}
	var shade = document.getElementById('shade').value;
	if(shade == ''){
		alert("Please select the shade of your choice");
		return false;
	}
}
/* END OF DOCUMENT */