const btnClose = document.getElementById('close');
const btnLock = document.querySelector('.lock');
const txtPass = document.querySelector("input[type='password']");

const alternateHidePass = function () {
    if (btnLock.innerHTML == 'lock_open'){
        btnLock.innerHTML = 'lock';
        txtPass.removeAttribute('type');
        txtPass.setAttribute('type','password');
    }else{
        btnLock.innerHTML = 'lock_open';
        txtPass.removeAttribute('type');
        txtPass.setAttribute('type','text');
    }
}

const close = function () {
    window.location = '../altar';
}

btnLock.addEventListener('click', alternateHidePass);

btnClose.addEventListener('click',close);