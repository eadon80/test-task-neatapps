import { 
    FETCH_INITIAL_DATA_SUCCESS, 
    SET_ACTIVE_ITEM
} from '../constants';


const fetchDataSuccess = (payload) => ({
    type: FETCH_INITIAL_DATA_SUCCESS,
    payload
})

export const fetchData = () => dispatch => {
    fetch('/data.json')
        .then(r => r.json())
        .then(data => {
            dispatch(fetchDataSuccess(data));
        })
}

export const setActiveItem = (id) => ({
    type: SET_ACTIVE_ITEM,
    payload: id    
})