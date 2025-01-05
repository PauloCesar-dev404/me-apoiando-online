        // Função para criar o efeito de "chuva de código"
     function generateRain() {
          const rainContainer = document.getElementById('rain');
          const numDrops = 100; // Quantidade de linhas de código caindo

          for (let i = 0; i < numDrops; i++) {
              const span = document.createElement('span');
              const randomLeft = Math.random() * 100;
              const randomDelay = Math.random() * 5;
              const randomSpeed = Math.random() * 2 + 3;

              span.style.left = `${randomLeft}%`;
              span.style.animationDuration = `${randomSpeed}s`;
              span.style.animationDelay = `${randomDelay}s`;

              const randomChar = String.fromCharCode(Math.floor(Math.random() * (126 - 33)) + 33); // Caracteres aleatórios

              span.textContent = randomChar;
              rainContainer.appendChild(span);
          }
      }
document.getElementById('supportButton').addEventListener('click', function() {
    this.textContent = "Que grande marco!";
    generateRain();
    this.disabled = true;
    document.getElementById('paymentModal').style.display = 'flex'; 
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('paymentModal').style.display = 'none'; 
});
document.addEventListener('DOMContentLoaded', () => {
// Adiciona o botão de copiar a todos os blocos de código
document.querySelectorAll('pre').forEach((codeBlock) => {
// Cria o botão de copiar
const button = document.createElement('button');
button.className = 'copy-button';
button.type = 'button';
button.title = 'copiar';
button.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm">
  <path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path>
</svg>

`;

button.addEventListener('click', () => {
const code = codeBlock.querySelector('code').innerText;

navigator.clipboard.writeText(code).then(() => {
  button.textContent = 'Copiado!'; // Texto após copiar
  button.classList.add('success');

  setTimeout(() => {
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon-sm">
        <path fill="currentColor" fill-rule="evenodd" d="M7 5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-2v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2zm2 2h5a3 3 0 0 1 3 3v5h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1zM5 9a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" clip-rule="evenodd"></path>
      </svg>
    `;
    button.classList.remove('success');
  }, 2000);
}).catch((error) => {
  console.error('Erro ao copiar o texto: ', error);
});
});

// Insere o botão no bloco de código
const wrapper = document.createElement('span');
wrapper.className = 'copy-button-wrapper';
wrapper.appendChild(button);
codeBlock.appendChild(wrapper);
});
});
