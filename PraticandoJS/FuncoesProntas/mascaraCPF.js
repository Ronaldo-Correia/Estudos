function mascaraCPF(input) {
    let value = input.value.replace(/\D/g, ''); // remove tudo que não for número
    if (value.length > 11) value = value.slice(0, 11); // limita a 11 dígitos
    input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4'); 
}

/*
input.value.replace(/\D/g, '') → usa regex para remover caracteres não numéricos (\D significa "não dígito").

if (value.length > 11) → garante que o CPF não tenha mais que 11 números.

.slice(0, 11) → corta o excesso.

.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4') → aplica a máscara:

Agrupa os números em blocos de 3-3-3-2.

Insere pontos e traço no formato 000.000.000-00.

👉 Resultado: se o usuário digitar 12345678901, o campo exibirá 123.456.789-01.
*/