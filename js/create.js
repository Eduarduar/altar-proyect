//VARIABLES
let btnClose = document.getElementById('close');
let btnAdd = document.getElementById('add');
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

// Listeners

btnAdd.addEventListener('click', addCardItem);

btnClose.addEventListener('click',close);