const botaoTema = document.querySelector("#botao-tema");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {

        botaoTema.textContent = "☀️ Modo claro";

    } else {

        botaoTema.textContent = "🌙 Modo escuro";

    }

});


const botoes = document.querySelectorAll(".botao-reacao");


botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        const numeroSpan = botao.querySelector("span");

        const quantidadeAtual =
            Number(numeroSpan.textContent);


        if (curtiu === false) {

            numeroSpan.textContent =
                quantidadeAtual + 1;

            curtiu = true;

            botao.style.backgroundColor =
                "var(--cor-vermelha)";

            botao.style.color =
                "white";

        } else {

            numeroSpan.textContent =
                quantidadeAtual - 1;

            curtiu = false;

            botao.style.backgroundColor =
                "var(--cor-botao)";

            botao.style.color =
                "var(--cor-vermelha)";

        }

    });

});
