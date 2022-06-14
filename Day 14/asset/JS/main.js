var LeftIcon = document.querySelector('.left-icon');
var RightIcon = document.querySelector('.right-icon');
var ImgScreen = document.querySelector('.screen img');
var ListImg = document.querySelectorAll('.slide img');

var current = 0;

LeftIcon.addEventListener('click',function(){
    let parentElement2 = ListImg[current].parentElement;
    parentElement2.style.background = 'none';
    if(current<=0){
        current = ListImg.length-1;
    }
    else{
        current--;
    }
    let ImgSrc = ListImg[current].src;
    ImgScreen.src = ImgSrc;
    let parrentImg = ListImg[current].parentElement;
    parrentImg.style.background = 'rgb(220, 86, 86)';
})
RightIcon.addEventListener('click',function(){
    let parentElement2 = ListImg[current].parentElement;
    parentElement2.style.background = 'none';
    if(current>=ListImg.length-1){
        current = 0;
    }
    else{
        current++;
    }
    let ImgSrc = ListImg[current].src;
    ImgScreen.src = ImgSrc;
    let parrentImg = ListImg[current].parentElement;
    parrentImg.style.background = 'rgb(220, 86, 86)';
})


ListImg.forEach(function(img,index){
    
    let ItemImg = img.parentElement; // lấy ra đối tượng item trước khi đổi sang ảnh khác
    ItemImg.addEventListener('click',function(){
        let PreviousItem = ListImg[current].parentElement;
        PreviousItem.style.background = 'none';
        
        current = index;
        let ImgSrc = img.src;
        ImgScreen.src = ImgSrc;
        this.style.background = 'rgb(220, 86, 86)';
    })
})