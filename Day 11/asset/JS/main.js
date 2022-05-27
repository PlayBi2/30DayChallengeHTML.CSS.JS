var SuccessBtn = document.querySelector('.success');
var WarningBtn = document.querySelector('.warning');
var ErrorBtn = document.querySelector('.error');
var ToastNoti = document.querySelector('.toast-noti');


const StyleIcon = {
    error: '<i class="fa-solid fa-circle-exclamation"></i>',
    success: '<i class="fa-solid fa-circle-check"></i>',
    warning: '<i class="fa-solid fa-triangle-exclamation"></i>'
}

function addToastItem(styleicon, key) {
    ToastNoti.style.display = 'block';
    let ToastItem = document.createElement('div');
    ToastItem.setAttribute('class', `noti-item notifi-${key}`);
    
    ToastItem.innerHTML = `${styleicon}This is a success message`;
    ToastItem.style.animation = 'FadeOut ease 0.5s, FadeOut2 ease 2s 3s forwards';
    ToastNoti.appendChild(ToastItem);
    setTimeout(function () {
        ToastNoti.removeChild(ToastItem);
    }, 1000);
}

SuccessBtn.addEventListener('click', function () {
    addToastItem(StyleIcon.success,'success');
})
WarningBtn.addEventListener('click',function(){
    addToastItem(StyleIcon.warning,'warning');
})
ErrorBtn.addEventListener('click',function(){
    addToastItem(StyleIcon.error,'error');
})
