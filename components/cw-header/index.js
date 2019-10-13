window.customElements.define('cw-header',
  class CwHeader extends HTMLElement{
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
      header{
        color: var(--theme-background-color); 
        background-color: var(--theme-foreground-color);
        font-size: 2em;
        font-family: var(--theme-font-family);
        padding: 1em;
      }

      .branding-logo{
        color: var(--theme-accent-color);
        font-weight: bold;
      }
      `;
      return style;
    }

    get content(){
      let content = document.createElement('section');
      content.innerHTML = `
      <header>
        <span class="branding-logo">Conference</span>Works
      </header>
      `;
      return content;
    }
  }
);
