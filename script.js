// Envia o formulário (simulado)
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Entraremos em contato.");
  this.reset();
});

// Botão flutuante para rolar ao topo
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
