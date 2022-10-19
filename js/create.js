//VARIABLES
const btnClose = document.getElementById('close');
const btnAdd = document.getElementById('add');
const btnSave = document.getElementById('save');
let NoItems = 0;
let NoContainers = 0;

//Funciones

const close = function () { // función que regresa a la pagina index
    window.location = '../altar';
}

const addCardItem = function () { // función queagrega un nuevo item o contenedor con item segun sea necesario

    let div = document.createElement('div'); // login-card-item
    div.setAttribute('class','altar-card-item');

    let button = document.createElement('button'); // btnFoto
    let text = document.createTextNode('Add photo');
    button.setAttribute('class','btnFoto');
    button.appendChild(text);

    let divContainerText = document.createElement('div'); // altar-card-item-text-container
    divContainerText.setAttribute('class','altar-card-item-text-container');

    let textarea = document.createElement('textarea'); // textarea
    textarea.setAttribute('class','text');

    divContainerText.appendChild(textarea);
    div.appendChild(button);
    div.appendChild(divContainerText);

    if (NoItems % 2 == 0){
        let header = document.getElementById('containers');
        let divContainer = document.createElement('div'); // login-card-item-container
        divContainer.setAttribute('class','altar-card-item-container');
        divContainer.appendChild(div);
        header.appendChild(divContainer);
        NoItems++;
        NoContainers++;
    }else{
        let Containers = document.getElementsByClassName('altar-card-item-container');
        Containers[NoContainers].classList.add('flex');
        Containers[NoContainers].appendChild(div);
        NoItems++;
    }
}

const save = function () {
    let add = document.querySelector('.altar-card-item-button-add-container span');
    add.parentNode.removeChild(add);

    let save = document.querySelector('#save');
    save.parentElement.removeChild(save);
    
    let textarea = document.querySelectorAll('.altar-card-item-text-container');
    textarea.forEach((e) => {
        e.classList.add('active');
    });
}

// Listeners

btnAdd.addEventListener('click', addCardItem);

btnClose.addEventListener('click', close);

btnSave.addEventListener('click', save);