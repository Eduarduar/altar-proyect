<?php

    include_once 'db.php';
    include_once 'user_session.php';

    class consultas extends DB {
        
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

        public function comprobarUserByUserAndId($user, $id){
            $query = $this->connect()->prepare("SELECT * FROM users WHERE user = '$user' and ID = $id");
            $query->execute();
            if ($query->rowCount()){
                return true;
            }else{
                return false;
            }

        }

        public function getAltaresByUser($id) {
            return $this->connect()->query("SELECT * FROM altar WHERE user = $id");
        }

    }

?>