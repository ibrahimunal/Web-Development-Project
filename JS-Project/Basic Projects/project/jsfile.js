
var button=document.getElementById('header');
var background=document.getElementById('body');
const colors=['yellow','red','green','#f2f2f2'];

document.addEventListener('click',function(e){
let random=Math.floor(Math.random()*colors.length);
if(e.target==button){
    background.style.backgroundColor=colors[random];

}

});






