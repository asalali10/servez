function validateRequiredFields() {
    if(!this.errorElement){
        this.errorElement = document.createElement('span');
    }
	
	var valid = true;	
	
	try {
		
		if(this.value == "") {
			throw "Please enter your " + this.name + ".";
		}
		
	}
	
	catch(message) {
		valid = false;
		messageText = message;
	}
	
	finally {
        complete = valid;
        if(valid){
            this.errorElement.remove();
            this.parentElement.classList.remove('in-valid');
        }else{
            this.errorElement.innerHTML = messageText;
            this.parentElement.appendChild(this.errorElement);
            this.parentElement.classList.add('in-valid');
        }
	}
}


var event = new Event('input');

var fname = document.getElementById('name');
var email = document.getElementById('email');
var service = document.getElementById('service');
var code = document.getElementById('code');
var msg = document.getElementById('msg');
var clear = document.getElementById('clear');

fname.addEventListener("input", validateRequiredFields, false);
email.addEventListener("input", validateRequiredFields, false);
service.addEventListener("input", validateRequiredFields, false);
code.addEventListener("input", validateRequiredFields, false);
msg.addEventListener("input", validateRequiredFields, false);


function submitFrom(e){
    e.preventDefault();
    
    if(fname.value && email.value && service.value && code.value && msg.value){
        // success
        alert('form is submitted');
        fname.value = "";
        email.value = "";
        service.value = "";
        code.value = "";
        msg.value = "";
        $('input[type="checkbox"]').prop("checked", false);
    }else{
        fname.dispatchEvent(event);
        email.dispatchEvent(event);
        service.dispatchEvent(event);
        code.dispatchEvent(event);
        msg.dispatchEvent(event);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}

var form = document.getElementById('form');
form.addEventListener("submit", submitFrom);

function clearFrom(e){
    e.preventDefault();
    
    fname.value = "";
    email.value = "";
    service.value = "";
    code.value = "";
    msg.value = "";
    $('input[type="checkbox"]').prop("checked", false);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    alert('form is cleared');
}

clear.addEventListener("click", clearFrom);