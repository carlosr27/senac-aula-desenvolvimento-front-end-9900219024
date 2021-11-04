function adicionarPerfil(event) {
  event.preventDefault();
  const form = {
    ...storage.perfis[0],
    id: storage.perfis.slice(-1)[0].id + 1 || 1,
  };
  $(event.target)
    .find("input")
    .each((indice, valor) => {
      form[$(valor).attr("name")] = $(valor).val();
    });

  storage.perfis.push(form);
  addValoresStorage("perfis", storage.perfis);

  $(".perfil-item")
    .unbind("click", () => {})
    .remove();

  const modal = bootstrap.Modal.getInstance($("#modalAdicionarPerfil").get(0));
  modal.hide();

  verificarMaximoPerfils();
  carregarPerfis();
}

function carregarPerfis() {
  const itemTemplate = $("template.perfil-item-modelo");
  storage.perfis.forEach((el) => {
    const modelo = $(itemTemplate.prop("content")).clone();

    modelo
      .find(".bloco-perfil")
      .attr("data-perfil", el.id)
      .on("click", selecionarPerfil);

    modelo.find(".perfil-img-conteudo > img").css("background-color", el.fundo);

    modelo.find(".perfil-nome").text(el.nome);

    modelo.insertBefore(".perfil-base .js-btn-adicionar");
  });
}

function selecionarPerfil(event) {
  const perfilId = event.currentTarget.dataset.perfil;
  const perfil = storage.perfis.filter((el) => el.id === Number(perfilId))[0];

  localStorage.setItem("perfil", JSON.stringify(perfil));
}

function verificarMaximoPerfils() {
  const max = 4;

  if (storage.perfis.length === max) {
    $(".perfil-base .js-btn-adicionar").addClass("d-none");
  }
}

$(document).ready(function () {
  botoesSair();

  carregarPerfis();
  verificarMaximoPerfils();

  document
    .querySelector("#formAdicionarPerfil")
    .addEventListener("submit", adicionarPerfil);
});

redirecionarLogin(false);
