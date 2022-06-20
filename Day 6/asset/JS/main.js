var title = document.querySelector('.title');
var KeyOption = document.querySelector('.key-option .option-value')
var LocationOption = document.querySelector('.location-option .option-value')
var WhichOption = document.querySelector('.which-option .option-value')
var CodeOption = document.querySelector('.code-option .option-value')
var IntroBlock = document.querySelector('.intro')
var MainBlock = document.querySelector('#main')

window.addEventListener('keydown',function(e){
    title.innerHTML = e.which
    IntroBlock.classList.add('hide')
    MainBlock.classList.remove('hide')
    KeyOption.innerHTML = e.key
    LocationOption.innerHTML = e.location
    WhichOption.innerHTML = e.which
    CodeOption.innerHTML = e.code
    
})