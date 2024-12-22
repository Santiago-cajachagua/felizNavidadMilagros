function generarRandom(min, max) {
    return Math.random() * (max - min) + min
  }
  
  for(let i = 0;i <= 50;i++) {
      var el = document.createElement('div')
      var ran = generarRandom(5, 20)
      var ranCinco = generarRandom(4, 8)
      var ranSeis = generarRandom(0, 5)
      var ranDos = generarRandom(5, 300)
      var ranTres = generarRandom(5, 300)
      var ranCuatro = generarRandom(5, 110)
      
      el.style.marginLeft = ranDos + 'vw';
      el.style.marginRight = ranTres + 'vw';	
      el.style.marginTop = '-' + (parseInt(ran) + 10) + 'px';	
      el.style.background = '#'+i+i+i
      el.style.width = ran + 'px';
      el.style.height = ran + 'px';
      el.style.animationDuration = ranCinco + 's';
      el.style.animationDelay = ranSeis + 's';
      
      
      
      
      document.body.appendChild(el)
      el.classList.add('punto')
  }

  $(document).ready(function() {
    // Redirigir al hacer clic en "¡Claro!" (botón de aceptación)
    $("#yesButton").click(function() {
        window.location.href = "estaslista.html"; // Redirige a estaslista.html
    });

    // Acción para el botón "¿Aún no?" (botón de rechazo)
    $("#noButton").click(function() {
        // Mostrar el modal con el mensaje divertido
        var modal = new bootstrap.Modal(document.getElementById('noModal'));
        modal.show(); // Muestra el modal
    });
});

document.getElementById("yesButton").addEventListener("click", () => {
    const audio = document.getElementById("audioPlayer");
    audio.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
    });
});