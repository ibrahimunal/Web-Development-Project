var prvButton=document.querySelector('#prev');
var nextButton=document.getElementById('next');
var container=document.querySelector('.images');



prvButton.addEventListener('click',previousSlide);
nextButton.addEventListener('click',nextSlide);
let counter=0;


function nextSlide(e){

container.style.backgroundImage=' url(images/'+counter+'.jpg)';
counter++;


}
function previousSlide(e){
counter--;

console.log("previous");
    
}