function contacto(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `    
    <section class="contacto">
        <h2 class="contacto__titulo">Escribime</h2>
        <form class="contacto__form">
          <label>
            <h3 class="contacto__label">NOMBRE</h3>
            <input class="contacto__input" name="nombre" type="text" />
          </label>
          <label>
            <h3 class="contacto__label">EMAIL</h3>
            <input class="contacto__input" name="email" type="text" />
          </label>
          <label>
            <h3 class="contacto__label">Mensaje</h3>
            <textarea
              class="contacto__input contacto__input-textarea"
              name="mensaje"
            ></textarea>
          </label>
          <div class="contacto__submit-cont">
            <button class="contacto__submit-button">Enviar</button>
          </div>
        </form>
      </section>`;

  const form = componentEl.querySelector(".contacto__form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const mensaje = Object.fromEntries(formData.entries());

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "franciscojburgoa@gmail.com",
        message: `
        Recibiste un mensaje de: ${mensaje.nombre} 
        <br>
        Email: ${mensaje.email} 
        <br>
        <br>
        Mensaje: ${mensaje.mensaje}
        `,
      }),
    });
    form.reset();
    setTimeout(function () {
      alert("MENSAJE ENVIADO!!");
    }, 250);
  });
  el.appendChild(componentEl);
}
