let modalIndex = 0;
let imagens = [];
const modal = document.getElementById("modal");
const imgModal = document.getElementById("img-modal");

window.onload = () => {
  imagens = Array.from(document.querySelectorAll(".galeria .foto img"));
};

function abrirModal(elemento) {
  modal.style.display = "flex";
  modalIndex = imagens.indexOf(elemento.querySelector("img"));
  mostrarImagemAtual();
  document.querySelector(".seta-esquerda").style.display = "block";
  document.querySelector(".seta-direita").style.display = "block";
}

function fecharModal() {
  modal.style.display = "none";
  document.querySelector(".seta-esquerda").style.display = "none";
  document.querySelector(".seta-direita").style.display = "none";
}

function mudarImagem(direcao) {
  modalIndex += direcao;
  if (modalIndex < 0) modalIndex = imagens.length - 1;
  if (modalIndex >= imagens.length) modalIndex = 0;
  mostrarImagemAtual();
}

function mostrarImagemAtual() {
  imgModal.src = imagens[modalIndex].src;
}

// Fechar modal ao clicar fora da imagem
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.classList.contains("fechar")) {
    fecharModal();
  }
});
