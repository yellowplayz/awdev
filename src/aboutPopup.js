document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.navigation').children[3];
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');
    const aboutLink = document.querySelector('.navigation').children[1]; // Select the About link

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });

    aboutLink.addEventListener('click', () => {
        const aboutBox = document.querySelector('.form-box.about');
        aboutBox.classList.add('active');
    });

    const iconCloseAbout = document.querySelector('.icon-close-about');
    iconCloseAbout.addEventListener('click', () => {
        const aboutBox = document.querySelector('.form-box.about');
        aboutBox.classList.remove('active');
    });
});