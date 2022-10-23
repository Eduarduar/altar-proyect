<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="stylesheet" href="./css/configuration.css">
        <link rel="shortcut icon" href="./img/Calavera_kawaii_dibujo_png.png" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <title>Configuration</title>
    </head>
    <body>
        
        <div class="configuration-container">

            <div class="configuration-button-exit">

                <span id="close" class="material-symbols-outlined">close</span>

            </div>

            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->

            <div class="change-pass">

                <div class="change-pass-header">

                    <h1>Change Password</h1>

                </div>

                <form action="./configuration" method="POST" class="change-pass-form">

                    <div class="form-item">
                        <span id="lock" class="form-item-icon material-symbols-outlined lock">lock</span>
                        <input type="password" name="user" id="user" placeholder="Enter your password" required>
                        <p class="text-invalid">NO Espacios, max 25. min 5.</p>
                    </div>

                    <div class="form-item">
                        <span id="lock" class="form-item-icon material-symbols-outlined lock">lock</span>
                        <input type="password" name="email" id="email" placeholder="New Password" required>
                        <p class="text-invalid">NO Espacios, max 25. min 5.</p>
                    </div>

                    <div class="form-item">
                        <span id="lock" class="form-item-icon material-symbols-outlined lock">lock</span>
                        <input type="password" name="email" id="email" placeholder="Confirm your password" required>
                        <p class="text-invalid">NO Espacios, max 25. min 5.</p>
                    </div>

                    <button type="button">Confirm</button>
                
                </form>

                <div class="container-buttons">

                    <button>acconut</button>

                </div>

            </div>

            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->
            <!-- ------------------------------------------------------------------------------------------------------------------------------------------------ -->

            <div class="configuration hide">

                <div class="configuration-header">

                    <h1>Configuration</h1>

                </div>

                <form action="./configuration" method="POST" class="configuration-form">

                    <div class="form-item">
                        <label for="">User Name</label>
                        <input type="text" name="user" id="user" placeholder="Enter your username" required>
                        <p class="text-invalid">NO Espacios, max 25. min 5.</p>
                    </div>

                    <div class="form-item">
                        <label for="">Email</label>
                        <input type="text" name="email" id="email" placeholder="Enter your email" required>
                        <p class="text-invalid">NO Espacios, max 25. min 5.</p>
                    </div>

                    <button type="button">Save Changes</button>
                
                </form>

                <div class="container-buttons">

                    <button>Change Password</button>

                </div>

            </div>

        </div>

    </body>
</html>