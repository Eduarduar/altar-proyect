<?php

    include_once './db/queries.php';
    $consultor = new consultas();

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
        <title>Register</title>
    </head>
    <body>

        <div class="register-card-container">

            <div class="register-card">

                <div class="register-card-logo">

                    <img src="./img/Calavera_kawaii_dibujo_png.png" alt="logo">
                
                </div>

                <div class="register-card-header">

                    <h1>Register</h1>

                </div>

                <form action="#" class="register-card-form">

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">person</span>
                        <input type="text" placeholder="Enter your user name" required autofocus>
                    </div>

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">badge</span>
                        <input type="text" placeholder="Enter your name" required>
                    </div>

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">badge</span>
                        <input type="text" placeholder="Enter your last name" required>
                    </div>

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">call</span>
                        <input type="number" placeholder="Enter your telephone" required>
                    </div>

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">mail</span>
                        <input type="email" placeholder="Enter your email" required>
                    </div>

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">lock</span>
                        <input type="password" placeholder="Enter your password" required>
                    </div>

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">lock</span>
                        <input type="password" placeholder="Confirm your password"  required>
                    </div>

                    <button type="submit">Confirm</button>

                </form>
                
                <div class="register-card-footer">

                Do you already have an <a href="#">account</a>?

                </div>


            </div>

        </div>
        
    </body>
</html>