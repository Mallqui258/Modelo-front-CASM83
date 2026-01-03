// modal.js
(() => {
  const THEME_KEY = 'casm83_theme';
  let modalEl = null;

  const $ = (id) => document.getElementById(id);

  function applyTheme(theme) {
    const app = $('app');
    if (!app) return;
    app.className = `app-container theme-${theme}`;
  }

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || 'professional';
  }

  function setSavedTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }

  function openModal() {
    if (modalEl) modalEl.classList.remove('hidden');
  }

  function closeModal() {
    if (modalEl) modalEl.classList.add('hidden');
  }

  function initModal() {
    modalEl = $('settingsModal');
    const settingsBtn = $('settingsBtn');
    const closeBtn = $('closeSettingsBtn');
    const saveBtn = $('saveSettingsBtn');

    // Si no existe el modal en esta página, salimos sin romper nada
    if (!modalEl || !settingsBtn || !closeBtn || !saveBtn) {
      // Aún así, aplica el tema guardado (si existe #app)
      applyTheme(getSavedTheme());
      return;
    }

    // Abrir / cerrar
    settingsBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Click fuera del contenido -> cerrar
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) closeModal();
    });

    // ESC -> cerrar
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Guardar y aplicar tema
    saveBtn.addEventListener('click', () => {
      const selected = document.querySelector('input[name="theme"]:checked');
      const theme = selected ? selected.value : getSavedTheme();
      setSavedTheme(theme);
      applyTheme(theme);
      closeModal();
    });

    // Pre-cargar el tema guardado
    const theme = getSavedTheme();
    applyTheme(theme);
    const radio = document.querySelector(`input[name="theme"][value="${theme}"]`);
    if (radio) radio.checked = true;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initModal);
  } else {
    initModal();
  }
})();
