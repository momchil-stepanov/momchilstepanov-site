/**
 * Mobile menu — burger toggle + submenu expansion.
 *
 * Kept in a separate file (rather than an inline `<script>` block in
 * MobileMenu.astro) so Astro emits an external bundled chunk. This
 * avoids an empirically observed Cloudflare Pages edge-runtime 500
 * when an inline `<script type="module">` is embedded inside a
 * Cyrillic-heavy HTML document above ~24 KB.
 */
const burger = document.querySelector<HTMLButtonElement>('[data-burger]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const submenuToggle = document.querySelector<HTMLButtonElement>('[data-submenu-toggle]');
const submenu = document.querySelector<HTMLElement>('[data-submenu]');
const closeTriggers = document.querySelectorAll<HTMLElement>('[data-close]');

if (burger && menu) {
  const open = () => {
    menu.hidden = false;
    requestAnimationFrame(() => {
      document.body.classList.add('is-menu-open');
      burger.classList.add('is-active');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Close menu');
      menu.classList.add('is-open');
    });
  };

  const close = () => {
    document.body.classList.remove('is-menu-open');
    burger.classList.remove('is-active');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('is-open');
    setTimeout(() => {
      if (!menu.classList.contains('is-open')) menu.hidden = true;
    }, 300);
  };

  burger.addEventListener('click', () => {
    const isOpen = menu.classList.contains('is-open');
    isOpen ? close() : open();
  });

  closeTriggers.forEach((el) => {
    el.addEventListener('click', () => close());
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      close();
    }
  });

  menu.addEventListener('click', (e) => {
    if (e.target === menu) close();
  });
}

if (submenuToggle && submenu) {
  submenuToggle.addEventListener('click', () => {
    const expanded = submenuToggle.getAttribute('aria-expanded') === 'true';
    submenuToggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    submenu.hidden = expanded;
  });
}
