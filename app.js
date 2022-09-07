var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseInt (document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");
  
  if (chute == numeroSecreto ) {
    elementoResultado.innerHTML = "Parabéns, você acertou!"
  } else if (chute < 0 || chute > 10) {
    elementoResultado.innerHTML = "Favor digitar um número entre 0 e 10."
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Você errou! O número secreto é menor."
  } else {
    elementoResultado.innerHTML = "Você errou! O número secreto é maior."
  }
}