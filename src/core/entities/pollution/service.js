import { ApiWrapper } from '../../http/ApiWrapper';
import Config from '../../ApiConfig/config.json';
import { ApiMethods } from '../../base/constants';

export class Service extends ApiWrapper {
	static async fetchCountry() {
		return this.sendRequest({
			url: `${Config.CONTROLLER_COUNTRY}`,
			method: ApiMethods.GET,
		});
	}
	static async fetchCity(country) {
		return this.sendRequest({
			url: `${Config.CONTROLLER_CITY}?country=${country}`,
			method: ApiMethods.GET,
		});
	}
	static async fetchMeasurement() {
		return this.sendRequest({
			url: `${Config.CONTROLLER_MEASUREMENT}`,
			method: ApiMethods.GET,
		});
	}
}
