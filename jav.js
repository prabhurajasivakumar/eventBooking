/*
let form= document.getElementById("forma");
let username= document.getElementById("username");
let email= document.getElementById("email");
let password= document.getElementById("password");
let password2= document.getElementById("password2");

form.addEventListener= ('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let setError=(element,message)=>{
    let inputCtrl= element.parentElement;
    let errorDisplay= inputCtrl.querySelector(".error")

    message = errorDisplay.innerText;
    inputCtrl.classList.add("error");
    inputCtrl.classList.remove("sucess");
}
let setSucess=(element)=>{
    let inputCtrl= element.parentElement;
    let inputCtrl=querySelector(".error");

    errorDisplay.innerText=" ";
    inputCtrl.classList.add("sucess");
    inputCtrl.classList.remove("error");
}



let validateInputs=()=>{
    let usernameValue=username.value.trim();
    let emailValue=email.value.trim();
    let passwordValue=password.value.trim();
    let password2Value=password2.value.trim();

    if (username===" "){
        setError(username,"enter username");
    }
    else{
        setSucess(username)
    }

    if (email===" "){
        setError(email,"enter email");
    }
    else{
        setSucess(email);
    }

    if (email===" "){
        setError(email,"enter email");
    }
    else if(!isValidEmail(emailValue))
    {setError(email,"enter valid email")}
    else{
        setSucess(email);
    }

    if(password===" "){
        setError(password,"enter password");
    }
    else if(passwordValue.length < 8){
        setError(password,"enter Min 8 char");
    }
    else{
        setSucess(password);
    }
    if(password2===" "){
        setError(password2,"plz conform password");
    }
    else if(password2 !== password){
        setError(password2,"password not match");
    }
    else{
        setSucess(password2);
    }
}

*/
function validate()
{
    var username =document.getElementById("uname");
    var password = document.getElementById("pass");
    var email=document.getElementById('email');
    var copass=document.getElementById("copass");
   
   

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if(username.value.trim() =="" ){
       // alert("enter user name");
        username.style.border= "solid red 2px";
        document.getElementById("baduser").style.visibility="visible";
        return false;
    }
    else if(email.value.trim()==""){
        email.style.border='solid red 2px';
        document.getElementById("bademail").style.visibility="visible";
        return false;
    }
    else if(!isValidEmail(email.value)){
        email.style.border='solid red 2px';
        alert("enter valid e-mail");
        return false;
    }
    
    else if( password.value.trim()==""){
      //  alert("enter password");
        password.style.border= "solid red 2px";
        document.getElementById("badpass").style.visibility="visible";
        return false;
    }
   
    else if( password.value.trim().length < 8){
        alert("password must be more than 8 char");
        password.style.border= "solid red 2px";
        document.getElementById("badpass").style.visibility="visible";
        return false; 
    }
    else if( copass.value !== password.value ){
        copass.style.border="solid red 2px ";
        document.getElementById("badco").style.visibility="visible";
        return false;
    }
    
    else
    {
        true;
    }

}

function fun(){
     var ui= document.querySelector("#uname");
    let message = document.querySelector("#message");
    message.innerHTML =("HOORAY! Welcome to RoxA Family,"+" "+ui.value+".");
}