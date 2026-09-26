/* Terrassa Breaking — JavaScript de la web.
   1) Menú del mòbil
   2) Bàner de galetes + Google Analytics 4 (només es carrega si la persona accepta) */

// ===== Posa aquí l'ID de mesura de Google Analytics 4 (G-RCLSJPZ44C) =====
const GA_ID = "G-RCLSJPZ44C";
// =========================================================================

// 1) Menú del mòbil
(function () {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
})();

// 2) Galetes i Google Analytics
(function () {
  const KEY = "tb-consent";
  const configured = /^G-[A-Z0-9]+$/.test(GA_ID) && !/^G-X+$/.test(GA_ID);
  const lang = (document.documentElement.lang || "ca").slice(0, 2);

  const TXT = {
    ca: { msg: "Fem servir galetes de Google Analytics per saber quantes persones visiten la web i millorar-la. Només les activarem si ho acceptes.", yes: "Accepto", no: "No, gràcies", more: "Més informació" },
    es: { msg: "Usamos cookies de Google Analytics para saber cuántas personas visitan la web y mejorarla. Solo las activaremos si lo aceptas.", yes: "Acepto", no: "No, gracias", more: "Más información" },
    en: { msg: "We use Google Analytics cookies to understand how many people visit this site and improve it. They are only turned on if you agree.", yes: "Accept", no: "No, thanks", more: "More information" }
  }[lang] || null;

  function store(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  function loadGA() {
    if (!configured || window.__gaLoaded) return;
    window.__gaLoaded = true;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });
  }

  function showBanner() {
    if (!configured || document.querySelector(".cookie")) return;
    const t = TXT || { msg: "", yes: "OK", no: "No", more: "" };
    const box = document.createElement("div");
    box.className = "cookie";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-live", "polite");
    box.innerHTML =
      '<p>' + t.msg + ' <a href="/avis-legal/">' + t.more + '</a></p>' +
      '<div class="actions"><button class="btn" data-c="granted">' + t.yes + '</button>' +
      '<button class="btn alt" data-c="denied">' + t.no + '</button></div>';
    document.body.appendChild(box);
    box.addEventListener("click", function (e) {
      const v = e.target.getAttribute && e.target.getAttribute("data-c");
      if (!v) return;
      store(v);
      box.remove();
      if (v === "granted") loadGA();
    });
  }

  // Botó "Galetes" del peu: permet canviar la decisió
  document.querySelectorAll("[data-cookie-settings]").forEach(function (b) {
    if (!configured) { b.hidden = true; return; }
    b.addEventListener("click", function () { store(""); showBanner(); });
  });

  const c = read();
  if (c === "granted") loadGA();
  else if (c !== "denied") showBanner();
})();
