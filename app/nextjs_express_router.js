const getFileLocations = require('../utils/getFileLocations');

class NextjsExpressRouter {
    constructor(express, next, database) {
      this.express = express
      this.next = next
      this.database = database;
    }
  
    async init() {
      await this.initApi()
      await this.initErrors()
    }
  
    async initApi() {
      console.log("Loading API routes")

      var baseRoutes = await getFileLocations(`${__dirname}/routes`, ['.js', '.ts'])
      for(let i = 0; i < baseRoutes.length; i++){
        var path = `${baseRoutes[i]}`.replace(__dirname, ''),
            pathArr = path.replace('/base', '').split('/'),
            baseName = `/`;
        for (let j = 2; j < pathArr.length; j++) {
            if ((j > 1) && (j != (pathArr.length - 1))) 
              baseName += `${pathArr[j]}/`;
            else if (pathArr[j] != 'index.js') 
              baseName += `${`${pathArr[j]}`.replace('.js', '')}/`;
        }

        var route = await require(`.${path}`)(this.next, this.database);
        this.express.use(baseName, route);

        console.log(` - ${path} : ${baseName}`);
      }
    }
  
    async initErrors() {
      // catch 404 and forward to error handler
      this.express.use((req, res, next) => {
        const err = new Error('Not Found')
        err.status = 404
        next(err)
      })
  
      this.express.use((err, req, res, next) => {
        res.status(err.status || 500)
        res.locals.error = err
        res.locals.errorDescription = err.message
        this.next.render(req, res, "/_error", {  })
      })
    }
  }
  
  module.exports = NextjsExpressRouter