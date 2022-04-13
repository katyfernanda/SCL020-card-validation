import validator from './validator.js';

document.getElementById("screen2").style.display = "none";
document.getElementById("screen3").style.display = "none";
document.getElementById("screen4").style.display = "none";
document.getElementById("logo").style.visibility = "hidden";
document.getElementById("screenIntro").style.display = "none";
document.getElementById("clean").style.visibility = "hidden";
document.getElementById("screen5").style.display = "none";


//screen1//
const getIn = document.getElementById("getIn");
getIn.addEventListener("click" , ()=> {
    document.getElementById("screen1").style.display = "none";
    document.getElementById("screenIntro").style.display = "block";
});

const buy = document.getElementById("buy");
buy.addEventListener("click" , ()=> {
    document.getElementById("screenIntro").style.display = "none";
    document.getElementById("screen2").style.display = "block";
    for ( let element of document.getElementsByClassName("cardDescription")){
        element.style.display="none";
    }
});

const getOut = document.getElementById("getOut");
getOut.addEventListener("click" , ()=> {
alert("Serás redireccionado a Google");
window.location.assign("https://www.google.com");
});


//screen2 Hides everything but selected item//
const divPet = document.getElementById("divPet");
divPet.addEventListener("click" , ()=> {
    document.getElementById("divRoma").style.display = "none";
    document.getElementById("divVege").style.display = "none";
    document.getElementById("divGolo").style.display = "none";
    document.getElementById("divFit").style.display = "none";
    document.getElementById("divCerve").style.display = "none";
    document.getElementById("cardPet").style.display = "block";
    document.getElementById("screen3").style.display = "block";
    document.getElementById("logo").style.visibility = "visible";

});

const divRoma = document.getElementById("divRoma");
divRoma.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display = "none";
    document.getElementById("divVege").style.display = "none";
    document.getElementById("divGolo").style.display = "none";
    document.getElementById("divFit").style.display = "none";
    document.getElementById("divCerve").style.display = "none";
    document.getElementById("cardRoma").style.display = "block";
    document.getElementById("screen3").style.display = "block";
    document.getElementById("logo").style.visibility = "visible";
});

const divVege = document.getElementById("divVege");
divVege.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display = "none";
    document.getElementById("divRoma").style.display = "none";
    document.getElementById("divGolo").style.display = "none";
    document.getElementById("divFit").style.display = "none";
    document.getElementById("divCerve").style.display = "none";
    document.getElementById("cardVege").style.display = "block";
    document.getElementById("screen3").style.display = "block";
    document.getElementById("logo").style.visibility = "visible";
});

const divGolo = document.getElementById("divGolo");
divGolo.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display = "none";
    document.getElementById("divRoma").style.display = "none";
    document.getElementById("divVege").style.display = "none";
    document.getElementById("divFit").style.display = "none";
    document.getElementById("divCerve").style.display = "none";
    document.getElementById("cardGolo").style.display = "block";
    document.getElementById("screen3").style.display = "block";
    document.getElementById("logo").style.visibility = "visible";
})

const divFit = document.getElementById("divFit");
divFit.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display = "none";
    document.getElementById("divRoma").style.display = "none";
    document.getElementById("divVege").style.display = "none";
    document.getElementById("divGolo").style.display = "none";
    document.getElementById("divCerve").style.display = "none";
    document.getElementById("cardFit").style.display = "block";
    document.getElementById("screen3").style.display = "block";
    document.getElementById("logo").style.visibility = "visible";
});

const divCerve = document.getElementById("divCerve");
divCerve.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display = "none";
    document.getElementById("divRoma").style.display = "none";
    document.getElementById("divVege").style.display = "none";
    document.getElementById("divGolo").style.display = "none";
    document.getElementById("divFit").style.display = "none";
    document.getElementById("cardCerve").style.display = "block";
    document.getElementById("screen3").style.display = "block";
    document.getElementById("logo").style.visibility = "visible";
});

const back = document.getElementById("logo");
back.addEventListener("click" , ()=> {
    document.getElementById("divPet").style.display ="block";
    document.getElementById("cardPet").style.display = "none";
    document.getElementById("divRoma").style.display = "block";
    document.getElementById("cardRoma").style.display = "none";
    document.getElementById("divVege").style.display = "block";
    document.getElementById("cardVege").style.display = "none";
    document.getElementById("divGolo").style.display = "block";
    document.getElementById("cardGolo").style.display = "none";
    document.getElementById("divFit").style.display = "block";
    document.getElementById("cardFit").style.display = "none";
    document.getElementById("divCerve").style.display = "block";
    document.getElementById("cardCerve").style.display = "none";
    document.getElementById("logo").style.visibility = "hidden";
    document.getElementById("screen3").style.display = "none";
});

//screen3//

const btnValidar = document.getElementById("validar");
const message=document.getElementById("message");
const messageValid="Tu tarjeta es Valida";
const messageInvalid="Tu tarjeta es Invalida";
const messageNothing = " ";
const inputCreditNumber=document.getElementById("number");
let lookNumber= document.getElementById("lookNumber"); 
inputCreditNumber.addEventListener("keyup", (event) => {

    //si es cualquier botón menos los dígitos de 0 al 9 ingresa al if//  
    if(event.key && event.key.match(/[^0-9]/)){
        let noNumber = event.key.match(/[^0-9]/);
        inputCreditNumber.value =inputCreditNumber.value.replace(noNumber,"");
    }
   // console.log("no match "+ inputCreditNumber.value);//
    //reflejando cada número ingresado//
   
    lookNumber.value = inputCreditNumber.value;
    //console.log(secretNumbers);//
    lookNumber.value =  validator.maskify(inputCreditNumber.value);    
});
btnValidar.addEventListener("click", (event)=> { 
    event.preventDefault();
    //inputCreditNumber.value = "1234567891234567";
    const  creditCardNumber= inputCreditNumber.value;
   if (creditCardNumber.length < 16){
       alert("Debes ingresar correctamente el número de tu tarjeta, si la cantidad de números es menor a 16, antepone la cantidad de 0 que necesites");
   }else if(creditCardNumber.length > 16){
       alert("¡¡Te pasaste!! El máximo de números a ingresar por tarjeta es de 16")
   }else{ 
       if(validator.isValid(creditCardNumber)){
        document.getElementById("screen4").style.display = "block"; 
        document.getElementById("formFinal").style.display = "block";
        inputCreditNumber.setAttribute("readonly","readonly")
        message.innerHTML = messageValid;           
       }else{
        document.getElementById("screen4").style.display = "block";  
        document.getElementById("formFinal").style.display = "none";
        document.getElementById("clean").style.visibility = "visible";
        message.innerHTML =messageInvalid;
       const clean = document.getElementById("clean");
       clean.addEventListener("click", (event)=>{
            event.preventDefault();
            inputCreditNumber.value = "";
            lookNumber.value = "";
            message.innerHTML = messageNothing;
            clean.style.visibility = "hidden";
       });     
   }}}  
);
const confirm = document.getElementById("confirm");
confirm.addEventListener("click", (event)=>{
    event.preventDefault();
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen5").style.display = "block";

})

   





