// Gerenciar o modo escuro
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Verifique se o modo escuro está ativado no localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Se o modo escuro estiver ativado, adicione a classe 'dark-mode'
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Evento de mudança no toggle para ativar ou desativar o modo escuro
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Gerenciar o botão de idiomas
const languageButton = document.getElementById('language-toggle');
const languageDropdown = document.getElementById('language-dropdown');
const languageText = document.querySelector('.LanguagePicker_languageText__SUMJ_');

// Alternar o dropdown de idiomas
languageButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique feche o menu imediatamente
    const isExpanded = languageButton.getAttribute('aria-expanded') === 'true';
    languageButton.setAttribute('aria-expanded', !isExpanded);
    languageDropdown.classList.toggle('visible');
    languageDropdown.classList.toggle('hidden');
});

// Seleção de idioma no dropdown
languageDropdown.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const selectedLang = clickedElement.getAttribute('data-lang'); // Atributo 'data-lang' identifica o idioma

    if (selectedLang) {
        // Atualiza o texto do botão para o idioma selecionado
        languageText.textContent = selectedLang.toUpperCase();

        // Fecha o menu suspenso
        languageDropdown.classList.add('hidden');
        languageDropdown.classList.remove('visible');
        languageButton.setAttribute('aria-expanded', 'false');

        console.log(`Idioma selecionado: ${selectedLang}`);
    }
});

// Fecha o dropdown ao clicar fora
document.addEventListener('click', (event) => {
    if (!languageButton.contains(event.target) && !languageDropdown.contains(event.target)) {
        languageDropdown.classList.add('hidden');
        languageDropdown.classList.remove('visible');
        languageButton.setAttribute('aria-expanded', 'false');
    }
});
