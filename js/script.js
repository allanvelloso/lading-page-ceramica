// Adicionar ao arquivo JavaScript existente

// Contador regressivo para a oferta limitada
function iniciarContador() {
    // Definir a data final (3 dias a partir de agora)
    const agora = new Date();
    const dataFinal = new Date(agora);
    dataFinal.setDate(agora.getDate() + 3);
    dataFinal.setHours(23, 59, 59);
    
    function atualizarContador() {
        const agora = new Date();
        const diferenca = dataFinal - agora;
        
        // Calcular dias, horas, minutos
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        
        // Atualizar elementos HTML
        document.getElementById('timer-dias').textContent = dias.toString().padStart(2, '0');
        document.getElementById('timer-horas').textContent = horas.toString().padStart(2, '0');
        document.getElementById('timer-minutos').textContent = minutos.toString().padStart(2, '0');
        
        // Continuar atualizando a cada minuto
        if (diferenca > 0) {
            setTimeout(atualizarContador, 60000);
        }
    }
    
    // Iniciar o contador
    atualizarContador();
}

// Iniciar o contador quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Removing mobile menu toggle code
    
    // Form submission
    const form = document.getElementById('orcamento-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const bairro = document.getElementById('bairro').value;
            const telefone = document.getElementById('telefone').value;
            const produto = document.getElementById('produto').value;
            const mensagem = document.getElementById('mensagem').value;
            
            // Create WhatsApp message
            let whatsappMessage = `Olá, sou ${nome}. Gostaria de solicitar um orçamento para ${produto}.`;
            whatsappMessage += `\n\nDados para contato:`;
            whatsappMessage += `\nEmail: ${email}`;
            whatsappMessage += `\nTelefone: ${telefone}`;
            whatsappMessage += `\nBairro de entrega: ${bairro}`;
            
            if (mensagem) {
                whatsappMessage += `\n\nMensagem adicional: ${mensagem}`;
            }
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // Open WhatsApp with the message
            window.open(`https://wa.me/5522981606813?text=${encodedMessage}`, '_blank');
            
            // Reset form
            form.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll
    const animateElements = document.querySelectorAll('.produto-card, .vantagem-card, .comparativo-card');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check elements on load
    window.addEventListener('load', checkScroll);
    
    // Check elements on scroll
    window.addEventListener('scroll', checkScroll);
    
    // Iniciar contador
    iniciarContador();
});