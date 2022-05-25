var CloseIcons = document.querySelectorAll('.search-item i');
var SearchItems = document.querySelectorAll('.search-item');
var RemoveBtn = document.querySelector('.button');
var InputBox = document.querySelector('.search-box');
var ListSearch = document.querySelector('.list-search');
var Historys = ['ReacJs','NodeJs']

InputBox.focus();
CloseIcons.forEach(function(CloseIcon, index){
    CloseIcon.addEventListener('click',function(e){
        SearchItems[index].classList.add('hide');
    })
})

InputBox.addEventListener('keydown',function(e){
    var html = InputBox.value;
    if(e.keyCode == 13 && !Historys.includes(html)){
        ListSearch.innerHTML += `<li class="search-item">
                                    ${html}<i class="fa-solid fa-xmark"></i>
                                </li>`;
        Historys.push(html);
        InputBox.value = '';
    }
})

RemoveBtn.addEventListener('click',function(){
    ListSearch.innerHTML = '';
})