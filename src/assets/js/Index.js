import Element from "./Element";
import Utils from "./Utils";
import Data from "./Data";
import view from "./ViewModel";
import Diff from "./Diff";
import Patch from "./Patch";
import Move from "./Move2";
import Copy from "./Copy";

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
    function JSPrint(data, view) {
        var _this = this;
        if (typeof (data.data.eles) === 'string') {
            data.data.eles = JSON.parse(data.data.eles);
        }
        if (typeof (data.data.bgi) === 'string') {
            data.data.bgi = JSON.parse(data.data.bgi);
        }
        _this.treeNode = makeTree(data.printData, view);
        Object.defineProperties(_this, {
            data: {
                get: function () {
                    return data;
                },
                set: function (n) {
                    var __this = this;
                    const newTree = makeTree(n, __this.view);
                    const patches = Diff(__this.treeNode, newTree);
                    Patch(_this.root, patches);
                    __this.treeNode = newTree;
                    _this.root = __this.treeNode.render();
                }
            },
            view: {
                get: function () {
                    return view;
                },
                set: function (n) {
                    var __this = this;
                    const newTree = makeTree(__this.data, n);
                    const patches = Diff(__this.treeNode, newTree);
                    Patch(_this.root, patches);
                    __this.treeNode = newTree;
                    _this.root = __this.treeNode.render();
                }
            }
        });
        _this.root = _this.treeNode.render();
        document.body.appendChild(_this.root);
    }

    const makeTree = function (data, view) {
        // 来自数据库
        var tmp = [];
        for (let index = 0; index < data.length; index++) {
            var item = data[index];
            var subTmp = [];
            for (var key in item.data) {
                var v = item.data[key];
                subTmp.push(Element('div', { class: 'mPrint-left-bot-choice-item' }, {}, [
                    Element('span', { class: 'ci_file iconfont icon-yduifuxuankuang' }, { click: Utils.events.check }, [v])
                ]));
            }
            tmp.push(Element('div', { class: 'mPrint-left-bot-choice' }, {}, [
                Element('div', { class: 'mPrint-left-bot-choice-tit' }, {}, [
                    Element('div', {}, {}, [item.title]),
                    Element('div', { class: 'dropicon iconfont icon-xiala' }, { click: Utils.events.expend }, [])
                ]),
                Element('div', { class: 'mPrint-left-bot-choice-cont ' + (index == 0 ? 'active' : '') }, {}, subTmp)
            ]));
            subTmp = [];
        }
        var mdlArr = [Element('div', { class: 'mPrint-left-bot-ticket-drag iconfont icon-tubiaozhizuomoban' }, { mousedown: Move }, [])];
        if (view && view.mdl) {
            view.mdl.forEach((item, index) => {
                mdlArr.push([
                    Element('div', { class: 'mPrint-left-bot-ticket-item', style: `min-width:${view.mData_global.ele_min_width}px;max-width:${view.mData_global.ele_max_width}px;` }, { mousedown: Move }, [
                        Element('div', { class: 'mPrint-left-bot-ticket-item-text' }, {}, [item.name]),
                        Element('div', { class: 'mPrint-left-bot-ticket-item-icon iconfont icon-shanchu' }, {}, [])
                    ])
                ]);
            });
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
                    Element('div', { class: 'mPrint-left-bot-layer' }, {}, tmp),
                    Element('div', { class: 'mPrint-left-bot-ticket', style: `height:${view.tmp.height}px;width:${view.tmp.width}px;overflow:hidden;` }, {}, [
                        Element('div', { class: 'mPrint-left-bot-ticket-wrap' }, {}, mdlArr),
                    ])
                ]),
            ]),
            // 右部分
            Element('div', { class: 'mPrint-right' }, {}, Utils.TeePartElement('mPrint-right-setting'))
        ])
    }
    return JSPrint;
}));
var alp = new JSPrint(Data, view);
setTimeout(() => {
    alp.data = Data.printDataTest;
}, 2000);

setTimeout(() => {
    alp.data = Data.printDataTest2;
}, 4000);