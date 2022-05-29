var range = document.querySelector('.percent');
var body = document.querySelector('body');
var content = document.querySelector('.content');
var percentbg=0;
var percent=0;

content.addEventListener('mousemove',function(e){
    percent = ((e.offsetX / 600)*100).toFixed(0);
    let width = e.offsetX;
    let i = 2.55;
    percentbg = (255-(i*percent-10)).toFixed(0);
    
    body.style.backgroundColor = `rgba(${percentbg},${percentbg},${percentbg})`
    range.innerHTML = percent + '%';
    range.style.width = width + 'px';
})









