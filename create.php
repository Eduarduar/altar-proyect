<?php

    session_start();

    include_once './db/queries.php';
    $consultar = new consultas();

    if (!isset($_SESSION['user']) and !isset($_SESSION['id'])){
        header('location: ./db/logout');
    }

    if (!$consultar->comprobarUserByUserAndId($_SESSION['user'], $_SESSION['id'])){
        header('location: ./db/logout');
    }

    if (isset($_GET['save'])){
        if (!$consultar->confirmarAltarById($_GET['save'], $_SESSION['id'])){
            header('location: ./saves');
        }

        $names = $consultar->getNameAltar($_GET['save']);

        $imagenes = $consultar->getImagenes($_GET['save']);
        $texts = $consultar->getTexts($_GET['save']);

        $item = [];

        foreach ($imagenes as $images){
            $item += [
                $images['position'] => ['imagen' => $images['location']]
            ];
        }

        foreach ($texts as $text){
            $item[$text['position']] += [
                'text' => $text['text'],
                'height' => $text['height'],
                'width' => $text['width']
            ];
        }

        foreach ($names as $name){
            $altarName = $name['name'];
        }

    }

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="./css/create.css">
        <link rel="shortcut icon" href="./img/Calavera_kawaii_dibujo_png.png" type="image/x-icon">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?php if (isset($_GET['save'])){
                    echo 'update Altar';
                }else{
                    echo 'create Altar';
                } ?></title>
    </head>
    <body>

        <div class="altar-card-container">

            <div class="altar-card-button-exit">

                <span id="close" class="material-symbols-outlined">close</span>

            </div>

            <div class="altar-card">

                <div class="altar-card-title-container">

                    <input type="text" id="title-reference" placeholder="Nombre del altar" <?php if (isset($_GET['save'])){
                        echo 'value="'. $altarName .'"';
                    } ?>>

                </div>

                <div class="altar-card-logo">

                    <img src="./img/altardemuertosvirtual.png" alt="logo">

                </div>

                <form method="POST" enctype="multipart/form-data" id="header" class="altar-card-header">

                    <div class="hide" style="display:none;">  <!-- este contenedor contiene todos los inputs file para evitar que moleste a la vista y se puedan cargar las imagenes -->

                        <input type="text" name="title" id="title" <?php if (isset($_GET['save'])){
                            echo 'value="'. $altarName .'"';
                        } ?>>

                        <?php if (!isset($_GET['save'])){

                            ?>

                                <input type="file" name="imagen0" id="imagen0" onchange="vista_preliminar(event);">

                            <?php

                        }?>

                    </div>

                    <div id="containers">

                        <?php
                        
                            if (!isset($_GET['save'])){

                                ?>
                                
                                    <div class="altar-card-item-container">

                                        <div class="altar-card-item">

                                            <button type="button" class="btnFoto" id="img-foto-imagen0"><label for="imagen0">Add photo</label></button>

                                            <div class="altar-card-item-text-container">

                                                <textarea name="text" class="text0"></textarea>

                                            </div>

                                        </div>

                                    </div>
                                
                                <?php

                            }else{

                                ?>

                                    <div class="altar-card-item-container">

                                        

                                    </div>

                                <?php

                            }

                        ?>

                    </div>

                    <div class="altar-card-item-button-add-container">

                        <span id="add" class="material-symbols-outlined">add</span>

                    </div>

                    <div class="clear"></div>

                    <div class="altar-card-item-button-save-container">

                        <button type="button" id="save"><span class="material-symbols-outlined">save</span></button>

                    </div>

                </form>

            </div>

        </div>

        <script src="./js/create.js"></script>
        <?php
        
            if (isset($_GET['save'])){

                ?>
                
                    <script>

                        NoItems = -1;
                        NoContainers = 0;

                        <?php
                        
                            foreach($item as $registro){

                                ?>

                                    addCardItem(null, true, '<?php echo $registro['imagen']; ?>', '<?php echo $registro['text']; ?>', '<?php echo $registro['height']; ?>','<?php echo $registro['width']; ?>');

                                <?php

                            }
                        
                        ?>

                    </script>

                <?php

            }
        
        ?>
        
    </body>
</html>