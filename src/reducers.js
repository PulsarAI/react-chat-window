import { combineReducers } from 'redux'

import authReducers from './Launcher/reducers'

export default combineReducers({
    auth: authReducers
})
