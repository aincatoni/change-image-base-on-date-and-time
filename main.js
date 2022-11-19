// Este script es para cambiar el header a el día y la hora indicada

// Ejecuta el código una vez cargado el sitio
document.onreadystatechange = function () {
 const header = document.getElementById("header");

 if (document.readyState == "interactive") {
  function changeHeader() {
   // Guarda el mes, día, hora, minutos y segundos en variables
   const date = new Date();
   const mn = date.getMonth();
   const d = date.getDate();
   const h = date.getHours();
   const m = date.getMinutes();
   const s = date.getSeconds();

   // Comprueba que el mes, día, hora, y minutos sean:

   if (mn >= 10 && d >= 18 && h >= 22 && m >= 38) {
    header.src = "./img/img_02.png";
   }
  }
  changeHeader();
  setInterval(changeHeader, 0.01);
 }
};
