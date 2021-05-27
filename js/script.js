const preguntas = {
  1: {
    pilar: "Confidencialidad",
    riesgo: "Acceso no autorizado a los datos personales",
    impacto: {
      Leve: "Casi nulo, o efectos menores en la organización. No se evidencia desmedro en la confidencialidad, integridad y disponibilidad de la información.",
      Moderado:
        "Efecto manejable, sin mayor afectación en la organización. Se evidencia afectación leve en la confidencialidad, integridad y/o disponibilidad de la información que puede ser manejada.",
      Catastrófico:
        "Efecto irreversible en la organización. Se evidencia afectación irreversible en la confidencialidad, integridad y/o disponibilidad de la información.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
  2: {
    pilar: "Confidencialidad",
    riesgo: "Fuga de Información",
    impacto: {
      Leve: "Casi nulo, o efectos menores en la organización. No se evidencia desmedro en la confidencialidad, integridad y disponibilidad de la información.",
      Moderado:
        "Efecto manejable, sin mayor afectación en la organización. Se evidencia afectación leve en la confidencialidad, integridad y/o disponibilidad de la información que puede ser manejada.",
      Catastrófico:
        "Efecto irreversible en la organización. Se evidencia afectación irreversible en la confidencialidad, integridad y/o disponibilidad de la información.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
  3: {
    pilar: "Integridad",
    riesgo: "Modificación o alteración de datos personales no intencionada",
    impacto: {
      Leve: "Casi nulo, o efectos menores en la organización. No se evidencia desmedro en la confidencialidad, integridad y disponibilidad de la información.",
      Moderado:
        "Efecto manejable, sin mayor afectación en la organización. Se evidencia afectación leve en la confidencialidad, integridad y/o disponibilidad de la información que puede ser manejada.",
      Catastrófico:
        "Efecto irreversible en la organización. Se evidencia afectación irreversible en la confidencialidad, integridad y/o disponibilidad de la información.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
  4: {
    pilar: "Integridad",
    riesgo: "Pérdida o borrado no intencionado de datos personales",
    impacto: {
      Leve: "Casi nulo, o efectos menores en la organización. No se evidencia desmedro en la confidencialidad, integridad y disponibilidad de la información.",
      Moderado:
        "Efecto manejable, sin mayor afectación en la organización. Se evidencia afectación leve en la confidencialidad, integridad y/o disponibilidad de la información que puede ser manejada.",
      Catastrófico:
        "Efecto irreversible en la organización. Se evidencia afectación irreversible en la confidencialidad, integridad y/o disponibilidad de la información.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
  5: {
    pilar: "Disponibilidad",
    riesgo: "Falta de procesos para el ejercicio de derechos (del titular)",
    impacto: {
      Leve: "No hay multas o sanciones asociadas. No se evidencia incumplimiento.",
      Moderado:
        "Pueden existir multas o sanciones menores. Se evidencia incumplimiento en algunos aspectos legales.",
      Catastrófico:
        "Multas o sanciones inminentes. Incumplimiento legislativo evidente.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
  6: {
    pilar: "Cumplimiento",
    riesgo: "Recolección inadecuada de datos personales",
    impacto: {
      Leve: "No hay multas o sanciones asociadas. No se evidencia incumplimiento.",
      Moderado:
        "Pueden existir multas o sanciones menores. Se evidencia incumplimiento en algunos aspectos legales.",
      Catastrófico:
        "Multas o sanciones inminentes. Incumplimiento legislativo evidente.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
  7: {
    pilar: "Cumplimiento",
    riesgo: "Uso de fuentes de datos no legítimas",
    impacto: {
      Leve: "No hay multas o sanciones asociadas. No se evidencia incumplimiento.",
      Moderado:
        "Pueden existir multas o sanciones menores. Se evidencia incumplimiento en algunos aspectos legales.",
      Catastrófico:
        "Multas o sanciones inminentes. Incumplimiento legislativo evidente.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
  8: {
    pilar: "Cumplimiento",
    riesgo: "Almacenamiento inadecuado de datos personales",
    impacto: {
      Leve: "No hay multas o sanciones asociadas. No se evidencia incumplimiento.",
      Moderado:
        "Pueden existir multas o sanciones menores. Se evidencia incumplimiento en algunos aspectos legales.",
      Catastrófico:
        "Multas o sanciones inminentes. Incumplimiento legislativo evidente.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
  9: {
    pilar: "Cumplimiento",
    riesgo: "Uso/Tratamiento inadecuado de datos personales",
    impacto: {
      Leve: "No hay multas o sanciones asociadas. No se evidencia incumplimiento.",
      Moderado:
        "Pueden existir multas o sanciones menores. Se evidencia incumplimiento en algunos aspectos legales.",
      Catastrófico:
        "Multas o sanciones inminentes. Incumplimiento legislativo evidente.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
  10: {
    pilar: "Cumplimiento",
    riesgo: "Cesión inadecuada de datos personales",
    impacto: {
      Leve: "No hay multas o sanciones asociadas. No se evidencia incumplimiento.",
      Moderado:
        "Pueden existir multas o sanciones menores. Se evidencia incumplimiento en algunos aspectos legales.",
      Catastrófico:
        "Multas o sanciones inminentes. Incumplimiento legislativo evidente.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
  11: {
    pilar: "Cumplimiento",
    riesgo: "Destrucción inadecuada de datos personales",
    impacto: {
      Leve: "No hay multas o sanciones asociadas. No se evidencia incumplimiento.",
      Moderado:
        "Pueden existir multas o sanciones menores. Se evidencia incumplimiento en algunos aspectos legales.",
      Catastrófico:
        "Multas o sanciones inminentes. Incumplimiento legislativo evidente.",
    },
    Probabilidad: {
      Improbable:
        "Poca frecuencia de materialización o se presume que no llegará a materializarse.",
      Posible:
        "Materialización ocasional o se presume que eventualmente podría materializarse.",
      Probable:
        "Materialización frecuente o se presume que llegará a materializarse.",
    },
  },
};

const respuestas = {
  1: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  2: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  3: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  4: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  5: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  6: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  7: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  8: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  9: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  10: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  11: {
    impacto: 0,
    probabilidad: 0,
    riesgo_res: 0,
  },
  nombre: "",
  industria: "",
};

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
    rie_.style.backgroundColor = "#55595";
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

let pregunta = 1;

const startTest = () => {
  show(2);
  if (pregunta === 1) {
    document.getElementById("btnPrevQuestion").setAttribute("disabled", "true");
  }
  cargarPregunta(1);
  cargarRespuesta(1);
};

const nextQuestion = () => {
  guardarRespuesta(pregunta);
  pregunta++;
  if (pregunta === 12) {
    show(3);
    cargarTabla();
    document.getElementById("tablaCompleta").style = "display:block";
    return false;
  }
  if (pregunta !== 1) {
    document.getElementById("btnPrevQuestion").setAttribute("disabled", "");
  } else {
  }

  cargarPregunta(pregunta);
  cargarRespuesta(pregunta);
};

const prevQuestion = () => {
  pregunta--;

  cargarPregunta(pregunta);
  cargarRespuesta(pregunta);
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
  pilar.innerHTML = preguntas[n].pilar;
  let riesgo = document.getElementById("riesgo");
  riesgo.innerHTML = preguntas[n].riesgo;
  console.log(preguntas[n].riesgo);
};

const guardarRespuesta = (n) => {
  let imp_ = document.getElementById("impacto");
  let imp = imp_.selectedIndex;
  let pro_ = document.getElementById("probabilidad");
  let pro = pro_.selectedIndex;
  let rie_ = document.getElementById("riesgo_res");
  let rie = rie_.selectedIndex;
  respuestas[n].impacto = imp;
  respuestas[n].probabilidad = pro;
  respuestas[n].riesgo_res = rie;
  console.log(respuestas[n]);
};

const cargarRespuesta = (n) => {
  let imp_ = document.getElementById("impacto");
  imp_.selectedIndex = respuestas[n].impacto;
  let pro_ = document.getElementById("probabilidad");
  pro_.selectedIndex = respuestas[n].probabilidad;
  let rie_ = document.getElementById("riesgo_res");
  rie_.selectedIndex = respuestas[n].riesgo_res;
};

const cargarTabla = () => {
  tabla = document.getElementById("tabla");

  tabla.innerHTML = "";
  console.table(respuestas);
  for (let i = 1; i < 12; i++) {
    tabla.innerHTML += `<tr class="table-warning">
    <td>${preguntas[i].pilar}</td>
    <td>${preguntas[i].riesgo}</td>
    <td>${respuestas[i].impacto}</td>
    <td>${respuestas[i].probabilidad}</td>
    <td>${respuestas[i].riesgo_res}</td>
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

const industrias = ["Telecomunicaciones", "Agroindustria", "Informática"];

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

const btnDatosIniciales = ()=>{
  if(!validarDatosIniciales()){
    document.getElementById('feedback-correo').style = "display: block"
  }else{
    startTest();
  }
}
