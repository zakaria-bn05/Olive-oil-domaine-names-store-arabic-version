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
// Language Selection Modal Script - Works for both English and Arabic versions

// Get all preview buttons (works for both pages)
const previewBtns = document.querySelectorAll('#display-landing-page');

// Detect if current page is Arabic (RTL)
const isArabic = document.documentElement.dir === 'rtl';

// Create modal HTML based on language
const modalHTML = isArabic ? `
  <div id="language-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50" style="display: none;">
    <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-all">
      <h2 class="text-2xl font-bold text-center mb-6 font-cairo">اختر اللغة</h2>
      <p class="text-center text-gray-600 mb-6 font-cairo">اختر اللغة المفضلة لديك لمعاينة صفحة الهبوط</p>
      
      <div class="flex flex-col gap-4">
        <a href="landing-page-english.html" target="_blank" 
           class="bg-olive-btn text-white py-3 px-6 rounded-lg text-center font-cairo font-semibold hover:opacity-90 transition-opacity">
          English (الإنجليزية)
        </a>
        <a href="landing-page-arabic.html" target="_blank"
           class="bg-olive-btn text-white py-3 px-6 rounded-lg text-center font-cairo font-semibold hover:opacity-90 transition-opacity">
          العربية
        </a>
      </div>
      
      <button id="close-modal" class="mt-6 w-full py-2 text-gray-600 hover:text-gray-800 font-cairo">
        إلغاء
      </button>
    </div>
  </div>
` : `
  <div id="language-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50" style="display: none;">
    <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-all">
      <h2 class="text-2xl font-bold text-center mb-6 font-cairo">Choose Language</h2>
      <p class="text-center text-gray-600 mb-6 font-cairo">Select your preferred language to preview the landing page</p>
      
      <div class="flex flex-col gap-4">
        <a href="Olive Oile Landing page/landing-page-english.html" target="_blank" 
           class="bg-olive-btn text-white py-3 px-6 rounded-lg text-center font-cairo font-semibold hover:opacity-90 transition-opacity">
          English
        </a>
        <a href="Olive Oile Landing page/landing-page-arabic.html" target="_blank"
           class="bg-olive-btn text-white py-3 px-6 rounded-lg text-center font-cairo font-semibold hover:opacity-90 transition-opacity">
          العربية (Arabic)
        </a>
      </div>
      
      <button id="close-modal" class="mt-6 w-full py-2 text-gray-600 hover:text-gray-800 font-cairo">
        Cancel
      </button>
    </div>
  </div>
`;

// Insert modal into the page
document.body.insertAdjacentHTML('beforeend', modalHTML);

// Get modal elements
const modal = document.getElementById('language-modal');
const closeBtn = document.getElementById('close-modal');

// Open modal when any preview button is clicked
previewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// Close modal when close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});