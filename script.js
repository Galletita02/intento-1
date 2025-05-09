// Cuenta regresiva de 1 minuto
const tiempoLimite = new Date().getTime() + (1 * 60 * 1000); // 1 minuto desde ahora

const countdown = setInterval(function() {
    const ahora = new Date().getTime();
    const diferencia = tiempoLimite - ahora;

    const segundos = Math.floor(diferencia / 1000);

    document.getElementById("countdown").innerHTML = `${segundos} segundos`;

    if (diferencia < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("mensaje").style.display = "block";
    }
}, 1000);
