function formEmail(event) {
  event.preventDefault();
  if (window.formEmailCarregando) return false;
  window.formEmailCarregando = true;
  const formEmail = {};
  const elementosChaves = Object.keys(event.target.elements);
  elementosChaves
    .filter((el) => !Number(el) && el !== "0")
    .forEach((el) => {
      formEmail[el] = event.target.elements[el].value;
    });

  localStorage.setItem("formEmail", JSON.stringify(formEmail));
  window.location.href = "login.html";
  console.log("FORMULARIO", formEmail);
  window.formEmailCarregando = false;
}

function carregarFaq() {
  const itemBase = document.querySelector(".accordion-item.d-none");
  itemBase.classList.remove("d-none");
  const modelo = itemBase.cloneNode(true);
  itemBase.remove();
  const faqs = [
    {
      titulo: "Pergunta teste",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum elit, eget tincidunt dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quis elit sollicitudin, tempus mauris nec, porttitor augue. Curabitur et est id risus interdum posuere eget vel felis. Etiam eleifend, augue nec accumsan auctor, eros libero blandit odio, quis finibus lectus dolor sed lorem.",
    },
    {
      titulo: "Pergunta teste 1",
      texto: "teste",
    },
    {
      titulo: "Pergunta teste 2",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum elit, eget tincidunt dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quis elit sollicitudin, tempus mauris nec, porttitor augue. Curabitur et est id risus interdum posuere eget vel felis. Etiam eleifend, augue nec accumsan auctor, eros libero blandit odio, quis finibus lectus dolor sed lorem.",
    },
    {
      titulo: "Pergunta teste 3",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at fermentum elit, eget tincidunt dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quis elit sollicitudin, tempus mauris nec, porttitor augue. Curabitur et est id risus interdum posuere eget vel felis. Etiam eleifend, augue nec accumsan auctor, eros libero blandit odio, quis finibus lectus dolor sed lorem.",
    },
  ];
  console.log("MODELO", modelo.childNodes);
  const base = document.getElementById("accordionPerguntas");
  faqs.forEach((el, index) => {
    const tituloId = `faqItem${index}`;
    const textoId = `faqItemTexto${index}`;
    const modeloItem = modelo.cloneNode(true);
    // HEADER
    Object.keys(modeloItem.childNodes)
      .filter(
        (chaveChild) =>
          modeloItem.childNodes[chaveChild].classList &&
          modeloItem.childNodes[chaveChild].classList.contains(
            "accordion-header"
          )
      )
      .forEach((chaveChild) => {
        modeloItem.childNodes[chaveChild].id = tituloId;
        const botaoChave = Object.keys(
          modeloItem.childNodes[chaveChild].childNodes
        ).filter(
          (content) =>
            modeloItem.childNodes[chaveChild].childNodes[content].classList &&
            modeloItem.childNodes[chaveChild].childNodes[
              content
            ].classList.contains("accordion-button")
        )[0];

        modeloItem.childNodes[chaveChild].childNodes[
          botaoChave
        ].dataset.bsTarget = `#${textoId}`;
        const attrControls = Object.keys(
          modeloItem.childNodes[chaveChild].childNodes[botaoChave].attributes
        ).filter(
          (attr) =>
            modeloItem.childNodes[chaveChild].childNodes[botaoChave].attributes[
              attr
            ].name === "aria-controls"
        )[0];

        modeloItem.childNodes[chaveChild].childNodes[botaoChave].innerText =
          el.titulo;
        modeloItem.childNodes[chaveChild].childNodes[botaoChave].attributes[
          attrControls
        ].value = textoId;
      });

    const chaveBody = Object.keys(modeloItem.childNodes).filter(
      (chaveChild) =>
        modeloItem.childNodes[chaveChild].classList &&
        modeloItem.childNodes[chaveChild].classList.contains(
          "accordion-collapse"
        )
    )[0];
    const attrBodyLabel = Object.keys(
      modeloItem.childNodes[chaveBody].attributes
    ).filter(
      (attr) =>
        modeloItem.childNodes[chaveBody].attributes[attr].name ===
        "aria-labelledby"
    )[0];

    modeloItem.childNodes[chaveBody].id = textoId;
    modeloItem.childNodes[chaveBody].attributes[attrBodyLabel].value = tituloId;

    const chaveBodyContent = Object.keys(
      modeloItem.childNodes[chaveBody].childNodes
    ).filter(
      (chaveChild) =>
        modeloItem.childNodes[chaveBody].childNodes[chaveChild].classList &&
        modeloItem.childNodes[chaveBody].childNodes[
          chaveChild
        ].classList.contains("accordion-body")
    )[0];
    modeloItem.childNodes[chaveBody].childNodes[chaveBodyContent].innerHTML =
      el.texto;

    base.appendChild(modeloItem);
  });
}

window.onload = function () {
  console.log("INICIEI PELO WINDOW");

  carregarFaq();

  document.querySelectorAll(".js-form-email").forEach((el) => {
    el.addEventListener("submit", formEmail);
  });
};

redirecionarLogin(true);
