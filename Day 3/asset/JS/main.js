var SubmitBtn = document.querySelector('#btn button');
var Modal = document.querySelector('#modal');
var ModalSection = document.querySelector('#modal-section');
SubmitBtn.onclick = function(){
    Modal.style.display = 'flex';
}

var CloseModal = document.querySelector('.modal__heading i');
CloseModal.onclick = function(){
    Modal.style.display = 'none';
}
CloseBtn = document.querySelector('.modal__body button');
CloseBtn.onclick = function(){
    Modal.style.display = 'none';
}

Modal.onclick = function(e){
    Modal.style.display = 'none';
    ModalSection.onclick = function(e){
        e.stopPropagation();
    }
}