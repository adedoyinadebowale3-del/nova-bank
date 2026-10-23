// NOVA BANK presentation demo. No real banking or money movement.
document.querySelectorAll("[data-demo-alert]").forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.dataset.demoAlert || "This is a presentation-only demo. No real transaction was made.");
  });
});
