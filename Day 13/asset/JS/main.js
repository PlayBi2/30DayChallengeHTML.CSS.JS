var main = document.querySelector('#main');
var label = document.querySelector('.label-upload');
var InputFile = document.querySelector('#upload-img');


function ErrorImg(SizeImg){
    let SpanErr = document.createElement('span');
    if(SizeImg > 1){
        SpanErr.setAttribute('class','error');
        SpanErr.innerHTML = 'File ảnh không được quá 10mb';
        main.appendChild(SpanErr);
        return true;
    }else{
        return false;
    }
}
InputFile.addEventListener('change',function(e){
    let file = InputFile.files;
    let UrlImg = URL.createObjectURL(file[0]);
    console.log(file[0])
    let SizeImg = file[0].size;
    let SizeImgMb = SizeImg/(1024*1024);
    if(!ErrorImg(SizeImgMb))
    {
        let Img = document.createElement('img');
        Img.src = UrlImg;
        label.appendChild(Img);
    }
})