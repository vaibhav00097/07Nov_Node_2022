const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "Facebook";

MongoClient.connect(connectionURL, (err, client) => {

    const db = client.db(databaseName);
    console.log("database connection created successfully !!!")

});