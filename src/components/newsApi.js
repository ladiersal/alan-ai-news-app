import axios from "axios";

export default function newsApi(category) {

    const API_KEY = `324d50c0a3b641f8a33887cb5ac2483c`;
    const END_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    
    return axios.get(`${END_URL}`)

}