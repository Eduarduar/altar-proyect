<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="shortcut icon" href="./img/Calavera_kawaii_dibujo_png.png" type="image/x-icon">
        <link rel="stylesheet" href="./css/login.css">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <title>Sign in</title>
    </head>
    <body>

        <div class="login-card-container">

            <div class="login-card-button-exit">

                <span id="close" class="material-symbols-outlined">close</span>

            </div>

            <div class="login-card">

                <div class="login-card-logo">

                    <img src="./img/Calavera_kawaii_dibujo_png.png" alt="logo">
                
                </div>

                <div class="login-card-header">

                    <h1>Sign in</h1>

                </div>

                <form action="#" class="login-card-form">

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined">person</span>
                        <input type="text" placeholder="Enter your username" required autofocus>
                        <p class="text-invalid">El usuario o la contraseña no coinsiden</p>
                    </div>

                    <div class="form-item">
                        <span class="form-item-icon material-symbols-outlined lock">lock</span>
                        <input type="password" placeholder="Enter your password" required>
                        <p class="text-invalid">El usuario o la contraseña no coinsiden</p>
                    </div>

                    <button type="submit">Sing in</button>

                </form>
                
                <div class="login-card-footer">

                    You do not have an <a href="./register">account</a>?

                </div>


            </div>

        </div>

        <script src="./js/login.js"></script>
        
    </body>
</html>