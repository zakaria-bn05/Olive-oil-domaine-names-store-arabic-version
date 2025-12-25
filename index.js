const break_point = 768;
const window_width = window.innerWidth;
console.log(window_width, break_point);
const contact = document.getElementById('contact');
const fullList = document.getElementById('full-list');
const fullList2 = document.getElementById('full-list-2');

// Mobile Sidebar Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileSidebar = document.getElementById('mobile-sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const contactMobile = document.getElementById('contact-mobile');
const fullListMobile = document.getElementById('full-list-mobile');

// Open Sidebar
mobileMenuBtn.addEventListener('click', () => {
  mobileSidebar.classList.add('open');
  sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
});

// Close Sidebar
const closeSidebarFunc = () => {
  mobileSidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = 'auto'; // Enable scrolling
};

closeSidebar.addEventListener('click', closeSidebarFunc);
sidebarOverlay.addEventListener('click', closeSidebarFunc);

// Desktop Contact
contact.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

// Mobile Contact
contactMobile.addEventListener('click', () => {
  closeSidebarFunc();
  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }, 300);
});

// Desktop Full List
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

// Mobile Full List
fullListMobile.addEventListener('click', () => {
  closeSidebarFunc();
  setTimeout(() => {
    const scrolling = window_width > break_point ? 850 : 1490;
    window.scrollTo({
      top: scrolling,
      behavior: 'smooth'
    });
  }, 300);
});

// Desktop Special Links
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

// Mobile Special Links
const specialsMobile = document.querySelectorAll('.special-mobile');
specialsMobile.forEach(special => {
  special.addEventListener('click', () => {
    closeSidebarFunc();
    setTimeout(() => {
      const scrolling = window_width > break_point ? 450 : 450;
      window.scrollTo({
        top: scrolling,
        behavior: 'smooth'
      });
    }, 300);
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
    window.open('https://sedo.com/search/?member=c67aa84ed5e26d9853476fb49144413aa5dfed49', '_blank');
  });
});


const previewBtns = document.querySelectorAll('#display-landing-page');

const isArabic = document.documentElement.dir === 'rtl';

const modalHTML = isArabic ? `
  <div id="language-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50" style="display: none;">
    <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform transition-all">
      <h2 class="text-2xl font-bold text-center mb-6 font-cairo">اختر اللغة</h2>
      <p class="text-center text-gray-600 mb-6 font-cairo">اختر اللغة المفضلة لديك لمعاينة صفحة الهبوط</p>
      
      <div class="flex flex-col gap-4">
        <a href="Olive Oile Landing page/landing-page-english.html" target="_blank" 
           class="bg-olive-btn text-white py-3 px-6 rounded-lg text-center font-cairo font-semibold hover:opacity-90 transition-opacity">
          English (الإنجليزية)
        </a>
        <a href="Olive Oile Landing page/landing-page-arabic.html" target="_blank"
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

document.body.insertAdjacentHTML('beforeend', modalHTML);

const modal = document.getElementById('language-modal');
const closeBtn = document.getElementById('close-modal');
previewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});