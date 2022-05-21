var inputBlock = document.querySelector('.input__box');
var SearchBtn = document.querySelector('.button__search');

SearchBtn.addEventListener('click',function(){
    inputBlock.classList.toggle('show');
    inputBlock.focus();
})