<!doctype html>
<html lang="en">

<head>
    <title>Dashboard</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand navbar-light bg-dark"></nav>
    <div class="container">

            <h6 class="text-uppercase font-weight-bold">Industrias</h6>
            <input name="" id="" onclick="refrescarTablaIndustrias()" class="btn btn-primary btn-sm" type="button" value="Refrescar">
            <input name="" id="" onclick="addIndustria()" class="btn btn-success btn-sm" type="button" value="Añadir">
            <table class="table table-striped table-inverse table-responsive">
                <thead class="thead-inverse">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="tabla-industrias">

                </tbody>
            </table>
        </div>

        <div class="container">
            <h6 class="text-uppercase font-weight-bold">Pilares</h6>
            <input name="" id="" onclick="refrescarTablaPilares()" class="btn btn-primary btn-sm" type="button" value="Refrescar">
            <input name="" id="" onclick="addPilar()" class="btn btn-success btn-sm" type="button" value="Añadir">
            <table class="table table-striped table-inverse table-responsive">
                <thead class="thead-inverse">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="tabla-pilars">

                </tbody>
            </table>
        </div>

        <div class="container">
            <h6 class="text-uppercase font-weight-bold">Preguntas</h6>
            <input name="" id="" onclick="refrescarTablaPreguntas()" class="btn btn-primary btn-sm" type="button" value="Refrescar">
            <input name="" id="" onclick="addPilar()" class="btn btn-success btn-sm" type="button" value="Añadir">
            <table class="table table-striped table-inverse table-responsive">
                <thead class="thead-inverse">
                    <tr>
                        <th>ID</th>
                        <th>Pilar</th>
                        <th>Riesgo</th>
                        <th>Impacto Leve</th>
                        <th>Impacto Moderado</th>
                        <th>ImpactoGrave</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="tabla-questions">

                </tbody>
            </table>
        </div>



    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="./js/script.js"></script>
</body>

</html>