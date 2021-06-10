<?php

$link = mysqli_connect('localhost', 'root', '', 'js_questionary', 3306);
$method = strtoupper($_SERVER['REQUEST_METHOD']);

switch ($method) {
    case 'GET': {
            if (isset($_GET['data']) && $_GET['data'] == "pilars" && isset($_GET['action']) && $_GET['action'] == 'get') {
                $rs = $link->query("SELECT * FROM pilars ORDER BY id;");
                $data = [];
                while ($row = $rs->fetch_assoc()) {
                    array_push($data, $row);
                }
                $rs->close();
                header('HTTP/1.0 200 OK');
                header('Content-Type: application/json');
                echo json_encode($data, JSON_FORCE_OBJECT);

                break;
            } else if (isset($_GET['data']) && $_GET['data'] == "questions" && isset($_GET['action']) && $_GET['action'] == 'get') {
                $rs = $link->query("SELECT * FROM questions ORDER BY id;");
                $data = [];
                while ($row = $rs->fetch_assoc()) {
                    array_push($data, $row);
                }
                $rs->close();
                header('HTTP/1.0 200 OK');
                header('Content-Type: application/json');
                echo json_encode($data, JSON_FORCE_OBJECT);
                break;
            } else if (isset($_GET['data']) && $_GET['data'] == 'industrias' && isset($_GET['action']) && $_GET['action'] == 'get') {
                $rs = $link->query("SELECT * FROM industrias ORDER BY id;");
                $data = [];
                while ($row = $rs->fetch_assoc()) {
                    array_push($data, $row);
                }
                $rs->close();
                header('HTTP/1.0 200 OK');
                header('Content-Type: application/json');
                echo json_encode($data, JSON_FORCE_OBJECT);
                break;
            } else if (isset($_GET['data']) && $_GET['data'] == 'industrias' && isset($_GET['action']) && $_GET['action'] == 'delete' && isset($_GET['id'])) {
                header('HTTP/1.0 200 OK');
                header('Content-Type: application/json');
                $id = $_GET['id'];
                $link->query("DELETE FROM industrias WHERE id=$id;");
                echo json_encode('success');
                break;
            } else if (isset($_GET['data']) && $_GET['data'] == 'pilars' && isset($_GET['action']) && $_GET['action'] == 'delete' && isset($_GET['id'])) {
                header('HTTP/1.0 200 OK');
                header('Content-Type: application/json');
                $id = $_GET['id'];
                $link->query("DELETE FROM pilars WHERE id=$id;");
                echo json_encode('success');
                break;
            }else if (isset($_GET['data']) && $_GET['data'] == 'questions' && isset($_GET['action']) && $_GET['action'] == 'delete' && isset($_GET['id'])) {
                header('HTTP/1.0 200 OK');
                header('Content-Type: application/json');
                $id = $_GET['id'];
                $link->query("DELETE FROM questions WHERE id=$id;");
                echo json_encode('success');
                break;
            } else if (isset($_GET['data']) && $_GET['data'] == 'industrias' && isset($_GET['action']) && $_GET['action'] == 'post' && isset($_GET['nombre'])) {
                header('HTTP/1.0 200 OK');
                header('Content-Type: application/json');
                $nombre = $_GET['nombre'];
                $link->query("INSERT INTO industrias(nombre) VALUES('$nombre');");
                echo json_encode('success');
                break;
            }else if (isset($_GET['data']) && $_GET['data'] == 'pilars' && isset($_GET['action']) && $_GET['action'] == 'post' && isset($_GET['nombre'])) {
                header('HTTP/1.0 200 OK');
                header('Content-Type: application/json');
                $nombre = $_GET['nombre'];
                $link->query("INSERT INTO pilars(name) VALUES('$nombre');");
                echo json_encode('success');
                break;
            }
        }
}
