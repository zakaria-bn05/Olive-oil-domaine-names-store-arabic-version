const contact = document.getElementById('contact');
const fullList = document.getElementById('full-list');
const special = document.getElementById('special');
const fullList2 = document.getElementById('full-list-2');

contact.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
(fullList, fullList2).addEventListener('click', () => {
    window.scrollTo({
        top: 850,
        behavior: 'smooth'
    });
});
special.addEventListener('click', () => {
    window.scrollTo({
        top: 450,
        behavior: 'smooth'
    });
});
