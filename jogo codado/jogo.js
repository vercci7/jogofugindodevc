
const btnSim = document.getElementById("sim");
const btnNao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");

// Quando clicar no botão "Sim", mostra mensagem
btnNao.addEventListener("click", () => {
  mensagem.style.display = "block";
});

// Botão "Não" foge do mouse quando o cursor passa perto
btnSim.addEventListener("mouseover", () => {
  const largura = window.innerWidth - btnSim.offsetWidth;
  const altura = window.innerHeight - btnSim.offsetHeight;

  // Posição aleatória dentro da tela
  const novaPosX = Math.random() * largura;
  const novaPosY = Math.random() * altura;

  btnNao.style.position = "absolute";
  btnNao.style.left = `${novaPosX}px`;
  btnNao.style.top = `${novaPosY}px`;
});