import { Union } from '../types/photoTypes';

export enum PhotosActions {
	FETCH_NEW_PHOTOS = 'photos/FETCH_NEW_PHOTOS',
	SET_NEW_PHOTOS = 'photos/SET_NEW_PHOTOS',
	UPDATE_NEW_PHOTOS = 'photos/UPDATE_NEW_PHOTOS',
	FETCH_RANDOM_PHOTO = 'photos/FETCH_RANDOM_PHOTO',
	SET_RANDOM_PHOTO = 'photos/SET_RANDOM_PHOTO',
	TOGGLE_PHOTOS_LOADER = 'photos/TOGGLE_PHOTOS_LOADER',
	TOGGLE_PHOTOS_GRAYSCALE = 'photos/TOGGLE_PHOTOS_GRAYSCALE',
}

type FetchRandomPhotosProps = {
	size: string,
	amount: number,
}

export type FetchNewPhotosType = {
	type: PhotosActions.FETCH_NEW_PHOTOS,
	payload: Union,
}

export type SetNewPhotosType = {
	type: PhotosActions.SET_NEW_PHOTOS,
	payload: Union[],
}

export type FetchRandomPhoto = {
	type: PhotosActions.FETCH_RANDOM_PHOTO,
	payload: FetchRandomPhotosProps,
}

export type UpdateNewPhotosType = {
	type: PhotosActions.UPDATE_NEW_PHOTOS,
	payload: Union[],
}

export type TogglePhotosLoaderType = {
	type: PhotosActions.TOGGLE_PHOTOS_LOADER,
	payload: boolean,
}

export type TogglePhotosGrayscaleType = {
	type: PhotosActions.TOGGLE_PHOTOS_GRAYSCALE,
	payload: boolean,
}

export const fetchNewPhotos = (payload: Union): FetchNewPhotosType => ({
	type: PhotosActions.FETCH_NEW_PHOTOS,
	payload,
})

export const setNewPhotos = (payload: Union[]): SetNewPhotosType => ({
	type: PhotosActions.SET_NEW_PHOTOS,
	payload,
})

export const fetchRandomPhoto = (payload: FetchRandomPhotosProps): FetchRandomPhoto => ({
	type: PhotosActions.FETCH_RANDOM_PHOTO,
	payload,
})

export const setRandomPhoto = (payload: any): any => ({
	type: PhotosActions.SET_RANDOM_PHOTO,
	payload,
})

export const updateNewPhotos = (payload: Union[]): UpdateNewPhotosType => ({
	type: PhotosActions.UPDATE_NEW_PHOTOS,
	payload,
})

export const togglePhotosLoader = (payload: boolean): TogglePhotosLoaderType => ({
	type: PhotosActions.TOGGLE_PHOTOS_LOADER,
	payload,
})

export const togglePhotosGrayscale = (payload: boolean): TogglePhotosGrayscaleType => ({
	type: PhotosActions.TOGGLE_PHOTOS_GRAYSCALE,
	payload,
})
