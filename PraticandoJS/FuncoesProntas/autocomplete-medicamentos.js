document.addEventListener("input", async (e) => {
  if (!e.target.classList.contains("medicamento-input")) return;

  const input = e.target;
  const item = input.closest(".medicamento-item");
  const selectUnidade = item.querySelector("select");
  const lista = item.querySelector(".lista-sugestoes");
  const termo = input.value.trim();

  lista.innerHTML = "";
  if (termo.length < 2) return;

  const response = await fetch(`/dispensas/medicamentos/sugestoes?termo=${encodeURIComponent(termo)}`);
  const sugestoes = await response.json();

  sugestoes.forEach((med) => {
    const li = document.createElement("li");
    li.textContent = med.nome;

    li.addEventListener("mousedown", (ev) => {
      ev.preventDefault();
      input.value = med.nome;

      if (med.unidade) {
        selectUnidade.value = med.unidade.toUpperCase();
        // selectUnidade.disabled = true; // melhor não desabilitar
      }

      lista.innerHTML = "";
    });

    lista.appendChild(li);
  });
});