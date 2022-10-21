const btnAdd = document.getElementById('add');
const btnLogout = document.querySelector('.header-button-logout-container button');

const create = function () {
    window.location = '../altar/create';
}

const logout = function () {
    window.location = '../altar/login';
}


btnAdd.addEventListener('click',create);

btnLogout.addEventListener('click', logout);