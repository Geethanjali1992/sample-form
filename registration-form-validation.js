function formValidation()  
{  
var uname = document.registration.username;  
var umobile= document.registration.mobilenumber;   
var uadd = document.registration.address;  
var ucity = document.registration.city;
var uemail = document.registration.email;    
var male = document.registration.male;  
var female = document.registration.female;

if(allLetter(uname))  
{ 
if(numeric(umobile))  
{  
if(alphanumeric(uadd))  
{   
if(countryselect(ucity))  
{  
 if(ValidateEmail(uemail))  
{  
 if(validgender(male,female))    
{  
}  
}   
}  
}   
}
}
return false;  
 } 
function allLetter(uname)  
{   
var letters = /^[A-Za-z]+$/;  
if(uname.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('Username must have alphabet characters only');  
uname.focus();  
return false;  
}  
}  
function numeric(umobile)  
{   
var letters = /^[0-9]+$/;  
if(umobile.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('mobile number is invalid');  
uadd.focus();  
return false;  
}  
}  
function alphanumeric(uadd)  
{   
var letters = /^[0-9a-zA-Z]+$/;  
if(uadd.value.match(letters))  
{  
return true;  
}  
else  
{  
alert('User address must have alphanumeric characters only');  
uadd.focus();  
return false;  
}  
}  
function countryselect(ucity)  
{  
if(ucity.value == "Default")  
{  
alert('Select your city from the list');  
ucountry.focus();  
return false;  
}  
else  
{  
return true;  
}  
}  

function ValidateEmail(uemail)  
{  
var mailformat =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/; 
if(uemail.value.match(mailformat))  
{  
return true;  
}  
else 
{  
alert("invalid email address");  
uemail.focus();  
return false;  
}  
}

function validgender(male,female)  
{  
x=0;  
  
if(male.checked)   
{  
x++;  
} if(female.checked)  
{  
x++;   
}  
if(x==0)  
{  
alert('Select Male/Female');  
male.focus();  
return false;  
} else  
{  
alert('Form Succesfully Submitted');  
window.location.reload()  
return true;  
}  
}


