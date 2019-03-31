import Utils from './Utils';

function Element(tagName, props, events, children) {
    if (!(this instanceof Element)) {
        return new Element(tagName, props, events, children);
    }

    this.tagName = tagName;
    this.props = props || {};
    this.events = events || {};
    this.children = children || [];
    this.key = props ? props.key : undefined;

    let count = 0;

    this.children.forEach((child) => {
        if (child instanceof Element) {
            count += child.count;
        }
        count++;
    });
    this.count = count;
}

/**
 * Render the hold element tree.
 */
Element.prototype.render = function () {
    const el = document.createElement(this.tagName);
    const props = this.props;
    const events = this.events;

    for (const propName in props) {
        Utils.setAttr(el, propName, props[propName]);
    }

    for (const eventName in events) {
        el.addEventListener(eventName, events[eventName], true);
    }

    this.children.forEach((child) => {
        const childEl = (child instanceof Element) ? child.render() : document.createTextNode(child);
        el.appendChild(childEl);
    });

    return el;
};

export default Element;
