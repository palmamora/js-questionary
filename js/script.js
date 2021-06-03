const preguntas_ = [];
const respuestas_ = [];

const getRespuestas = () => {
  for (let i = 0; i < preguntas_.length; i++) {
    respuestas_.push({ impacto: 0, probabilidad: 0, riesgo_res: 0 });
  }
  console.log(respuestas_);
};

const getPreguntas = () => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php?data=questions&action=get";
  http.open("GET", url);
  http.send();
  http.onreadystatechange = (e) => {
    let data = JSON.parse(http.responseText);
    for (const key in data) {
      const element = data[key];
      preguntas_[key] = element;
    }
  };
};

getPreguntas();

const actualizarColorSelect = (n) => {
  let rie_ = document.getElementById("riesgo_res");

  if (rie_.selectedIndex === 1) {
    rie_.style.backgroundColor = "#dbf2e3";
  } else if (rie_.selectedIndex === 2) {
    rie_.style.backgroundColor = "#fcefdc";
  } else if (rie_.selectedIndex === 3) {
    rie_.style.backgroundColor = "#f7dddc";
  } else if (rie_.selectedIndex === 4) {
    rie_.style.backgroundColor = "#cf817e";
  } else if (rie_.selectedIndex === 0) {
    rie_.style.backgroundColor = "#f7f7f9";
  }
};

const calcularRiesgo = () => {
  let imp_ = document.getElementById("impacto");
  let imp = imp_.options[imp_.selectedIndex].text;
  let pro_ = document.getElementById("probabilidad");
  let pro = pro_.options[pro_.selectedIndex].text;

  let riesgo = document.getElementById("riesgo_res");
  if (imp === "-" || pro === "-") {
    riesgo.selectedIndex = 0;
  } else if (
    (imp === "Leve" && pro === "Improbable") ||
    (imp === "Moderado" && pro === "Improbable") ||
    (imp === "Leve" && pro === "Posible")
  ) {
    riesgo.selectedIndex = 1;
  } else if (
    (imp === "Catastrófico" && pro === "Improbable") ||
    (imp === "Moderado" && pro === "Posible") ||
    (imp === "Leve" && pro === "Probable")
  ) {
    riesgo.selectedIndex = 2;
  } else if (
    (imp === "Catastrófico" && pro === "Posible") ||
    (imp === "Moderado" && pro === "Probable")
  ) {
    riesgo.selectedIndex = 3;
  } else if (imp === "Catastrófico" && pro === "Probable") {
    riesgo.selectedIndex = 4;
  }

  actualizarColorSelect();
};

let pregunta = 0;

const startTest = () => {
  show(2);
  cargarPregunta(pregunta);
  cargarRespuesta(pregunta);
  actualizarColorSelect();
  setProgreso(0, pregunta);
  if (pregunta == 0) {
    document.getElementById("btnPrevQuestion").classList.add("disabled");
  }
};

const nextQuestion = () => {
  if (verificarRespuesta()) {
    guardarRespuesta(pregunta);
    pregunta++;
    document.getElementById("feedback-pregunta").style = "display: none";
    if (pregunta === preguntas_.length) {
      show(3);
      cargarTabla();
      document.getElementById("tablaCompleta").style = "display:block";
      return false;
    }

    cargarPregunta(pregunta);
    cargarRespuesta(pregunta);
    actualizarColorSelect();
    setProgreso(Math.floor((pregunta * 100) / preguntas_.length));
    setPregunta(pregunta);
    if (pregunta !== 0) {
      document.getElementById("btnPrevQuestion").classList.remove("disabled");
    }else{
      document.getElementById("btnPrevQuestion").classList.add("disabled");
    }
  }
};

const prevQuestion = () => {
  pregunta--;

  cargarPregunta(pregunta);
  cargarRespuesta(pregunta);
  actualizarColorSelect();
  setProgreso(Math.floor((pregunta * 100) / preguntas_.length));
  setPregunta(pregunta);
  if (pregunta !== 0) {
    document.getElementById("btnPrevQuestion").classList.remove("disabled");
  }else{
    document.getElementById("btnPrevQuestion").classList.add("disabled");
  }
  document.getElementById("feedback-pregunta").style = "display: none";
};

const limpiarRespuesta = () => {
  let impacto = document.getElementById("impacto");
  impacto.selectedIndex = 0;
  proba = document.getElementById("probabilidad");
  proba.selectedIndex = 0;
  let riesgo = document.getElementById("riesgo_res");
  riesgo.selectedIndex = 0;
};

const cargarPregunta = (n) => {
  let pilar = document.getElementById("pilar");
  pilar.innerHTML = preguntas_[n]["pilar"];
  let riesgo = document.getElementById("riesgo");
  riesgo.innerHTML = preguntas_[n]["riesgo"];
};

const guardarRespuesta = (n) => {
  let imp_ = document.getElementById("impacto");
  let imp = imp_.selectedIndex;
  let pro_ = document.getElementById("probabilidad");
  let pro = pro_.selectedIndex;
  let rie_ = document.getElementById("riesgo_res");
  let rie = rie_.selectedIndex;
  respuestas_[n].impacto = imp;
  respuestas_[n].probabilidad = pro;
  respuestas_[n].riesgo_res = rie;
};

const cargarRespuesta = (n) => {
  let imp_ = document.getElementById("impacto");
  imp_.selectedIndex = respuestas_[n].impacto;
  let pro_ = document.getElementById("probabilidad");
  pro_.selectedIndex = respuestas_[n].probabilidad;
  let rie_ = document.getElementById("riesgo_res");
  rie_.selectedIndex = respuestas_[n].riesgo_res;
};

const cargarTabla = () => {
  tabla = document.getElementById("tabla");
  tabla.innerHTML = "";
  for (let i = 0; i < preguntas_.length; i++) {
    tabla.innerHTML += `<tr class="table-warning">
    <td>${preguntas_[i].pilar}</td>
    <td>${preguntas_[i].riesgo}</td>
    <td>${respuestas_[i].impacto}</td>
    <td>${respuestas_[i].probabilidad}</td>
    <td>${respuestas_[i].riesgo_res}</td>
    </tr>`;
  }
};

var tableToExcel = (function () {
  var uri = "data:application/vnd.ms-excel;base64,",
    template =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
    base64 = function (s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    },
    format = function (s, c) {
      return s.replace(/{(\w+)}/g, function (m, p) {
        return c[p];
      });
    };
  return function (table, name) {
    if (!table.nodeType) table = document.getElementById(table);
    var ctx = { worksheet: name || "Worksheet", table: table.innerHTML };
    window.location.href = uri + base64(format(template, ctx));
  };
})();

const secciones = [
  "div-inicio",
  "div-datos-iniciales",
  "div-preguntas",
  "div-resultados",
];

const show = (n) => {
  for (const i in secciones) {
    document.getElementById(secciones[i]).style = "display:none";
  }
  document.getElementById(secciones[n]).style = "display:block";
};

const validarEmail = (e) => {
  if (
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(e)
  ) {
    return true;
  } else {
    return false;
  }
};

const validarDatosIniciales = () => {
  let email = document.getElementById("email");
  if (validarEmail(email.value)) {
    email.classList = "form-control is-valid";
    return true;
  } else {
    email.classList = "form-control is-invalid";
    return false;
  }
};

const btnDatosIniciales = () => {
  if (!validarDatosIniciales()) {
    document.getElementById("feedback-correo").style = "display: block";
  } else {
    startTest();
  }
};

const cargarIndustrias = () => {
  let http = new XMLHttpRequest();
  let url = "http://localhost/formulario/api.php?data=industrias&action=get";
  http.open("GET", url);
  http.send();
  http.onreadystatechange = (e) => {
    let data = JSON.parse(http.responseText);
    let tabla = document.getElementById("select-industrias");
    tabla.innerHTML = "";
    for (const key in data) {
      const element = data[key];
      tabla.innerHTML += `<option>${element.nombre}</option>`;
    }
  };
};

cargarIndustrias();

const setProgreso = (n) => {
  let barra = document.getElementById("barra-progreso");
  barra.style = `width: ${n}%`;
  barra.ariaValueNow = n;
};

const setPregunta = (p) => {
  let span_progreso = document.getElementById("span-progreso");
  span_progreso.innerHTML = `Pregunta ${p + 1} de ${preguntas_.length}`;
};

const verificarRespuesta = () => {
  let imp = document.getElementById("impacto");
  let prob = document.getElementById("probabilidad");
  //let riesgo_res = document.getElementById('riesgo_res');
  if (imp.selectedIndex == 0 || prob.selectedIndex == 0) {
    document.getElementById("feedback-pregunta").style = "display: block";
    return false;
  } else {
    return true;
  }
};
