const utils = require('../utils')
const articleSql = require('../sql/article')
module.exports = function (router) {
  router.get('/article/list', function (req, res, next) {
    articleSql.getArticleList(req.query).then(result => {
      utils.response(res, result)
    })
  })
  router.get('/article/:id', function (req, res, next) {
    articleSql.getArticle(req.params.id).then(result => {
      utils.response(res, result)
    })
  })
}
