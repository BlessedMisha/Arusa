const iconOpen = document.getElementById('iconopen')
const iconClose = document.getElementById('iconclose')
const navLeft = document.getElementById('navLeft')
const menu = document.getElementById('menu')

navLeft.addEventListener('click', ()=> {
    iconOpen.classList.toggle('hide')
    iconClose.classList.toggle('hide')
    menu.classList.toggle('hide')
})
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    var partclubBlock = document.querySelector('.partclub-block');
    if (isElementInViewport(partclubBlock)) {
        partclubBlock.style.opacity = 1;
        partclubBlock.style.transform = 'translateY(0)';
    }
}

// Додаємо обробник прокрутки сторінки
window.addEventListener('scroll', animateOnScroll);

// Викликаємо анімацію відразу, якщо елемент вже в області видимості при завантаженні сторінки
animateOnScroll();
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    var articlesBlock = document.querySelector('.articles-blockmain');
    if (isElementInViewport(articlesBlock)) {
        articlesBlock.classList.add('animated');
    }
}

// Додаємо обробник прокрутки сторінки
window.addEventListener('scroll', animateOnScroll);

// Викликаємо анімацію відразу, якщо елемент вже в області видимості при завантаженні сторінки
animateOnScroll();
