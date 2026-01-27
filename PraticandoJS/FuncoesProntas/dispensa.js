function adicionarMedicamento() {
  const container = document.getElementById("medicamentos");
  const index = container.querySelectorAll(".medicamento-item").length;

  const div = document.createElement("div");
  div.classList.add("medicamento-item");
  div.innerHTML = `
    <label>Medicamento:</label>
    <div class="autocomplete-wrapper">
      <input
        type="text"
        class="medicamento-input"
        name="itens[${index}].medicamento"
        autocomplete="off"
        placeholder="Digite o medicamento"
        required
      />
      <ul class="lista-sugestoes"></ul>
    </div>

    <label>Unidade:</label>
  <select name="itens[${index}].unidade" required>
<option value="COMPRIMIDO">Comprimido</option>
<option value="FRASCO">Frasco</option>
<option value="SACHE">Sachê</option>
<option value="TUBO">Tubo</option>
  </select>

    <label>Quantidade:</label>
    <input
      class="quantidade-input"
      type="number"
      name="itens[${index}].quantidade"
      min="1"
      required
    />

    <button type="button" class="btn-remove"
      onclick="this.closest('.medicamento-item').remove()">
      Remover
    </button>
  `;
  container.appendChild(div);
}