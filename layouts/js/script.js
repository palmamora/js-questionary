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

const refrescarTabla2 = () => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php?data=pilars";
  http.open("GET", url);
  http.send();
  http.onreadystatechange = (e) => {
    let data = JSON.parse(http.responseText);
    console.log(data);
    let tabla = document.getElementById("tabla-pilars");
    tabla.innerHTML = "";
    for (const key in data) {
      const element = data[key];
      tabla.innerHTML += `<tr>
                            <td>${element.id}</td>
                            <td>${element.name}</td>
                            <td><input name="" id="" onclick="eliminarIndustria(${element.id})" class="btn btn-primary" type="button" value="Eliminar"></td>
                        </tr>`;
    }
  };
};

const refrescarTabla3 = () => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php?data=questions";
  http.open("GET", url);
  http.send();
  http.onreadystatechange = (e) => {
    let data = JSON.parse(http.responseText);
    console.log(data);
    let tabla = document.getElementById("tabla-questions");
    tabla.innerHTML = "";
    for (const key in data) {
      const element = data[key];
      tabla.innerHTML += `<tr>
                            <td>${element.id}</td>
                            <td>${element.pilar}</td>
                            <td><textarea rows="2">${element.riesgo}</textarea></div></td>
                            <td><textarea rows="2">${element.impactoleve}</textarea></td>
                            <td><textarea rows="2">${element.impactomoderado}</textarea></td>
                            <td><textarea rows="2">${element.impactograve}</textarea></td>
                            <td><input name="" id="" onclick="eliminarIndustria(${element.id})" class="btn btn-primary" type="button" value="Eliminar"></td>
                        </tr>`;
    }
  };
};

const eliminarIndustria = (id) => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php";
  http.open("DELETE", url);
  http.send(id);
  http.onreadystatechange = (e) => {
    let data = JSON.stringify(http.responseText);
    console.log(data);
  };
  refrescarTabla();
};

const eliminarPilar = (id) => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php";
  http.open("DELETE", url);
  http.send(id);
  http.onreadystatechange = (e) => {
    let data = JSON.stringify(http.responseText);
    console.log(data);
  };
  refrescarTabla();
};

const addIndustria = () => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php";
  http.open("POST", url);

  let industria = window.prompt("Ingrese el nombre: ");
  console.log(industria);

  http.send(industria);
  http.onreadystatechange = (e) => {
    let data = JSON.stringify(http.responseText);
    console.log(data);
    refrescarTabla();
  };
};

const addPilar = () => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php?data=pilars";
  http.open("POST", url);

  let industria = window.prompt("Ingrese el nombre: ");
  console.log(industria);

  http.send(industria);
  http.onreadystatechange = (e) => {
    let data = JSON.stringify(http.responseText);
    console.log(data);
    refrescarTabla();
  };
};


refrescarTabla();
refrescarTabla2();
refrescarTabla3();