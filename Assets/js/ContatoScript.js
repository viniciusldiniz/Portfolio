// Função para carregar o arquivo de tradução para a página de contato
function loadTranslation(language) {
    let langFile = `../js/lang/contato/${language}.json`;

    // Carregar o arquivo de tradução
    fetch(langFile)
        .then(response => response.json())
        .then(data => {
            // Atualiza o conteúdo da página com as traduções carregadas
            changeLanguage(data);
        })
        .catch(error => console.error("Erro ao carregar o arquivo de tradução:", error));
}

// Função para alterar o conteúdo da página com base nos dados de tradução carregados
function changeLanguage(data) {
    // Traduz o conteúdo da seção de contato
    if (data.header) {
        document.getElementById('home').textContent = data.header.home;
        document.getElementById('about').textContent = data.header.about;
        document.getElementById('skills').textContent = data.header.skills;
        document.getElementById('portfolio').textContent = data.header.portfolio;
        document.getElementById('contact').textContent = data.header.contact;
    }

    if (data.contact) {
        document.getElementById('contacthead').textContent = data.contact.contacthead;
        document.getElementById('contactdescription').textContent = data.contact.contactDescription;

        // Atualiza as informações de contato
        document.getElementById('whatsapplink').textContent = data.contact.whatsapp;
        document.getElementById('emaillink').textContent = data.contact.email;
        document.getElementById('cvlink').textContent = data.contact.cv;
    }
}

// Gerenciar o botão de idiomas
const languageButton = document.getElementById('language-toggle');
const languageDropdown = document.getElementById('language-dropdown');
const languageText = document.querySelector('.LanguagePicker_languageText__SUMJ_');

// Carregar o idioma do localStorage, se disponível
const savedLanguage = localStorage.getItem('language') || 'pt-br'; // Se não houver um idioma salvo, usa 'pt-br' como padrão
loadTranslation(savedLanguage);

// Atualiza o texto do botão de idioma para o idioma salvo
languageText.textContent = savedLanguage.toUpperCase();

// Gerenciar a seleção de idioma no dropdown
languageButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isExpanded = languageButton.getAttribute('aria-expanded') === 'true';
    languageButton.setAttribute('aria-expanded', !isExpanded);
    languageDropdown.classList.toggle('visible');
    languageDropdown.classList.toggle('hidden');
});

// Seleção de idioma no dropdown
languageDropdown.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const selectedLang = clickedElement.getAttribute('data-lang');
    if (selectedLang) {
        languageText.textContent = selectedLang.toUpperCase(); // Atualiza o texto do botão
        languageDropdown.classList.add('hidden');
        languageDropdown.classList.remove('visible');
        languageButton.setAttribute('aria-expanded', 'false');
        loadTranslation(selectedLang); // Carregar a tradução correspondente

        // Salvar a escolha do idioma no localStorage
        localStorage.setItem('language', selectedLang);
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

// Dark Mode
const darkModeButton = document.getElementById('dark-mode-toggle');

// Ao carregar a página, verifica o estado do dark mode
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Alterar o estado de Dark Mode
darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Salvar o estado no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
});
