<?php
/**
 * Created by PhpStorm.
 * User: ganyihuan
 * Date: 16/5/9
 * Time: 22:36
 */

header('content-type:text/html; charset="utf-8');
error_reporting(0);

//$_REQUEST[]   get() post()都能

$username = $_GET['username'];
$password = $_GET['password'];


echo 'name: '.$username.' password: '.$password;