const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=fa93d730a9bdfceb0cfbb04a2324ea5d`);
    if (resp.error) throw new Error('Ocurrio un error con la peticion de clima');
    const temp = resp.data.main.temp;
    return temp;
    // console.log(resp.data.main.temp);
}

module.exports = { getClima }