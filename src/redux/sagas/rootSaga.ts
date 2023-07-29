import { all, fork } from 'redux-saga/effects';
import PhotosSaga from './photosSaga';

export default function* rootSaga() {
	yield all([
		fork(PhotosSaga),
	])
}
