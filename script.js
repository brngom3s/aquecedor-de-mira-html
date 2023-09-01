// Esconder o alvo e o contador no início do jogo
const alvo = document.getElementById('alvo');
const contador = document.getElementById('contador');
const temporizador = document.getElementById('temporizador');
alvo.style.display = 'none';
contador.style.display = 'none';
temporizador.style.display = 'none';

// Exibir a tela inicial
const telaInicial = document.getElementById('tela-inicial');
telaInicial.style.display = 'block';

// Adicionar o evento de clique ao botão "Iniciar Jogo"
const iniciarJogoBtn = document.getElementById('iniciar-jogo');
iniciarJogoBtn.addEventListener('click', () => {
  
  // Esconder a tela inicial e exibir o alvo e o contador
  telaInicial.style.display = 'none';
  alvo.style.display = 'block';
  contador.style.display = 'block';
  temporizador.style.display = 'block';

  // Iniciar o jogo, o contador de acerto e o temporizador
  iniciarJogo();
});

function iniciarJogo() {
  var numAcertos = 0;
  var tempoRestante = 30;

  function atualizarTemporizador() {          
    tempoRestante--;
    document.getElementById("temporizador").innerHTML = "Tempo Restante: " + tempoRestante;    
    if (tempoRestante == 0) {
      clearInterval(intervalId);
      alert("A MIRA JÁ TÁ QUENTE!  PEGOU " + numAcertos + " ALVOS.");
    }
}
var intervalId = setInterval(atualizarTemporizador, 1000);

// Mensagem de acerto
const acertoMsg = document.createElement('div');
acertoMsg.innerHTML = '+1';
acertoMsg.classList.add('acerto-msg');
acertoMsg.style.position = 'absolute';

// Adicionando o contador ao corpo do documento
// Adicionando o contador ao contêiner pai do alvo
const container = document.getElementById('container');
container.appendChild(acertoMsg);


// Randomizando o alvo
alvo.addEventListener('click', () => {
  const novoTopo = Math.floor(Math.random() * 400);
  const novoEsquerda = Math.floor(Math.random() * 700);
  alvo.style.top = `${novoTopo}px`;
  alvo.style.left = `${novoEsquerda}px`;

  // Posicionando o contador ao lado do alvo
  acertoMsg.style.top = `${alvo.offsetTop - 50}px`;
  acertoMsg.style.left = `${alvo.offsetLeft + alvo.offsetWidth + 20}px`;
  acertoMsg.style.display = 'block';
  setTimeout(() => {
    acertoMsg.style.display = 'none';
  }, 050);
  
  numAcertos++;
  document.getElementById("contador").innerHTML = "Acertos: " + numAcertos;
});
}
