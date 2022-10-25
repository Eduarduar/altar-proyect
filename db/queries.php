<?php

    include_once 'db.php';
    include_once 'user_session.php';

    class consultas extends DB {

        public function getID ($user, $pass) {
            $md5 = md5($pass);
            $query = $this->connect()->prepare("SELECT * FROM users WHERE user = '$user'");
            $query->execute();

            if ($query->rowCount()){
                foreach($query as $resultado){
                    $pass = $resultado['password'];
                    $id = $resultado['ID'];
                }

                if (password_verify($md5, $pass)){
                    return $id;
                }else{
                    return false;
                }

            }else{
                return false;
            }
        }

        public function comprobarPass ($user, $pass) {
            $md5 = md5($pass);
            $query = $this->connect()->prepare("SELECT * FROM users WHERE user = '$user'");
            $query->execute();

            if ($query->rowCount()){
                foreach($query as $resultado){
                    $pass = $resultado['password'];
                }

                if (password_verify($md5, $pass)){
                    return true;
                }else{
                    return false;
                }

            }else{
                return false;
            }
        }
        
        public function comprobarUser ($user, $email) {
            $query = $this->connect()->prepare("SELECT * FROM users WHERE user = '$user' or email = '$email'");
            $query->execute();
            if ($query->rowCount()){
                return true;
            }else{
                return false;
            }
        }

        public function insertUser($user, $email, $pass) {
            if ($this->comprobarUser($user, $email)){
                return false;
            }else{
                $md5 = md5($pass);
                $pass = password_hash($md5, PASSWORD_DEFAULT, ['cost' => 10]);
                $this->connect()->query("INSERT INTO users VALUES (NULL, '$user', '$email', '$pass')");
                return true;
            }
        }

        public function updatePass ($pass, $id) {
            $md5 = md5($pass);
            $pass = password_hash($md5, PASSWORD_DEFAULT, ['cost' => 10]);
            $this->connect()->query("UPDATE users SET password = '$pass' WHERE ID = $id");
        }

        public function comprobarUserByUserAndId($user, $id){
            $query = $this->connect()->prepare("SELECT * FROM users WHERE user = '$user' and ID = $id");
            $query->execute();
            if ($query->rowCount()){
                return true;
            }else{
                return false;
            }

        }

        public function getDataUser($id){
            return $this->connect()->query("SELECT user, email FROM users WHERE ID = $id");
        }

        public function updateUser($id, $user, $email){
            $this->connect()->query("UPDATE users SET user = '$user', email = '$email' WHERE ID = $id");
        }

        public function deleteUser($id){
            $this->connect()->query("DELETE FROM users WHERE ID = $id");
        }

        public function getAltaresByUser($id) {
            return $this->connect()->query("SELECT * FROM altar WHERE user = $id");
        }

        public function confirmarAltarById ($id, $idUser) {
            $query = $this->connect()->prepare("SELECT * FROM altar WHERE ID = $id AND user = $idUser");
            $query->execute();
            if ($query->rowCount()){
                return true;
            }else{
                return false;
            }
        }

        public function getNameAltar($id){
            return $this->connect()->query("SELECT name FROM altar WHERE ID = $id");
        }

        public function getImagenes($id) {
            return $this->connect()->query("SELECT * FROM images WHERE altar = $id");
        }

        public function getTexts($id){
            return $this->connect()->query("SELECT * FROM text WHERE altar = $id");
        }

        public function getLocationImages($id){
            return $this->connect()->query("SELECT location FROM images WHERE altar = $id ");
        }

        public function deleteAltar($id){
            $this->connect()->query("DELETE FROM altar WHERE ID = $id");
        }

        public function setAltar($name, $IdUser){
            $this->connect()->query("INSERT INTO altar VALUES(NULL, '$name' ,$IdUser)");
        }

        public function getIdAltar($name, $idUser){
            $query = $this->connect()->prepare("SELECT ID FROM altar WHERE name = '$name' AND user = $idUser");
            $query->execute();

            foreach($query as $id){
                return $id['ID'];
            }

        }

        public function confirmarAltarByName($name, $idUser){
            $query = $this->connect()->prepare("SELECT * FROM altar WHERE name = '$name' AND user = $idUser");
            $query->execute();
            if ($query->rowCount()){
                return true;
            }else{
                return false;
            }
        }

        public function setTextAltar($text, $idAltar, $position, $height, $width){
             $this->connect()->query("INSERT INTO text VALUES (NULL, '$text', $idAltar, $position, '$height', '$width')");
        }

        public function setImageAltar($location, $idAltar, $position){
            $this->connect()->query("INSERT INTO images VALUES (NULL, '$location', $idAltar, $position)");
        }

        public function updateTextAltar($id, $text, $height, $width){
            $this->connect()->query("UPDATE text SET text = '$text', height = '$height', width = '$width' WHERE ID = $id");
        }

        public function updateTitleAltar($id, $title){
            $this->connect()->query("UPDATE altar SET name = '$title' WHERE ID = $id");
        }

    }

?>