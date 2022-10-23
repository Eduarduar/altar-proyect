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

    if (isset($_GET['delete'])){
        if (!$consultar->confirmarAltarById($_GET['delete'], $_SESSION['id'])){
            header('location: ./saves');
        }

        $images = $consultar->getLocationImages($_GET['delete']);

        foreach ($images as $location) {
            unlink($location['location']);
        }

        $consultar->deleteAltar($_GET['delete']);

        header('location: ./saves');

    }

?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="shortcut icon" href="./img/Calavera_kawaii_dibujo_png.png" type="image/x-icon">
        <link rel="stylesheet" href="./css/saves.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Saves</title>
    </head>
    <body>

        <header class="header">

            <div class="container-center">

                <div class="header-logo-container">

                    <img  src="./img/Calavera_kawaii_dibujo_png.png" alt="">

                </div>

                <div class="header-buttons-container">

                    <div class="header-button-logout-container">

                        <button type="button">Logout</button>
                    
                    </div>

                    <div class="header-button-mode-delete-container">

                        <button type="button" ><span class="material-symbols-outlined">delete</span></button>

                    </div>

                    <div class="header-button-configuration">

                        <button type="button"><span class="material-symbols-outlined">settings</span></button>

                    </div>

                </div>

            </div>

        </header>

        <main class="main">

            <div class="container-center">

                <!-- formato de archivo altar guardado -->

                <div class="saves-item-container">

                    <?php

                        $items = $consultar->getAltaresByUser($_SESSION['id']);

                        foreach ($items as $item){

                            ?>

                                <div id="<?php echo $item['ID']; ?>" class="save-item">

                                    <div id="<?php echo $item['ID']; ?>" class="save-item-icon-container">

                                        <span id="<?php echo $item['ID']; ?>" class="material-symbols-outlined">description</span>

                                    </div>

                                    <div id="<?php echo $item['ID']; ?>" class="save-item-name"><?php echo $item['name']; ?></div>

                                </div>

                            <?php

                        }
                    
                    ?>

                    <div id="add"  class="item-add">

                        <div class="save-item-icon-container">

                            <span class="material-symbols-outlined">add</span>

                        </div>

                        <div class="save-item-name">Create</div>

                    </div>

                </div>

                <!-- --------------------------------- -->

            </div>

        </main>

        <script src="./js/saves.js"></script>
        
    </body>
</html>