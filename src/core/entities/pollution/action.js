import { ActionType } from './actionType';

export const PollutionAction = {
	getCountry() {
		return {
			type: ActionType.FETCH_COUNTRY_BEGIN,
		};
	},
	getCity(country) {
		return {
			type: ActionType.FETCH_CITY_BEGIN,
			country,
		};
	},
	getMeasurement() {
		return {
			type: ActionType.FETCH_MEASUREMENT_BEGIN,
		};
	},
};
