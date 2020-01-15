export default class AboutMe extends HTMLElement {
    static get observedAttributes(): string[];
    constructor();
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    render(me: any): Promise<void>;
}
