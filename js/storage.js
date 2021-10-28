const perfis = [
  {
    id: 1,
    nome: "Teste 1",
    fundo: "dodgerblue",
    favoritos: [],
  },
  {
    id: 2,
    nome: "Teste 2",
    fundo: "green",
    favoritos: [],
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
    imagem: "imagens/fundo-inicio.jpg",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia in dui sit amet elementum. Integer elementum, ex et laoreet scelerisque, massa massa rutrum enim, eget luctus enim lorem in augue.",
    infos: {
      estrelando: ["Ator #1", "Ator #2", "Ator #3"],
      criacao: ["Diretor #1"],
    },
    videos: [
      { id: "1.1", nome: "Trailer 1", miniatura: "imagens/senac-inicio.jpg" },
      { id: "1.2", nome: "Trailer 2", miniatura: "imagens/fundo-inicio.jpg" },
      { id: "1.3", nome: "Trailer 3", miniatura: "imagens/senac-inicio.jpg" },
    ],
  },
  {
    id: 2,
    categorias: ["terror", "populares"],
    nome: "Teste serie terror",
    etaria: "18",
    imagem: "imagens/senac-inicio.jpg",
    descricao: "Teste",
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
              "teste",
            tempo: 50,
            miniatura: "imagens/senac-inicio.jpg",
          },
          {
            id: "1.2",
            nome: "EP teste 2",
            descricao:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id rhoncus dui. Vestibulum vel elit pellentesque, tincidunt leo a, tincidunt magna. Etiam et auctor libero.",
            tempo: 52,
            miniatura: "imagens/fundo-inicio.jpg",
          },
          {
            id: "1.3",
            nome: "EP teste 3",
            descricao:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id rhoncus dui. Vestibulum vel elit pellentesque, tincidunt leo a, tincidunt magna. Etiam et auctor libero.",
            tempo: 55,
            miniatura: "imagens/senac-inicio.jpg",
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
            miniatura: "imagens/fundo-inicio.jpg",
          },
          {
            id: "2.2",
            nome: "EP teste 2",
            descricao:
              "Teste",
            tempo: 52,
            miniatura: "imagens/senac-inicio.jpg",
          },
          {
            id: "2.3",
            nome: "EP teste 3",
            descricao:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id rhoncus dui. Vestibulum vel elit pellentesque, tincidunt leo a, tincidunt magna. Etiam et auctor libero.",
            tempo: 55,
            miniatura: "imagens/senac-inicio.jpg",
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
    imagem: "imagens/fundo-inicio.jpg",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia in dui sit amet elementum. Integer elementum, ex et laoreet scelerisque, massa massa rutrum enim, eget luctus enim lorem in augue.",
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
    imagem: "imagens/senac-inicio.jpg",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia in dui sit amet elementum. Integer elementum, ex et laoreet scelerisque, massa massa rutrum enim, eget luctus enim lorem in augue.",
    infos: {
      estrelando: ["Ator #1", "Ator #2", "Ator #3"],
      criacao: ["Diretor #1"],
    },
  },
  {
    id: 5,
    categorias: ["terror"],
    nome: "Teste filme terror #4",
    etaria: "12",
    tempo: 55,
    ano_lancamento: "2020",
    imagem: "imagens/fundo-inicio.jpg",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia in dui sit amet elementum. Integer elementum, ex et laoreet scelerisque, massa massa rutrum enim, eget luctus enim lorem in augue.",
    infos: {
      estrelando: ["Ator #1", "Ator #2", "Ator #3"],
      criacao: ["Diretor #1"],
    },
  },
  {
    id: 6,
    categorias: ["terror"],
    nome: "Teste filme terror #5",
    etaria: "12",
    tempo: 55,
    ano_lancamento: "1964",
    imagem: "imagens/fundo-inicio.jpg",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia in dui sit amet elementum. Integer elementum, ex et laoreet scelerisque, massa massa rutrum enim, eget luctus enim lorem in augue.",
    infos: {
      estrelando: ["Ator #1", "Ator #2", "Ator #3"],
      criacao: ["Diretor #1"],
    },
  },
  {
    id: 7,
    categorias: ["terror"],
    nome: "Teste filme terror #6",
    etaria: "12",
    tempo: 54,
    ano_lancamento: "1999",
    imagem: "imagens/senac-inicio.jpg",
    descricao:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacinia in dui sit amet elementum. Integer elementum, ex et laoreet scelerisque, massa massa rutrum enim, eget luctus enim lorem in augue.",
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

function carregarValoresStorage(chave, valores_atuais) {
  const valor_storage = JSON.parse(localStorage.getItem(chave));

  if (valor_storage) {
    valores_atuais.length = 0;
    valores_atuais.push(...valor_storage);
  } else {
    localStorage.setItem(chave, JSON.stringify(valores_atuais));
  }
}

carregarValoresStorage("perfis", perfis);
carregarValoresStorage("filmes", filmes);
carregarValoresStorage("novidades", novidades);
