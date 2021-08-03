import { all } from 'redux-saga/effects';
import { countryWatch } from '../entities/pollution/saga';

export default function* rootSaga() {
	yield all([countryWatch()]);
}
