var msg = document.getElementById("msg");
var img = document.getElementById("imagem");
var data = new Date();
var hora = 15;
msg.innerHTML = `Agora são ${hora} horas.`;
if (hora >= 6 && hora < 12) {
  //BOM DIA
  img.src = "IMGs/manha.png";
  document.body.style.background = "#e2cd9f";
} else if (hora > 12 && hora < 18) {
  //BOA TARDE
  img.src = "IMGs/tarde.png";
  document.body.style.background = "#b2c820ff";
} else if (hora >= 18 && hora < 24) {
  //BOA NOITE
  img.src = "IMGs/noite.png";
  document.body.style.background = "#515154";
}
