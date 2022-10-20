//VARIABLES
const btnClose = document.getElementById('close');
const btnAdd = document.getElementById('add');
const btnSave = document.getElementById('save');
let NoItems = 0; // contador de item agregados
let NoContainers = 0; // contador de contenedores agregados

//Funciones

const close = function () { // función que regresa a la pagina index
    window.location = '../altar';
}

const addCardItem = function () { // función queagrega un nuevo item o contenedor con item segun sea necesario

    let inputHIde = document.createElement('input'); // creamos el input file que guardara la imagen para enviarla
    inputHIde.setAttribute('type','file');
    inputHIde.setAttribute('id',`imagen${NoItems + 1}`);
    inputHIde.setAttribute('name',`imagen${NoItems + 1}`);
    inputHIde.setAttribute('onchange','vista_preliminar(event)');

    let divHide = document.querySelector('.hide'); // la agregamos al contenedor oculto dentro del form
    divHide.appendChild(inputHIde);

    let div = document.createElement('div'); // login-card-item
    div.setAttribute('class','altar-card-item');

    let button = document.createElement('button'); // btnFoto
    button.innerHTML = `<label for="imagen${NoItems + 1}">Add photo</label>`;
    button.setAttribute('class','btnFoto');
    button.setAttribute('id',`img-foto-${inputHIde.id}`);
    button.setAttribute('type','button');

    let divContainerText = document.createElement('div'); // altar-card-item-text-container
    divContainerText.setAttribute('class','altar-card-item-text-container');

    let textarea = document.createElement('textarea'); // textarea
    textarea.setAttribute('class','text');

    divContainerText.appendChild(textarea); // juntamos todo en orden correcto
    div.appendChild(button);
    div.appendChild(divContainerText);

    if (NoItems % 2 == 0){
        let header = document.getElementById('containers');
        let divContainer = document.createElement('div'); // login-card-item-container
        divContainer.setAttribute('class','altar-card-item-container');
        divContainer.appendChild(div);
        header.appendChild(divContainer); // agregamos el item a un nuevo contenedor
        NoItems++;
        NoContainers++;
    }else{
        let Containers = document.getElementsByClassName('altar-card-item-container'); // agregamos el item a contenedor correspondiente
        Containers[NoContainers].classList.add('flex');
        Containers[NoContainers].appendChild(div);
        NoItems++;
    }
}

const save = function () { // función que elimina los botones para que la pagina quede libre de botones y tambien se encargara de guardar
    let add = document.querySelector('.altar-card-item-button-add-container span');
    add.parentNode.removeChild(add);

    let save = document.querySelector('#save');
    save.parentElement.removeChild(save);
    
    let textarea = document.querySelectorAll('.altar-card-item-text-container');
    textarea.forEach((e) => {
        e.classList.add('active');
    });
}

let vista_preliminar = (event) => { // función que se encarga de mostrar la imagen cargada en su contenedor corresponienten segun el id de su input file
    let leer_img = new FileReader();
    let id_img = document.getElementById(`img-foto-${event.target.id}`);

    leer_img.onload = () => {

       if (leer_img.readyState == 2){
           
           id_img.style = `background-color: #fff0;border: none;`;
           id_img.innerHTML = `<img src='${leer_img.result}'  class="img">`;

       }

   }

   leer_img.readAsDataURL(event.target.files[0])

}

// Listeners

btnAdd.addEventListener('click', addCardItem);

btnClose.addEventListener('click', close);

btnSave.addEventListener('click', save);