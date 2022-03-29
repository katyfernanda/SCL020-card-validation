import validator from './validator.js';



const getIn = document.getElementById("getIn");
getIn.addEventListener("click" , ()=> {
    document.getElementById("screen1").style.display = "none";
});
    
const getOut = document.getElementById("getOut");
getOut.addEventListener("click" , ()=> window.location.assign("https://www.google.com"));




console.log(validator);
