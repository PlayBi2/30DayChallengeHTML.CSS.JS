var main = document.querySelector('#main');
let isMouseDown = false;
var startX, scrollLeft;


// lấy ra độ dài từ mép ngoài đối tượng main đến vị trí mousedown
main.addEventListener('mousedown',function(e){

    // e.pageX Là vị trí tọa độ con trỏ chuột nhấn xuống trên web
    // console.log('e.pageX:' + e.pageX)
    // console.log('main.offsetLeft: ' + main.offsetLeft)
    // console.log(main.scrollLeft)
    isMouseDown = true;
    startX = e.pageX - main.offsetLeft;
    scrollLeft = main.scrollLeft;
})

// mouseleave là sự kiện khi ta đưa con trỏ chuột ra ngoài đối tượng main
main.addEventListener('mouseleave',function(){
    isMouseDown = false;
})


// mouseup là sự kiện khi ta nhấc con chuột lên 
main.addEventListener('mouseup',function(){
    isMouseDown = false;
})

// mousemove là sự kiện khi ta di chuyển con trỏ chuột bên trong đối tượng main
main.addEventListener('mousemove',function(e){
    if(!isMouseDown){
        return;
    }

    const x = e.pageX - main.offsetLeft; // lấy ra độ dài từ mép ngoài đối tượng main đến vị trí mousemove
    const walk = (x-startX); // lấy ra độ dài cần scroll
    main.scrollLeft = scrollLeft - walk;
})
