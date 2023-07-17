// Select the div element
const hora = document.querySelector("#hora");

// Update the clock every second
setInterval(() => {
  // Get the current date and time
  const data = new Date();

  // Format the time as HH:MM:SS
  const horas = data.getHours().toString().padStart(2, "0");
  const minutos = data.getMinutes().toString().padStart(2, "0");
  const segundos = data.getSeconds().toString().padStart(2, "0");
  const horaAtual = `${horas}:${minutos}:${segundos}`;

  // Update the content of the div element
  hora.textContent = horaAtual;
}, 1000);
