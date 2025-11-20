// Responsive scroll helpers
const break_point = 768;
function getWindowWidth() { return window.innerWidth || document.documentElement.clientWidth; }

const contact = document.getElementById('contact');
const fullList = document.getElementById('full-list');
const fullList2 = document.getElementById('full-list-2');

if (contact) {
    contact.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
}

function scrollToPosition(posDesktop, posMobile) {
    const w = getWindowWidth();
    const scrolling = w > break_point ? posDesktop : posMobile;
    window.scrollTo({ top: scrolling, behavior: 'smooth' });
}

if (fullList) {
    fullList.addEventListener('click', () => scrollToPosition(850, 1490));
}
if (fullList2) {
    fullList2.addEventListener('click', () => scrollToPosition(850, 1490));
}

// specials scroll to featured section by default
const specials = document.querySelectorAll('.special');
specials.forEach(special => {
    special.addEventListener('click', () => {
        const target = document.getElementById('featured');
        if (target) {
            const nav = document.querySelector('nav');
            const offset = nav ? nav.offsetHeight + 12 : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// negotiation buttons scroll to bottom/contact
const negotiationBtn = document.querySelectorAll('.negotiate');
negotiationBtn.forEach(element => {
    element.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});

// Modal overlay + landing page modal handling
function ensureOverlay() {
    let overlay = document.getElementById('modal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'modal-overlay';
        overlay.style.position = 'fixed';
        overlay.style.inset = '0';
        overlay.style.background = 'rgba(0,0,0,0.6)';
        overlay.style.display = 'none';
        overlay.style.zIndex = '40';
        document.body.appendChild(overlay);
    }
    return overlay;
}

function showLanding() {
    const landing = document.getElementById('landing-page-container');
    if (!landing) return;
    const overlay = ensureOverlay();
    overlay.style.display = 'block';

    // style and center landing
    landing.style.display = 'flex';
    landing.style.position = 'fixed';
    landing.style.left = '50%';
    landing.style.top = '50%';
    landing.style.transform = 'translate(-50%, -50%)';
    landing.style.zIndex = '50';
    landing.style.alignItems = 'center';
    landing.style.justifyContent = 'center';

    // dim background content (optional extra)
    const main = document.querySelector('main');
    if (main) main.style.filter = 'brightness(40%)';
}

function hideLanding() {
    const landing = document.getElementById('landing-page-container');
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.style.display = 'none';
    if (landing) {
        landing.style.display = 'none';
        landing.style.transform = '';
        landing.style.left = '';
        landing.style.top = '';
        landing.style.position = '';
        landing.style.zIndex = '';
    }
    const main = document.querySelector('main');
    if (main) main.style.filter = '';
}

// selling buttons should open modal
const sellingBtn = document.querySelectorAll('.selling');
sellingBtn.forEach(element => {
    element.addEventListener('click', () => showLanding());
});

const displayLandingPageBtn = document.getElementById('display-landing-page');
if (displayLandingPageBtn) {
    displayLandingPageBtn.addEventListener('click', () => {
        showLanding();
    });
}

const closeBtn = document.getElementById('close-btn');
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        hideLanding();
    });
}