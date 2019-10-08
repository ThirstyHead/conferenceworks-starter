window.customElements.define('cw-footer',
  class CwFooter extends HTMLElement{
    constructor(){
      super();
    }

    connectedCallback(){
      const shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(this.style);
      shadowRoot.appendChild(this.content);
    }

    get style(){
      let style = document.createElement('style');
      style.innerHTML = `
        footer{
          color: var(--theme-foreground-color);
          background-color: #ccc;
          font-size: 0.85em;
          padding: 1em;
          font-family: var(--theme-font-family);
        } 

        .branding-logo{
          color: var(--theme-accent-color);
          font-weight: bold;
        }
      `;
      return style;
    }

    get content(){
      let currentYear = new Date().getFullYear();
      let content = document.createElement('footer');
      content.innerHTML = `
        <footer>
          &copy; ${currentYear}, <span class="branding-logo">Conference</span>Works
        </footer>
      `;
      return content;
    }
  }
);
