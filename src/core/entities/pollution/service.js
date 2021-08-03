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
}
