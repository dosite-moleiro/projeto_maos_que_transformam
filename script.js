document.addEventListener("DOMContentLoaded", function () {

    const botao = document.querySelector(".hero .botao-voluntario");
    const mensagem = document.querySelector("#mensagem");

    if (botao && mensagem) {
        botao.addEventListener("click", function () {
            mensagem.textContent =
                "Obrigado pelo interesse em fazer parte da Mãos que Transformam!";
        });
    }

    const formulario = document.querySelector("#cadastro-form");
    const mensagemFormulario = document.querySelector("#mensagem-formulario");

    if (formulario && mensagemFormulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            mensagemFormulario.textContent =
                "Cadastro enviado com sucesso! Obrigado por querer fazer parte da Mãos que Transformam.";

            formulario.reset();
        });
    }

});