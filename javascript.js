const loader = document.querySelector('.star');
const main = document.querySelector('.main1-div');
const main2 = document.querySelector('.header-div');
const main3 = document.querySelector('.main2-div');

console.log(loader);
 function init() {
 setTimeout(() => {
 loader.style.opacity = 0;
 loader.style.display = 'none';

 main.style.display = 'block';
 setTimeout(() => main.style.opacity = 1, 50);
 main2.style.display = 'block';
 setTimeout(() => main2.style.opacity = 1, 50);
 main3.style.display = 'block';
  setTimeout(() => main3.style.opacity = 1, 50);
 },  1200); 
 }
 init();



function myFunction() {

alert("Successful" );  
} 


function validateForm() {
  let x = document.forms["myForm"]["mail"].value;
  if (x == "") {
    alert("Email must be filled out");
    return false;
  }
}