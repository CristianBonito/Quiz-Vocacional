const preguntas = [
  {
    pregunta: "¿Te interesa más optimizar procesos empresariales o crear software desde cero?",
    opciones: ["Optimizar procesos", "Crear software"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
  {
    pregunta: "¿Qué prefieres: gestionar infraestructuras o desarrollar aplicaciones?",
    opciones: ["Gestionar infraestructuras", "Desarrollar aplicaciones"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
  {
    pregunta: "¿Te interesa más estudiar redes y bases de datos o diseñar interfaces?",
    opciones: ["Redes y bases de datos", "Diseñar interfaces"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
  {
    pregunta: "¿Prefieres trabajar en la infraestructura o en el desarrollo de software?",
    opciones: ["Infraestructura", "Desarrollo de software"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
  {
    pregunta: "¿Te atrae más la seguridad de los sistemas o crear programas innovadores?",
    opciones: ["Seguridad de los sistemas", "Crear programas innovadores"],
    carrera: ["Ingeniería en Sistemas Computacionales", "Ingeniería Informática"],
  },
  {
    pregunta: "¿Prefieres administrar sistemas o desarrollar nuevas aplicaciones?",
    opciones: ["Administrar sistemas", "Desarrollar aplicaciones"],
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
  
  
