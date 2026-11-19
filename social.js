(function(){
  var FB = "https://www.facebook.com/Rieu Tur";
  var IG = "https://www.instagram.com/rieu_tours_and_safaris";

  var css =
    ".social{display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:50%;background:#c8693f;color:#fff;transition:.2s;text-decoration:none}" +
    ".social:hover{background:#a5532f}" +
    ".auto-topbar{background:#3a2a2a;color:#fff;font-size:14px;padding:10px 6%;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:10px}" +
    ".auto-contact{display:flex;flex-wrap:wrap;align-items:center;gap:14px}" +
    ".auto-contact a:not(.social){color:#fff;text-decoration:none}";
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  var fb = '<a class="social" href="'+FB+'" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.5 22v-8h2.7l.5-3.2h-3.2V8.7c0-.9.3-1.6 1.7-1.6h1.6V4.2c-.3 0-1.3-.2-2.4-.2-2.4 0-4 1.5-4 4.1v2.7H7.7V14h2.7v8h3.1z"/></svg></a>';
  var ig = '<a class="social" href="'+IG+'" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>';

  document.addEventListener("DOMContentLoaded", function(){
    if (document.querySelector(".social")) return;

    var box = document.querySelector(".topbar .contact");
    if (box) {
      box.insertAdjacentHTML("beforeend", fb + ig);
      return;
    }

    var bar = document.createElement("div");
    bar.className = "auto-topbar";
    bar.innerHTML =
      '<span>The most affordable tours in Zanzibar - Tanzania / WhatsApp: +255 679 542 803</span>' +
      '<span class="auto-contact">' +
        '<a href="tel:+255679542803">+255 679 542 803</a>' +
        '<a href="mailto:rieutoursandsafaris@gmail.com">rieutoursandsafaris@gmail.com</a>' +
        fb + ig +
      '</span>';
    document.body.insertBefore(bar, document.body.firstChild);
  });
})();
