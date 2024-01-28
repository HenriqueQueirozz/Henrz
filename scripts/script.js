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