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
        window.open('https://sedo.com/search/?showportfolio=c67aa84ed5e26d9853476fb49144413aa5dfed49s', '_blank');
    });
});
// helper: create overlay once
function ensureOverlay() {
    let overlay = document.getElementById('modal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'modal-overlay';
        Object.assign(overlay.style, {
            position: 'fixed', inset: '0', background: 'rgba(0,0,0,0.6)',
            display: 'none', zIndex: 40
        });
        document.body.appendChild(overlay);
    }
    return overlay;
}

function openLandingModal() {
    const landingPageContainer = document.getElementById('landing-page-container');
    if (!landingPageContainer) return;
    const overlay = ensureOverlay();
    // style and show overlay + modal
    overlay.style.display = 'block';
    landingPageContainer.style.display = 'flex';
    landingPageContainer.style.position = 'fixed';
    landingPageContainer.style.zIndex = 50;
    landingPageContainer.style.left = '50%';
    landingPageContainer.style.top = '50%';
    landingPageContainer.style.transform = 'translate(-50%, -50%)';
    landingPageContainer.style.alignItems = 'center';
    landingPageContainer.style.justifyContent = 'center';
    landingPageContainer.style.gap = '1rem';
    // prevent background scroll
    document.body.style.overflow = 'hidden';
}

function closeLandingModal() {
    const landingPageContainer = document.getElementById('landing-page-container');
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.style.display = 'none';
    if (landingPageContainer) landingPageContainer.style.display = 'none';
    document.body.style.overflow = '';
}

const displayLandingPageBtn = document.getElementById('display-landing-page');
if (displayLandingPageBtn) {
    displayLandingPageBtn.addEventListener('click', () => {
        openLandingModal();
    });
}

const closeBtn = document.getElementById('close-btn');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        closeLandingModal();
    });
}