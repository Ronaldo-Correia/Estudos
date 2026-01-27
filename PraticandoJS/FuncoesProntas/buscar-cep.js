document.querySelector('.search-cep').addEventListener('click', async function () {
    const cepInput = document.querySelector('input[name="cep"]');
    let cep = cepInput.value.replace(/\D/g, ''); 

    if (cep.length !== 8) {
        alert('CEP inválido! Digite um CEP com 8 números.');
        return;
    }

    try {
        const response = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
        if (!response.ok) {
            throw new Error('Erro ao buscar o CEP.');
        }

        const data = await response.json();

        if (data.erro) {
            alert('CEP não encontrado!');
            return;
        }

        // Preenche os campos Município e Bairro
        document.querySelector('input[name="municipio"]').value = data.localidade;
        document.querySelector('input[name="bairro"]').value = data.bairro;

    } catch (error) {
        console.error('Erro:', error);
        alert('Não foi possível buscar o CEP.');
    }
});