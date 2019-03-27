import Element from "./Element";
import Utils from "./Utils";
import Data from "./Data";
import ViewModel from "./ViewModel";
import Diff from "./Diff";
import Patch from "./Patch";

import '../css/iconfont.css';
import '../css/mPrint.css';
import '../img/icons.png';
import '../fonts/iconfont.eot';
import '../fonts/iconfont.svg';
import '../fonts/iconfont.ttf';
import '../fonts/iconfont.woff';
import '../fonts/iconfont.woff2';

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
        typeof define === 'function' && define.amd ? define(factory) :
            (global = global || self, global.JSPrint = factory());
}(this, function () {
    function JSPrint(data) {
        var _this = this;
        if (typeof (data.data.eles) === 'string') {
            data.data.eles = JSON.parse(data.data.eles);
        }
        if (typeof (data.data.bgi) === 'string') {
            data.data.bgi = JSON.parse(data.data.bgi);
        }
        var tree = makeTree(data.printData);
        Object.defineProperties(_this, {
            'data': {
                get: function () {
                    return data;
                },
                set: function (n) {
                    const newTree = makeTree(n);
                    const patches = Diff(tree, newTree);
                    console.log(patches);

                    Patch(_this.root, patches);
                    _this.root = newTree.render();
                }
            },
        });
        _this.root = tree.render();
        document.body.appendChild(_this.root);
    }

    const makeTree = function (data) {
        // 来自数据库
        var tmp = [];
        for (let index = 0; index < data.length; index++) {
            var item = data[index];
            var subTmp = [];
            for (var key in item.data) {
                var v = item.data[key];
                subTmp.push(Element('div', { class: 'mPrint-left-bot-choice-item iconfont icon-fuxuankuang' }, {}, [
                    Element('span', { class: 'ci_file' }, {}, [v])
                ]));
            }
            tmp.push(Element('div', { class: 'mPrint-left-bot-choice' }, {}, [
                Element('div', { class: 'mPrint-left-bot-choice-tit' }, {}, [
                    Element('div', {}, {}, [item.title]),
                    Element('div', { class: 'dropicon iconfont icon-xiala' }, {}, [])
                ]),
                Element('div', { class: 'mPrint-left-bot-choice-cont ' + (index == 0 ? 'active' : '') }, {}, subTmp)
            ]));
            subTmp = [];
        }
        // 容器
        return Element('div', { class: 'mPrint' }, {}, [
            // 左部分
            Element('div', { class: 'mPrint-left' }, {}, [
                // 左上部分
                Element('div', { class: 'mPrint-left-top' }, {}, [
                    Element('fieldset', {}, {}, [
                        Element('legend', {}, {}, ['模版选项单个设置']),
                        Element('div', { class: 'mPrint-left-top-setting' }, {}, Utils.PartElement('mPrint-left-top-setting')),
                    ]),
                ]),
                // 左下部分
                Element('div', { class: 'mPrint-left-bot' }, {}, [
                    Element('div', { class: 'mPrint-left-bot-layer' }, {}, tmp)
                ]),
            ]),
            // 右部分
            Element('div', { class: 'mPrint-right' }, {}, Utils.TeePartElement('mPrint-right-setting'))
        ])
    }
    return JSPrint;
}));
var alp = new JSPrint(Data);
console.log(alp);
alp.data = Data.printDataTest2;
console.log(alp);
alp.data = Data.printDataTest2;

console.log(alp);