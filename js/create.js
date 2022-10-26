//VARIABLES
const btnClose = document.getElementById('close');
const btnAdd = document.getElementById('add');
const btnView = document.getElementById('view');
const txtTitleReference = document.getElementById('title-reference');
const txtTitle = document.getElementById('title');
const form = document.querySelector('.altar-card-header');
let NoItems = -1; // contador de item agregados
let NoContainers = 0; // contador de contenedores agregados
let activeAdd = true;
let modeVisibility = false;
let title = document.querySelector('.altar-card-title-container input');
let add = document.querySelector('.altar-card-item-button-add-container span');
const btnSave = document.querySelector('#save');
let medidas = "";
let onSave = false;
let ids;

const createItems = { // itemas creados
    item0: false,
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false
}

const textsareasFull = { // textareas con texto
    text0: false,
    text1: false,
    text2: false,
    text3: false,
    text4: false,
    text5: false,
    text6: false
}

const imagesLoads = { // imagenes cargadas
    image0: false,
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
    image6: false
}
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
        textarea.setAttribute('onkeypress','autoSize(this)');
        textarea.setAttribute('onkeyup','autoSize(this)');
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

        if (NoItems >= 6){
            let add = document.querySelector('.altar-card-item-button-add-container span');
            add.parentNode.removeChild(add);
            activeAdd = false;
        }

        switch (NoItems) {
            case 0:
                createItems.item0 = true;
            break;
            case 1:
                createItems.item1 = true;
            break;
            case 2:
                createItems.item2 = true;
            break;
            case 3:
                createItems.item3 = true;
            break;
            case 4:
                createItems.item4 = true;
            break;
            case 5:
                createItems.item5 = true;
            break;
            case 6:
                createItems.item6 = true;
            break;
        }

    }else{
        let add = document.querySelector('.altar-card-item-button-add-container span');
        add.parentNode.removeChild(add);
        activeAdd = false;
    }
}

const view = function () { // función que elimina los botones para que la pagina quede libre de botones y tambien se encargara de guardar
    let textareaContainer = document.querySelectorAll('.altar-card-item-text-container');
    let textarea = document.querySelectorAll('.altar-card-item-text-container textarea');

    if (modeVisibility == false){
        title.parentNode.removeChild(title);
        btnSave.parentNode.removeChild(btnSave);

        if (activeAdd != false){
            add.parentNode.removeChild(add);
        }

        textareaContainer.forEach((e) => {
            e.classList.add('active');
        });

        textarea.forEach((e)=>{
            autoSize(e);
        });

        modeVisibility = true;

        btnView.innerHTML = '<span class="material-symbols-outlined">visibility_off</span>';

    }else{
        let titleContainer = document.querySelector('.altar-card-title-container');
        let addContainer = document.querySelector('.altar-card-item-button-add-container');
        let btnSaveContainer = document.querySelector('.altar-card-item-button-save-container');

        titleContainer.appendChild(title);
        btnSaveContainer.appendChild(btnSave);

        if (activeAdd != false){
            addContainer.appendChild(add);
        }

        textareaContainer.forEach((e) =>{
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

       }

   }

   leer_img.readAsDataURL(event.target.files[0]);

    switch (id_img.id) {
        case 'img-foto-imagen0':
            imagesLoads.image0 = true;
        break;
        case 'img-foto-imagen1':
            imagesLoads.image1 = true;
        break;
        case 'img-foto-imagen2':
            imagesLoads.image2 = true;
        break;
        case 'img-foto-imagen3':
            imagesLoads.image3 = true;
        break;
        case 'img-foto-imagen4':
            imagesLoads.image4 = true;
        break;
        case 'img-foto-imagen5':
            imagesLoads.image5 = true;
        break;
        case 'img-foto-imagen6':
            imagesLoads.image6 = true;
        break;
    }

}

const referenceTitle = (e) => {
    txtTitle.value = e.target.value;
}

const saveText = function () {
    const textsArea = document.querySelectorAll('.save');
    const textTitle = document.getElementById('title-reference');
    let fullImagen = true;
    let validTitle = false;
    let validTexts = true;

    
    if (textTitle.value == ''){
        textTitle.classList.add('invalid')
        setTimeout(()=>{
            textTitle.classList.remove('invalid');
        }, 2000);
    }else{
        validTitle = true;
    }

    textsArea.forEach((textArea)=>{
        switch(textArea.name){
            case 'text0':
                if (textArea.value == ''){
                    invalidTextArea(textArea);
                }
            break;
            case 'text1':
                if (textArea.value == ''){
                    invalidTextArea(textArea);
                }
            break;
            case 'text2':
                if (textArea.value == ''){
                    invalidTextArea(textArea);
                }
            break;
            case 'text3':
                if (textArea.value == ''){
                    invalidTextArea(textArea);
                }
            break;
            case 'text4':
                if (textArea.value == ''){
                    invalidTextArea(textArea);
                }
            break;
            case 'text5':
                if (textArea.value == ''){
                    invalidTextArea(textArea);
                }
            break;
            case 'text6':
                if (textArea.value == ''){
                    invalidTextArea(textArea);
                }
            break;
        }

        if (validTexts == true)
            switch(textArea.name){
                case 'text0':
                    if (textArea.value != ''){
                        validTexts = true;
                    }else{
                        validTexts = false;
                    }
                break;
                case 'text1':
                    if (textArea.value != ''){
                        validTexts = true;
                    }else{
                        validTexts = false;
                    }
                break;
                case 'text2':
                    if (textArea.value != ''){
                        validTexts = true;
                    }else{
                        validTexts = false;
                    }
                break;
                case 'text3':
                    if (textArea.value != ''){
                        validTexts = true;
                    }else{
                        validTexts = false;
                    }
                break;
                case 'text4':
                    if (textArea.value != ''){
                        validTexts = true;
                    }else{
                        validTexts = false;
                    }
                break;
                case 'text5':
                    if (textArea.value != ''){
                        validTexts = true;
                    }else{
                        validTexts = false;
                    }
                break;
                case 'text6':
                    if (textArea.value != ''){
                        validTexts = true;
                    }else{
                        validTexts = false;
                    }
                break;
        
            }
        
    });

    if (!onSave){
        for(let x = 0; x <= NoItems; x++){     
                switch (x){
                    case 0:
                        if (imagesLoads.image0 != true){
                            invalidBottons(x);
                        }
                    break;
                    case 1:
                        if (imagesLoads.image1 != true){
                            invalidBottons(x);
                        }
                    break;
                    case 2:
                        if (imagesLoads.image2 != true){
                            invalidBottons(x);
                        }
                    break;
                    case 3:
                        if (imagesLoads.image3 != true){
                            invalidBottons(x);
                        }
                    break;
                    case 4:
                        if (imagesLoads.image4 != true){
                            invalidBottons(x);
                        }
                    break;
                    case 5:
                        if (imagesLoads.image5 != true){
                            invalidBottons(x);
                        }
                    break;
                    case 6:
                        if (imagesLoads.image6 != true){
                            invalidBottons(x);
                        }
                    break;
            }
            
            if (fullImagen == true)
                switch (x){
                    case 0:
                        if (imagesLoads.image0 != true){
                            fullImagen = false;
                        }else{
                            fullImagen = true;
                        }
                    break;
                    case 1:
                        if (imagesLoads.image1 != true){
                            fullImagen = false;
                        }else{
                            fullImagen = true;
                        }
                    break;
                    case 2:
                        if (imagesLoads.image2 != true){
                            fullImagen = false;
                        }else{
                            fullImagen = true;
                        }
                    break;
                    case 3:
                        if (imagesLoads.image3 != true){
                            fullImagen = false;
                        }else{
                            fullImagen = true;
                        }
                    break;
                    case 4:
                        if (imagesLoads.image4 != true){
                            fullImagen = false;
                        }else{
                            fullImagen = true;
                        }
                    break;
                    case 5:
                        if (imagesLoads.image5 != true){
                            fullImagen = false;
                        }else{
                            fullImagen = true;
                        }
                    break;
                    case 6:
                        if (imagesLoads.image6 != true){
                            fullImagen = false;
                        }else{
                            fullImagen = true;
                        }
                    break;
                }
        }
    }
    
    if (fullImagen == true && validTexts == true && validTitle == true){
        textsArea.forEach((textArea) => {

            medidas += `${textArea.offsetWidth}px,${textArea.offsetHeight}px,`;
        
        });
    
        medidas = medidas.substring(0, medidas.length - 1);
    
        if (!onSave){
            form.setAttribute('action', `./create?medidas=${medidas}`);
        }else{
            form.setAttribute('action', `./create?medidas=${medidas}&update=${onSave}&ids=${ids}`);
        }
        form.submit();
    
    }

}

const invalidBottons = function (x) {
    document.getElementById(`img-foto-imagen${x}`).classList.add('invalid');
    setTimeout(()=>{
        document.getElementById(`img-foto-imagen${x}`).classList.remove('invalid');
    }, 2000);
}

const invalidTextArea = function (element) {
    element.classList.add('invalid');
    setTimeout(()=>{
        element.classList.remove('invalid');
    }, 2000);
}

const autoSize = function(element){
    element.style.height = '42px';
    element.style.height = (8+element.scrollHeight) + 'px';
}

// Listeners

btnAdd.addEventListener('click', addCardItem);

btnClose.addEventListener('click', close);

btnView.addEventListener('click', view);

txtTitleReference.addEventListener('click', referenceTitle);

txtTitleReference.addEventListener('keydown', referenceTitle);

txtTitleReference.addEventListener('keyup', referenceTitle);

btnSave.addEventListener('click',saveText);