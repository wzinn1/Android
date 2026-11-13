
const navBar = document.getElementById('navBar');
const botaoVoltarTopo = document.querySelector('#voltar-topo button');
const imagens = document.querySelectorAll('.imagem-hover img');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navBar.classList.add("pequena");
    } else {
        navBar.classList.remove("pequena");
    }

    if (window.scrollY > 500) {
        document.getElementById('voltar-topo').style.display = 'block';
    } else {
        document.getElementById('voltar-topo').style.display = 'none';
    }

});

// Voltar ao início da página
botaoVoltarTopo.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});
imagens.forEach(imagem => {

    imagem.addEventListener('click', () => {

        imagem.classList.toggle('selecionada');

    });

});
const caixaCookies = document.getElementById('cookies');
const fundoCookies = document.getElementById('fundo-cookies');
const botaoAceitar = document.getElementById('aceitar');
const botaoRecusar = document.getElementById('recusar');

document.documentElement.classList.add('bloqueado');
document.body.classList.add('bloqueado');

function fecharCookies() {
    caixaCookies.style.display = 'none';
    fundoCookies.style.display = 'none';

    document.documentElement.classList.remove('bloqueado');
    document.body.classList.remove('bloqueado');
}

botaoAceitar.addEventListener('click', () => {
    console.log('cookies aceites');
    fecharCookies();
});

botaoRecusar.addEventListener('click', () => {
    console.log('cookies recusados');
    fecharCookies();
});