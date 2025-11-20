const break_point = 768;
const window_width = window.innerWidth;
console.log(window_width, break_point);
const contact = document.getElementById('contact');
const fullList = document.getElementById('full-list');

const fullList2 = document.getElementById('full-list-2');

contact.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

fullList.addEventListener('click', () => {
    const scrolling = window_width > break_point ? 850 : 1200;
    window.scrollTo({
        top: scrolling,
        behavior: 'smooth'
    });
});

fullList2.addEventListener('click', () => {
    window.scrollTo({
        top: 850,
        behavior: 'smooth'
    });
});

const specials = document.querySelectorAll('.special');
specials.forEach(special => {
    special.addEventListener('click', () => {
        window.scrollTo({
            top: 450,
            behavior: 'smooth'
        });
    });
});

const negotiationBtn = document.querySelectorAll('.negotiate');
negotiationBtn.forEach(element => {
    element.addEventListener('click', () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
});
