window.customElements.define('cw-custom',
  class CwCustom extends HTMLElement{
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
       /* CSS styles go here */ 
      `;
      return style;
    }

    get content(){
      let content = document.createElement('section');
      content.innerHTML = `
        <!-- HTML goes here -->
      `;
      return content;
    }
  }
);
