// Export the variable "database" which contains the URI/path to the MongoDB 
// database we want to connect to in server.js under the module var name
// "config" (so accessing database would need you to write "config.database").

module.exports = {
    database: process.env.MONGO_URI || 'localhost/insight-mvp'
};