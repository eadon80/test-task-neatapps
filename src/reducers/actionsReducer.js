import { INITIAL_STATE, FETCH_INITIAL_DATA_SUCCESS } from '../constants';

const actions = (state = INITIAL_STATE.actions, action) => {
    switch(action.type) {
        case FETCH_INITIAL_DATA_SUCCESS:
            return action.payload.actions.reduce((acc, el) => {
                return {
                    ...acc,
                    [el.id]: el
                }
            }, {});
        default:
            return state;
    }
}

export default actions;
