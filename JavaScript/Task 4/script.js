function signup(){
    var username = document.getElementById('username').value 
    var password = document.getElementById('password').value
   if(username.trim()==""){
    alert("Enter your username!")
    return false;
   }
    else if(password.trim()==""){
    alert("Enter your password!")
    return false;
    }    
    else{
        true;
    }
}