/* ShadowPhish — page transition loader
   1-second cyber-themed overlay on every internal navigation */
(function () {
  // ── Inject overlay + styles once ─────────────────────────────────────────
  const style = document.createElement("style");
  style.textContent = `
    #sp-loader {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
      font-family: 'Orbitron', sans-serif;
    }
    #sp-loader.sp-visible {
      opacity: 1;
      pointer-events: all;
    }
    #sp-loader .sp-fish {
      width: 64px;
      height: 64px;
      margin-bottom: 22px;
      animation: sp-pulse 0.6s ease-in-out infinite alternate;
    }
    #sp-loader .sp-bar-wrap {
      width: 200px;
      height: 4px;
      background: rgba(255,255,255,0.08);
      border-radius: 2px;
      overflow: hidden;
    }
    #sp-loader .sp-bar {
      height: 100%;
      width: 0%;
      background: linear-gradient(90deg, #7a00ff, #00ccff);
      border-radius: 2px;
      transition: width 0.85s cubic-bezier(0.4, 0, 0.2, 1);
    }
    #sp-loader .sp-label {
      margin-top: 14px;
      font-size: 11px;
      letter-spacing: 3px;
      color: rgba(0, 204, 255, 0.6);
      text-transform: uppercase;
    }
    @keyframes sp-pulse {
      from { filter: drop-shadow(0 0 6px #7a00ff); transform: scale(0.95); }
      to   { filter: drop-shadow(0 0 18px #00ccff); transform: scale(1.05); }
    }
  `;
  document.head.appendChild(style);

  const overlay = document.createElement("div");
  overlay.id = "sp-loader";
  overlay.innerHTML = `
    <img class="sp-fish" src="ShadowPhish_logo.png" alt="">
    <div class="sp-bar-wrap"><div class="sp-bar" id="sp-bar"></div></div>
    <div class="sp-label">Encrypting channel...</div>
  `;
  document.body.appendChild(overlay);

  // ── Navigate with loader ──────────────────────────────────────────────────
  function navigateTo(url) {
    overlay.classList.add("sp-visible");
    // kick the progress bar
    requestAnimationFrame(() => {
      document.getElementById("sp-bar").style.width = "100%";
    });
    setTimeout(() => { window.location.href = url; }, 900);
  }

  // ── Intercept all <a> clicks that stay on-site ────────────────────────────
  document.addEventListener("click", function (e) {
    const a = e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href");
    // skip external, hash-only, mailto, tel
    if (!href || href.startsWith("http") || href.startsWith("//") ||
        href.startsWith("#") || href.startsWith("mailto") || href.startsWith("tel")) return;
    e.preventDefault();
    navigateTo(href);
  });

  // ── Intercept location.href assignments via patched buttons ──────────────
  // Catch onclick="location.href='...'" style navigation
  document.addEventListener("click", function (e) {
    const btn = e.target.closest("button[onclick]");
    if (!btn) return;
    const oc = btn.getAttribute("onclick") || "";
    const match = oc.match(/location\.href\s*=\s*['"]([^'"]+)['"]/);
    if (!match) return;
    e.stopImmediatePropagation();
    e.preventDefault();
    btn.removeAttribute("onclick");
    navigateTo(match[1]);
  }, true);

  // ── Show loader on browser back/forward ──────────────────────────────────
  window.addEventListener("beforeunload", function () {
    overlay.classList.add("sp-visible");
  });
})();
