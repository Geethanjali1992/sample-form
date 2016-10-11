function formValidation()  
{  
var uname = document.registration.username.focus();  
var umobile= document.registration.mobilenumber; 
var udob=document.registration.dob;  
var uage=document.registration.age; 
var uadd = document.registration.address;  
var ucity = document.registration.city;
var uemail = document.registration.email;    
var male = document.registration.male;  
var female = document.registration.female;
var gardening= document.registration.gardening;  
var playingcricket = document.registration.playingcricket;
var music = document.registration.music;  
var reading = document.registration.reading;
var cooking = document.registration.cooking;  
return true;
}
 
function username_validation()  
{   
var uname = document.registration.username;
var letters = /^[A-Za-z]+$/;  
if(uname.value.match(letters))  
{   
return true;  
}  
else  
{  
document.getElementById("usernameError").innerHTML = "You must enter a username";
document.getElementById("usernameError").style.color = "red";
uname.focus();  
return false;  
}  
}  
function mobilenumber_validation()  
{   
var umobile= document.registration.mobilenumber; 
var letters = /^[0-9]+$/;  
if(umobile.value.match(letters))  
{  

return true;  
}  
else  
{  
alert('mobile number is invalid');  
umobile.focus();  
return false;  
}  
}  
function dob_validation()  
{   
var udob=document.registration.dob;
  if(udob.value=="")  
{  
alert('dob is required');  
udob.focus();  
return false;  
}  
else  
{  
return true;
}  
}  
function age_validation()  
{   
 var uage=document.registration.age; 
  if(uage.value=="")  
{  
alert('age field is required');  
uage.focus();  
return false;  
}  
else  
{  
return true;
}  
}  
function address_validation() 
{   
var uadd = document.registration.address;  
if(uadd.value=="")  
{  
alert('address field is required');  
uadd.focus();  
return false;  
}  
else  
{  
return true;  
}  
}  
function city_validation()  
{  
var ucity = document.registration.city;
if(ucity.value == "Default")  
{  
alert('Select your city from the list');  
ucity.focus();  
return false;  
}  
else  
{  
return true;  
}  
}  

function email_validation()
{  
var uemail = document.registration.email;    
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

function submitt()
{
if(document.registration.username.value=="")
{
document.getElementById("usernameError").innerHTML = "You must enter a username";
document.getElementById("usernameError").style.color = "red";
}
if(document.registration.mobilenumber.value=="")
{
document.getElementById("mobilenumberError").innerHTML = "You must enter a mobilenumber";
document.getElementById("mobilenumberError").style.color = "red";
}
if(document.registration.dob.value=="")
{
document.getElementById("dobError").innerHTML = "You must enter a date of birth";
document.getElementById("dobError").style.color = "red";
}
if(document.registration.age.value=="")
{
document.getElementById("ageError").innerHTML = "You must enter an age";
document.getElementById("ageError").style.color = "red";
}
if(document.registration.address.value=="")
{
document.getElementById("addressError").innerHTML = "You must enter an address";
document.getElementById("addressError").style.color = "red";
}
if(document.registration.city.value=="")
{
document.getElementById("cityError").innerHTML = "You must enter a city";
document.getElementById("cityError").style.color = "red";
}
if(document.registration.email.value=="")
{
document.getElementById("emailError").innerHTML = "You must enter an email";
document.getElementById("emailError").style.color = "red";
}
else
{
alert('Form submitted successfully');
}
}

