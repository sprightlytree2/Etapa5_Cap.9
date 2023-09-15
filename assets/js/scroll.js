window.addEventListener('scroll', () => {
    const headerPage = document.querySelector('.nav-page')
    headerPage.classList.toggle('active-scroll', window.scrollY > 700);
    
    })