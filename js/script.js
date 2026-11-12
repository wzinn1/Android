
const navBar = document.getElementById('navBar');
const caixaCookies = document.getElementById('caixa-cookies');
const botaoVoltarTopo = document.querySelector('#voltar-topo button');
const imagens = document.querySelectorAll('.imagem-hover img');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navBar.classList.add("pequena");
    } else {
        navBar.classList.remove("pequena");
    }

    if (window.scrollY > 200) {
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
