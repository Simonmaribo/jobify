const bodyParser = require('body-parser');

class Middleware {
  constructor(express) {
    this.express = express
  }

  async init() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));

    // CORS
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Content-Length, X-Requested-Width, Accept, Access-Control-Allow-Credentials');
  
      // intercept OPTIONS method
      if (req.method === 'OPTIONS') {
          res.sendStatus(200);
      } else {
          next();
      }
    })

    this.express.use("/admin", async (req, res, next) => {
      console.log("ADMIN ENDPOINT")
      // TODO: Authorization
      next();
    })
    
    this.initErrors()
  }

  initErrors() {
    this.express.use(async (err, req, res, next) => {
      /* This will be the first error handler to be called */
      console.error("Unexpected error")
      return next(err)
    })
  }

}

module.exports = Middleware