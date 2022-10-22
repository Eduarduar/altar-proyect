const btnAdd = document.getElementById('add');
const btnLogout = document.querySelector('.header-button-logout-container button');
const btnArchive = document.querySelectorAll('.save-item[id]');

const create = function () {
    window.location = '../altar/create';
}

const logout = function () {
    window.location = '../altar/login';
}

const openArchive = (e) => {
    window.location = `../altar/create?save=${e.target.id}`;
}

btnAdd.addEventListener('click',create);

btnLogout.addEventListener('click', logout);

btnArchive.forEach((div) => {
    div.addEventListener('click', openArchive);
});