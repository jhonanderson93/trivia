const preguntas = [
    {
      pregunta: "¿cuales son los nombres de los siete enanos?",
      respuestas: ["estornudo,mudito,conjestion,sabio,gruñon,dormilon,timido", "gruñon,timido,alegre,bobito,estornudo,dormilon,", 
      "estornudo,gruñon,feliz,tontin,dog,timido,dormilon",
       "gruñón,tontin,dog,dormilon,feliz,timido,congestión"],
      correcta: 0
    },
    {
      pregunta: "¿Como se llamaba la villana de blanca nieves?",
      respuestas: ["La bruja malvada", "La reina malvada", "La reina malevola", "La bruja congestionada"],
      correcta: 1
    },
    {
      pregunta: "¿En qué trabajaba los siete enanos?",
      respuestas: ["Eran mineros", "Eran mafiosos", "Eran artesanos",
       "Eran cantantes"],
      correcta: 0
    },
    {
        pregunta: "¿que fruta le dio la bruja a blanca nieves ?",
        respuestas: ["Una mandarina", "Una fresa", "Una pera", "Una manzana"],
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