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
    const scrolling = window_width > break_point ? 850 : 1490;
    window.scrollTo({
        top: scrolling,
        behavior: 'smooth'
    });
});

fullList2.addEventListener('click', () => {
    const scrolling = window_width > break_point ? 850 : 1490;
    window.scrollTo({
        top: scrolling,
        behavior: 'smooth'
    });
});

const specials = document.querySelectorAll('.special');
specials.forEach(special => {
    special.addEventListener('click', () => {
        const scrolling = window_width > break_point ? 450 : 450;
        window.scrollTo({
            top: scrolling,
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

const sellingBtn = document.querySelectorAll('.selling');
sellingBtn.forEach(element => {
    element.addEventListener('click', () => {
        window.open('https://sedo.com/search/?showportfolio=c67aa84ed5e26d9853476fb49144413aa5dfed49', '_blank');
    });
});
const displayLandingPageBtn = document.getElementById('display-landing-page');
displayLandingPageBtn.addEventListener('click', () => {

});