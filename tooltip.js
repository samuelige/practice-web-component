class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        this._tooltipText = 'Some dummy tooltip text'; //Default value
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <slot>Web Components</slot>
            <span> (?) </span>
        `;
        // const template = document.querySelector('#tooltip-template');
        // this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        if (this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text'); // get the text from the attribute
        };

        // const tooltipIcon = document.createElement("span");
        // tooltipIcon.textContent = ' (?)';
        const tooltipIcon = this.shadowRoot.querySelector("span");
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this))
        this.shadowRoot.appendChild(tooltipIcon);
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement("div");
        this._tooltipContainer.textContent = this._tooltipText;
        this.shadowRoot.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.shadowRoot.removeChild(this._tooltipContainer);
    }
}

customElements.define("tooltip-element", Tooltip);