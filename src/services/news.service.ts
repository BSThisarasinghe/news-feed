import axios from "axios";
import * as CONSTANTS from '../constants';

const getNewsList = (page: number, pageSize: number, country: string) => {
    return axios({
        method: "get",
        url: `${CONSTANTS.REACT_APP_BACKEND_URL}/v2/top-headlines?country=${country}&apiKey=${CONSTANTS.REACT_APP_API_KEY}&pageSize=${pageSize}&page=${page}`
    });;
}

export {
    getNewsList
};