const btnAdd = document.getElementById('add');
const btnLogout = document.querySelector('.header-button-logout-container button');
const btnArchive = document.querySelectorAll('.save-item[id]');
const btnDelete = document.querySelector('.header-button-mode-delete-container button');
const btnConfiguration = document.querySelector('.header-button-configuration button');
let deleteMode = false;

const create = function () {
    if (deleteMode != true){
        window.location = '../altar/create';
    }
}

const logout = function () {
    if (deleteMode != true){
        window.location = '../altar/login';
    }
}

const openArchive = (e) => {
    if (deleteMode != true){
        window.location = `../altar/create?save=${e.target.id}`;
    }else{
        window.location = `../altar/saves?delete=${e.target.id}`;
    }
}

const modeDelete = function () {
    if (btnDelete.innerHTML == '<span class="material-symbols-outlined">delete</span>'){
        btnDelete.innerHTML = '<span class="material-symbols-outlined">close</span>';

        deleteMode = true;

    }else{
        btnDelete.innerHTML = '<span class="material-symbols-outlined">delete</span>';

        deleteMode = false;

    }
}

const confi = function () {
    if (deleteMode != true){
        window.location = '../altar/configuration';
    }
}

btnConfiguration.addEventListener('click', confi);

btnAdd.addEventListener('click',create);

btnLogout.addEventListener('click', logout);

btnArchive.forEach((div) => {
    div.addEventListener('click', openArchive);
});

btnDelete.addEventListener('click', modeDelete);