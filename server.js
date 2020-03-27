const express = require('express');

const app = express();
let Character = require('./models/character');

const marvelCharacter = require('./marvelCharacter');

app.get('/character', (req, res) => {

    const getInfo = async() => {
        const ListCharacter = await marvelCharacter.getMarvelCharacterLIst();
        res.send(ListCharacter);
    }

    getInfo();
});

app.post('/character', (req, res) => {

    let body = req.body;

    let character = new Character({
        nombre: body.nombre,
        id: body.id,
        descripción: body.descripción
    });


});

app.listen(3000);


module.exports = app;