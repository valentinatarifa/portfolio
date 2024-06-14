

window.addEventListener("load", function() {
    initButton.classList.add('init');
    scrollTo(0, 0);
});

//Estilo menu, se agrega la clase init y también scroll a respectivas sections
const initButton = document.getElementById('inicio-button');
const profileButton = document.getElementById('perfil-button');
const contactButton = document.getElementById('contacto-button');

initButton.addEventListener('click', function(){
    initButton.classList.add('init');
    profileButton.classList.remove('init');
    contactButton.classList.remove('init');
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });

});

profileButton.addEventListener('click', function(){
    profileButton.classList.add('init');
    initButton.classList.remove('init');
    contactButton.classList.remove('init');
    document.getElementById('perfil').scrollIntoView({ behavior: 'smooth' });
});

contactButton.addEventListener('click', function(){
    contactButton.classList.add('init');
    initButton.classList.remove('init');
    profileButton.classList.remove('init');
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
});

//Funcion ver proyectos, arrow angle down
const viewMoreButton= document.getElementById('ver-proyectos');

viewMoreButton.addEventListener('click', function(){

    document.getElementById('proyectos').scrollIntoView({behavior: 'smooth'})
});

