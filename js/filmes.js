const perfis = [
  {
    id: 1,
    nome: "Teste 1",
    fundo: "dodgerblue",
  },
  {
    id: 2,
    nome: "Teste 2",
    fundo: "green",
  },
  // {
  //   id: 3,
  //   nome: "Teste 3",
  //   fundo: "red",
  // },
  // {
  //   id: 4,
  //   nome: "Teste 4",
  //   fundo: "grey",
  // },
];

const filmes = [
  {
    id: 1,
    categorias: ["terror", "populares", "adicionados recentemente"],
    nome: "Teste filme terror",
    etaria: "16",
    tempo: 60,
    ano_lancamento: "2021",
    infos: {
      estrelando: ["Ator #1", "Ator #2", "Ator #3"],
      criacao: ["Diretor #1"],
    },
  },
  {
    id: 2,
    categorias: ["terror", "populares"],
    nome: "Teste serie terror",
    etaria: "18",
    infos: {
      estrelando: ["Ator #1", "Ator #2", "Ator #3"],
      criacao: ["Diretor #1"],
    },
    temporadas: [
      {
        temporada: 1,
        ano_lancamento: "2018",
        episodios: [
          {
            id: "1.1",
            nome: "EP teste",
            descricao:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id rhoncus dui. Vestibulum vel elit pellentesque, tincidunt leo a, tincidunt magna. Etiam et auctor libero.",
            tempo: 50,
          },
          {
            id: "1.2",
            nome: "EP teste 2",
            descricao:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id rhoncus dui. Vestibulum vel elit pellentesque, tincidunt leo a, tincidunt magna. Etiam et auctor libero.",
            tempo: 52,
          },
          {
            id: "1.3",
            nome: "EP teste 3",
            descricao:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id rhoncus dui. Vestibulum vel elit pellentesque, tincidunt leo a, tincidunt magna. Etiam et auctor libero.",
            tempo: 55,
          },
        ],
      },
      {
        temporada: 2,
        ano_lancamento: "2020",
        episodios: [
          {
            id: "2.1",
            nome: "EP teste",
            descricao:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id rhoncus dui. Vestibulum vel elit pellentesque, tincidunt leo a, tincidunt magna. Etiam et auctor libero.",
            tempo: 50,
          },
          {
            id: "2.2",
            nome: "EP teste 2",
            descricao:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id rhoncus dui. Vestibulum vel elit pellentesque, tincidunt leo a, tincidunt magna. Etiam et auctor libero.",
            tempo: 52,
          },
          {
            id: "2.3",
            nome: "EP teste 3",
            descricao:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id rhoncus dui. Vestibulum vel elit pellentesque, tincidunt leo a, tincidunt magna. Etiam et auctor libero.",
            tempo: 55,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    categorias: ["terror", "populares", "adicionados recentemente"],
    nome: "Teste filme terror #2",
    etaria: "12",
    tempo: 50,
    ano_lancamento: "2020",
    infos: {
      estrelando: ["Ator #1", "Ator #2", "Ator #3"],
      criacao: ["Diretor #1"],
    },
  },
  {
    id: 4,
    categorias: ["terror", "populares"],
    nome: "Teste filme terror #3",
    etaria: "12",
    tempo: 55,
    ano_lancamento: "2020",
    infos: {
      estrelando: ["Ator #1", "Ator #2", "Ator #3"],
      criacao: ["Diretor #1"],
    },
  },
  {
    id: 5,
    categorias: ["terror", "populares"],
    nome: "Teste filme terror #4",
    etaria: "12",
    tempo: 55,
    ano_lancamento: "2020",
    infos: {
      estrelando: ["Ator #1", "Ator #2", "Ator #3"],
      criacao: ["Diretor #1"],
    },
  },
  {
    id: 6,
    categorias: ["terror", "populares"],
    nome: "Teste filme terror #5",
    etaria: "12",
    tempo: 55,
    ano_lancamento: "1964",
    infos: {
      estrelando: ["Ator #1", "Ator #2", "Ator #3"],
      criacao: ["Diretor #1"],
    },
  },
];

const novidades = [
  {
    imagem: "imagens/senac-inicio.jpg",
    link: "#",
    tipo: "teste",
    texto: "teste Tem alguém na sua casa",
    info: "há 2 diastttttt",
    visualizado: false,
  },
];

var meuPerfil;
var modeloPerfil;

// TRANSFORMAR EM GLOBAIS
const callbackTagName = (base, tagname) => (chave) =>
  base[chave].tagName && base[chave].tagName.toLowerCase() === tagname;

// DUAS FUNÇOES EXECUTAM IGUAIS
// (base, classItem) => (chave) => base[chave].classList && base[chave].classList.contains(classItem);
const callbackClassList = function (base, classItem) {
  return function (chave) {
    return base[chave].classList && base[chave].classList.contains(classItem);
  };
};

const encontrarFilho = function (base, funcaoFilter) {
  return Object.keys(base)
    .filter(funcaoFilter)
    .map((chave) => base[chave])[0];
};

const encontrarFilhos = function (base, funcaoFilter) {
  return Object.keys(base)
    .filter(funcaoFilter)
    .map((chave) => base[chave]);
};

function carregarPerfil() {
  meuPerfil = JSON.parse(localStorage.getItem("perfil"));

  const perfilElemento = document.querySelector("#meuPerfil");

  const perfilFigure = encontrarFilho(
    perfilElemento.childNodes,
    callbackTagName(perfilElemento.childNodes, "figure")
  );
  perfilFigure.style.backgroundColor = meuPerfil.fundo;
}

function carregarPerfis() {
  if (!modeloPerfil) {
    const itemBase = document.querySelector("#menuPerfis .menu-perfil-item");
    itemBase.classList.remove("d-none");
    itemBase.remove();
    modeloPerfil = itemBase.cloneNode(true);
  }

  const base = document.querySelector("#menuPerfis");
  const perfilAddElement = document.querySelector(".js-item-base");

  perfis
    .filter((perfil) => perfil.id !== meuPerfil.id)
    .forEach((perfil) => {
      const modeloItem = modeloPerfil.cloneNode(true);

      const itemLink = encontrarFilho(
        modeloItem.childNodes,
        callbackClassList(modeloItem.childNodes, "dropdown-item")
      );

      itemLink.dataset.perfil = perfil.id;
      itemLink.addEventListener("click", selecionarPerfil);
      const itemLinkTexto = encontrarFilho(
        itemLink.childNodes,
        callbackTagName(itemLink.childNodes, "span")
      );
      itemLinkTexto.innerText = perfil.nome;

      const itemFigure = encontrarFilho(
        itemLink.childNodes,
        callbackTagName(itemLink.childNodes, "figure")
      );
      itemFigure.style.backgroundColor = perfil.fundo;

      base.insertBefore(modeloItem, perfilAddElement);
    });
}

function selecionarPerfil(event) {
  const perfilId = event.currentTarget.dataset.perfil;
  const perfil = perfis.filter((el) => el.id === Number(perfilId))[0];

  localStorage.setItem("perfil", JSON.stringify(perfil));

  document
    .querySelectorAll("#menuPerfis .menu-perfil-item .dropdown-item")
    .forEach((el) => {
      el.removeEventListener("click", function () {});
      el.remove();
    });
  carregarPerfil();
  carregarPerfis();
}

function notificacoes() {
  const novidadesNaoLidas = novidades.filter((el) => !el.visualizado);

  const modelo = document.querySelector("#menuNovidades .menu-item");
  modelo.classList.remove("d-none");
  modelo.remove();

  const base = document.querySelector("#menuNovidades");
  novidadesNaoLidas.forEach((novidade) => {
    const itemModelo = modelo.cloneNode(true);

    const itemLink = encontrarFilho(
      itemModelo.childNodes,
      callbackClassList(itemModelo.childNodes, "dropdown-item")
    );

    const itemImg = encontrarFilho(
      itemLink.childNodes,
      callbackTagName(itemLink.childNodes, "img")
    );
    itemImg.src = novidade.imagem;

    const itemTextos = encontrarFilho(
      itemLink.childNodes,
      callbackClassList(itemLink.childNodes, "bloco-novidades-textos")
    );
    const tipo = document.createElement("p");
    tipo.innerText = novidade.tipo;
    const texto = document.createElement("p");
    texto.innerText = novidade.texto;
    const infos = document.createElement("small");
    infos.innerText = novidade.info;

    // debugger
    itemTextos.innerHTML = "";
    itemTextos.appendChild(tipo);
    itemTextos.appendChild(texto);
    itemTextos.appendChild(infos);

    base.appendChild(itemModelo);
  });
}

function carregarNovidades() {
  const novidadesNaoLidas = novidades.filter((el) => !el.visualizado);
  const blocoNovidade = document.querySelector("#blocoNovidades");
  const badge = encontrarFilho(
    blocoNovidade.childNodes,
    callbackClassList(blocoNovidade.childNodes, "badge")
  );
  if (!novidadesNaoLidas.length) {
    badge.classList.add("d-none");
  } else {
    badge.classList.remove("d-none");
    const badgeText = encontrarFilho(
      badge.childNodes,
      callbackClassList(badge.childNodes, "novidades-texto")
    );
    badgeText.innerText =
      novidadesNaoLidas.length > 99 ? "99+" : novidadesNaoLidas.length;
  }
}

function visualizarNovidades(event) {
  novidades.forEach((el) => (el.visualizado = true));

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

function carregarSlideFilmes() {
  const categorias = {};
  for (let i = 0; i < filmes.length; i++) {
    for (let j = 0; j < filmes[i].categorias.length; j++) {
      if (!categorias[filmes[i].categorias[j]])
        categorias[filmes[i].categorias[j]] = [];
      categorias[filmes[i].categorias[j]].push(filmes[i]);
    }
  }

  console.log("CATEGORIAS", categorias);

  const modelo = document.querySelector(
    ".listagem-categorias .categorias-item"
  );
  modelo.classList.remove("d-none");
  modelo.remove();

  const base = document.querySelector(".listagem-categorias");
  Object.keys(categorias).forEach((categoria) => {
    const modeloItem = modelo.cloneNode(true);

    const categoria_titulo = encontrarFilho(
      modeloItem.childNodes,
      callbackClassList(modeloItem.childNodes, "categoria-titulo")
    );
    categoria_titulo.innerText = categoria;

    const carousel = encontrarFilho(
      modeloItem.childNodes,
      callbackClassList(modeloItem.childNodes, "carousel")
    );
    const id_carousel = `carousel_${categoria.split(" ").join("_")}`;
    carousel.id = id_carousel;

    encontrarFilhos(
      carousel.childNodes,
      callbackClassList(carousel.childNodes, "carousel-control")
    ).forEach((control) => {
      control.dataset.bsTarget = id_carousel;
      console.log(control.dataset);
    });

    base.appendChild(modeloItem);
  });
}

window.onload = function () {
  carregarPerfil();
  carregarPerfis();
  carregarNovidades();
  notificacoes();
  carregarSlideFilmes();

  botoesSair();

  document
    .querySelector("#blocoNovidades")
    .addEventListener("click", visualizarNovidades);

  document
    .querySelector("#buscarFilmes")
    .addEventListener("click", buscarFilmes);
};

redirecionarLogin(false);
