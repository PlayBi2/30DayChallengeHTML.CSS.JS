var searchIcon = document.querySelector('.block i')
var inputBlock = document.querySelector('.input-block')

searchIcon.addEventListener('click',function(){
    inputBlock.classList.toggle('hide')
    inputBlock.focus();
})