const express = require('express');
const BodyParser = require('body-parser');

let app = express();

app.use(BodyParser.json());

app.get('/', (req, res, next) => {
    console.log('App base route');
    res.send('App Is Working!!');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});