var UserName = document.querySelector('.user-name__input');
var Email = document.querySelector('.email__input');
var pass = document.querySelector('.pass__input');
var confirmPass = document.querySelector('.confirm-pass__input');
var LoginBtn = document.querySelector('.footer button');
var Border = document.querySelectorAll('.border');
var Small = document.querySelectorAll('small');
var form = document.querySelector('form');




function showError(input, index, message) {
    Small[index].classList.add('hide');
    Border[index].classList.add('error');
    Border[index].classList.add('border-2');
    Small[index].innerHTML = message;
}


function showSuccess(input, index) {
    Small[index].classList.remove('hide');
    Border[index].classList.remove('error');
    Border[index].classList.remove('border-2');
    Small[index].innerHTML = "";
}

function checkNone(ListInput) {
    ListInput.forEach(function (input, index) {
        let value = input.value.trim();
        if (value == '') {
            showError(input, index, 'không được để trống!')
        }
        else {
            showSuccess(input, index);
        }
    })
}

function checkPass(pass,confirmPass){
    let passValue = pass.value.trim();
    let confirmValue = confirmPass.value.trim();
    if(passValue == confirmValue){
        showError(confirmPass,3 ,'Mật khẩu không khớp!');
    }
    else{
        showSuccess(confirmPass,3);
    }
}


function checkName(UserName){
    let Name = UserName.value.trim();
    if(Name.length < 6){
        showError(UserName,0,'Tên không được ít hơn 6 ký tự')
    }
    else{
        showSuccess(UserName,0)
    }
}
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkNone([UserName, Email, pass, confirmPass])
    checkName(UserName);
    checkPass(pass,confirmPass);
})











