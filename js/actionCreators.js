import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm) {
    return {
        type: SET_SEARCH_TERM,
        payload: searchTerm
    };
}

export function addApiData(apiData) {
    return {
        type: ADD_API_DATA,
        payload: apiData
    };
}

export function getApiData(imdbID) {
    return dispatch => {
        axios
            .get(`http://localhost:3000/${imdbID}`)
            .then(res => {
                dispatch(addApiData(res.data));
            })
            .catch(error => {
                console.error('aixos error  => ', error);
            });
    };
}
