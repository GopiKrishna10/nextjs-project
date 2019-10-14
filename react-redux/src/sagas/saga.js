import { takeLatest, put, delay } from 'redux-saga/effects';

function* ageUpAsync() {
    yield delay(4000);
    yield put({ type: 'AGE_UP_ASYNC', value: 1 });
    // this is how we call an api 
    // const apiResponse = yield call(updateApi, data);
    // yield put({
    //   type: 'UPDATE_SUCCESS',
    //   payload: apiResponse.body,
    // });
}
export function* watchAgeUp() {
    // takeEvery means every time dispatches it will take 
    yield takeLatest('AGE_UP', ageUpAsync)
}