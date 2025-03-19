const preguntas = [
    {
      pregunta: "¿Te gusta resolver problemas complejos y lógicos?",
      opciones: ["Sí, mucho", "Prefiero algo más práctico"],
      carrera: ["Sistemas Computacionales", "Informática"],
    },
    {
      pregunta: "¿Te interesa desarrollar aplicaciones móviles o web?",
      opciones: ["Sí, me encanta", "Prefiero gestionar redes"],
      carrera: ["Sistemas Computacionales", "Informática"],
    },
    {
      pregunta: "¿Te gusta la programación más que la administración?",
      opciones: ["Sí, definitivamente", "Prefiero organizar información"],
      carrera: ["Sistemas Computacionales", "Informática"],
    },
    {
      pregunta: "¿Te interesa más la ciberseguridad o el desarrollo de software?",
      opciones: ["Desarrollo de software", "Ciberseguridad"],
      carrera: ["Sistemas Computacionales", "Informática"],
    },
    {
      pregunta: "¿Prefieres analizar datos o gestionar sistemas?",
      opciones: ["Analizar datos", "Gestionar sistemas"],
      carrera: ["Sistemas Computacionales", "Informática"],
    },
    {
      pregunta: "¿Te gustaría más trabajar en desarrollo o en soporte técnico?",
      opciones: ["Desarrollo", "Soporte técnico"],
      carrera: ["Sistemas Computacionales", "Informática"],
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
    let resultado = puntaje[0] > puntaje[1] ? "Sistemas Computacionales" : "Informática";
    let explicacion =
      resultado === "Sistemas Computacionales"
        ? "Te gusta la programación, resolver problemas complejos y crear soluciones digitales."
        : "Te interesa la administración de sistemas, redes y bases de datos.";
  
    localStorage.setItem("resultado", resultado);
    localStorage.setItem("explicacion", explicacion);
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
  