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
  const itemTemplate = $("template#accordionTemplateItem");
  const modelo = $(itemTemplate.prop("content")).clone();

  const faqs = storage.faqs;
  faqs.forEach((el, index) => {
    const tituloId = `faqItem${index}`;
    const textoId = `faqItemTexto${index}`;
    const modeloItem = modelo.clone();

    const faq_item_cabecalho = modeloItem
      .find(".accordion-header")
      .attr("id", tituloId);

    faq_item_cabecalho
      .find(".accordion-button")
      .attr("data-bs-target", `#${textoId}`)
      .attr("aria-controls", textoId)
      .find(".accordion-button-texto")
      .text(el.titulo);

    modeloItem
      .find(".accordion-collapse")
      .attr("id", textoId)
      .attr("aria-labelledby", tituloId);
    modeloItem.find(".accordion-collapse .accordion-body").html(el.texto);

    modeloItem.appendTo("#accordionPerguntas");
  });
}

$(document).ready(function () {
  console.log("INICIEI PELO WINDOW");

  carregarFaq();

  document.querySelectorAll(".js-form-email").forEach((el) => {
    el.addEventListener("submit", formEmail);
  });
});

redirecionarLogin(true);
