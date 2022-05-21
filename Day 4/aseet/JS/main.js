var Modal = document.querySelector('.modal');
var ListImg = document.querySelectorAll('.img img');
var CloseBtn = document.querySelector('.close-icon i');
var ImgOfModal = document.querySelector('.body-modal img');
var NextIcon = document.querySelector('.right-icon');
var PrevIcon = document.querySelector('.left-icon');

var currentIndex = 0;
function ShowModal() {
    ImgOfModal.src = ListImg[currentIndex].src;
    // ẩn hiện nút next và prev 
    if (currentIndex == 0) {
        PrevIcon.classList.add('hide');
    }
    else {
        PrevIcon.classList.remove('hide');
    }
    if (currentIndex == ListImg.length - 1) {
        NextIcon.classList.add('hide')
    }
    else {
        NextIcon.classList.remove('hide')
    }
    Modal.classList.add('show');
}

function CloseModal() {
    
    Modal.classList.remove('show');
}

CloseBtn.onclick = function () {
    CloseModal();
}

ListImg.forEach(function (img, index) {
    // index là chỉ số vị trí của img bên trong ListImg
    img.onclick = function () {
        currentIndex = index;
        ShowModal();
    }

})


// chuyển tiếp giữa các hình ảnh
NextIcon.onclick = function () {
    if (currentIndex < ListImg.length - 1) {
        currentIndex++;
        ShowModal();
    }
}
PrevIcon.onclick = function () {
    if (currentIndex > 0) {
        currentIndex--;
        ShowModal();
    }
}


