const FIDE = require('../lib/index.js').default;

class Tests {

	static async search(id) {
		let res = await FIDE.search(id);
		console.log(JSON.stringify(res, null, 4));
	}
}

Tests.search(process.argv.slice(2).join(' '));