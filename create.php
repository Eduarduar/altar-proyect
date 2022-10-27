<?php

    session_start();
    

    
    if (!isset($_SESSION['user']) and !isset($_SESSION['id'])){ // comprobamos que tenga una sessión iniciada
        header('location: ./db/logout');
    }
    
    include_once './db/queries.php';
    $consultar = new consultas();
    
    if (!$consultar->comprobarUserByUserAndId($_SESSION['user'], $_SESSION['id'])){ // y comprobamos que su usuario si exista en la base de datos
        header('location: ./db/logout');
    }

    if (isset($_GET['save'])){
        if (!$consultar->confirmarAltarById($_GET['save'], $_SESSION['id'])){
            header('location: ./saves');
        }

        $names = $consultar->getNameAltar($_GET['save']);

        $imagenes = $consultar->getImagenes($_GET['save']);
        $texts = $consultar->getTexts($_GET['save']);

        $idsaves = '';
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

            $idsaves .= $text['ID'] . ',';
        }

        $idsaves .= $_GET['save'];

        foreach ($names as $name){
            $altarName = $name['name'];
        }

    }

    if (!isset($_GET['save']) and isset($_GET['medidas']) and isset($_POST['title'])){

        if (isset($_GET['update'])){
            $update = true;
        }else{
            $update = false;
        }

        if (isset($_GET['ids'])){
            $ids = $_GET['ids'];
            $ids = explode(',', $ids);
            $idAltar = array_pop($ids);
        }

        $NoTitle = 1;
        $title;
        if (!$update){
            if ($consultar->confirmarAltarByName($_POST['title'], $_SESSION['id'])){ // comprobamos que el nombre del altar no exista en los registros ligados al usuario
                do { // si existe modificamos el nombre para que no coinsida con otro
                    $title = $_POST['title'] . '('. $NoTitle .')'; 
                    $NoTitle++;
                } while ($consultar->confirmarAltarByName($title, $_SESSION['id'])); // hasta que ya no coinsida con otro
            }else{ // si no existe en el tabla de altares, guardamos el nombre proporcionando
                $title = $_POST['title'];
            }
        }else{
            $title = $_POST['title'];
        }
        
        $medidas = explode(',',$_GET['medidas']); // guardamos las medidas en un array usando explode
        $NoMedidas = count($medidas);// optiene la cantidad de medidas guardadas en el array medidas
        $NoItems = count($medidas) / 2; // optiene la cantidad de medidas ya agrupadas en 2
        $Medidas = []; // creamos el array donde se guardaran las medidas en grupos de 2
        $contador = 0; // un contador que nos ayuda a mantener la cuenta en el siguiente ciclo for
        
        for($x = -1; $x <= $NoMedidas-2; $x++){ // agrupamos las medidas de 2 en 2 para optener width y height
            if ($x % 2 != 0){
                $Medidas += [
                    $contador => ['width' => $medidas[$x+1]]
                ];
            }else{
                $Medidas[$contador] += ['height' => $medidas[$x+1]];
                $contador++;
            }
        }

        $itemTexts = []; // creamos el array que contenera las propiedades de cada texto
        
        // itemText = text, position, width, height
        if (!$update){
            for ($x = 0; $x <= $NoItems-1; $x++){ // agrupamos las propiedades de cada texto
                $itemTexts += [
                    $x => [
                        'text' => $_POST['text'. $x],
                        'position' => $x,
                        'width' => $Medidas[$x]['width'],
                        'height' => $Medidas[$x]['height']
                    ]
                ];
            }
        }else{
            for ($x = 0; $x <= $NoItems-1; $x++){ // agrupamos las propiedades de cada texto
                $itemTexts += [
                    $x => [
                        'text' => $_POST['text'. $x],
                        'id' => $ids[$x],
                        'width' => $Medidas[$x]['width'],
                        'height' => $Medidas[$x]['height']
                    ]
                ];
            }
        }

        function uploadImages($consultar ,$nameImage, $idAltar, $position){
            $directorio = 'img/imagenes/';
            $nameRandom = substr( md5(microtime()), 1 , 15); // generamos nombre aleatorio
            $explode = explode('.', $_FILES[$nameImage]['name']); // sacamos el nombre con extencion
            $extencion = array_pop($explode); // sacamos extencion
            $newName = $nameRandom . '.' . $extencion; // agregamos el nuevo nombre con la extencion optenida
            $nameFull = './' . $directorio . $newName; // agregamos la dirección completa con el nuevo nombre
            if (move_uploaded_file($_FILES[$nameImage]['tmp_name'], $nameFull)){  // subimos el archivo con el nuevo nombre                
                $consultar->setImageAltar($nameFull, $idAltar, $position); // registramos la dirección de la imagen en la base de datos
            }
        }

        if (!$update){   
            $consultar->setAltar($title, $_SESSION['id']); // generamos un nuevo registro de altar
            $idAltar = $consultar->getIdAltar($title, $_SESSION['id']); // optenemos el id del altar que acabamos de registrar
            foreach($itemTexts as $itemText){ // insertamos todos los texto relacionandolos con el altar que acabamos de crear
                $consultar->setTextAltar($itemText['text'], $idAltar, $itemText['position'], $itemText['height'], $itemText['width']);
            }
        }else{
            foreach($itemTexts as $itemText){ // insertamos todos los texto relacionandolos con el altar que acabamos de crear
                $consultar->updateTextAltar($itemText['id'], $itemText['text'], $itemText['height'], $itemText['width']);
            }
        }

        if (!$update){
            for($x = 0; $x <= 6; $x++){
                if (isset($_FILES['imagen'.$x])){
                    uploadImages($consultar, 'imagen'.$x, $idAltar, $x);
                }else{
                    continue;
                }
            }
        }else{
            $consultar->updateTitleAltar($idAltar, $title);
        }

        header('location: ./saves');

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

                    <div class="hide">  <!-- este contenedor contiene todos los inputs file para evitar que moleste a la vista y se puedan cargar las imagenes -->

                        <input type="text" name="title" id="title" <?php if (isset($_GET['save'])){
                            echo 'value="'. $altarName .'"';
                        } ?>>

                        <!-- <?php if (!isset($_GET['save'])){

                            ?>

                            <?php

                        }?> -->

                    </div>

                    <div id="containers">

                        <div class="altar-card-item-container">                

                        </div>

                    </div>

                    <div class="altar-card-item-button-add-container">

                        <span id="add" class="material-symbols-outlined">add</span>

                    </div>

                    <div class="clear"></div>

                    <div class="container-buttons">

                        <div class="altar-card-item-button-save-container">

                            <button type="button" id="save"><span class="material-symbols-outlined">save</span></button>

                        </div>

                    </div>

                </form>

            </div>

            <div class="container-buttons">

                <div class="altar-card-item-button-view-container">

                    <button type="button" id="view"><span class="material-symbols-outlined">visibility</span></button>

                </div>

            </div>

        </div>
        
        <script src="./js/create.js"></script>
        <?php
        
            if (isset($_GET['save'])){

                ?>
                
                    <script>

                        onSave = true;

                        ids = '<?php echo $idsaves; ?>';

                        <?php
                        
                            foreach($item as $registro){

                                ?>

                                    addCardItem(null, true, '<?php echo $registro['imagen']; ?>', '<?php echo $registro['text']; ?>', '<?php echo $registro['height']; ?>','<?php echo $registro['width']; ?>');

                                <?php

                            }
                        
                        ?>

                        NoItems = 6;
                        addCardItem();

                    </script>

                <?php

            }
        
        ?>
        <script src="./js/saveAltar.js"></script>
        
    </body>
</html>