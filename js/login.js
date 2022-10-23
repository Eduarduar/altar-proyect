const btnClose = document.getElementById('close');
const btnLock = document.querySelector('.lock');
const txtPass = document.querySelector("input[type='password']");
const inputs = document.querySelectorAll('.login-card-form input');
const btnSubmit = document.querySelector('.login-card-form button');
const form = document.querySelector('.login-card-form');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{5,25}$/, // Letras, numeros, guion y guion_bajo
    passwordS: /^.{0}\w{1,20}$/
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
    let user = document.getElementById('user');
    let pass = document.getElementById('pass');
    loginUser.user = validarCampo(expresiones.usuario, user.value, user.id);
    loginUser.pass = validarCampo(expresiones.passwordS, pass.value, pass.id);
    if (loginUser.user == true && loginUser.pass == true){
        form.submit();
    }
}

const close = function () {
    window.location = '../altar';
}

const validarForm = (e) => {
    switch (e.target.name){
        case 'user':
            loginUser.user = validarCampo(expresiones.usuario, e.target.value, e.target.id);
        break;

        case 'pass':
            loginUser.pass = validarCampo(expresiones.passwordS, e.target.value, e.target.id);
        break;
    }
}

const validarCampo = (exprecion, value, campo) => {
    if (exprecion.test(value)){
        document.getElementById(`${campo}`).classList.remove('invalid');
        document.getElementById(`${campo}`).classList.add('valid');
        return true;
    }else{
        document.getElementById(`${campo}`).classList.remove('valid');
        document.getElementById(`${campo}`).classList.add('invalid');
        return false;
    }
}


btnLock.addEventListener('click', alternateHidePass);

btnClose.addEventListener('click', close);

btnSubmit.addEventListener('click', submit);

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});