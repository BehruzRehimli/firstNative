import axios from "axios";
import {API_BASE} from "@env"

export default axios.create({
    baseURL:API_BASE
})