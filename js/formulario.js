function configurarFormulario() {

    const formCadastro = document.getElementById("formCadastro");

    if (!formCadastro) {
        return;
    }


    /* RECUPERA OS DADOS SALVOS */

    const dadosSalvos = carregarCadastro();

    if (dadosSalvos) {

        document.getElementById("nome").value =
            dadosSalvos.nome || "";

        document.getElementById("email").value =
            dadosSalvos.email || "";

        document.getElementById("cpf").value =
            dadosSalvos.cpf || "";

        document.getElementById("nascimento").value =
            dadosSalvos.nascimento || "";

        document.getElementById("cep").value =
            dadosSalvos.cep || "";

        document.getElementById("endereco").value =
            dadosSalvos.endereco || "";

        document.getElementById("numero").value =
            dadosSalvos.numero || "";

        document.getElementById("cidade").value =
            dadosSalvos.cidade || "";

        document.getElementById("estado").value =
            dadosSalvos.estado || "";

        document.getElementById("telefone").value =
            dadosSalvos.telefone || "";
    }


    /* SELECIONA OS CAMPOS */

    const campos = formCadastro.querySelectorAll("input");


    /* FUNÇÃO DE VALIDAÇÃO */

    function validarCampo(campo) {

        let mensagem =
            campo.parentElement.querySelector(".mensagem-erro");


        if (!mensagem) {

            mensagem = document.createElement("small");

            mensagem.className = "mensagem-erro";

            campo.insertAdjacentElement(
                "afterend",
                mensagem
            );
        }


        if (!campo.checkValidity()) {

            campo.style.border = "2px solid red";

            mensagem.style.color = "red";

            mensagem.style.display = "block";


            if (campo.validity.valueMissing) {

                mensagem.textContent =
                    "Este campo é obrigatório.";

            } else if (campo.validity.typeMismatch) {

                mensagem.textContent =
                    "Digite um e-mail válido.";

            } else if (campo.validity.patternMismatch) {

                mensagem.textContent =
                    "Digite o formato correto.";

            } else {

                mensagem.textContent =
                    "Verifique este campo.";
            }

            return false;

        } else {

            campo.style.border = "";

            mensagem.textContent = "";

            mensagem.style.display = "none";

            return true;
        }
    }


    /* VALIDAÇÃO ENQUANTO DIGITA */

    campos.forEach(function(campo) {

        campo.addEventListener("input", function() {

            validarCampo(campo);

        });

    });


    /* ENVIO DO FORMULÁRIO */

    formCadastro.addEventListener("submit", function(event) {

        event.preventDefault();


        let formularioValido = true;


        campos.forEach(function(campo) {

            if (!validarCampo(campo)) {

                formularioValido = false;
            }
        });


        if (!formularioValido) {

            alert(
                "Verifique os campos destacados antes de enviar."
            );

            return;
        }


        /* ORGANIZA OS DADOS EM UM OBJETO */

        const dadosCadastro = {

            nome: document.getElementById("nome").value,

            email: document.getElementById("email").value,

            cpf: document.getElementById("cpf").value,

            nascimento:
                document.getElementById("nascimento").value,

            cep: document.getElementById("cep").value,

            endereco:
                document.getElementById("endereco").value,

            numero:
                document.getElementById("numero").value,

            cidade:
                document.getElementById("cidade").value,

            estado:
                document.getElementById("estado").value,

            telefone:
                document.getElementById("telefone").value
        };


        /* SALVA OS DADOS */

        salvarCadastro(dadosCadastro);


        alert("Cadastro enviado com sucesso!");
    });
}