// Aguarda o carregamento completo do DOM antes de anexar eventos
document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos do DOM
    const supportButton = document.getElementById('supportButton');
    const paymentModal = document.getElementById('paymentModal');
    const modalContent = document.getElementById('modalContent');
    const closeModalButton = document.getElementById('closeModal');
    const cryptoAddressElement = document.getElementById('cryptoAddress');
    const copyAddressButton = document.getElementById('copyAddressButton');
    const copyMessageElement = document.getElementById('copyMessage');
    const rainContainer = document.getElementById('rain');

    // Função para abrir o modal
    function openModal() {
        paymentModal.classList.remove('hidden'); // Remove a classe 'hidden' para exibir o modal
        // Adiciona classes para a animação de entrada do modal
        setTimeout(() => {
            modalContent.classList.remove('scale-95', 'opacity-0');
            modalContent.classList.add('scale-100', 'opacity-100');
        }, 100);
    }

    // Função para fechar o modal
    function closeModal() {
        // Adiciona classes para a animação de saída do modal
        modalContent.classList.remove('scale-100', 'opacity-100');
        modalContent.classList.add('scale-95', 'opacity-0');
        // Esconde o modal após a animação de saída
        setTimeout(() => {
            paymentModal.classList.add('hidden');
        }, 300); // Duração da transição deve ser a mesma do CSS
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

    // Event listener para o botão de copiar endereço
    copyAddressButton.addEventListener('click', () => {
        // Cria um elemento de texto temporário para copiar o conteúdo
        const textArea = document.createElement('textarea');
        textArea.value = cryptoAddressElement.textContent;
        document.body.appendChild(textArea);
        textArea.select(); // Seleciona o texto

        try {
            document.execCommand('copy'); // Tenta copiar o texto para a área de transferência
            copyMessageElement.classList.remove('hidden'); // Exibe a mensagem "Copiado!"
            setTimeout(() => {
                copyMessageElement.classList.add('hidden'); // Esconde a mensagem após 2 segundos
            }, 2000);
        } catch (err) {
            console.error('Falha ao copiar: ', err);
            // Mensagem de erro alternativa, se necessário
        }
        document.body.removeChild(textArea); // Remove o elemento temporário
    });

    // Lógica para o efeito de chuva de código
    const numberOfDrops = 50; // Número de gotas de chuva
    const dropSpeed = 10; // Velocidade de queda das gotas (em segundos)
    const minDropSize = 2; // Tamanho mínimo da gota em px
    const maxDropSize = 4; // Tamanho máximo da gota em px
    const minDropHeight = 10; // Altura mínima da gota em px
    const maxDropHeight = 20; // Altura máxima da gota em px

    // Cria as gotas de chuva
    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('drop'); // Adiciona a classe 'drop' para estilização
        // Posição horizontal aleatória
        drop.style.left = `${Math.random() * 100}vw`;
        // Atraso aleatório para que as gotas não caiam todas ao mesmo tempo
        drop.style.animationDelay = `${Math.random() * dropSpeed}s`;
        // Duração da animação aleatória para variação de velocidade
        drop.style.animationDuration = `${dropSpeed + Math.random() * 5}s`;
        // Tamanho e altura aleatórios para cada gota
        const size = minDropSize + Math.random() * (maxDropSize - minDropSize);
        const height = minDropHeight + Math.random() * (maxDropHeight - minDropHeight);
        drop.style.width = `${size}px`;
        drop.style.height = `${height}px`;
        // Posição vertical inicial acima da tela
        drop.style.top = `-${Math.random() * 100}vh`;

        rainContainer.appendChild(drop);
    }
});
