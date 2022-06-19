var ListElement = document.querySelectorAll('.show-on-scroll');

// innerHeight trả về chiều cao của cửa sổ trình duyệt

function setAnimation(element){
    let innerHeigth = window.innerHeight;
    let AtributeElement = element.getClientRects()[0];

    if(AtributeElement.bottom >= 0 && AtributeElement.top <= innerHeigth){
        element.classList.add('start');
    }else{
        element.classList.remove('start')
    }
}

function loop(){
    ListElement.forEach(function(element){
        setAnimation(element);
        console.log(element.getClientRects()[0])
    })
}
window.onscroll = loop
    
loop()