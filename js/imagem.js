const imagens = document.querySelectorAll(".foto img");
let imagemAtual = 0;

function abrirModal(index) {
  imagemAtual = index;
  document.getElementById("modal").style.display = "block";
  document.getElementById("img-modal").src = imagens[index].src;
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

function mudarImagem(direcao) {
  imagemAtual += direcao;
  if (imagemAtual < 0) imagemAtual = imagens.length - 1;
  if (imagemAtual >= imagens.length) imagemAtual = 0;
  document.getElementById("img-modal").src = imagens[imagemAtual].src;
}

// Fechar modal ao clicar fora da imagem
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    fecharModal();
  }
};
