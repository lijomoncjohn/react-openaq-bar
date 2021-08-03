import { put, takeLatest } from 'redux-saga/effects';
import { ActionType } from './actionType';
import { Service } from './service';

const countrySaga = function* (action) {
	const countryResponse = yield Service.fetchCountry();

	if (!countryResponse.error) {
		yield put({
			type: ActionType.FETCH_COUNTRY_SUCCESS,
			data: countryResponse.value,
		});
	} else {
		yield put({
			type: ActionType.FETCH_COUNTRY_FAILED,
			data: countryResponse.value,
		});
	}
};

const countryWatch = function* () {
	yield takeLatest(ActionType.FETCH_COUNTRY_BEGIN, countrySaga);
};

export { countryWatch };
