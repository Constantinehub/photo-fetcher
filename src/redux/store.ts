import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const sagaMiddleware = createSagaMiddleware()

const configureStore = (preloadedState: any) => createStore(
	rootReducer,
	preloadedState,
	composeEnhancers(applyMiddleware(sagaMiddleware)),
)

const store = configureStore({})

sagaMiddleware.run(rootSaga)

export default store
