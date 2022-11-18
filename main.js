const header = document.getElementById("header");
function addDay() {
 const date = new Date();
 const d = date.getDate();
 const h = date.getHours();
 const m = date.getMinutes();
 const s = date.getSeconds();

 if (d <= 18 && h === 12 && m > 10) {
  header.src = "./img/img_02.png";
  console.log("works");
 }
}

window.setInterval(addDay, 10);
