const inicio = `
<section>
    <h2>Sobre a ONG</h2>
    <img src="imagens/voluntariado.jpg"
        alt="Pessoas participando de uma ação de voluntariado">
    <p>
        A ONG Esperança atua para apoiar pessoas em situação de
        vulnerabilidade, promovendo ações sociais e incentivando
        a participação da comunidade.
    </p>
</section>

<section>
    <h2>Como ajudar</h2>
    <p>
        Você pode contribuir com nossos projetos realizando
        doações ou participando como voluntário.
    </p>
</section>
`;


const projetos = `
<section id="doacoes">
    <h2>Doações</h2>
    <span class="badge">DOAÇÃO</span>

    <p>
        As doações ajudam a ONG a manter suas ações sociais
        e atender pessoas que precisam de apoio.
    </p>

    <div class="alerta">
        <strong>Atenção:</strong>
        As doações podem ser realizadas durante o período
        de campanha da organização.
    </div>

    <h3>Como contribuir</h3>

    <p>
        Você pode contribuir com alimentos, roupas, produtos
        de higiene ou valores destinados aos projetos.
    </p>

    <label for="modal-doacoes" class="botao-modal">
        Ver informações
    </label>
</section>

<section id="voluntariado">
    <h2>Voluntariado</h2>
    <span class="badge badge-voluntariado">VOLUNTARIADO</span>

    <p>
        Os voluntários colaboram com as atividades da ONG,
        ajudando na organização das campanhas e ações sociais.
    </p>

    <h3>Como participar</h3>

    <p>
        Para participar, entre em contato com a organização
        e informe seu interesse em atuar como voluntário.
    </p>

    <label for="modal-voluntariado" class="botao-modal">
        Ver informações
    </label>
</section>

<input type="checkbox" id="modal-doacoes" class="modal-toggle">

<div class="modal">
    <div class="modal-conteudo">
        <label for="modal-doacoes" class="modal-fechar">
            ×
        </label>

        <h2>Informações sobre doações</h2>

        <p>
            As doações recebidas pela ONG são destinadas à
            manutenção das ações sociais e ao atendimento
            das pessoas em situação de vulnerabilidade.
        </p>

        <span class="badge">DOAÇÃO</span>

        <p>
            Você pode contribuir com alimentos, roupas,
            produtos de higiene ou valores.
        </p>
    </div>
</div>

<input type="checkbox" id="modal-voluntariado" class="modal-toggle">

<div class="modal">
    <div class="modal-conteudo">
        <label for="modal-voluntariado" class="modal-fechar">
            ×
        </label>

        <h2>Informações sobre voluntariado</h2>

        <p>
            Os voluntários podem colaborar na organização
            de campanhas, eventos e outras ações sociais
            realizadas pela ONG.
        </p>

        <span class="badge badge-voluntariado">
            VOLUNTARIADO
        </span>

        <p>
            Para participar, preencha o cadastro disponível
            na página de cadastro.
        </p>
    </div>
</div>
`;


const cadastro = `
<form id="formCadastro" novalidate>

    <fieldset>
        <legend>Dados pessoais</legend>

        <label for="nome">Nome completo:</label>
        <input type="text" id="nome" name="nome" required>

        <br><br>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <br><br>

        <label for="cpf">CPF:</label>
        <input
            type="text"
            id="cpf"
            name="cpf"
            pattern="[0-9]{3}\\.?[0-9]{3}\\.?[0-9]{3}-?[0-9]{2}"
            placeholder="000.000.000-00"
            required
        >

        <br><br>

        <label for="nascimento">Data de nascimento:</label>
        <input
            type="date"
            id="nascimento"
            name="nascimento"
            required
        >
    </fieldset>

    <br>

    <fieldset>
        <legend>Endereço</legend>

        <label for="cep">CEP:</label>
        <input
            type="text"
            id="cep"
            name="cep"
            pattern="[0-9]{5}-?[0-9]{3}"
            placeholder="00000-000"
            required
        >

        <br><br>

        <label for="endereco">Endereço:</label>
        <input
            type="text"
            id="endereco"
            name="endereco"
            required
        >

        <br><br>

        <label for="numero">Número:</label>
        <input
            type="number"
            id="numero"
            name="numero"
            required
        >

        <br><br>

        <label for="cidade">Cidade:</label>
        <input
            type="text"
            id="cidade"
            name="cidade"
            required
        >

        <br><br>

        <label for="estado">Estado:</label>
        <input
            type="text"
            id="estado"
            name="estado"
            maxlength="2"
            required
        >
    </fieldset>

    <br>

    <fieldset>
        <legend>Contato</legend>

        <label for="telefone">Telefone:</label>
        <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="(13) 99999-9999"
            required
        >
    </fieldset>

    <br>

    <button type="submit">Enviar cadastro</button>

</form>
`;