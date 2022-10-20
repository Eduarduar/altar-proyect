<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="./css/create.css">
        <link rel="shortcut icon" href="./img/Calavera_kawaii_dibujo_png.png" type="image/x-icon">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>create altar</title>
    </head>
    <body>

        <div class="altar-card-container">

            <div class="altar-card-button-exit">

                <span id="close" class="material-symbols-outlined">close</span>

            </div>

            <div class="altar-card">

                <div class="altar-card-logo">

                    <img src="./img/altardemuertosvirtual.png" alt="logo">

                </div>

                <form method="POST" enctype="multipart/form-data" id="header" class="altar-card-header">

                    <div class="hide" style="display:none;">  <!-- este contenedor contiene todos los inputs file para evitar que moleste a la vista y se puedan cargar las imagenes -->

                        <input type="file" name="imagen0" id="imagen0" onchange="vista_preliminar(event);">

                    </div>

                    <div id="containers">

                        <div class="altar-card-item-container">

                            <div class="altar-card-item">

                                <button type="button" class="btnFoto" id="img-foto-imagen0"><label for="imagen0">Add photo</label></button>

                                <div class="altar-card-item-text-container">

                                    <textarea name="text" class="text"></textarea>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="altar-card-item-button-add-container">

                        <span id="add" class="material-symbols-outlined">add</span>

                    </div>

                    <div class="clear"></div>

                    <div class="altar-card-item-button-save-container">

                        <button id="save"><span class="material-symbols-outlined">save</span></button>

                    </div>

                </form>

            </div>

        </div>

        <script src="./js/create.js"></script>
        
    </body>
</html>