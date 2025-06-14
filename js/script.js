
document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos do DOM
    const supportButton = document.getElementById('supportButton');
    const paymentModal = document.getElementById('paymentModal');
    const modalContent = document.getElementById('modalContent');
    const closeModalButton = document.getElementById('closeModal');

    // Elementos para USDT
    const cryptoAddressElement = document.getElementById('cryptoAddress');
    const copyAddressButton = document.getElementById('copyAddressButton');
    const copyMessageElement = document.getElementById('copyMessage');

    // Novos elementos para PIX
    const pixKeyElement = document.getElementById('pixKey');
    const copyPixButton = document.getElementById('copyPixButton');
    const copyPixMessageElement = document.getElementById('copyPixMessage');

    // Função genérica para copiar texto para a área de transferência
    function copyToClipboard(textToCopy, messageElement) {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();

        try {
            document.execCommand('copy');
            if (messageElement) {
                messageElement.classList.remove('hidden');
                setTimeout(() => {
                    messageElement.classList.add('hidden');
                }, 2000);
            }
        } catch (err) {
            console.error('Falha ao copiar: ', err);
        }
        document.body.removeChild(textArea);
    }

    // Função para abrir o modal
    function openModal() {
        paymentModal.classList.remove('hidden'); 
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 100);
    }

    // Função para fechar o modal
    function closeModal() {
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            paymentModal.classList.add('hidden');
        }, 300); 
    }

    // Event listener para o botão de apoio
    supportButton.addEventListener('click', openModal);

    // Event listener para o botão de fechar modal
    closeModalButton.addEventListener('click', closeModal);

    // Fecha o modal se o usuário clicar fora do conteúdo do modal
    paymentModal.addEventListener('click', (event) => {
        if (event.target === paymentModal) {
            closeModal();
        }
    });

    // Event listener para o botão de copiar endereço USDT
    copyAddressButton.addEventListener('click', () => {
        copyToClipboard(cryptoAddressElement.textContent, copyMessageElement);
    });

    // Novo event listener para o botão de copiar chave PIX
    copyPixButton.addEventListener('click', () => {
        copyToClipboard(pixKeyElement.textContent, copyPixMessageElement);
    });

    // Lógica para o efeito de chuva de código
    const rainContainer = document.getElementById('rain');
    const numberOfDrops = 50; 
    const dropSpeed = 10; 
    const minDropSize = 2; 
    const maxDropSize = 4; 
    const minDropHeight = 10; 
    const maxDropHeight = 20;

    // Cria as gotas de chuva
    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop'); 
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDelay = `${Math.random() * dropSpeed}s`;
        drop.style.animationDuration = `${dropSpeed + Math.random() * 5}s`;
        const size = minDropSize + Math.random() * (maxDropSize - minDropSize);
        const height = minDropHeight + Math.random() * (maxDropHeight - minDropHeight);
        drop.style.width = `${size}px`;
        drop.style.height = `${height}px`;
        drop.style.top = `-${Math.random() * 100}vh`;

        rainContainer.appendChild(drop);
    }
});
