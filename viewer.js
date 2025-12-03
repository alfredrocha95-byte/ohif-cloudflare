document.addEventListener('DOMContentLoaded', function () {
  if (!window.OHIFViewer) {
    console.error('❌ OHIF no cargó correctamente');
    return;
  }

  if (!window.config) {
    console.error('❌ Config no cargó correctamente');
    return;
  }

  window.OHIFViewer.installViewer(window.config);
  console.log("✅ OHIF Viewer inicializado");
});
