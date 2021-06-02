const refrescarTablaIndustrias = () => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php?data=industrias&action=get";
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
                            <td><input name="" id="" onclick="eliminarIndustria(${element.id})" class="btn btn-danger btn-sm" type="button" value="Eliminar"></td>
                        </tr>`;
    }
  };
};

const refrescarTablaPilares = () => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php?data=pilars&action=get";
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
                            <td><input name="" id="" onclick="eliminarPilar(${element.id})" class="btn btn-danger btn-sm" type="button" value="Eliminar"></td>
                        </tr>`;
    }
  };
};

const refrescarTablaPreguntas = () => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php?data=questions&action=get";
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
                            <td><input name="" id="" onclick="eliminarPregunta(${element.id})" class="btn btn-danger btn-sm" type="button" value="Eliminar"></td>
                        </tr>`;
    }
  };
};

const eliminarIndustria = (id) => {
  let http = new XMLHttpRequest();
  let url = `http://localhost/formulario/api.php?data=industrias&action=delete&id=${id}`;
  http.open("GET", url);
  http.send();
  http.onreadystatechange = (e) => {
    let data = JSON.stringify(http.responseText);
    console.log(data);
  };
  refrescarTablaIndustrias();
};

const eliminarPilar = (id) => {
  let http = new XMLHttpRequest();
  let url = `http://localhost/formulario/api.php?data=pilars&action=delete&id=${id}`;
  http.open("GET", url);
  http.send();
  http.onreadystatechange = (e) => {
    let data = JSON.stringify(http.responseText);
    console.log(data);
  };
  refrescarTablaPilares();
};

const eliminarPregunta = (id) => {
  let http = new XMLHttpRequest();
  let url = `http://localhost/formulario/api.php?data=questions&action=delete&id=${id}`;
  http.open("GET", url);
  http.send();
  http.onreadystatechange = (e) => {
    let data = JSON.stringify(http.responseText);
    console.log(data);
  };
  refrescarTablaPreguntas();
};

const addIndustria = () => {
  let industria = window.prompt("Ingrese el nombre: ");
  let http = new XMLHttpRequest();
  let url = `http://localhost/formulario/api.php?data=industrias&action=post&nombre=${industria}`;
  http.open("GET", url);
  http.send();
  http.onreadystatechange = (e) => {
    let data = JSON.stringify(http.responseText);
    console.log(data);
    refrescarTablaIndustrias();
  };
};

const addPilar = () => {
  let pilar = window.prompt("Ingrese el nombre: ");
  let http = new XMLHttpRequest();
  let url = `http://localhost/formulario/api.php?data=pilars&action=post&nombre=${pilar}`;
  http.open("GET", url);
  http.send();
  http.onreadystatechange = (e) => {
    let data = JSON.stringify(http.responseText);
    console.log(data);
    refrescarTablaPilares();
  };
};


refrescarTablaIndustrias();
refrescarTablaPilares();
refrescarTablaPreguntas();