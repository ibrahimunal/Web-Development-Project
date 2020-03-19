const quotes=[ 

{
    name:'Abraham Lincoln',
    quote:'Get busy living or get busy dying'
},
{
    name:'ibrahim ÜNAL',
    quote: 'Herkesin hayatına kimse karışamaz'
}


]


const quoteBtn=document.querySelector('#quoteBtn');
const quoteAuthor=document.querySelector('#quoteAuthor');
const quote=document.querySelector('#quote');

document.addEventListener('click',function(e){
    let rand=Math.floor(Math.random()*quotes.length);
    if(e.target==quoteBtn){
        quoteAuthor.textContent=quotes[rand].name;
        quote.textContent=quotes[rand].quote;
    }


});
