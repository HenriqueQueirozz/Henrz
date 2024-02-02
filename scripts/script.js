function typeWriter(element) {
    const arrayText = element.innerHTML.split('');
    element.innerHTML = '';
    arrayText.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 75 * i);
    });
}

const title = document.querySelector('.typing-animation');
var counterAnimation = 0;
typeWriter(title);

setInterval(() => { 
    var outdoorTexts = ['Henrique Queiroz de Paula_', 'Desenvolvedor Web_', 'Maratonista_'];
    counterAnimation += 1;
    if (counterAnimation == 3) {
        counterAnimation = 0;
    }

    title.innerHTML = outdoorTexts[counterAnimation];
    typeWriter(title) ;
}, 6000)

function selectProject(project) {
    const projectTitle = document.querySelector('.title-project');
    const projectImage = document.querySelector('.image-project');
    const projectTechnologies = document.querySelector('.technologies-project');
    const projectDescription = document.querySelector('.description-project');
    const projectLink = document.querySelector('.link-project');
    
    var title = '';
    var image = '';
    var description = '';
    var technologies = '';
    var arrayTechnologies = [];
    var link = '';

    switch (project) {
        case 'spikeStore':
            title = 'Spike Store';
            image = './assets/spike_store.png';
            arrayTechnologies = ['PHP', 'Laravel', 'MySQL'];
            description = 'A "Spike Store" é um projeto criado como parte de um teste técnico de desenvolvimento de software<, o objetivo era o desenvolvimento de uma plataforma para cadastro de vendedores e suas respectivas vendas, o desafio explorou tecnologias como PHP e MySQL, exigindo funcionalidade como um CRUD (Create, Read, Update e Delete) de informações, assim como agendamento de rotinas.';
            link = 'https://github.com/HenriqueQueirozz/spike-store';
            break;
        case 'blackCatDefense':
            title = 'Black Cat Defense';
            image = './assets/black_cat_defense.png';
            arrayTechnologies = [];
            description = '';
            link = 'https://github.com/HenriqueQueirozz/BlackCatDefense';
            break;
        case 'cafeDigital':
            title = 'Café Digital';
            image = './assets/cafe_digital.png';
            arrayTechnologies = [];
            description = '';
            link = 'https://github.com/HenriqueQueirozz/cafeDigital';
            break;
        case 'academic':
            title = 'Academic';
            image = './assets/academic.png';
            arrayTechnologies = [];
            description = 'Projeto "Academic" para o Trabalho de Conclusão de Curso (TCC), nossa ideia consiste na criação de uma plataforma para a divulgação e apoio na escrita de textos acadêmicos, projeto realizado em parceria com @bruno, @cauê, @jonathan.';
            link = 'https://github.com/HenriqueQueirozz/AcademicIonic';
            break;
        case 'pancs':
            title = 'PANCs';
            image = './assets/pancs.png';
            arrayTechnologies = [];
            description = '';
            link = 'https://github.com/HenriqueQueirozz/PANCs';
            break;
        case 'toDoList':
            title = 'To Do List';
            image = './assets/to_do_list.png';
            arrayTechnologies = [];
            description = '';
            link = 'https://github.com/HenriqueQueirozz/to-do-list';
            break;
        case 'goBanco':
            title = 'Go Banco';
            image = './assets/go_banco.png';
            arrayTechnologies = [];
            description = '';
            link = 'https://github.com/HenriqueQueirozz/Go-Banco';
            break;
        case 'goMonitoramento':
            title = 'Go Monitoramento';
            image = './assets/go_monitoramento.png';
            arrayTechnologies = [];
            description = '';
            link = 'https://github.com/HenriqueQueirozz/Go-Monitoramento';
            break;
    }

    
    arrayTechnologies.forEach((technology, i) => {
        technologies += '<span class="tag">'+technology+'</span>';
    });
      

    projectTitle.innerHTML = title;
    projectImage.src = image;
    projectTechnologies.innerHTML = technologies;
    projectDescription.innerHTML = description;
    projectLink.href = link;
}