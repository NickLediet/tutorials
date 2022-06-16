
class Counter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="color: green">Hey there</div>
        `
    }
}

if (!customElements.get("counter-wc")) {
    customElements.define("counter-wc", Counter);
}