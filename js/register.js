let btnClose = document.getElementById('close');
const btnLocks = document.querySelectorAll('.lock');
const txtPass = document.querySelectorAll("input[type='password']");

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

btnLocks.forEach((span) => {
   span.addEventListener('click',alternateHidePass); 
});

btnClose.addEventListener('click',close);