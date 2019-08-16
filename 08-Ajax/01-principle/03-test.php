<?php
/**
 * Created by PhpStorm.
 * User: ganyihuan
 * Date: 16/5/10
 * Time: 10:33
 */

header('content-type:text/html; charset="utf-8');
error_reporting(0);

$news = array(
  array('title'=>'1','content'=>'a'),
  array('title'=>'2','content'=>'b'),
  array('title'=>'3','content'=>'c'),
  array('title'=>'4','content'=>'d')
);

echo json_encode($news);
