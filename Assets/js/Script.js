// jscript.js

// Script de Modo Escuro
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Verifique se o modo escuro está ativado no localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Se o modo escuro estiver ativado, adicione a classe 'dark-mode'
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Adicione o evento de mudança no toggle para ativar ou desativar o modo escuro
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Script para alternar a exibição das bandeiras
const languageToggle = document.querySelector('.language-toggle');
const languageSelector = document.querySelector('.language-selector');

languageToggle.addEventListener('click', () => {
    languageSelector.classList.toggle('active'); // Alterna a classe "active" para exibir/esconder as bandeiras
});

