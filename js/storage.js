function salvarCadastro(dadosCadastro) {

    localStorage.setItem(
        "dadosCadastro",
        JSON.stringify(dadosCadastro)
    );
}


function carregarCadastro() {

    const dadosSalvos = localStorage.getItem("dadosCadastro");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}