const config = require('./config');

const Server = require('./app/server')
const { MongoClient } = require('mongodb');

const start = async () => {

    var host = `${config.database.host}:${config.database.port}`
    var options = (config.database.username != undefined && config.database.password != undefined) ? `${config.database.username}:${encodeURIComponent(config.database.password)}@${host}` : host; 
    

    MongoClient.connect(`mongodb://${options}/admin?retryWrites=true`, { useNewUrlParser: true, useUnifiedTopology: true}, async (err, client) => {
        if(err) throw err;

        // Load database collections
        const database = client.db(config.database.name);
        const collections = await database.collections();

        var db = {}
        for(var collection of collections){
            db[collection.collectionName] = collection;
        }

        console.log("Connected to --- MongoDB --- .")
        await startServer(db);
    })
}

const startServer = async (database) => {
    const port = parseInt(process.env.PORT, 10) || 3000
    await new Server(database, port).start().then(() => 
        console.log(`Server running in --- ${process.env.NODE_ENV || "development"} --- on port ${port}`)
    )
}

start();