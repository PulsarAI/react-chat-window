import {
    spawn
} from 'redux-saga/effects'

import authSaga from './Launcher/sagas'

function* sagas () {
    yield spawn(authSaga)
}

export default sagas
