let meuPerfil;

function carregarPerfil() {
  meuPerfil = JSON.parse(localStorage.getItem("perfil"));
  $("#meuPerfil figure").css("background-color", meuPerfil.fundo);
}

function carregarPerfis() {
  const itemTemplate = $("#menuPerfis template.menu-perfil-modelo");
  const modelo = $(itemTemplate.prop("content")).clone();

  storage.perfis
    .filter((perfil) => perfil.id !== meuPerfil.id)
    .forEach((el) => {
      const modeloItem = modelo.clone();

      modeloItem
        .find(".dropdown-item")
        .attr("data-perfil", el.id)
        .unbind("click")
        .on("click", selecionarPerfil)
        .find("span")
        .text(el.nome);

      modeloItem.find("figure").css("background-color", el.fundo);

      modeloItem.insertBefore("#menuPerfis .js-item-base");
    });
}

function selecionarPerfil(event) {
  const perfilId = event.currentTarget.dataset.perfil;
  const perfil = storage.perfis.filter((el) => el.id === Number(perfilId))[0];

  localStorage.setItem("perfil", JSON.stringify(perfil));

  $("#menuPerfis .menu-perfil-item .dropdown-item")
    .unbind("click", () => {})
    .remove();

  carregarPerfil();
  carregarPerfis();
}

function notificacoes() {
  const novidadesNaoLidas = storage.novidades.filter((el) => !el.visualizado);
  const itemTemplate = $("#menuNovidades template.menu-novidades-modelo");
  const modelo = $(itemTemplate.prop("content")).clone();
  novidadesNaoLidas.forEach((novidade) => {
    // itemModelo.find('.dropdown-item')
    modelo.find(".dropdown-item img").attr("src", novidade.imagem);
    const novidadesElementos = [
      $("<p></p>").text(novidade.tipo),
      $("<p></p>").text(novidade.texto),
      $("<small></small>").text(novidade.info),
    ];
    modelo.find(".bloco-novidades-textos").html("").append(novidadesElementos);
    modelo.appendTo("#menuNovidades");
  });
}

function carregarNovidades() {
  const novidadesNaoLidas = storage.novidades.filter((el) => !el.visualizado);

  const badge = $("#blocoNovidades .badge");
  if (novidadesNaoLidas.length) {
    badge
      .removeClass("d-none")
      .find(".novidades-texto")
      .text(novidadesNaoLidas.length > 99 ? "99+" : novidadesNaoLidas.length);
  } else {
    badge.addClass("d-none");
  }
}

function visualizarNovidades(event) {
  storage.novidades.forEach((el) => (el.visualizado = true));

  carregarNovidades();
}

function buscarFilmes(event) {
  event.preventDefault();
  const ativo = event.currentTarget.dataset.ativo === "true";
  if (!ativo) {
    event.currentTarget.parentNode.classList.add("ativo");
    event.currentTarget.dataset.ativo = true;
  } else {
    event.currentTarget.parentNode.classList.remove("ativo");
    event.currentTarget.dataset.ativo = false;
  }
}

function carregarSliderFilmes() {
  const categorias = {};
  const filmes = storage.filmes;
  for (let i = 0; i < filmes.length; i++) {
    for (let j = 0; j < filmes[i].categorias.length; j++) {
      if (!categorias[filmes[i].categorias[j]])
        categorias[filmes[i].categorias[j]] = [];
      categorias[filmes[i].categorias[j]].push(filmes[i]);
    }
  }

  console.log("CATEGORIAS", categorias);

  const itemTemplate = $("template.listagem-categorias-modelo");

  Object.keys(categorias).forEach((categoria) => {
    const modelo = $(itemTemplate.prop("content")).children().clone();

    modelo.find(".categoria-titulo").text(categoria);

    const id_carousel = `carousel${categoria.split(" ").join("")}`;
    const carousel = modelo.find(".carousel");
    carousel.attr("id", id_carousel);

    const filmes_categoria = [...categorias[categoria]];
    const filmes_grupos = carregarCarouselItens(carousel, filmes_categoria);
    montarCarouselNavegacao(filmes_grupos, carousel, id_carousel);

    modelo.appendTo(".listagem-categorias");
  });
}

function carregarCarouselItens(carousel, filmes_categoria) {
  const carousel_filmes_groupo = [];
  const carousel_inner = carousel.find(".carousel-inner");

  const carousel_item_template = $(
    carousel_inner.find("template.carousel-item-template").prop("content")
  );
  const carousel_modelo = carousel_item_template.children(".carousel-item");
  do {
    const filmes_splice = filmes_categoria.splice(0, 5);
    const carousel_item = carousel_modelo.clone();

    if (carousel_filmes_groupo.length === 0) carousel_item.addClass("active");

    const listagem_filmes = carousel_item.children();
    const filmes_item_modelo = listagem_filmes.children();

    filmes_splice.forEach((item) => {
      const listagem_filmes_item = $(filmes_item_modelo.get(0).cloneNode(true));
      listagem_filmes_item
        .find(".imagem-background")
        .css("background-image", `url(${item.imagem})`);
      listagem_filmes_item.attr(
        "href",
        `filme.html?id=${item.id}&nome=${item.nome}`
      );

      listagem_filmes.append(listagem_filmes_item);
    });
    filmes_item_modelo.remove();

    carousel_item.appendTo(carousel_inner);

    carousel_filmes_groupo.push(filmes_splice);
  } while (filmes_categoria.length);

  return carousel_filmes_groupo;
}

function montarCarouselNavegacao(filmes_grupos, carousel, id_carousel) {
  const navegacao_template = $(
    carousel
      .find(".carousel-navegacao template.carousel-navegacao-item-modelo")
      .prop("content")
  );

  for (let i = 0; i < filmes_grupos.length; i++) {
    const item_navegacao = navegacao_template.clone().find("button");
    item_navegacao.attr({
      "data-bs-target": `#${id_carousel}`,
      "data-bs-slide-to": i,
      "aria-label": `Slide ${i}`,
      "aria-current": i === 0,
    });

    if (i === 0) item_navegacao.addClass("active");

    item_navegacao.appendTo(carousel.find(".carousel-navegacao"));
  }

  const carousel_controls = $(
    carousel.find("template.carousel-controles-template").prop("content")
  ).clone();
  if (filmes_grupos.length > 1) {
    carousel_controls.find("button").each(function (indice, elemento) {
      $(elemento).attr("data-bs-target", `#${id_carousel}`).appendTo(carousel);
    });
  }
}

window.onload = function () {
  carregarPerfil();
  carregarPerfis();

  carregarNovidades();
  notificacoes();

  carregarSliderFilmes();

  botoesSair();

  document
    .querySelector("#blocoNovidades")
    .addEventListener("click", visualizarNovidades);

  document
    .querySelector("#buscarFilmes")
    .addEventListener("click", buscarFilmes);
};

redirecionarLogin(false);
