const preguntas_ = [];
const respuestas_ = [];
const host = "http://localhost/formulario/";

const dataMap = [];
const generarMapaCalor = () => {
  for (let i = 0; i < 3; i++) {
    dataMap[i] = [];
    for (let j = 0; j < 3; j++) {
      dataMap[i].push(0);
    }
  }

  for (let i = 0; i < respuestas_.length; i++) {
    dataMap[respuestas_[i].probabilidad - 1][respuestas_[i].impacto - 1]++;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (dataMap[i][j] !== 0) {
        document.getElementById("mc" + (i + 1) + (j + 1)).innerHTML =
          dataMap[i][j] + "";
      }
    }
  }
};

const getRespuestas = () => {
  for (let i = 0; i < preguntas_.length; i++) {
    respuestas_.push({ impacto: 0, probabilidad: 0, riesgo_res: 0 });
  }
  console.log(respuestas_);
};

const getPreguntas = () => {
  let http = new XMLHttpRequest();
  let url = `${host}api.php?data=questions&action=get`;
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

const actualizarRecomendacion = (n) => {
  let rec_ = document.getElementById("recomendacion");
  let rie_ = document.getElementById("riesgo_res");

  if (rie_.selectedIndex === 1) {
    rec_.innerHTML = `${preguntas_[n].rembajo}`;
  } else if (rie_.selectedIndex === 2) {
    rec_.innerHTML = `${preguntas_[n].remmedio}`;
  } else if (rie_.selectedIndex === 3) {
    rec_.innerHTML = `${preguntas_[n].remalto}`;
  } else if (rie_.selectedIndex === 4) {
    rec_.innerHTML = `${preguntas_[n].remcritico}`;
  } else if (rie_.selectedIndex === 0) {
    rec_.innerHTML = "";
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
    (imp === "Significativo" && pro === "Improbable") ||
    (imp === "Moderado" && pro === "Posible") ||
    (imp === "Leve" && pro === "Probable")
  ) {
    riesgo.selectedIndex = 2;
  } else if (
    (imp === "Significativo" && pro === "Posible") ||
    (imp === "Moderado" && pro === "Probable")
  ) {
    riesgo.selectedIndex = 3;
  } else if (imp === "Significativo" && pro === "Probable") {
    riesgo.selectedIndex = 4;
  }

  actualizarColorSelect();
  actualizarRecomendacion(pregunta);
};

const cargarInformacion = (n) => {
  let info = document.getElementById("helper");
  info.innerHTML = `<p style="font-weight:bold">Impacto:</p>
                    <strong style="font-weight:bold">-Leve:</strong> ${preguntas_[n].impactoleve}<br>
                    <strong style="font-weight:bold">-Moderado:</strong> ${preguntas_[n].impactomoderado}<br>
                    <strong style="font-weight:bold">-Significativo:</strong> ${preguntas_[n].impactograve}<br><br>
                    <p style="font-weight:bold">Probabilidad:</p>
                    <strong style="font-weight:bold">-Improbable:</strong> ${preguntas_[n].probimpr}<br>
                    <strong style="font-weight:bold">-Posible:</strong> ${preguntas_[n].probposi}<br>
                    <strong style="font-weight:bold">-Probable:</strong> ${preguntas_[n].probprob}<br>`;
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

const setProgreso = (n) => {
  let barra = document.getElementById("barra-progreso");
  barra.style = `width: ${n}%`;
  barra.ariaValueNow = n;
};

const setPregunta = (p) => {
  let span_progreso = document.getElementById("span-progreso");
  span_progreso.innerHTML = `Pregunta ${p + 1} de ${preguntas_.length}`;
};

let pregunta = 0;

const startTest = () => {
  show(2);
  cargarPregunta(pregunta);
  cargarRespuesta(pregunta);
  cargarInformacion(pregunta);
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
      generarMapaCalor();
      document.getElementById("mapaCompleto").style = "display:block";
      document.getElementById("tituloPDF").style = "display:block";
      return false;
    }

    cargarPregunta(pregunta);
    cargarRespuesta(pregunta);
    cargarInformacion(pregunta);
    actualizarColorSelect();
    actualizarRecomendacion(pregunta);
    setProgreso(Math.floor((pregunta * 100) / preguntas_.length));
    setPregunta(pregunta);
    if (pregunta !== 0) {
      document.getElementById("btnPrevQuestion").classList.remove("disabled");
    } else {
      document.getElementById("btnPrevQuestion").classList.add("disabled");
    }
  }
};

const prevQuestion = () => {
  pregunta--;

  cargarPregunta(pregunta);
  cargarRespuesta(pregunta);
  cargarInformacion(pregunta);
  actualizarColorSelect();
  actualizarRecomendacion(pregunta);
  setProgreso(Math.floor((pregunta * 100) / preguntas_.length));
  setPregunta(pregunta);
  if (pregunta !== 0) {
    document.getElementById("btnPrevQuestion").classList.remove("disabled");
  } else {
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
  respuestas_[n].impacto_text = imp_.options[imp].text;
  respuestas_[n].probabilidad = pro;
  respuestas_[n].probabilidad_text = pro_.options[pro].text;
  respuestas_[n].riesgo_res = rie;
  respuestas_[n].riesgo_res_text = rie_.options[rie].text;
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
    let rec_text = "";
    if (respuestas_[i].riesgo_res_text == "Alto") {
      rec_text = preguntas_[i].remalto;
    } else if (respuestas_[i].riesgo_res_text == "Medio") {
      rec_text = preguntas_[i].remmedio;
    } else if (respuestas_[i].riesgo_res_text == "Bajo") {
      rec_text = preguntas_[i].rembajo;
    } else if (respuestas_[i].riesgo_res_text == "Cr??tico") {
      rec_text = preguntas_[i].remcritico;
    }
    tabla.innerHTML += `<tr scope="row">
    <td>${preguntas_[i].pilar}</td>
    <td>${preguntas_[i].riesgo}</td>
    <td id="td-imp-${i}" class="">${respuestas_[i].impacto_text}</td>
    <td id="td-pro-${i}" class="">${respuestas_[i].probabilidad_text}</td>
    <td id="td-rie-${i}" class="">${respuestas_[i].riesgo_res_text}</td>
    <td id="td-rec-${i}" class="">${rec_text}</td>
    </tr>`;
  }
  document.getElementById("correo_").innerHTML =
    "Correo: " + document.getElementById("email").value;
  document.getElementById("industria_").innerHTML =
    "Industria: " +
    document.getElementById("select-industrias").options[
      document.getElementById("select-industrias").selectedIndex
    ].text;
  cargarColoresTabla();
  generarMapaCalor();
};

const cargarColoresTabla = () => {
  for (let i = 0; i < preguntas_.length; i++) {
    td_imp = document.getElementById("td-imp-" + i);
    td_pro = document.getElementById("td-pro-" + i);
    td_rie = document.getElementById("td-rie-" + i);
    //td_rec = document.getElementById("td-rec-" + i);
    switch (respuestas_[i].impacto_text) {
      case "Leve":
        td_imp.classList = "table-success";
        break;
      case "Moderado":
        td_imp.classList = "table-warning";
        break;
      case "Significativo":
        td_imp.classList = "table-danger";
        break;

      default:
        break;
    }

    switch (respuestas_[i].probabilidad_text) {
      case "Improbable":
        td_pro.classList = "table-success";
        break;
      case "Posible":
        td_pro.classList = "table-warning";
        break;
      case "Probable":
        td_pro.classList = "table-danger";
        break;

      default:
        break;
    }

    switch (respuestas_[i].riesgo_res_text) {
      case "Bajo":
        td_rie.classList = "table-success";
        //td_rec.classList = "table-success";
        break;
      case "Medio":
        td_rie.classList = "table-warning";
        //td_rec.classList = "table-warning";
        break;
      case "Alto":
        td_rie.classList = "table-danger";
        //td_rec.classList = "table-danger";
        break;
      case "Cr??tico":
        td_rie.style = "background-color:#cf817e;";
        //td_rec.style = "background-color:#cf817e;";
        break;

      default:
        break;
    }
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
  let url = `${host}api.php?data=industrias&action=get`;
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

const enviarPDF = (pdf, correo, industria) => {
  let http = new XMLHttpRequest();
  let url = `${host}enviar_correo.php`;
  let data = new FormData();
  let content = document.getElementById("divPDF");
  data.append("correo", correo);
  data.append("industria", industria);
  data.append("pdf", pdf);
  fetch(`${host}enviar_correo.php`, {
    method: "POST",
    body: data,
  })
    .then(function (r) {
      if (r.ok) {
        return r.text();
      } else {
        throw "Error en la llamada Ajax";
      }
    })
    .then(function (t) {
      console.log(t);
    })
    .catch(function (e) {
      console.log(e);
    });
};

const generarPDF = () => {
  fecha = new Date();
  let opt = {
    margin: 1,
    filename: `Resultados_${fecha.getDate()}_${
      fecha.getMonth() + 1
    }_${fecha.getFullYear()}.pdf`,
    image: {
      type: "jpeg",
      quality: 0.98,
    },
    html2canvas: {
      scale: 3, // A mayor escala, mejores gr??ficos, pero m??s peso
      letterRendering: true,
    },
    jsPDF: {
      unit: "in",
      format: "a3",
      orientation: "landscape", // landscape o portrait
    },
    pagebrak: {
      mode: "avoid-all",
      before: "#tituloPDF",
    },
  };
  let pdf = html2pdf()
    .set(opt)
    .from(document.getElementById("divPDF"))
    .save()
    .catch((err) => console.log(err));

  let pdf2 = html2pdf()
    .set(opt)
    .from(document.getElementById("divPDF"))
    .toPdf()
    .output("datauristring")
    .then(function (pdfAsString) {
      let correo = document.getElementById("email").value;
      let industria =
        document.getElementById("select-industrias").options[
          document.getElementById("select-industrias").selectedIndex
        ].text;
      enviarPDF(pdfAsString, correo, industria);
    });
};
