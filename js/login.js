const btnClose = document.getElementById('close');
const btnLock = document.querySelector('.lock');
const txtPass = document.querySelector("input[type='password']");
const inputs = document.querySelectorAll('.login-card-form input');
const btnSubmit = document.querySelector('.login-card-form button');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{5,25}$/, // Letras, numeros, guion y guion_bajo
    passwordS: /^.{1,20}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const loginUser = {
    user: false,
    pass: false
}

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

const submit = function () {

}

const close = function () {
    window.location = '../altar';
}

btnLock.addEventListener('click', alternateHidePass);

btnClose.addEventListener('click', close);

btnSubmit.addEventListener('click', submit);