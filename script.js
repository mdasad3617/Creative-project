//navigation scrolled
const header=document.querySelector('.header');

window.addEventListener('scroll', () => {
    if(window.scrollY>50){
        header.classList.add('header-scrolled');
    }
    else if(window.screenY<=50){
        header.classList.remove('header-scrolled');
    }
});
