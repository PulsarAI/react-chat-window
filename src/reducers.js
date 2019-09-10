import { combineReducers } from 'redux'

import authReducers from './App/Auth/reducers'

export default combineReducers({
    auth: authReducers
})
