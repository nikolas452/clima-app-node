const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=OxjDyeIvzjXePj6u8x83Z37bnImmntY1&location=${encodeUrl}`)
    if (direccion === " " || direccion === true) {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }


    // console.log(resp.data.info.statuscode);
    const location = resp.data.results[0].providedLocation.location;
    const coord = resp.data.results[0].locations[0].latLng;

    return {
        direccion: location,
        lat: coord.lat,
        lng: coord.lng
    }
}

module.exports = { getLugarLatLng }