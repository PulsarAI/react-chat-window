import {
    spawn
} from 'redux-saga/effects'

import authSaga from './App/Auth/sagas'

function* sagas () {
    yield spawn(authSaga)
}

export default sagas
