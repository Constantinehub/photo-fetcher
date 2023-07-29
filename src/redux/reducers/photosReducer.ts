import { PhotosActions } from '../actions/PhotosActions';

export type PhotoSetType = {
	url: string,
	download_url: string,
	author: string,
}

export type PhotosState = {
	photoSet: PhotoSetType[],
	isPhotosLoading: boolean,
	isPhotosGrayscale: boolean,
}

const initialState: PhotosState = {
	photoSet: [],
	isPhotosLoading: false,
	isPhotosGrayscale: false,
}

const Photos = (state = initialState, { type, payload }: any) => {
	switch (type) {
		case PhotosActions.SET_NEW_PHOTOS:
			return {
				...state,
				photoSet: payload,
			}
		case PhotosActions.UPDATE_NEW_PHOTOS:
			return {
				...state,
				photoSet: [
					...state.photoSet,
					...payload,
				],
			}
		case PhotosActions.TOGGLE_PHOTOS_LOADER:
			return {
				...state,
				isPhotosLoading: payload,
			}
		case PhotosActions.TOGGLE_PHOTOS_GRAYSCALE:
			return {
				...state,
				isPhotosGrayscale: payload,
			}
		default:
			return state
	}
}

export default Photos
