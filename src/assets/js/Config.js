const Config = {
    PartTree: {
        'mPrint-left-top-setting': [
            { e: 'div', c: { class: 'mPrint-left-top-setting-word' }, k: {}, v: ['字体'] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-word' }, k: {}, v: ['大小'] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-split' }, k: {}, v: [] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-item mPrint-icon-1' }, k: {}, v: [] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-item mPrint-icon-2' }, k: {}, v: [] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-item mPrint-icon-3' }, k: {}, v: [] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-item mPrint-icon-4' }, k: {}, v: [] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-item mPrint-icon-5' }, k: {}, v: [] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-split' }, k: {}, v: [] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-item mPrint-icon-6' }, k: {}, v: [] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-item mPrint-icon-7' }, k: {}, v: [] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-item mPrint-icon-8' }, k: {}, v: [] },
            { e: 'div', c: { class: 'mPrint-left-top-setting-item mPrint-icon-9' }, k: {}, v: [] },
        ],
        'mPrint-right-setting': [
            {
                e: 'fieldset', c: {}, k: {}, v: [
                    { e: 'legend', c: {}, k: {}, v: ['模版整体设置'] },
                    {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['模版名称：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入模版名称" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['模版大小：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "宽度" }, k: {}, v: [] },
                                    { e: 'input', c: { placeholder: "高度" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['偏移调整：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "左右偏移" }, k: {}, v: [] },
                                    { e: 'input', c: { placeholder: "上下偏移" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['字号：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "选择字号", readonly: "readonly" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['字体：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "选择字体", readonly: "readonly" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                e: 'fieldset', c: {}, k: {}, v: [
                    { e: 'legend', c: {}, k: {}, v: ['模版选项整体设置'] },
                    {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['横向间距：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入横向间距" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['纵向间距：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入纵向间距" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['第一项上边距：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入第一项上边距" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['第一项左边距：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入第一项左边距" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['选项最小宽度：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入选项最小宽度" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['选项最大宽度：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入选项最大宽度" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                e: 'fieldset', c: {}, k: {}, v: [
                    { e: 'legend', c: {}, k: {}, v: ['模版背景图设置'] },
                    {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['选择图片：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请选择图片" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['横行边距：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入横行边距：" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['纵向边距：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入纵向边距" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['宽：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入宽" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['高：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入高" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    }, {
                        e: 'div', c: { class: 'mPrint-right-line' }, k: {}, v: [
                            { e: 'div', c: { class: 'mPrint-right-line-left' }, k: {}, v: ['层级：'] },
                            {
                                e: 'div', c: { class: 'mPrint-right-line-right' }, k: {}, v: [
                                    { e: 'input', c: { placeholder: "请输入层级" }, k: {}, v: [] },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    }
}

export default Config;