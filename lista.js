class Snowflake {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;
      this.radius = 0;
      this.alpha = 0;
  
      this.reset();
    }
  
    reset() {
      this.x = this.randBetween(0, window.innerWidth);
      this.y = this.randBetween(0, -window.innerHeight);
      this.vx = this.randBetween(-3, 3);
      this.vy = this.randBetween(2, 5);
      this.radius = this.randBetween(1, 4);
      this.alpha = this.randBetween(0.1, 0.9);
    }
  
    randBetween(min, max) {
      return min + Math.random() * (max - min);
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
  
      if (this.y + this.radius > window.innerHeight) {
        this.reset();
      }
    }
  }
  
  class Snow {
    constructor() {
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext("2d");
  
      document.body.appendChild(this.canvas);
  
      window.addEventListener("resize", () => this.onResize());
      this.onResize();
      this.updateBound = this.update.bind(this);
      requestAnimationFrame(this.updateBound);
  
      this.createSnowflakes();
    }
  
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }
  
    createSnowflakes() {
      const flakes = window.innerWidth / 4;
  
      this.snowflakes = [];
  
      for (let s = 0; s < flakes; s++) {
        this.snowflakes.push(new Snowflake());
      }
    }
  
    update() {
      this.ctx.clearRect(0, 0, this.width, this.height);
  
      for (let flake of this.snowflakes) {
        flake.update();
  
        this.ctx.save();
        this.ctx.fillStyle = "#FFF";
        this.ctx.beginPath();
        this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        this.ctx.closePath();
        this.ctx.globalAlpha = flake.alpha;
        this.ctx.fill();
        this.ctx.restore();
      }
      requestAnimationFrame(this.updateBound);
    }
  }
  
  new Snow();

  $(document).ready(function() {
    // El texto que queremos mostrar en el primer contenedor
    var texto1 = "Que todo lo que venga esté lleno de alegría, paz y muchas razones para seguir siendo tan increíble como lo eres tú.";
    var texto2 = "Para continuar responde esta pregunta";
    var texto3 = "¿Estás interesada en compartir momentos increíbles conmigo?";

    // Función para simular el efecto de escribir el texto
    function escribirTexto(texto, elemento, callback) {
        var index = 0;
        function escribir() {
            if (index < texto.length) {
                $(elemento).append(texto.charAt(index));
                index++;
                setTimeout(escribir, 90);
            } else {
                callback();  // Llamamos al callback cuando termine
            }
        }
        escribir();
    }

    // Iniciar la animación de escritura en el primer contenedor
    escribirTexto(texto1, "#mensaje", function() {
        // Aparece el segundo contenedor cuando termina el primero
        $('#contenedor2').fadeIn(1000, function() {
            // El segundo h2 aparece sin efecto de escritura
            $('#mensaje2').fadeIn(1000, function() {
                // Después de que el segundo texto termine de aparecer, aparece el tercer contenedor
                $('#contenedor3').fadeIn(1000, function() {
                    // El tercer h2 aparece con fadeIn (sin escritura)
                    $('#mensaje3').fadeIn(1000, function() {
                        // Después de que el tercer mensaje termine de aparecer, aparece el cuarto contenedor
                        $('#contenedor4').fadeIn(1000);
                    });
                });
            });
        });
    });

    const noButton = $('#noButton');
    
    noButton.on('click', function() {
        const windowWidth = $(window).width(); // Ancho de la ventana
        const windowHeight = $(window).height(); // Alto de la ventana

        // Obtiene el tamaño del botón
        const buttonWidth = $(this).outerWidth();
        const buttonHeight = $(this).outerHeight();

        // Calcula la posición aleatoria para el botón dentro de los límites visibles
        // La coordenada X debe estar entre 0 y el ancho de la ventana menos el ancho del botón
        // La coordenada Y debe estar entre 0 y la altura de la ventana menos el alto del botón
        const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
        const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

        // Ahora movemos el botón a las coordenadas generadas aleatoriamente dentro de la pantalla
        $(this).animate({
            left: randomX + 'px',  // Mueve el botón a la coordenada X aleatoria
            top: randomY + 'px'    // Mueve el botón a la coordenada Y aleatoria
        }, 0); // Movimiento instantáneo
    });

    const siButton = document.getElementById('siButton');
    const contadorContainer = document.getElementById('contadorContainer');
    const cuentaRegresiva = document.querySelector('.cuenta-regresiva');  // Elemento del número del contador

    // Agregar el evento al botón "Sí"
    siButton.addEventListener('click', function() {
        // Ocultar todos los contenedores iniciales
        document.getElementById('contenedor').style.display = 'none';
        document.getElementById('contenedor2').style.display = 'none';
        document.getElementById('contenedor3').style.display = 'none';
        document.getElementById('contenedor4').style.display = 'none';

        // Mostrar el contenedor del contador
        contadorContainer.style.display = 'flex';

        // Iniciar el contador
        let timeLeft = 10; // El contador inicia en 10
        cuentaRegresiva.innerHTML = timeLeft;  // Mostrar el número inicial en el div de cuenta regresiva

        const ciclo = setInterval(function() {
            timeLeft--;
            cuentaRegresiva.innerHTML = timeLeft;

            // Cuando el contador llega a cero
            if (timeLeft === 0) {
                clearInterval(ciclo); // Detener el contador
                window.location.href = 'feliznavidad.html';  // Redirigir a la página de destino
            }
        }, 1000);
    });
});