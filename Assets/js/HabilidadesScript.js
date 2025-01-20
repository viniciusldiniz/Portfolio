// Função para carregar o arquivo de tradução com base no idioma selecionado
function loadTranslation(language) {
    let langFile = `../js/lang/habilidades/${language}.json`;

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
    // Traduz o conteúdo das seções principais
    if (data.header) {
        document.getElementById('home').textContent = data.header.home;
        document.getElementById('about').textContent = data.header.about;
        document.getElementById('skills').textContent = data.header.skills;
        document.getElementById('portfolio').textContent = data.header.portfolio;
        document.getElementById('contact').textContent = data.header.contact;
    }

    // Traduz a seção de habilidades
    if (data.habilit) {
        document.getElementById('skills-title').textContent = data.habilit["skills.title"];
        document.getElementById('skills-description').textContent = data.habilit["skills.description"];

        // Tradução de habilidades específicas
        document.getElementById('skill-html5').textContent = data.habilit["skill.html5"];
        document.getElementById('skill-html5-desc').textContent = data.habilit["skill.desc"];

        document.getElementById('skill-css3').textContent = data.habilit["skill.css3"];
        document.getElementById('skill-css3-desc').textContent = data.habilit["skill.css3.desc"];

        document.getElementById('skill-javascript').textContent = data.habilit["skill.javascript"];
        document.getElementById('skill-javascript-desc').textContent = data.habilit["skill.javascript.desc"];

        document.getElementById('skill-react').textContent = data.habilit["skill.react"];
        document.getElementById('skill-react-desc').textContent = data.habilit["skill.react.desc"];

        document.getElementById('skill-nodejs').textContent = data.habilit["skill.nodejs"];
        document.getElementById('skill-nodejs-desc').textContent = data.habilit["skill.nodejs.desc"];

        document.getElementById('skill-github').textContent = data.habilit["skill.github"];
        document.getElementById('skill-github-desc').textContent = data.habilit["skill.github.desc"];

        document.getElementById('skill-java').textContent = data.habilit["skill.java"];
        document.getElementById('skill-java-desc').textContent = data.habilit["skill.java.desc"];

        document.getElementById('skill-springboot').textContent = data.habilit["skill.springboot"];
        document.getElementById('skill-springboot-desc').textContent = data.habilit["skill.springboot.desc"];

        document.getElementById('skill-mysql').textContent = data.habilit["skill.mysql"];
        document.getElementById('skill-mysql-desc').textContent = data.habilit["skill.mysqldesc"];
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
