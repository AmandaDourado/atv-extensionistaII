document.getElementById('btCadastrar').addEventListener('click', function() {
    // Limpa os textos dos campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';

    alert("Cadastro realizado com sucesso!");
});

