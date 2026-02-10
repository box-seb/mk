(function(){
  // Set active nav pill based on current path.
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a => {
    const target = (a.getAttribute('href') || '').toLowerCase();
    if ((path === '' && target.includes('index.html')) || path === target){
      a.setAttribute('aria-current','page');
    }
  });

  // Click-to-reveal contact details (lightweight scraper deterrent).
  function decode(nums){ return nums.map(n => String.fromCharCode(n)).join(''); }

  // Phone (stored as char codes, rendered only after click).
  const phoneBtn = document.querySelector('[data-reveal-phone]');
  if (phoneBtn){
    const phoneText = decode([43,54,49,32,52,48,51,32,48,55,48,32,48,52,57]); // "+61 403 070 049"
    const telHref  = "tel:" + phoneText.replace(/[^\d+]/g,'');
    phoneBtn.addEventListener('click', () => {
      phoneBtn.outerHTML = `<a class="pill mono" href="${telHref}" aria-label="Call Meg">${phoneText}</a>`;
    }, { once: true });
  }

  const emailBtn = document.querySelector('[data-reveal-email]');
  if (emailBtn){
    const emailText = decode([109,101,103,46,107,111,119,97,108,101,119,64,103,109,97,105,108,46,99,111,109]); // "meg.kowalew@gmail.com"
    const mailHref = "mailto:" + emailText;
    emailBtn.addEventListener('click', () => {
      emailBtn.outerHTML = `<a class="pill mono" href="${mailHref}">${emailText}</a>`;
    }, { once: true });
  }
})();
