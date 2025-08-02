// Botón de cambio de tema
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.createElement("button");
  toggle.innerHTML = "🌙 / ☀️";
  toggle.style.position = "fixed";
  toggle.style.top = "20px";
  toggle.style.right = "20px";
  toggle.style.padding = "10px";
  toggle.style.borderRadius = "8px";
  toggle.style.cursor = "pointer";
  toggle.style.border = "none";
  toggle.style.background = "#58a6ff";
  toggle.style.color = "#fff";
  toggle.style.fontSize = "16px";

  document.body.appendChild(toggle);

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});