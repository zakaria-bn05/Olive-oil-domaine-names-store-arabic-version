const contact = document.getElementById('contact');
const fullList = document.getElementById('full-list');
const special = document.getElementsByClassName("special")[0, 1];
const fullList2 = document.getElementById('full-list-2');

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

fullList2.addEventListener('click', () => {
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
