import {
    put,
    takeLatest
} from 'redux-saga/effects'

import {
    CHECK_AUTH_STATUS_REQUEST,
    CHECK_AUTH_STATUS_SUCCESS,
    CHECK_AUTH_STATUS_FAILURE
} from './constants'

function* checkStatus (action) {
    try {
        yield put({
            type: CHECK_AUTH_STATUS_SUCCESS,
            payload: action.payload
        })
    } catch (e) {
        yield put({
            type: CHECK_AUTH_STATUS_FAILURE,
            payload: e
        })
    }
}

function* whatchAuth () {
    yield takeLatest(CHECK_AUTH_STATUS_REQUEST, checkStatus)
}

export default whatchAuth
