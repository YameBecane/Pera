// ===== ELEMENTOS =====
const navLinks = document.querySelectorAll('.globalnav-link[data-link]');
const searchBtn = document.getElementById('searchBtn');
const bagBtn = document.getElementById('bagBtn');
const bagCount = document.getElementById('bagCount');

// ===== ESTADO =====
let bagItems = 0;

// ===== NAVEGAÇÃO =====
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active de todos
        navLinks.forEach(l => l.style.color = '');
        
        // Adiciona active no clicado
        this.style.color = 'rgba(0, 0, 0, 0.5)';
        
        // Log para debug
        console.log(`Navegando para: ${this.dataset.link}`);
    });
});

// ===== BUSCA =====
searchBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('🔍 Abrir busca');
    // Aqui você pode abrir um modal de busca
});

// ===== SACOLA =====
bagBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('🛒 Abrir sacola');
    // Aqui você pode abrir o carrinho
});

// ===== FUNÇÃO PARA ADICIONAR ITEM À SACOLA =====
function addToBag() {
    bagItems++;
    bagCount.textContent = bagItems;
    
    // Animação do badge
    bagCount.style.transform = 'scale(1.5)';
    setTimeout(() => {
        bagCount.style.transform = 'scale(1)';
    }, 200);
}

// ===== FUNÇÃO PARA REMOVER ITEM DA SACOLA =====
function removeFromBag() {
    if (bagItems > 0) {
        bagItems--;
        bagCount.textContent = bagItems;
    }
}

// ===== EXPOR FUNÇÕES PARA USO GLOBAL =====
window.addToBag = addToBag;
window.removeFromBag = removeFromBag;

// ===== EXEMPLO DE USO (para testar) =====
console.log('Header Apple carregado!');
console.log('Use addToBag() ou removeFromBag() no console para testar');