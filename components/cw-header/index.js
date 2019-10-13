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

      nav{
        display: inline;
      }

      ul{
        display: inline;
      }

      li{
        display: inline;
        font-size: 0.5em;
      }

      a{
        color: var(--theme-background-color);
        text-decoration: none;
      }

      li a{
        text-transform: uppercase;
      }

      a:hover{
        border-bottom: 2px solid var(--theme-accent-color);
      }

      `;
      return style;
    }

    get content(){
      let content = document.createElement('section');
      content.innerHTML = `
      <header>
        <a href="/"><span class="branding-logo">Conference</span>Works</a>

        <nav>
          <ul>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/speakers">Speakers</a></li>
          </ul>
        </nav>
      </header>
      `;
      return content;
    }
  }
);
