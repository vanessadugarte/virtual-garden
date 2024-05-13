import axios from "axios";
import {API_KEY_PLANTS, BASE_URL_PLANTS} from "../utils/constants";


export const getPlantList = async () => {
    try {
        const url = `${BASE_URL_PLANTS}/species-list?key=${API_KEY_PLANTS}`;
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.error("error fetching plants", error)
        throw error
    }
}