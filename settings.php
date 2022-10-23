<?php

    session_start();

    if (!isset($_SESSION['id']) and !isset($_SESSION['user'])){
        header('location: ./db/logout');
    }

    include_once './db/queries.php';
    $consultar = new consultas();

    $invalid = false;

    if (!$consultar->comprobarUserByUserAndId($_SESSION['user'] ,$_SESSION['id'])){
        header('location: ./db/logout');
    }

    if (isset($_GET['deleteAccount'])){
        if ($_GET['deleteAccount'] == true){
            
            $altares = $consultar->getAltaresByUser($_SESSION['id']);

            foreach ($altares as $registro){

                $images = $consultar->getLocationImages($registro['ID']);

                foreach ($images as $location){
                    unlink($location['location']);
                }

            }

            $consultar->deleteUser($_SESSION['id']);

            header('location: ./login');

        }
    }

    if (isset($_POST['user']) and isset($_POST['email'])){
        $consultar->updateUser($_SESSION['id'], $_POST['user'], $_POST['email']);
        $_SESSION['user'] = $_POST['user'];
    }
    
    if (isset($_POST['passA']) && isset($_POST['pass2']) && isset($_POST['pass'])){
        if ($consultar->comprobarPass($_SESSION['user'], $_POST['passA'])){
            $consultar->updatePass($_POST['pass'], $_SESSION['id']);
        }else{
            $invalid = true;
        }
    }

    $datos = $consultar->getDataUser($_SESSION['id']);

    foreach($datos as $registro){
        $user = $registro['user'];
        $email = $registro['email'];
    }

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="./css/settings.css">
        <link rel="shortcut icon" href="./img/Calavera_kawaii_dibujo_png.png" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <title>settings</title>
    </head>
    <body>
        
        <div class="settings-container">

            <div class="settings-button-exit">

                <span class="material-symbols-outlined">close</span>

            </div>

            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->

            <div class="change-pass hide">

                <div class="change-pass-header">

                    <h1>Change Password</h1>
                    
                    <?php
                    
                        if ($invalid){

                            ?>

                                <div class="change-pass-header-error-conteiner">

                                    <p>La contraseña es invalida</p>

                                </div>

                            <?php

                        }

                    ?>

                </div>

                <form action="./settings" method="POST" class="change-pass-form">

                    <div class="form-item">
                        <span id="lock" class="form-item-icon material-symbols-outlined lock">lock</span>
                        <input type="password" name="passA" id="passA" placeholder="Enter your password" required>
                        <p class="text-invalid">NO Espacios, max 20. min 1.</p>
                    </div>

                    <div class="form-item">
                        <span id="lock2" class="form-item-icon material-symbols-outlined lock">lock</span>
                        <input type="password" name="pass2" id="pass2" placeholder="New Password" required>
                        <p class="text-invalid">NO Espacios, max 20. min 8.</p>
                    </div>

                    <div class="form-item">
                        <span id="lock3" class="form-item-icon material-symbols-outlined lock">lock</span>
                        <input type="password" name="pass" id="pass" placeholder="Confirm your password" required>
                        <p class="text-invalid">La contraseña no coinside.</p>
                    </div>

                    <button type="button">Confirm</button>
                
                </form>

                <div class="container-button-account">

                    <button>account</button>

                </div>

            </div>

            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->

            <div class="settings">

                <div class="settings-header">

                    <h1>settings</h1>

                </div>

                <form action="./settings" method="POST" class="settings-form">

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">person</span>
                        <input type="text" name="user" id="user" placeholder="Enter your username" required value="<?php echo $user ?>">
                        <p class="text-invalid">NO Espacios, max 25. min 5.</p>
                    </div>

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">mail</span>
                        <input type="text" name="email" id="email" placeholder="Enter your email" required value="<?php echo $email ?>">
                        <p class="text-invalid">Ingresa un correo valido</p>
                    </div>

                    <button type="button">Save Changes</button>
                
                </form>

                <div class="container-button-change-pass">

                    <button>Change Password</button>

                </div>

                <div class="container-button-delete-account">

                        <button>Delete account</button>

                </div>

            </div>

        </div>

        <script src="./js/Evitar_reemvio.js"></script>
        <script>

            const nameUser = "<?php echo $user ?>";
            const emailUser = "<?php echo $email ?>";


        </script>
        <script src="./js/settings.js"></script>
        <script>

            <?php
            
                if ($invalid){

                    ?>

                        showAlternativeSetting();

                    <?php

                }
                        
            ?>

        </script>
        

    </body>
</html>