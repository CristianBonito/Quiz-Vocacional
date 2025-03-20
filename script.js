const preguntas = [
  {
    pregunta: "¿Qué te interesa más?",
    opciones: ["Crear programas y aplicaciones", "Administrar redes y datos"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
  {
    pregunta: "¿En qué prefieres enfocarte?",
    opciones: ["Programación y desarrollo de software", "Gestión de tecnología y seguridad"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
  {
    pregunta: "¿Qué materias te gustan más?",
    opciones: ["Matemáticas y lógica", "Infraestructura y redes"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
  {
    pregunta: "¿Dónde te gustaría trabajar?",
    opciones: ["Creando software y apps", "Administrando sistemas y redes"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
  {
    pregunta: "¿Qué te gustaría aprender?",
    opciones: ["Programación y desarrollo web", "Bases de datos y ciberseguridad"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
  {
    pregunta: "¿Qué problema prefieres resolver?",
    opciones: ["Hacer que un programa funcione mejor", "Optimizar redes y seguridad de datos"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
];

  let indicePregunta = 0;
  let puntaje = [0, 0]; // [Sistemas, Informática]
  
  function iniciarQuiz() {
    location.href = "quiz.html";
  }
  
  function cargarPregunta() {
    if (indicePregunta >= preguntas.length) {
      mostrarResultado();
      return;
    }
  
    document.getElementById("pregunta").textContent =
      preguntas[indicePregunta].pregunta;
    document.querySelectorAll(".opcion")[0].textContent =
      preguntas[indicePregunta].opciones[0];
    document.querySelectorAll(".opcion")[1].textContent =
      preguntas[indicePregunta].opciones[1];
  }
  
  function respuesta(opcion) {
    if (opcion === 1) {
      puntaje[0]++;
    } else {
      puntaje[1]++;
    }
  
    indicePregunta++;
    cargarPregunta();
  }
  
  function mostrarResultado() {
    let resultado = puntaje[0] > puntaje[1] ? "Ingeniería en Sistemas Computacionales" : "Ingeniería Informática";
    let explicacion =
      resultado === "Ingeniería en Sistemas Computacionales"
        ? "Te atrae la gestión de redes, la seguridad y la infraestructura tecnológica. Sistemas Computacionales te permite dominar la administración de sistemas y redes, así como optimizar procesos tecnológicos."
        : "Te apasiona el desarrollo de software y aplicaciones. Informática se enfoca en crear soluciones digitales y gestionar bases de datos, permitiéndote diseñar herramientas innovadoras.";
  
    // Guardar en el localStorage
    localStorage.setItem("resultado", resultado);
    localStorage.setItem("explicacion", explicacion);
  
    // Redirigir a la página de resultados
    location.href = "resultado.html";
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("btnIniciar")) {
      document.getElementById("btnIniciar").addEventListener("click", iniciarQuiz);
    }
  
    if (document.getElementById("pregunta")) {
      cargarPregunta();
    }
  
    if (document.getElementById("resultado")) {
      document.getElementById("resultado").textContent = localStorage.getItem(
        "resultado"
      );
      document.getElementById("explicacion").textContent = localStorage.getItem(
        "explicacion"
      );
    }
  });
  
  
