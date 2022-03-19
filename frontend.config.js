module.exports = {
    deployment: process.env.NODE_ENV !== 'production' ? `http://localhost:${process.env.PORT}` : process.env.DEPLOYMENT
}