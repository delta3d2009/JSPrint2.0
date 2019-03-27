export default {
    // 初始模版 测试数据
    data: { "printId": 27, "isDel": "901002", "bgi": "[{\"id\":\"m_1543819030923\",\"w\":320,\"h\":420,\"l\":0,\"t\":1,\"url\":\"/http://easystop.com.cn:8080/img/print/add.png\",\"level\":0,\"name\":\"a7.jpg\",\"data\":\"\"},{\"id\":\"m_1543819036661\",\"w\":100,\"h\":420,\"l\":0,\"t\":220,\"url\":\"/img/qr_code.png\",\"level\":1,\"name\":\"qr_code.png\",\"data\":\"\"}]", "eles": "[{\"col\":1,\"differX\":0,\"differY\":0,\"filed\":\"customerTime\",\"height\":26,\"id\":\"m_1543819038067\",\"order\":0,\"val\":\"消费时间\",\"width\":90,\"x\":10,\"y\":10,\"pos\":{\"col\":1,\"row\":1}},{\"col\":1,\"differX\":0,\"differY\":0,\"filed\":\"qrCodePath\",\"height\":26,\"id\":\"m_1543819038386\",\"order\":1,\"val\":\"入园二维码\",\"width\":100,\"x\":10,\"y\":46,\"pos\":{\"col\":1,\"row\":2}},{\"col\":1,\"differX\":0,\"differY\":0,\"filed\":\"productPayPrice\",\"height\":26,\"id\":\"m_1543819038706\",\"order\":2,\"val\":\"产品价格\",\"width\":90,\"x\":10,\"y\":82,\"pos\":{\"col\":1,\"row\":3}}]", "name": "1121", "height": 320, "width": 320, "fontSize": 12, "fontFamily": "微软雅黑", "fontColor": "#000", "dx": 0, "dy": 0, "img": "", "printSize": "320*320", "gmtCreate": "Dec 3, 2018 2:39:11 PM" },
    fontFamilyList: ['宋体', '黑体', '楷体', '新宋体', '微软雅黑'],
    fontSizeList: [12, 14, 16, 18, 20, 24, 28, 32],
    // 打印项目
    printData: [{
        id: 1,
        title: '打印选项1',
        data: {
            filed1: '打印项目1',
            filed2: '打印项目2',
            filed3: '打印项目3',
            filed4: '打印项目4',
        },

    }, {
        id: 2,
        title: '打印选项2',
        data: {
            filed5: '打印项目5',
            filed6: '打印项目6',
            filed7: '打印项目7',
            filed8: '打印项目8',
            filed9: '打印项目9',
            filed10: '打印项目10',
            filed11: '打印项目11',
            filed12: '打印项目12',
            filed13: '打印项目13',
            filed14: '打印项目14',
            filed15: '打印项目15',
            filed16: '打印项目16',
        },
    }, {
        id: -1,
        title: '自定义选项',
        data: {
        }
    }],
    printDataTest: [{
        id: 1,
        title: '打印选项1',
        data: {
            filed1: '打印项目1',
            filed2: '打印项目2',
            filed3: '打印项目3',
            filed4: '打印项目4',
        },
    }, {
        id: 2,
        title: '打印选项2',
        data: {
            filed5: '打印项目5',
            filed6: '打印项目6',
            filed7: '打印项目7',
            filed8: '打印项目8',
            filed9: '打印项目9',
            filed10: '打印项目10',
            filed11: '打印项目11',
            filed12: '打印项目12',
        },
    }, {
        id: 3,
        title: '打印选项3',
        data: {
            filed5: '打印项目5',
            filed6: '打印项目6',
            filed7: '打印项目7',
            filed8: '打印项目8',
            filed9: '打印项目9',
        },
    }, {
        id: -1,
        title: '自定义选项',
        data: {
            filed9: '打印项目9',
            filed10: '打印项目10',
            filed11: '打印项目11',
            filed12: '打印项目12',
        }
    }],
    printDataTest2: [{
        id: 1,
        title: '打印选项4',
        data: {
            filed1: '打印项目1',
            filed2: '打印项目2',
            filed3: '打印项目3',
            filed4: '打印项目4',
        },

    }, {
        id: 2,
        title: '打印选项5',
        data: {
            filed9: '打印项目9',
            filed10: '打印项目10',
            filed11: '打印项目11',
            filed12: '打印项目12',
        },
    }, {
        id: 3,
        title: '打印选项6',
        data: {
            filed5: '打印项目5',
            filed6: '打印项目6',
            filed7: '打印项目7',
            filed8: '打印项目8',
            filed9: '打印项目9',
            filed10: '打印项目10',
            filed11: '打印项目11',
            filed12: '打印项目12',
        },
    }, {
        id: -1,
        title: '自定义选项',
        data: {
            filed9: '打印项目9',
            filed10: '打印项目10',
            filed11: '打印项目11',
            filed12: '打印项目12',
        }
    }]
}