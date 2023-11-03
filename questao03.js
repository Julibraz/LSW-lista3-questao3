const formTransacoes = document.getElementById("transacoes");
const tabela = document.getElementById("tabela");
const balanco = document.getElementById("balanco");

let transacoes = [];
let total = 0;

function attTabela() {
    tabela.querySelector("tbody").innerHTML = "";
    total = 0;

    for (const item of transacoes) {
        const row = tabela.querySelector("tbody").insertRow();
        const descrev = row.insertCell(0);
        const celValor = row.insertCell(1);

        descrev.textContent = item.descricao;
        celValor.textContent = `R$ ${item.valor.toFixed(2)}`;

        if (item.valor < 0) {
            celValor.classList.add("negativo");
        } else {
            celValor.classList.add("positivo");
        }

        total += item.valor;
    }

    balanco.textContent = `R$ ${total.toFixed(2)}`;
}

formTransacoes.addEventListener("submit", (event) => {
    event.preventDefault();

    const descricao = document.getElementById("descricao").value;
    const valor = parseFloat(document.getElementById("valor").value);

    if (!isNaN(valor)) {
        const transacao = { descricao, valor };
        transacoes.push(transacao);
        attTabela();
        document.getElementById("descricao").value = "";
        document.getElementById("valor").value = "";
    }
});
