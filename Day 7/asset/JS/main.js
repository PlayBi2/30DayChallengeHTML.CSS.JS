var InputBlock = document.querySelector('.search-block input')
var Historys = document.querySelector('.history')
var RemoveAll = document.querySelector('.remove-btn button')
var ListValue = ['ReacJs','NodeJs']

InputBlock.focus() // Hàm input tự động được focus vào khi bắt đầu trình duyệt



InputBlock.addEventListener('keydown', function (e) {
    if (e.which == 13) {
        let x = InputBlock.value
        let div = document.createElement('div')
        div.setAttribute('class', 'history-item')

        div.innerHTML = `${x}<i class="fa-solid fa-xmark"></i>`

        // Historys.appendChild(div)
        Historys.innerHTML += `<div class="history-item">
        ${x}<i class="fa-solid fa-xmark"></i>
    </div>`
        InputBlock.value = ''
        closeIcon = document.querySelectorAll('.history-item i')
        closeIcon.forEach(function(icon){
            icon.addEventListener('click',function(){
                let divParent = icon.parentElement;
                divParent.remove();
            })
        })
        
    }
})
RemoveAll.addEventListener('click',function(){
    Historys.innerHTML = ''
})
