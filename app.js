const express = require('express')
const app = express()
const { readFile, writeFileSync } = require('fs')
const { fileURLToPath } = require('url')
const { dirname } = require('path')
const PORT = process.env.PORT;

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    readFile(__dirname + '/dist/index.html', 'utf8', (err, html) => {
        err ? res.status(500).send('Ошибка 500') : res.send(html);
    });
});

app.listen(3000);