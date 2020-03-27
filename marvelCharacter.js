const axios = require('axios');

const getMarvelCharacterLIst = async() => {

    const instance = axios.create({
        baseURL: 'https://gateway.marvel.com:443/v1/public/characters?limit=100&hash=435ac14f2ee4f248c2fa774ffdd2f90d&apikey=dcf54cdf317a8e3936baa0b47defde55&ts=1585087200',
        timeout: 5000
            //headers: {'X-Custom-Header': 'foobar'}
    });

    let characterList = [];
    const resp = await instance.get();

    for (i = 0; i < 100; i++) {
        characterList[i] = {
            id: resp.data.data.results[i].id,
            nombre: resp.data.data.results[i].name,
            descripción: resp.data.data.results[i].description
        }

        //console.log(resp.data.data.results[i].name);
    }

    return characterList;

}

module.exports = {
    getMarvelCharacterLIst
}