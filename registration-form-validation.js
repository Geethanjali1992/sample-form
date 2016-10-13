
function formValidation(){
      var error = 0;
      if(!username_validation('username')){
        document.getElementById('usernameError').style.display = "block";
        error++;
      }
     if(!mobilenumber_validation('mobilenumber')){
        document.getElementById('mobilenumberError').style.display = "block";
        error++;
      }
      if(!dob_validation('dob')){
        document.getElementById('dobError').style.display = "block";
        error++;
      }
      if(!age_validation('age')){
        document.getElementById('ageError').style.display = "block";
        error++;
      }
      if(!address_validation('address')){
        document.getElementById('addressError').style.display = "block";
        error++;
      }
       if(!city_validation('city')){
        document.getElementById('cityError').style.display = "block";
        error++;
      }
     if(!email_validation('email')){
        document.getElementById('emailError').style.display = "block";
        error++;
      }
       if(validate_gender('male')){
 
      }else if(validate_gender('female')){
         
      }else{
        document.getElementById('genderError').style.display = "block";
        error++;
      }

     if(hobbiesvalidation('gardening')){
 
      }else if(hobbiesvalidation('playingcricket')){
         
      }
      else if(hobbiesvalidation('music')){
         
      }
      else if(hobbiesvalidation('reading')){
         
      }
      else if(hobbiesvalidation('cooking')){
         
      }
     else{
        document.getElementById('hobbiesError').style.display = "block";
        error++;
      }
     
      if(error > 0){
        return false;
      }
    }  
    function username_validation(x){
      var re = /[A-Za-z ']$/;
      if(re.test(document.getElementById(x).value)){
        document.getElementById(x).style.background ='#ccffcc';
        document.getElementById(x+'Error').style.display = "none";
        return true;
      }else{
           document.getElementById(x).style.background ='#ff9999';
        return false; 
      }
    }
function mobilenumber_validation(x){
       var re = /^[0-9]+$/;  
       if(re.test(document.getElementById(x).value)){
        document.getElementById(x).style.background ='#ccffcc';
         document.getElementById(x+'Error').style.display = "none";
        return true;
      }else{
         document.getElementById(x).style.background ='#ff9999';    
            return false; 
      }
    }
   function dob_validation(x){
        if(document.getElementById(x).value){
        document.getElementById(x).style.background ='#ccffcc';
        document.getElementById(x+'Error').style.display = "none";
        return true;
      }else{
         document.getElementById(x).style.background ='#ff9999';
        return false; 
      }
    }
 function age_validation(x){
        if(document.getElementById(x).value){
        document.getElementById(x).style.background ='#ccffcc';
         document.getElementById(x+'Error').style.display = "none";
        return true;
      }else{
           document.getElementById(x).style.background ='#ff9999';
        return false; 
      }
    }
   function address_validation(x){
        if(document.getElementById(x).value){
        document.getElementById(x).style.background ='#ccffcc';        
        document.getElementById(x+'Error').style.display = "none";
        return true;
      }else{
          document.getElementById(x).style.background ='#ff9999';
         return false; 
      }
    }
 function city_validation(x){
      if(document.getElementById(x).value){
        document.getElementById(x).style.background ='#ccffcc';
        document.getElementById(x+'Error').style.display = "none";
        return true;
      }else{
        
        document.getElementById(x).style.background ='#ff9999';
        return false; 
      }
    }
function email_validation(x){
     
var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))+$/; 
        if(re.test(document.getElementById(x).value)){
        document.getElementById(x).style.background ='#ccffcc';
        document.getElementById(x+'Error').style.display = "none";
        return true;
      }else{
        document.getElementById(x).style.background ='#ff9999';
        return false; 
      }
    }

 function validate_gender(x){
      if(document.getElementById(x).checked){
    return true;
      }else{
     return false;
      }
    }
    function hobbiesvalidation(x){
      if(document.getElementById(x).checked){
        return true;
      }
      return false;
    }

