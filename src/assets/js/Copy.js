import Element from "./Element";

export default function (e) {
    
    return Element('div', { class: 'mPrint-left-bot-ticket-item' }, {}, [e.target.innerText])
}