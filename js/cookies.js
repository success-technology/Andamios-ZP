(() => {
  "use strict";

  const STORAGE_KEY = "andamioszp-privacy-choice";
  const banner = document.getElementById("cookie-banner");
  const openSettingsButtons = document.querySelectorAll(
    "[data-cookie-settings]",
  );
  const acceptButton = document.getElementById("cookie-accept");
  const essentialButton = document.getElementById("cookie-reject");

  if (!banner || !acceptButton || !essentialButton) {
    return;
  }

  function readChoice() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function saveChoice(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Si el navegador bloquea el almacenamiento, el sitio sigue funcionando.
    }

    banner.hidden = true;
  }

  function openBanner() {
    banner.hidden = false;
  }

  function closeBanner() {
    banner.hidden = true;
  }

  acceptButton.addEventListener("click", () => {
    // No activa analítica ni marketing; solo guarda la elección del aviso.
    saveChoice("accepted");
  });

  essentialButton.addEventListener("click", () => {
    saveChoice("essential-only");
  });

  openSettingsButtons.forEach((button) => {
    button.addEventListener("click", openBanner);
  });

  // Si no existe una elección guardada, se muestra el aviso.
  if (!readChoice()) {
    openBanner();
  } else {
    closeBanner();
  }
})();
