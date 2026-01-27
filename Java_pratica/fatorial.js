function fatorial() {
  let n = Number(window.prompt("Digite um número para calcular o fatorial:"));
  if (n < 0) return "Fatorial não é definido para números negativos";
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log("Resultado:", fatorial());
