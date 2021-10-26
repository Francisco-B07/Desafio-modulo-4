var fieldsCollections = {
  title: "",
  description: "",
  url: "",
  image: "",
};

function addWorkCard(params = {}) {
  const template = document.querySelector("#portfolio-template");
  const container = document.querySelector(".portfolio");

  template.content.querySelector(".portfolio-card__title").textContent =
    params.title;
  template.content.querySelector(".portfolio-card__descripcion").textContent =
    params.description;
  template.content.querySelector(".portfolio-card__imagen").src = params.image;
  template.content.querySelector(".portfolio-card-link").href = params.url;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/h3ja1mbjit0x/environments/master/entries?access_token=YD4hrqXxqVANztfgu21mi_MgBPMcVlvhFba_uWQyDf0&content_type=work"
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
          description: item.fields.descripcion,
          url: item.fields.url,
        };
      });

      for (var i = 0; i < fieldsCollections.length; i++) {
        fieldsCollections[i].image = imagenes[i];
      }
      return fieldsCollections;
    });
}

function main() {
  const headerContainer = document.querySelector(".welcome__header-cont");
  header(headerContainer);

  getWorks().then(function (works) {
    for (const w of works) {
      addWorkCard(w);
    }
  });

  const footerContainer = document.querySelector(".footer-cont");
  footer(footerContainer);
}

main();
