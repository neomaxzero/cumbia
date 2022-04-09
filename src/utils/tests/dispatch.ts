export const dispatchContentLoaded = () =>
  window.document.dispatchEvent(
    new Event("DOMContentLoaded", {
      bubbles: true,
      cancelable: true,
    })
  );
