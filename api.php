<?php

$link = mysqli_connect('localhost', 'root', '', 'js_questionary', 3306);
$method = strtoupper($_SERVER['REQUEST_METHOD']);

switch ($method) {
    case 'GET': {
            if (isset($_GET['data']) && $_GET['data'] == "pilars") {
                $rs = $link->query("SELECT * FROM pilars ORDER BY id;");
                $data = [];
                while ($row = $rs->fetch_assoc()) {
                    array_push($data, $row);
                }
                $rs->close();
                header('HTTP/1.0 200 OK');
                header('Content-Type: application/json');
                echo json_encode($data);
                break;
            }else if (isset($_GET['data']) && $_GET['data'] == "questions") {
                $rs = $link->query("SELECT * FROM questions ORDER BY pilar;");
                $data = [];
                while ($row = $rs->fetch_assoc()) {
                    array_push($data, $row);
                }
                $rs->close();
                header('HTTP/1.0 200 OK');
                header('Content-Type: application/json');
                echo json_encode($data);
                break;
            }
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
            $id = file_get_contents('php://input', true);
            $link->query("DELETE FROM industrias WHERE id=$id;");
            echo json_encode('success');
            break;
        }

    case 'POST': {
            header('HTTP/1.0 200 OK');
            header('Content-Type: application/json');
            $nombre = file_get_contents('php://input', true);
            $link->query("INSERT INTO industrias(nombre) VALUES('$nombre');");
            echo json_encode('success');
            break;
        }
}
