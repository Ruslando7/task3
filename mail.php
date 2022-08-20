<?php
if (isset($_REQUEST['name']) && isset($_REQUEST['phone']) && isset($_REQUEST['city'])) {
    $name = $_REQUEST['name'];
    $phone = $_REQUEST['phone'];
    $city = $_REQUEST['city'];
    /*if we used a data base*/
    /*$query = "INSERT INTO table (name, phone, city) VALUES ($name, $phone, $city)";
    mysqli_query($link, $query) or die(mysqli_error($link)); */
}