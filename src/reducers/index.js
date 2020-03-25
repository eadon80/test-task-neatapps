import { combineReducers } from 'redux';

import actions from '../reducers/actionsReducer';
import resources from '../reducers/resourcesReducer';

export default combineReducers({
    actions,
    resources
});