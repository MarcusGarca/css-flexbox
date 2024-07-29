let mql = window.matchMedia("(min-width: 768px)");

// Função para mostrar ou ocultar o menu com base no tamanho da tela
function checkScreenWidth() {
  let menu = document.getElementById("menu");

  if (mql.matches) {
    menu.style.display = "block"; // Mostra o menu em telas grandes
    menu.style.opacity = 1; // Garante que o menu seja totalmente visível
  } else {
    menu.style.display = "none"; // Oculta o menu em telas pequenas
  }
}

// Adiciona um listener para verificar quando a largura da janela muda
mql.addListener(checkScreenWidth);

// Chama a função inicialmente para configurar o estado correto
checkScreenWidth();

// Função para mostrar ou ocultar o menu com transição em telas pequenas
function toggleMenu() {
  let menu = document.getElementById("menu");
  let isMenuVisible = window.getComputedStyle(menu).display !== "none";

  if (isMenuVisible) {
    menu.style.transition = "opacity 0.5s";
    menu.style.opacity = 0;

    setTimeout(() => {
      menu.style.display = "none";
    }, 500); // Espera a transição de opacidade antes de esconder o menu
  } else {
    menu.style.display = "block"; // Mostra o menu imediatamente
    menu.style.opacity = 0; // Inicializa a opacidade em 0
    menu.style.transition = "opacity 0.5s";

    setTimeout(() => {
      menu.style.opacity = 1; // Aplica a transição para opacidade 1
    }, 0); // Garante que a transição seja aplicada após o display ser 'block'
  }
}

// Função para fechar o menu após clicar em um item de navegação
function fecharMenu() {
  let menu = document.getElementById("menu");

  if (!mql.matches) {
    // Só oculta o menu se a tela for menor que 768px
    menu.style.transition = "opacity 0.5s";
    menu.style.opacity = 0;

    setTimeout(() => {
      menu.style.display = "none";
    }, 100); // Espera a transição de opacidade antes de esconder o menu
  }
}

// Liga a função toggleMenu a um evento de clique
document.getElementById("btn-menu").addEventListener("click", toggleMenu);

// Liga a função fecharMenu a itens de navegação
let navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", fecharMenu);
});
