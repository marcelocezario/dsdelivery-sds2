import axios from "axios";

const API_URL = 'http://localhost:8080';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

console.log("################# COMEÇA AQUI #################")
console.log({ mapboxToken });
console.log("################# TERMINA AQUI #################")

export function fetchProducts() {
    return axios(`${API_URL}/products`)
}

export function fetchLocalMapBox(local: string) {
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

//    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=pk.eyJ1IjoibWFyY2Vsb2NlemFyaW8iLCJhIjoiY2tqb2JubGxpNXNlNjMxbnkzNWt0MDQ1cSJ9.6XknSIIgjAARNTJWGkRzSQ`)
