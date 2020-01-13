import {getUser} from "../github/service";

const ME_ATTR = 'me';

export default class AboutMe extends HTMLElement {
    static get observedAttributes() {
        return [ME_ATTR];
    }

    constructor() {
        super();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name === ME_ATTR && oldValue !== newValue) {
            this.render(newValue);
        }
    }

    async render(me) {
        const user = await getUser(me);
        this.innerHTML = `
            <img src="${user.img}" alt="img">
            <p>${user.bio}</p>
        `;
    }
}