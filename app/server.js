const express = require('express');
const next = require('next')
const NextjsExpressRouter = require("./nextjs_express_router")
const Middleware = require("./middleware")

const httpServer = (express) => {
  return require('http').createServer(express)
}

const httpsServer = (express) => {
  const fs = require('fs')
  const options = {
    key: fs.readFileSync(process.env.SSL_PRIVATE_KEY_PATH, 'utf8'),
    cert: fs.readFileSync(process.env.SSL_CERTIFICATE_PATH, 'utf8')
  }
  return require('https').createServer(options, express)
}

class Server {
  constructor(database, port) {
    this.database = database;
    this.port = port
    this.express = express()
    this.next = next({ dev: process.env.NODE_ENV !== 'production' })
    this.middleware = new Middleware(this.express)
    this.router = new NextjsExpressRouter(this.express, this.next, this.database)
  }

  async start() {
    await this.next.prepare()
    await this.middleware.init()
    await this.router.init()
    this.server = httpServer(this.express)
    this.server.listen(this.port, (err) => {
      if (err) throw err;
    })
  }
}

module.exports = Server