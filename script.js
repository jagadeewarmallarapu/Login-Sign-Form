const title = document.getElementById('title');
const namefield = document.getElementById("namefield");
const loginBtn = document.getElementById("loginBtn");
const signupBtn =document.getElementById("signupBtn");


signupBtn.onclick = function(){
    title.innerHTML = "Sing Up";
    namefield.style.display = "block";
}

loginBtn.onclick = function(){
    title.innerHTML = "Login";
    namefield.style.direction = "none";
}