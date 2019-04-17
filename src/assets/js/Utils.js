import Element from "./Element";
import Config from "./Config";
const Utils = {
    // 平层部分元素
    PartElement: function (treeKey) {
        var tmp = [];
        for (let index = 0; index < Config.PartTree[treeKey].length; index++) {
            var item = Config.PartTree[treeKey][index];
            tmp.push(Element(item.e, item.c, item.k, item.v));
        }
        return tmp;
    },
    // 部分元素
    TeePartElement: function (treeKey) {
        var tmp = [];
        for (let index = 0; index < Config.PartTree[treeKey].length; index++) {
            var item = Config.PartTree[treeKey][index];
            var subTmp = [];
            for (let index = 0; index < item.v.length; index++) {
                var subItem = item.v[index];
                if (typeof (subItem.v[0]) === 'string') {
                    subTmp.push(Element(subItem.e, subItem.c, subItem.k, subItem.v));
                    continue;
                }
                var childTmp = [];
                for (let index = 0; index < subItem.v.length; index++) {
                    var childItem = subItem.v[index];
                    if (typeof (childItem.v[0]) === 'string') {
                        childTmp.push(Element(childItem.e, childItem.c, childItem.k, childItem.v));
                        continue;
                    }
                    var lastTmp = [];
                    for (let index = 0; index < childItem.v.length; index++) {
                        const latItem = childItem.v[index];
                        lastTmp.push(Element(latItem.e, latItem.c, latItem.k, latItem.v));
                    }
                    childTmp.push(Element(childItem.e, childItem.c, childItem.k, lastTmp));
                    lastTmp = [];
                }
                subTmp.push(Element(subItem.e, subItem.c, subItem.k, childTmp))
                childTmp = [];
            }
            tmp.push(Element(item.e, item.c, item.k, subTmp));
            subTmp = [];
        }
        return tmp;
    },
    setAttr: (node, key, value) => {
        switch (key) {
            case 'style':
                node.style.cssText = value;
                break;
            case 'value': {
                const tagName = node.tagName.toLowerCase() || '';
                if (tagName === 'input' || tagName === 'textarea') {
                    node.value = value;
                } else {
                    node.setAttribute(key, value);
                }
                break;
            }
            default:
                node.setAttribute(key, value);
                break;
        }
    },
    events: {
        expend: function (e) {
            var _this = e.target.parentNode.nextSibling;
            if (_this.classList.contains('active')) {
                _this.classList.remove('active');
            } else {
                _this.classList.add('active');
            }
        },
        check: function (e) {
            var _this = e.target;
            if (_this.classList.contains('icon-yduifuxuankuang')) {
                _this.classList.remove('icon-yduifuxuankuang');
                _this.classList.add('icon-yduifuxuankuangxuanzhong');
            } else {
                _this.classList.add('icon-yduifuxuankuang');
                _this.classList.remove('icon-yduifuxuankuangxuanzhong');
            }
        }
    }
}

export default Utils;