function header(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `    
  <header class="header">
        <a href="./index.html">
          <img class="header__imagen" src="./img/logo-letras-blancas.png" alt="logo" />
        </a>
        
          <div class="header__button-hamburger--abre-ventana">
            <div class="button-hamburger__capa"></div>
            <div class="button-hamburger__capa"></div>
            <div class="button-hamburger__capa"></div>
          </div>
          <div class="header__menu">
            <div class="header__menu-opciones">
              <a href="./portfolio.html">Portfolio</a>
            </div>  
            <div class="header__menu-opciones">
              <a href="./servicios.html">Servicios</a>
            </div>  
            <div class="header__menu-opciones">
              <a href="./contacto.html">Contacto</a>
            </div>  
          </div>
          <div class="header__ventana">
            <span class="ventana__cierra-ventana">X</span>
            <div class="ventana__contenido">
              <div class="header__menu-opciones">
                <a href="./portfolio.html">Portfolio</a>
              </div>  
              <div class="header__menu-opciones">
                <a href="./servicios.html">Servicios</a>
              </div>  
              <div class="header__menu-opciones">
                <a href="./contacto.html">Contacto</a>
              </div>  
            </div>
          </div>
  </header> `;

  const botonHamburguesaEl = componentEl.querySelector(
    ".header__button-hamburger--abre-ventana"
  );
  const botonCerrarVentanaEl = componentEl.querySelector(
    ".ventana__cierra-ventana"
  );

  const ventanaEl = componentEl.querySelector(".header__ventana");

  botonHamburguesaEl.addEventListener("click", function () {
    ventanaEl.style.display = "inherit";
  });
  botonCerrarVentanaEl.addEventListener("click", function () {
    ventanaEl.style.display = "";
  });

  el.appendChild(componentEl);
}
