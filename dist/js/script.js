// untuk bagian humberger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})
//navbar fixed
window.onscroll = function (){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }

}

//mode dark
const darkToggle = document.querySelector('#dark');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function () {
    if (darkToggle.checked){
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    };
});