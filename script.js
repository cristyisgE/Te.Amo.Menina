
function verificarResposta() {
  const resposta = document.getElementById("resposta").value.trim().toLowerCase();
  const mensagem = document.getElementById("mensagem");
  if (resposta === "maicon") {
    window.location.href = "sucesso.html";
  } else {
    mensagem.textContent = "Hmm... não é isso. Tente lembrar com carinho ";
  }
}
