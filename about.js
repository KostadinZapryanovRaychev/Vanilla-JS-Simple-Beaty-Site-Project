    
 //function which makes I'm Nataly to move manipulating it letter by letter   
 const text = document.querySelector(('#foo'));
 const strText = text.textContent;
 text.textContent = "";
 // we will make the text to an array of letters
 const splitText = strText.split("");
 
 
 for (let i = 0; i < splitText.length; i++){
   // we add span for each individual letter in this way
   text.innerHTML += "<strong>" + splitText[i] + "</strong>";
 }
 
 let char = 0;
 let timer = setInterval(onTick, 200);
 
 function onTick() {
   const strong = text.querySelectorAll('strong')[char];
   strong.classList.add('fade');
   char++
   if (char === splitText.length) {
     complete();
     return;
   }
 }
 
 function complete() {
   clearInterval(timer);
   timer = null;
 }