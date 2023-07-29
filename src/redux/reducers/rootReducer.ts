import { combineReducers } from 'redux';
import Photos from './photosReducer'

const rootReducer = combineReducers({
	photos: Photos,
})

export default rootReducer
