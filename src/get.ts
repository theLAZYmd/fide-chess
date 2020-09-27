import cheerio from 'cheerio';
import { Table, TableRow } from './interfaces';

export default class Get {

	static tables(data: string) {
		const $ = cheerio.load(data);
		let headers = [] as string[];
		$('table > thead > tr > th').each(function (i, elem) {
			headers.push($(elem).text().trim());
		});
		let body = [] as Table;
		$('table > tbody > tr').each(function (i, elem) {
			let row = { id: '', link: '' } as TableRow;
			$(this).find('td').each(function (i, elem) {
				let key = headers[i];
				let cell = $(elem);
				let text = cell.text().trim();
				if (cell.attr('data-label')?.toLowerCase().includes('rtg') || cell.attr('data-label')?.toLowerCase().includes('year')) {
					row[key] = parseInt(text);
				} else 
				if (cell.attr('data-label')?.toLowerCase().includes('name')) {
					let link = cell.find('a').attr('href');
					if (link) {
						row.id = link?.split('/').pop() as string;
						row.link = link;
					}
					row[key] = text;
				} else {
					row[key] = text;
				}
			});
			body.push(row);
		});
		return body;
	}
}