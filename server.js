const express = require('express');
const db = require ('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    // db.dropDatabase() for production purposes only
    // db.dropDatabase()
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
    })
})