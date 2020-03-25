import { INITIAL_STATE, FETCH_INITIAL_DATA_SUCCESS, SET_ACTIVE_ITEM } from '../constants';

const resources = (state = INITIAL_STATE.resources, action) => {
    switch(action.type) {
        case FETCH_INITIAL_DATA_SUCCESS:
            const data = action.payload.resources.reduce((acc, el) => {
                return {
                    ...acc,
                    [el.id]: el
                }
            }, {});
            const activeResourceID = "1";

            return {
                ...state,
                data,
                activeResourceID,
                activeResource: data[activeResourceID]
            };
        case SET_ACTIVE_ITEM:
            return {
                ...state,
                activeResourceID: action.payload,
                activeResource: state.data[action.payload]
            }
        default:
            return state;
    }
}


export default resources;