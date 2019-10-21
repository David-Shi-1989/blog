const utils = require('../utils')
const articleSql = require('../sql/article')
module.exports = function (router) {
  router.get('/article/list', function (req, res, next) {
    articleSql.getArticleList(req.query).then(result => {
      utils.response(res, result)
    })
    let mock = [
      {
        id: '9018-827d-sk13-98sk',
        title: 'Title1',
        author: 'David',
        type: 1,
        createTime: 1534297924817,
        description: '在很多技术博客中，需要贴上一些代码。目前网上也有很多成熟的代码高亮的js库，方便也美观。但是，折腾了一个礼拜，我也搞了一个出来，暂且称为LightCode吧～目前只开发出HTML代码高亮，后期将会推出js和css的高亮。原理：LightCode一个字一个符号地分析代码流，然后构造出树形结构，这也符合HTML代码的规则。这样不仅可以利用于高亮代码，也可以用在其他地方。。。好吧，言归正传，戳这里',
        tags: [
          {name: 'HTML', id: 1},
          {name: 'VUE', id: 2},
          {name: 'CSS', id: 3}
        ]
      },
      {
        id: '1y27-0ls9-skzp-02kz',
        title: 'Title2',
        author: 'David',
        type: 0,
        createTime: 1534297924817,
        description: '在很多技术博客中，需要贴上一些代码。目前网上也有很多成熟的代码高亮的js库，方便也美观。但是，折腾了一个礼拜，我也搞了一个出来，暂且称为LightCode吧～目前只开发出HTML代码高亮，后期将会推出js和css的高亮。原理：LightCode一个字一个符号地分析代码流，然后构造出树形结构，这也符合HTML代码的规则。这样不仅可以利用于高亮代码，也可以用在其他地方。。。好吧，言归正传，戳这里',
        tags: [
          {name: 'HTML', id: 1},
          {name: 'VUE', id: 2},
          {name: 'CSS', id: 3}
        ]
      },
      {
        id: '198s-1pqi-sj9x-9s91',
        title: '很长很长很长很长很长很长很长很长很长很长很长很长很长很长的标题',
        author: 'David',
        type: 1,
        createTime: 1534297924817,
        description: '在很多技术博客中，需要贴上一些代码。目前网上也有很多成熟的代码高亮的js库，方便也美观。但是，折腾了一个礼拜，我也搞了一个出来，暂且称为LightCode吧～目前只开发出HTML代码高亮，后期将会推出js和css的高亮。原理：LightCode一个字一个符号地分析代码流，然后构造出树形结构，这也符合HTML代码的规则。这样不仅可以利用于高亮代码，也可以用在其他地方。。。好吧，言归正传，戳这里',
        tags: [
          {name: 'HTML', id: 1},
          {name: 'VUE', id: 2},
          {name: 'CSS', id: 3}
        ]
      },
      {
        id: 'ya71-zmv9-02nc-oz91-03k1',
        title: 'Title2',
        author: 'David',
        type: 1,
        createTime: 1534297924817,
        description: '在很多技术博客中，需要贴上一些代码。目前网上也有很多成熟的代码高亮的js库，方便也美观。但是，折腾了一个礼拜，我也搞了一个出来，暂且称为LightCode吧～目前只开发出HTML代码高亮，后期将会推出js和css的高亮。原理：LightCode一个字一个符号地分析代码流，然后构造出树形结构，这也符合HTML代码的规则。这样不仅可以利用于高亮代码，也可以用在其他地方。。。好吧，言归正传，戳这里',
        tags: [
          {name: 'HTML', id: 1},
          {name: 'VUE', id: 2},
          {name: 'CSS', id: 3}
        ]
      }
    ]
    // let page = parseInt(req.query.page || 1)
    // utils.response(res, {list: mock.sort('createTime'), page, total: 1112, sort: 'createTime', direction: 'ASC'})
  })
}
