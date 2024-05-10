import axios from "axios";
import {BASE_URL_TREFLE, TOKEN_TREFLE} from "../utils/constants";

export const getPlantList = async () => {

    try {
        const url = `${BASE_URL_TREFLE}/plants?token=${TOKEN_TREFLE}`;
        console.log(url)
        return await axios.get(url)
    } catch (error) {
        console.error("error fetching plants", error)
        throw error
    }
}