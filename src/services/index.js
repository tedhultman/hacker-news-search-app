import axios from "axios";

const sortedByRelevancePath = 'http://hn.algolia.com/api/v1/search?query=';
const sortedByDatePath = 'http://hn.algolia.com/api/v1/search_by_date?query=';

async function commenceSearch(searchStr, priority) {
    try {
        let path = `${sortedByRelevancePath}${searchStr}`;

        if (priority === 'Date') {
            path = `${sortedByDatePath}${searchStr}`;
        }
        const axiosRequestConfig = {
            url: path,
            method: 'get'
        }

        return await axios(axiosRequestConfig);
    } catch (error) {
        errorHandler(error);
    }
}

const errorHandler = (error) => {
    return Promise.reject({ 'request error:': error });
}

export default {
    commenceSearch
}