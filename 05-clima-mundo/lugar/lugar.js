

const axios = require('axios');


const getLugarLatLng = async (dir) => {

    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php`,
        headers: {
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key":"8ea0e40af0mshc590ceb7ee6c59fp10a130jsn97d301b4d17e",
            "useQueryString":true
            },
        params: { 'location': `${encodedUlr}` }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
