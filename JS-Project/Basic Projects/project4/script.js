var  lowerCountr=document.querySelector('#lowerCountBtn');
var addCountr=document.querySelector('#addCountBtn');
let counter=document.querySelector('.counter');



let count=0;
document.addEventListener('click',eventListener)



function eventListener(event){
  
if(event.target==lowerCountr){
    if(counter.innerHTML>'0'){
        counter.style.color='blue';
    }
    else if(counter.innerHTML =='0'){
        counter.style.color='white';
    }
   
count--;
counter.innerHTML=count;
   
}
else if(event.target==addCountr){
    if(counter.innerHTML=='0'){
        counter.style.color='blue';
    }
    else if(counter.innerHTML<'0'){
        counter.style.color='red';
    }
    else {
        counter.style.color='green';
    }

count++;
counter.innerHTML=count;
}
}

