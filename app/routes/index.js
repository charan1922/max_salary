const noteRoutes = require('./max_routes')


module.exports = function(app, db) {
    noteRoutes(app,db)
}