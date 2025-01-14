// Função para simular o efeito de texto auto-digitado
function typeWriter(element, text, i, speed) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(element, text, i, speed);
        }, speed);
    }
}


// Iniciar o efeito assim que a página carregar
window.onload = function() {
    var text = "WELCOME TO MI2RS CHURCH"; // Texto que você quer exibir
    var speed = 150; // Velocidade do efeito de digitação (em milissegundos)
    var element = document.getElementById("auto-text");
    loop = true,
    fadOut = text,
    typeWriter(element, text, 0, speed);
};


//Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
hamburguerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível.
});

//Criamos uma função que a ouvir o click do Mouse, ele REMOVA uma Class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar invisível.
closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");
});