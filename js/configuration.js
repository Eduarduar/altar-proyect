const btnShowChangePass = document.querySelector('.container-button-change-pass button');
const btnShowAccount = document.querySelector('.container-button-account button');
const containerAccount = document.querySelector('.configuration');
const containerChangePass = document.querySelector('.change-pass');
const btnLocks = document.querySelectorAll('.lock');
const txtPass = document.querySelectorAll("input[type='password']");
const formAccount = document.querySelector('.configuration-form');
const formChangePass = document.querySelector('.change-pass-form');
const inputs = document.querySelectorAll('.configuration-container input');
const btnSubmitAccount = document.querySelector('.configuration-form button');
const btnSubmitChangePass = document.querySelector('.change-pass-form button');
const btnClose = document.querySelector('.configuration-button-exit span');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{5,25}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{0}\w{8,20}$/, // 8 a 30 digitos.
    passwordS: /^.{0}\w{1,20}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const account = {
    user: false,
    email: false
}

const changePass = {
    passA: false,
    passN: false,
    passC: false
}

const showAlternativeSetting = function () {
    if (containerChangePass.classList.value.includes('hide')){
        containerChangePass.classList.remove('hide');
        containerAccount.classList.add('hide');
    }else{
        containerAccount.classList.remove('hide');
        containerChangePass.classList.add('hide');
    }
}

const alternatePass = function (e, index) {
    if (e.target.innerHTML == 'lock_open'){
        e.target.innerHTML = 'lock';
        txtPass[index].removeAttribute('type');
        txtPass[index].setAttribute('type','password');
    }else{
        e.target.innerHTML = 'lock_open';
        txtPass[index].removeAttribute('type');
        txtPass[index].setAttribute('type','text');
    }
}

const alternateHidePass = (e) => {
    if (e.target.id == 'lock'){
        alternatePass(e, 0);
    }else if (e.target.id == 'lock2'){
        alternatePass(e, 1);
    }else if (e.target.id == 'lock3'){
        alternatePass(e, 2);
    }
}

const validarForm = (e) => {
    switch (e.target.name){
        case 'user':
            account.user = validarCampo(expresiones.usuario, e.target.value, e.target.id);
            break;
        
        case 'email':
            account.email = validarCampo(expresiones.correo, e.target.value, e.target.id);
            break;
        
        case 'pass2':
            changePass.passN = validarCampo(expresiones.password, e.target.value, e.target.id);
            changePass.passC = validarPassword(e.target.id.substring(0, e.target.id.length - 1));
            break;

        case 'pass': 
            changePass.passC = validarPassword(e.target.id);
            break;

        case 'passA':
            changePass.passA = validarCampo(expresiones.passwordS, e.target.value, e.target.id);
            break;

    }
}

const validarPassword = (campo) => {
    if ((document.getElementById(`${campo}`).value == document.getElementById(`${campo + "2"}`).value) && ((document.getElementById(`${campo}`).value != "") && (document.getElementById(`${campo + "2"}`).value != ""))){
        document.getElementById(`${campo}`).classList.remove('invalid');
        document.getElementById(`${campo}`).classList.add('valid');
        return true;
    }else{
        document.getElementById(`${campo}`).classList.remove('valid');
        document.getElementById(`${campo}`).classList.add('invalid');
        return false; 
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

const submitAccount = function () {
    if (account.user == true && account.email == true){
        formAccount.submit();
    }else{
        let user = document.getElementById('user');
        let email = document.getElementById('email');
        validarCampo(expresiones.usuario, user.value, user.id);
        validarCampo(expresiones.correo, email.value, email.id);
    }
}

const submitChangePass = function () {
    if (changePass.passA == true && changePass.passC == true && changePass.passN == true){
        formChangePass.submit();
    }else{
        let passA = document.getElementById('passA');
        let passN = document.getElementById('pass2');
        let passC = document.getElementById('pass');
        validarCampo(expresiones.password, passA.value, passA.id); 
        validarCampo(expresiones.password, passN.value, passN.id); 
        validarPassword(passC.id);
    }
}

const close = function () {
    window.location = '../altar/saves';
}

btnLocks.forEach((span) => {
    span.addEventListener('click',alternateHidePass); 
});

btnShowAccount.addEventListener('click', showAlternativeSetting);
btnShowChangePass.addEventListener('click', showAlternativeSetting);

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm);
    input.addEventListener('blur', validarForm);
});

btnSubmitAccount.addEventListener('click', submitAccount);
btnSubmitChangePass.addEventListener('click', submitChangePass);
btnClose.addEventListener('click', close);