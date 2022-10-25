//VARIABLES
const btnClose = document.getElementById('close');
const btnAdd = document.getElementById('add');
const btnView = document.getElementById('view');
const txtTitleReference = document.getElementById('title-reference');
const txtTitle = document.getElementById('title');
const form = document.querySelector('.altar-card-header');
let NoItems = 0; // contador de item agregados
let NoContainers = 0; // contador de contenedores agregados
let activeAdd = true;
let modeVisibility = false;
let title = document.querySelector('.altar-card-title-container input');
let add = document.querySelector('.altar-card-item-button-add-container span');
const btnSave = document.querySelector('#save');
let medidas = "";
//Funciones

const close = function () { // función que regresa a la pagina index
    window.location = '../altar/saves';
}

const addCardItem = function (e = null, save = false, img = null, texto = null, height = null, width = null) { // función queagrega un nuevo item o contenedor con item segun sea necesario

    if (NoItems < 6){

        if (save == false){
            let inputHIde = document.createElement('input'); // creamos el input file que guardara la imagen para enviarla
            inputHIde.setAttribute('type','file');
            inputHIde.setAttribute('id',`imagen${NoItems + 1}`);
            inputHIde.setAttribute('name',`imagen${NoItems + 1}`);
            inputHIde.setAttribute('onchange','vista_preliminar(event)');
            

            let divHide = document.querySelector('.hide'); // la agregamos al contenedor oculto dentro del form
            divHide.appendChild(inputHIde);
        }

        let div = document.createElement('div'); // login-card-item
        div.setAttribute('class','altar-card-item');

        let button = document.createElement('button'); // btnFoto
        button.setAttribute('type','button');
        button.setAttribute('class','btnFoto');
        if (save == false) {
            button.innerHTML = `<label for="imagen${NoItems + 1}">Add photo</label>`;
            button.setAttribute('id',`img-foto-imagen${NoItems + 1}`);
        }else{
            button.innerHTML = `<img src="${img}"  class="img">`;
            button.style = `background-color: #fff0;border: none;`;
        }


        let divContainerText = document.createElement('div'); // altar-card-item-text-container
        divContainerText.setAttribute('class','altar-card-item-text-container');

        let textarea = document.createElement('textarea'); // textarea
        textarea.setAttribute('class','text');
        textarea.setAttribute('name',`text${NoItems + 1}`);
        textarea.classList.add('save');
        if (save == true){
            textarea.innerHTML = `${texto}`;
            textarea.setAttribute('style',`width: ${width}; height: ${height}`);
        }

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
            if (NoContainers != 0)
            Containers[NoContainers].classList.add('flex');
            Containers[NoContainers].appendChild(div);
            NoItems++;
        }

        if (NoItems == 6){
            let add = document.querySelector('.altar-card-item-button-add-container span');
            add.parentNode.removeChild(add);
            activeAdd = false;
        }

    }
}

const view = function () { // función que elimina los botones para que la pagina quede libre de botones y tambien se encargara de guardar
    let textarea = document.querySelectorAll('.altar-card-item-text-container');
    if (modeVisibility == false){
        title.parentNode.removeChild(title);

        if (activeAdd != false){
            add.parentNode.removeChild(add);
        }

        textarea.forEach((e) => {
            e.classList.add('active');
        });

        modeVisibility = true;

        btnView.innerHTML = '<span class="material-symbols-outlined">visibility_off</span>';

    }else{
        let titleContainer = document.querySelector('.altar-card-title-container');
        let addContainer = document.querySelector('.altar-card-item-button-add-container');

        titleContainer.appendChild(title);

        if (activeAdd != false){
            addContainer.appendChild(add);
        }

        textarea.forEach((e) =>{
            e.classList.remove('active');
        });
        
        modeVisibility = false;
        
        btnView.innerHTML = '<span class="material-symbols-outlined">visibility</span>';

    }
}

let vista_preliminar = (event) => { // función que se encarga de mostrar la imagen cargada en su contenedor corresponienten segun el id de su input file
    let leer_img = new FileReader();
    let id_img = document.getElementById(`img-foto-${event.target.id}`);

    leer_img.onload = () => {

       if (leer_img.readyState == 2){
           
            id_img.style = `background-color: #fff0;border: none;`;
            id_img.innerHTML = `<img src='${leer_img.result}'  class="img">`;
            if (imageMin == false){
                imageMin = true;
            }

       }

   }

   leer_img.readAsDataURL(event.target.files[0]);

}

const referenceTitle = (e) => {
    txtTitle.value = e.target.value;
}

const saveText = function () {
    const textsArea = document.querySelectorAll('.save');
    const textTitle = document.getElementById('title-reference');

    if (textTitle.value != ''){
        textsArea.forEach((textArea) => {

            medidas += `${textArea.offsetWidth}px,${textArea.offsetHeight}px,`;
        
        });
    
        medidas = medidas.substring(0, medidas.length - 1);
    
        form.setAttribute('action', `./create?medidas=${medidas}`);
    
        form.submit();
    }else{
        textTitle.classList.add('invalid')
        setTimeout(()=>{
            textTitle.classList.remove('invalid');
        }, 2000);
    }

}

// Listeners

btnAdd.addEventListener('click', addCardItem);

btnClose.addEventListener('click', close);

btnView.addEventListener('click', view);

txtTitleReference.addEventListener('click', referenceTitle);

txtTitleReference.addEventListener('keydown', referenceTitle);

txtTitleReference.addEventListener('keyup', referenceTitle);

btnSave.addEventListener('click',saveText);