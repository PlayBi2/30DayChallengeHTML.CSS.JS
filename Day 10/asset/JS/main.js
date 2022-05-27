var Input = document.querySelector('.search__input');
var AddBtn = document.querySelector('.button__add');
var ListSearch = document.querySelector('.list');
var Items = document.querySelectorAll('.item');
var DeleteItems = document.querySelectorAll('.item i');
let arrItem = [];

// Thêm item vào list search
function PushItem(value) {
    // <li class="item">
    //                 hello<i class="fa-solid fa-trash"></i>
    //             </li>
    let li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.innerHTML = `${value}<i class="fa-solid fa-trash"></i>`
    ListSearch.appendChild(li);
    let text = li.innerText;
    let status = li.querySelector('i').getAttribute('class');
    arrItem.push({
        text,
        status
    })
    localStorage.setItem('ListItemLocal',JSON.stringify(arrItem))

    li.querySelector('i').addEventListener('click', function (e) {
        e.target.parentElement.remove();
        
        arrItem.pop({
            text,
            status
        });
        localStorage.setItem('ListItemLocal',JSON.stringify(arrItem))
    })

    li.addEventListener('click', function () {
        li.classList.toggle('text-decoration');
    })
}

function UpdateData() {
    let data = JSON.parse(localStorage.getItem('ListItemLocal'));
    data.forEach(function(item){
        let text = item.text;
        PushItem(text);
    })
}


const app = {
    name: 'Day 10 JS',
    id: 10,
    PushItem: function () {
        AddBtn.addEventListener('click', function () {
            let InputValue = Input.value;
            PushItem(InputValue);
            Input.value = '';
        })
    },
    UpdateData: function(){
        UpdateData();
    },
    start: function () {
        this.PushItem();
        this.UpdateData()
    }
}

app.start();

