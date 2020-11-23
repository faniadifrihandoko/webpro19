function validasi(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "ahmad2017" && password == "integrity"){
alert ("Login suksess");
window.location = "../suksess.html";
}
else{
alert("login gagal");
}
}