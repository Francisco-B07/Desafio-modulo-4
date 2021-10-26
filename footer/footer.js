function footer(el) {
  const componentEl = document.createElement("div");

  componentEl.innerHTML = `    
  <footer class="footer">
        <img src="./img/logo-letras-blancas.png" class="footer__imagen" />
        <div class="footer__redes-cont">
          <div class="footer__redes">
            <span class="footer__redes-texto">Instagram</span>
            <img src="./img/instagram.png" class="footer__redes-logo" />
          </div>
          <div class="footer__redes">
            <span class="footer__redes-texto">Linkedin</span>
            <img src="./img/linkedin.png" class="footer__redes-logo" />
          </div>
          <div class="footer__redes">
            <span class="footer__redes-texto">Github</span>
            <img src="./img/github.png" class="footer__redes-logo" />
          </div>
        </div>
      </footer> `;

  el.appendChild(componentEl);
}
