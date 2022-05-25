var HeaderBlock = document.querySelector('.header');
var Contents = document.querySelectorAll('.member__content');
var Main = document.querySelector('#main');
var Alert = document.querySelector('#alert');

var NodeBody = document.querySelector('body');

NodeBody.addEventListener('keydown',function(e){
    Alert.classList.add('hide');
    Main.classList.remove('hide');
    HeaderBlock.innerHTML = e.which;
    Contents.forEach(function(content,index){
        if(index==0){
            content.innerHTML = e.key
        }
        if(index==1){
            content.innerHTML = e.location;
        }
        if(index==2){
            content.innerHTML = e.which;
        }
        if(index==3){
            content.innerHTML = e.code;
        }
    })
})