class ConfirmLink extends HTMLAnchorElement {
    connectedCallback() {
        this.addEventListener('click', event => {
            if (!confirm('Do yo really want to leave?')) {
                event.preventDefault();
            }
        });

    }
}

customElements.define('confirm-link', ConfirmLink, { extends: 'a' });