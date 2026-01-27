function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
    return;
  }

  var fsex = document.getElementsByName("radsex");
  var idade = ano - Number(fano.value);
  var genero = "";
  var img = document.createElement("img");
  img.setAttribute("id", "foto");
  if (fsex[0].checked) {
    genero = "Homem"
    if(idade >=0 && idade <10){
      //Criança
    }
    if(idade <20){
      //Jovem
    }
    if(idade <50){
      //Adulto
    }
    else{
      //Idoso
    }
  } else if (fsex[1].checked) {
    genero = "Mulher"
    if(idade >=0 && idade <10){
      //Criança
    }
    if(idade <20){
      //Jovem
    }
    if(idade <50){
      //Adulta
    }
    else{
      //Idosa
    }
  }

  res.style.textAlign = "center";
  res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
}
