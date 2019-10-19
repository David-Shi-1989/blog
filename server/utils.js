module.exports = {
  response (res, data, httpCode = 200) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8')
    res.status(httpCode).end(JSON.stringify(data))
  }
}
