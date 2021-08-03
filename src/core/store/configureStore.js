import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from 'redux-saga';

let store;

export default function configureAppStore() {
	const sagaMiddleware = createSagaMiddleware();

	const store = configureStore({
		reducer: {},
		preloadedState: {},
		middleware: new MiddlewareArray().concat(sagaMiddleware),
		devTools: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
	});

	sagaMiddleware.run();
	store.close = () => store.dispatch(END);

	return store;
}

export { store };
