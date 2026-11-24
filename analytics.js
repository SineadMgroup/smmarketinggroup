/* SM Marketing Group: consent first Google Analytics loader.
   Analytics storage stays denied until the visitor accepts.
   The choice is remembered in localStorage under "smm_consent". */
(function () {
  var GTM_ID = 'GTM-P7294Q62';
  var KEY = 'smm_consent';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function save(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }
  function state(v) {
    return {
      analytics_storage: v === 'granted' ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    };
  }

  var current = stored();
  var initial = state(current);
  initial.wait_for_update = 500;
  gtag('consent', 'default', initial);
  gtag('js', new Date());

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
  document.head.appendChild(s);
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

  function closeBanner() {
    var b = document.getElementById('cookie-banner');
    if (b && b.parentNode) b.parentNode.removeChild(b);
  }

  function choose(v) {
    save(v);
    gtag('consent', 'update', state(v));
    closeBanner();
  }

  function openBanner() {
    if (document.getElementById('cookie-banner')) return;
    var b = document.createElement('div');
    b.id = 'cookie-banner';
    b.className = 'cookie-banner';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-label', 'Cookie choices');
    b.innerHTML =
      '<p class="cookie-banner__text">I use analytics cookies to see which pages are useful and where visitors come from. They stay off unless you accept. ' +
      '<a href="/privacy.html">Privacy notice</a></p>' +
      '<div class="cookie-banner__actions">' +
      '<button type="button" class="cookie-banner__btn" data-choice="denied">Decline</button>' +
      '<button type="button" class="cookie-banner__btn" data-choice="granted">Accept</button>' +
      '</div>';
    b.addEventListener('click', function (e) {
      var c = e.target && e.target.getAttribute && e.target.getAttribute('data-choice');
      if (c) choose(c);
    });
    document.body.appendChild(b);
  }

  function init() {
    if (!current) openBanner();
    document.addEventListener('click', function (e) {
      var t = e.target;
      while (t && t !== document) {
        if (t.hasAttribute && t.hasAttribute('data-cookie-settings')) {
          e.preventDefault();
          openBanner();
          return;
        }
        t = t.parentNode;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
