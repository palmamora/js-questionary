const refrescarTabla = () => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php";
  http.open("GET", url);
  http.send();
  http.onreadystatechange = (e) => {
    let data = JSON.parse(http.responseText);
    console.log(data);
    let tabla = document.getElementById("tabla-industrias");
    tabla.innerHTML = "";
    for (const key in data) {
      const element = data[key];
      tabla.innerHTML += `<tr>
                            <td>${element.id}</td>
                            <td>${element.nombre}</td>
                            <td><input name="" id="" onclick="eliminarIndustria(${element.id})" class="btn btn-primary" type="button" value="Eliminar"></td>
                        </tr>`;
    }
  };
};

const eliminarIndustria = (id) => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php";
  http.open("DELETE", url);
  let formData = new FormData();
  http.send(id);
  http.onreadystatechange = (e) => {
    let data = JSON.stringify(http.responseText);
    console.log(data);
  };
  refrescarTabla();
};
