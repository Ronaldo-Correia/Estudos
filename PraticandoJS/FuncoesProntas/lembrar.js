document.addEventListener("DOMContentLoaded", () => {
  const lembrar = document.getElementById("lembrar-me");
  const usuario = document.getElementById("usuario");
  const form = document.querySelector("form");

  // carregar último usuário
  const ultimoUsuario = localStorage.getItem("ultimoUsuario");
  if (ultimoUsuario) {
    usuario.value = ultimoUsuario;
    lembrar.checked = true;
  }

  // salvar ao enviar
  form.addEventListener("submit", () => {
    if (lembrar.checked) {
      localStorage.setItem("ultimoUsuario", usuario.value);
    } else {
      localStorage.removeItem("ultimoUsuario");
    }
  });
});