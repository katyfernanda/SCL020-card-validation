import validator from './validator.js';
document.getElementById("screen2").style.display = "none";

//screen1//
const getIn = document.getElementById("getIn");
getIn.addEventListener("click" , ()=> {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
});    
const getOut = document.getElementById("getOut");
getOut.addEventListener("click" , ()=> {
alert("Serás redireccionado a Google");
window.location.assign("https://www.google.com");
});







//screen3//
const btnValidar = document.getElementById("validar");
btnValidar.addEventListener("click", (event)=> {
    event.preventDefault();
    const number = document.getElementById("number").value;
   if (number.length < 16){
       alert("Debes ingresar correctamente el número de tu tarjeta, si la cantidad de números es menor a 16, antepone la cantidad de 0 que necesites")
   }else if(number.length > 16){
       alert("¡¡Te pasaste!! El máximo de números a ingresar por tarjeta es de 16")
   } else{
   console.log(number)}
});





console.log(validator);
