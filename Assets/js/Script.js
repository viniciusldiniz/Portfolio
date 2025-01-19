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

// Script para traduzir
function translateLanguage(language) {
    var googleTranslateElement = new google.translate.TranslateElement({
        pageLanguage: 'pt',
        includedLanguages: 'en,es,fr,de',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
    
    // A tradução será ativada conforme a bandeira clicada
    googleTranslateElement.showLanguage(language);
}
