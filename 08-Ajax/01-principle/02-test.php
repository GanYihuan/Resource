<?php
/**
 * Created by PhpStorm.
 * User: ganyihuan
 * Date: 16/5/9
 * Time: 22:36
 */

header('content-type:text/html; charset="utf-8"');
error_reporting(0);

$username = $_GET['username'];
// $username = $_POST['username'];
$password = $_GET['password'];
// $password = $_POST['password'];
// $_REQUEST[]   get() post()都能

$arr1 = array('leo','momo');
$arr2 = array('username'=>'gan','password'=>'123');

echo 'name: '.$username.' password: '.$password;
// echo json_encode($arr2);
