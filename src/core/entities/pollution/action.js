import { ActionType } from './actionType';

export const PollutionAction = {
	getCountry() {
		return {
			type: ActionType.FETCH_COUNTRY_BEGIN,
		};
	},
};
