const mongoose = require('mongoose');
require('dotenv').config();
const dbName = process.env.ATLAS_DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
const dbUri = process.env.ATLAS_DBURI;
const uri = `mongodb+srv://${username}:${pw}@${dbUri}/${dbName}?retryWrites=true&w=majority`;




mongoose.connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));