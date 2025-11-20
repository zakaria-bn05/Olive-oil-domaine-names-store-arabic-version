const contact = document.getElementById('contact');
const fullList = document.getElementById('full-list');
const special = document.getElementById('special');

contact.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
fullList.addEventListener('click', () => {
    window.scrollTo({
        top: 850,
        behavior: 'smooth'
    });
});
special.addEventListener('click', () => {
    window.scrollTo({
        top: 350,
        behavior: 'smooth'
    });
});
