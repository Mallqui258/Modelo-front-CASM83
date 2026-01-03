/*
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const startTestBtn = document.getElementById('startTestBtn');

  const settingsBtn = document.getElementById('settingsBtn');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettingsBtn = document.getElementById('closeSettingsBtn');
  const saveSettingsBtn = document.getElementById('saveSettingsBtn');

  const genderRadios = document.querySelectorAll('input[name="gender"]');

  // Toast simple
  const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `py-3 px-4 rounded-lg shadow-lg text-white ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } mb-3 fade-in`;
    toast.textContent = message;
    document.getElementById('toastContainer').appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.5s';
      setTimeout(() => toast.remove(), 500);
    }, 2500);
  };

  // ===== Temas =====
  const applyTheme = (theme) => {
    // usar template literal correcto
    app.className = `app-container theme-${theme}`;
  };

  const loadSettings = () => {
    // usar la clave que existe en CSS: 'professional'
    const savedTheme = localStorage.getItem('casm83_theme') || 'professional';
    // usar template literal en el selector
    const input = document.querySelector(`input[name="theme"][value="${savedTheme}"]`);
    if (input) input.checked = true;
    applyTheme(savedTheme);
  };

  const saveSettings = () => {
    const selected = document.querySelector('input[name="theme"]:checked');
    const theme = selected ? selected.value : 'professional';
    localStorage.setItem('casm83_theme', theme);
    applyTheme(theme);
    settingsModal.classList.add('hidden');
    showToast('Configuración guardada');
  };

  // ===== Inicio: habilitar botón al elegir género =====
  genderRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (startTestBtn) startTestBtn.disabled = false;
    });
  });

  // Empezar evaluación → ir a preguntas1.html
  if (startTestBtn) {
    startTestBtn.addEventListener('click', () => {
      const selected = document.querySelector('input[name="gender"]:checked');
      if (!selected) {
        showToast('Selecciona tu género para continuar', 'error');
        return;
      }
      sessionStorage.setItem('casm83_gender', selected.value);
      window.location.href = 'preguntas1.html';
    });
  }

  // ===== Modal de configuración =====
  if (settingsBtn) settingsBtn.addEventListener('click', () => settingsModal.classList.remove('hidden'));
  if (closeSettingsBtn) closeSettingsBtn.addEventListener('click', () => settingsModal.classList.add('hidden'));
  if (saveSettingsBtn) saveSettingsBtn.addEventListener('click', saveSettings);

  // init
  loadSettings();
});
*/
// index.js
document.addEventListener('DOMContentLoaded', () => {
  const startTestBtn = document.getElementById('startTestBtn');
  const genderRadios = document.querySelectorAll('input[name="gender"]');

  // Habilitar el botón al seleccionar género
  genderRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (startTestBtn) startTestBtn.disabled = false;
    });
  });

  // Redirigir a preguntas1.html
  startTestBtn?.addEventListener('click', () => {
    const selected = document.querySelector('input[name="gender"]:checked');
    if (!selected) return;
    sessionStorage.setItem('casm83_gender', selected.value);
    window.location.href = 'preguntas1.html';
  });
});

