import { GET } from './utils/requests';
import { users } from './config.json';
import { SearchConfig, SearchOptions, SearchProfile } from './interfaces';
import Get from './get';

export default class FIDE {

	static async search(searchstring: string, options?: SearchOptions) {
		let nb = options?.nb || 10;
		let data = await GET({
			url: users,
			params: {
				search: searchstring,
				search_rating: options?.ratingCategory || 'all',
				search_country: options?.country || 'all',
				search_title: options?.title || 'all',
				search_year: undefined,
				search_low: options?.minRating || 0,
				search_high: options?.maxRating || 3500,
				search_inactive: options?.inactive ? 'on' : 'off',
				search_exrated: options?.unrated ? 'on' : 'off',
				search_radio: undefined,
				search_bday_start: options?.bornAfter || 'all',
				search_bday_end: options?.bornBefore || 'all',
				search_asc: undefined,
				search_gender: options?.gender
			} as SearchConfig
		});
		return Get.tables(data).slice(0, nb) as any as SearchProfile[];
	}

}