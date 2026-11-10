// Número da Vita Distribuidora (DDI + DDD + Número, apenas dígitos)
var WHATSAPP = "5561995890351";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("pedido-form");
  
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = e.target;
      var msg = "Olá! Quero fazer um pedido.\n" +
        "Nome: " + f.nome.value + "\n" +
        "Endereço: " + f.endereco.value + "\n" +
        "Produto: " + f.produto.value + "\n" +
        "Quantidade: " + f.qtd.value +
        (f.obs.value ? "\nObservações: " + f.obs.value : "");
      
      window.open("https://wa.me556199589-0351/" + WHATSAPP + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
    });
  }
});