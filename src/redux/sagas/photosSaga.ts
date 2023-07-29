import { takeLatest, all, call, put } from 'redux-saga/effects';
import { PhotosActions, FetchNewPhotosType } from '../actions/PhotosActions';
import { getPhotos } from '../../utils/apiService';
import { generateRandomInt } from '../../utils/common';

function* getNewPhotos(action: FetchNewPhotosType): any {
	const { payload: { actionType, ...restPayload } } = action;

	try {
		yield put({
			type: PhotosActions.TOGGLE_PHOTOS_LOADER,
			payload: true,
		})

		const response = yield call(getPhotos, '/v2/list', {
			params: restPayload,
		});

		if (response?.status === 200) {
			if (actionType) {
				yield put({
					type: PhotosActions.UPDATE_NEW_PHOTOS,
					payload: response.data,
				})
			} else {
				yield put({
					type: PhotosActions.SET_NEW_PHOTOS,
					payload: response.data
				})
			}

			yield put({
				type: PhotosActions.TOGGLE_PHOTOS_LOADER,
				payload: false
			})
		}

	} catch (error: any) {
		const { message } = error;

		if (message) {
			console.error(message)
		}

		yield put({
			type: PhotosActions.TOGGLE_PHOTOS_LOADER,
			payload: false
		})
	}
}

function* getRandomPhoto(action: any): any {
	const { payload } = action;

	try {
		yield put({
			type: PhotosActions.TOGGLE_PHOTOS_LOADER,
			payload: true,
		})

		const resp = yield all([
			call(getPhotos, '/350/250', {
				params: {
					random: generateRandomInt(),
				}
			}),
			call(getPhotos, '/350/250', {
				params: {
					random: generateRandomInt(),
				}
			}),
			call(getPhotos, '/350/250', {
				params: {
					random: generateRandomInt(),
				}
			}),
			call(getPhotos, '/350/250', {
				params: {
					random: generateRandomInt(),
				}
			}),
		])
		console.log('random_resp ', resp.map((item: any) => item.data));

		// yield put({
		// 	type: PhotosActions.TOGGLE_PHOTOS_LOADER,
		// 	payload: false
		// })

	} catch (error: any) {
		const { message } = error;

		if (message) {
			console.error(message)
		}
	}
}

function* watchGetNewPhotos() {
	yield takeLatest(PhotosActions.FETCH_NEW_PHOTOS, getNewPhotos);
}

function* watchGetRandomPhoto() {
	yield takeLatest(PhotosActions.FETCH_RANDOM_PHOTO, getRandomPhoto);
}

function* PhotosSaga() {
	yield all([
		watchGetNewPhotos(),
		watchGetRandomPhoto(),
	]);
}

export default PhotosSaga;
