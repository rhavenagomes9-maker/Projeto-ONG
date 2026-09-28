const app = document.getElementById("app");


/* MOSTRA A PÁGINA INICIAL */

app.innerHTML = inicio;


/* NAVEGAÇÃO PARA PROJETOS */

const linkProjetos =
    document.getElementById("linkProjetos");

linkProjetos.addEventListener("click", function(event) {

    event.preventDefault();

    app.innerHTML = projetos;
});


/* NAVEGAÇÃO PARA CADASTRO */

const linkCadastro =
    document.getElementById("linkCadastro");

linkCadastro.addEventListener("click", function(event) {

    event.preventDefault();

    app.innerHTML = cadastro;

    configurarFormulario();
});


/* NAVEGAÇÃO PARA INÍCIO */

const linkInicio =
    document.getElementById("linkInicio");

linkInicio.addEventListener("click", function(event) {

    event.preventDefault();

    app.innerHTML = inicio;
});