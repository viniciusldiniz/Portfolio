// Função para carregar o arquivo de tradução com base no idioma selecionado
function loadTranslation(language) {
    let langFile = `../js/lang/portifolio/${language}.json`;

    // Carregar o arquivo de tradução
    fetch(langFile)
        .then(response => response.json())
        .then(data => {
            // Atualiza o conteúdo da página com as traduções carregadas
            changeLanguage(data);
        })
        .catch(error => console.error("Erro ao carregar o arquivo de tradução:", error));
}
function changeLanguage(data) {
    // Traduz o conteúdo das seções principais
    if (data.header) {
        if (document.getElementById('home')) document.getElementById('home').textContent = data.header.home;
        if (document.getElementById('about')) document.getElementById('about').textContent = data.header.about;
        if (document.getElementById('skills')) document.getElementById('skills').textContent = data.header.skills;
        if (document.getElementById('portfolio')) document.getElementById('portfolio').textContent = data.header.portfolio;
        if (document.getElementById('contact')) document.getElementById('contact').textContent = data.header.contact;
    }

    // Traduz a seção de portfólio
    if (data.portfolio) {
        if (document.getElementById('portfoliotitle')) document.getElementById('portfoliotitle').textContent = data.portfolio.portfoliotitle;
        if (document.getElementById('myprojects')) document.getElementById('myprojects').textContent = data.portfolio.myprojects;
        if (document.getElementById('projectsdescription')) document.getElementById('projectsdescription').textContent = data.portfolio.projectsdescription;

        // Traduz os projetos dinamicamente
        data.portfolio.projects.forEach((project, index) => {
            const projectTitle = document.getElementById(`project${index + 1}title`);
            const projectDesc = document.getElementById(`project${index + 1}desc`);
            const viewProject = document.getElementById(`viewproject${index + 1}`);

            if (projectTitle) projectTitle.textContent = project.title;
            if (projectDesc) projectDesc.innerHTML = project.desc;
            if (viewProject) viewProject.textContent = project.viewProject;
        });
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
