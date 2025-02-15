// Define el estado inicial del esqueleto como "off"
let esqueleto = "off";
// Selecciona el elemento div que representa el esqueleto
let esqueletoStop = document.getElementById("esqueletoQuieto");
// Carga el sonido que se reproducirá al presionar el botón de bailar
let botonSonido = new Audio("../sound/botonbailar.mp3");
// Carga el audio de fondo que se reproducirá durante el baile
let botonAudio = new Audio("../sound/audio.mp3");

// Función que se ejecuta al hacer clic en el botón para bailar
function Bailar() {
  // Verifica si el esqueleto está en estado "off"
  if (esqueleto == "off") {
    esqueleto = "on"; // Cambia el estado a "on"
    // Añade una clase que cambia la imagen del esqueleto
    esqueletoStop.classList.add("on");
    // Reproduce el sonido del botón al hacer clic
    esqueletoStop.addEventListener("click", () => {
      botonSonido.play();
    });
    // Reproduce el audio de fondo al hacer clic
    esqueletoStop.addEventListener("click", () => {
      botonAudio.play();
    });

    // console.log("on"); // Línea comentada para depuración
  } else {
    esqueleto = "off"; // Cambia el estado a "off"
    // Elimina la clase para volver a la imagen inicial
    esqueletoStop.classList.remove("on");
    // Pausa el audio de fondo al hacer clic
    esqueletoStop.addEventListener("click", () => {
      botonAudio.pause();
    });

    // console.log("off"); // Línea comentada para depuración
  }
}
