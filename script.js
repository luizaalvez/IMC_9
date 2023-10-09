document.getElementById("calcular-button").addEventListener("click", calcularIMC);

function calcularIMC() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    if (nome === "" || isNaN(altura) || isNaN(peso)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const imc = peso / (altura * altura);
    const resultado = `O IMC de ${nome} é: ${imc.toFixed(2)}`;

    document.getElementById("resultado").textContent = resultado;
}
