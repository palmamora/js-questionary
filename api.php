<?php

$link = mysqli_connect('localhost', 'root', '', 'js_questionary', 3306);
$method = strtoupper($_SERVER['REQUEST_METHOD']);

switch ($method) {
    case 'GET': {
            $rs = $link->query("SELECT * FROM industrias ORDER BY id;");
            $data = [];
            while ($row = $rs->fetch_assoc()) {
                array_push($data, $row);
            }
            $rs->close();
            header('HTTP/1.0 200 OK');
            header('Content-Type: application/json');
            echo json_encode($data);
            /*header('Content-Type: application/json');
            $o = new stdClass();
            $o->response = 'inside application/json';
            echo json_encode($o);*/
            break;
        }
    case 'DELETE': { 
            
            header('HTTP/1.0 200 OK');
            header('Content-Type: application/json');
            $id = file_get_contents('php://input',true);
            $link->query("DELETE FROM industrias WHERE id=$id;");
            echo json_encode('success');
            break;
        }
}