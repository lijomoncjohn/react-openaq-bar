import { createReducer } from '@reduxjs/toolkit';
import { ActionType } from './actionType';
import { initialPollutionState } from './state';

const reducer = createReducer(initialPollutionState, {
	[ActionType.FETCH_COUNTRY_BEGIN]: (state) => {
		state.country.meta = {};
		state.country.results = [];
		state.country.error = {};
	},
	[ActionType.FETCH_COUNTRY_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		state.country.meta = data.data.meta;
		state.country.results = data.data.results;
		state.country.error = {};
	},
	[ActionType.FETCH_COUNTRY_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.country.meta = {};
		state.country.results = [];
		state.country.error = { message: 'Error fetching country list' };
	},

	[ActionType.FETCH_CITY_BEGIN]: (state) => {
		state.city.meta = {};
		state.city.results = [];
		state.city.error = {};
	},
	[ActionType.FETCH_CITY_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		state.city.meta = data.data.meta;
		state.city.results = data.data.results;
		state.city.error = {};
	},
	[ActionType.FETCH_CITY_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.city.meta = {};
		state.city.results = [];
		state.city.error = { message: 'Error fetching city list' };
	},

	[ActionType.FETCH_MEASUREMENT_BEGIN]: (state) => {
		state.measurement.meta = {};
		state.measurement.results = [];
		state.measurement.error = {};
	},
	[ActionType.FETCH_MEASUREMENT_SUCCESS]: (state, data) => {
		state.apiStatus = 1;
		state.measurement.meta = data.data.meta;
		state.measurement.results = data.data.results;
		state.measurement.error = {};
	},
	[ActionType.FETCH_MEASUREMENT_FAILED]: (state, data) => {
		state.apiStatus = 1;
		state.measurement.meta = {};
		state.measurement.results = [];
		state.measurement.error = { message: 'Error fetching measurement list' };
	},
});

export default reducer;
