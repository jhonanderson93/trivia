const preguntas = [
    {
      pregunta: "¿Cuál es el nombre completo de Sebastián?",
      respuestas: ["Felicio Ignacio Anastasio Crustáceo Sebastián", "Rey de los cangrejos Merlino Sebastian", "Crustaceo sebastian",
       "Ignacio Anastacio Sebastian"],
      correcta: 0
    },
    {
      pregunta: "¿Como se llama la madre de Ariel?",
      respuestas: ["Alicia", "Athenea", "Andrea", "Adelia"],
      correcta: 1
    },
    {
      pregunta: "¿Qué es lo único que tenia prohibido hacer Ariel?",
      respuestas: ["Subir a la superficie", "Casarse con alguien que no sea un príncipe", "Ir a lugares lejanos del reino Atlantic",
       "Cantar"],
      correcta: 0
    },
    {
        pregunta: "¿Como se llama el príncipe de la película?",
        respuestas: ["Derec", "Sebastian", "Bereck", "Eric"],
        correcta: 3
      },
  
  ];
  
  let indice_aleatorio = 0;
  
  let pregunta_txt = "";
  
  let interval;
  
  window.onload = iniciar();
  
  function iniciar() {
      loadQuestions();
      if (localStorage.getItem("SCORE") != null) {
          localStorage.removeItem("SCORE");
      }
      }
  
  function iniciarCronometro() {
    const contador = 15, cronometroDisplay = document.getElementById("cronometro")
  
    iniciarTiempo(contador, cronometroDisplay)
    
  }
  
  function iniciarTiempo(duracion, componente) {
      interval = setInterval(() => {
      if (duracion === 0) {
  
        componente.innerHTML = "Se termino tu tiempo!";
  
        clearInterval(interval);
  
        loadQuestions()
  
      } else {
        
        duracion = duracion < 10 ? "0" + duracion : duracion;
  
        componente.textContent = "00:" + duracion;
  
        duracion--;
      }
      }, 1000)
  
  }
  
  function loadQuestions() {
     iniciarCronometro();
  
      if (preguntas.length > 0) {
  
          indice_aleatorio = Math.floor(Math.random() * preguntas.length);
  
          pregunta_txt = "";
  
          pregunta_txt += '<p class="pregunta">' + preguntas[indice_aleatorio].pregunta + '</p>';
  
          pregunta_txt += '<button id="opcion0" class="botonTrivias" onclick="verificarRespuestaCorrecta(0, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[0] + '</button>';
  
          pregunta_txt += '<button id="opcion1" class="botonTrivias" onclick="verificarRespuestaCorrecta(1, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[1] + '</button>';
  
          pregunta_txt += '<button id="opcion2" class="botonTrivias" onclick="verificarRespuestaCorrecta(2, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[2] + '</button>';
  
          pregunta_txt += '<button id="opcion3" class="botonTrivias" onclick="verificarRespuestaCorrecta(3, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[3] + '</button>';
  
          document.getElementById("pregunta").innerHTML = pregunta_txt;
  
          preguntas.splice(indice_aleatorio, 1);
  
      } else {
          window.location.href = "../triviaprincess/resultados.html";
      }
  }
  
  let puntos = 0;
  
  function verificarRespuestaCorrecta(indice, correcta) {
      if (correcta === indice) {
          puntos = puntos + 5;      
      }
      
      localStorage.setItem("SCORE", puntos);
       
      document.getElementById("opcion0").disabled = true;
      document.getElementById("opcion1").disabled = true;
      document.getElementById("opcion2").disabled = true;
      document.getElementById("opcion3").disabled = true;
  }
  
  document.getElementById("siguienteTrivia").addEventListener("click", () => { clearInterval(interval), loadQuestions() });