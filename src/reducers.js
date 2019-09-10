import { combineReducers } from 'redux'

import authReducers from './App/reducers'

export default combineReducers({
    auth: authReducers
})
