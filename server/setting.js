var obj = {
  env: 'dev',
  isDev () {
    return process.env.NODE_ENV === 'development'
  },
  mysql: {
    _dev: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'swwBlog',
      port: 3306,
      useConnectionPooling: true
    },
    _prod: {},
    getConfig () {
      return obj.isDev ? obj.mysql._dev : obj.mysql._prod
    },
    host () {
      return this.getConfig().host
    },
    user () {
      return this.getConfig().user
    },
    password () {
      return this.getConfig().password
    },
    database () {
      return this.getConfig().database
    }
  }
}

module.exports = obj
