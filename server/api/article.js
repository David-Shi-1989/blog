const utils = require('../utils')
module.exports = function (router) {
  router.get('/article/list', function (req, res, next) {
    utils.response(res, [{title: '123'}])
  })
}
