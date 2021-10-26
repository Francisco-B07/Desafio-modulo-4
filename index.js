var fieldsCollections = {
  title: "",
  description: "",
};

function addWorkCard(params = {}) {
  const template = document.querySelector("#servicios-template");
  const container = document.querySelector(".servicios");

  template.content.querySelector(".servicios-card__title").textContent =
    params.title;
  template.content.querySelector(".servicios-card__descripcion").textContent =
    params.description;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/h3ja1mbjit0x/environments/master/entries?access_token=wXp_Czv9s0u-arBljRfL4m7lu_msoHQNSZq7YY8TKz8&content_type=servicios"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const imagenes = data.includes.Asset.map((item) => {
        return item.fields.file.url;
      });

      fieldsCollections = data.items.map((item) => {
        return {
          title: item.fields.titulo,
          description: item.fields.description,
        };
      });

      return fieldsCollections;
    });
}

function main() {
  const headerContainer = document.querySelector(".header-cont");
  header(headerContainer);

  getWorks().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });

  const formContainer = document.querySelector(".contacto-cont");
  contacto(formContainer);

  const footerContainer = document.querySelector(".footer-cont");
  footer(footerContainer);
}

main();
