let btnClose = document.getElementById('close');
const btnLocks = document.querySelectorAll('.lock');
const txtPass = document.querySelectorAll("input[type='password']");


const form = document.querySelector('.register-card-form');
const inputs = document.querySelectorAll('.register-card-form input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{5,25}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{8,20}$/, // 8 a 30 digitos.
    passwordS: /^.{0,20}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const registro = {
    user: false,
    email: false,
    passN: false,
    passC: false
}

const alternateHidePass = (e) => {

    if (e.target.id == 'lock2'){
        if (e.target.innerHTML == 'lock_open'){
            e.target.innerHTML = 'lock';
            txtPass[0].removeAttribute('type');
            txtPass[0].setAttribute('type','password');
        }else{
            e.target.innerHTML = 'lock_open';
            txtPass[0].removeAttribute('type');
            txtPass[0].setAttribute('type','text');
        }
    }else{
        if (e.target.innerHTML == 'lock_open'){
            e.target.innerHTML = 'lock';
            txtPass[1].removeAttribute('type');
            txtPass[1].setAttribute('type','password');
        }else{
            e.target.innerHTML = 'lock_open';
            txtPass[1].removeAttribute('type');
            txtPass[1].setAttribute('type','text');
        }
    }
}

const close = function () {
    window.location = '../altar';
}

const validarForm = (e) => {
    switch (e.target.name){
        case 'user':
            registro.user = validarCampo(expresiones.usuario, e.target.value, e.target.id);
            break;
        
        case 'email':
            registro.email = validarCampo(expresiones.correo, e.target.value, e.target.id);
            break;
        
        case 'pass2':
            registro.passN = validarCampo(expresiones.password, e.target.value, e.target.id);
            registro.passC = validarPassword(e.target.id.substring(0, e.target.id.length - 1));
            break;

        case 'pass': 
            registro.passC = validarPassword(e.target.id);
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

btnLocks.forEach((span) => {
   span.addEventListener('click',alternateHidePass); 
});

btnClose.addEventListener('click',close);

inputs.forEach((input) => {
    input.addEventListener('keyup',validarForm);
    input.addEventListener('blur',validarForm);
});