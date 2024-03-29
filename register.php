<?php

    session_start();

    if (isset($_SESSION['id']) and isset($_SESSION['user'])){
        header('location: ./saves');
    }

    include_once './db/queries.php';
    $consultor = new consultas();

    $result = true;

    if (isset($_POST['user']) && isset($_POST['email']) && isset($_POST['pass2']) && isset($_POST['pass'])){
        if ($consultor->insertUser($_POST['user'],$_POST['email'],$_POST['pass2'])){
            header('location: ./login');
        }else{
            $result = false;
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="./img/Calavera_kawaii_dibujo_png.png" type="image/x-icon">
        <link rel="stylesheet" href="./css/register.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <title>Sing up</title>
    </head>
    <body>

        <div class="register-card-container">
            
            <div class="register-card-button-exit">

                <span id="close" class="material-symbols-outlined">close</span>

            </div>

            <div class="register-card">

                <div class="register-card-logo">

                    <img src="./img/Calavera_kawaii_dibujo_png.png" alt="logo">
                
                </div>

                <div class="register-card-header">

                    <h1>Sign up</h1>

                    <?php
                    
                        if ($result == false){
                            ?>
                                <div class="register-card-header-error">

                                    <p>Su usuario o email ya esta registrado</p>

                                </div>
                            <?php
                        }
                    
                    ?>

                </div>

                <form action="" method="POST" class="register-card-form">

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">person</span>
                        <input type="text" name="user" id="user" placeholder="Enter your user name" required>
                        <p class="text-invalid">NO Espacios, max 25. min 5.</p>
                    </div>

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">mail</span>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required>
                    </div>

                    <div class="form-item">
                        <span id="lock2" class="form-item-icon material-symbols-outlined lock">lock</span>
                        <input type="password" name="pass2" id="pass2" placeholder="Enter your password" required>
                        <p class="text-invalid">max 20. min 8.</p>
                    </div>

                    <div class="form-item">
                        <span id="lock" class="form-item-icon material-symbols-outlined lock">lock</span>
                        <input type="password" name="pass" id="pass" placeholder="Confirm your password"  required>
                        <p class="text-invalid">La contraseña no coinside.</p>
                    </div>

                    <button type="button">Confirm</button>

                </form>
                
                <div class="register-card-footer">

                Do you already have an <a href="./login">account</a>?

                </div>


            </div>

        </div>

        <script src="./js/Evitar_reemvio.js"></script>
        <script src="./js/register.js"></script>
        
    </body>
</html>