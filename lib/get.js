"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cheerio_1 = __importDefault(require("cheerio"));
var Get = /** @class */ (function () {
    function Get() {
    }
    Get.tables = function (data) {
        var $ = cheerio_1.default.load(data);
        var headers = [];
        $('table > thead > tr > th').each(function (i, elem) {
            headers.push($(elem).text().trim());
        });
        var body = [];
        $('table > tbody > tr').each(function (i, elem) {
            var row = {};
            $(this).find('td').each(function (i, elem) {
                var _a, _b;
                var key = headers[i];
                var cell = $(elem);
                var text = cell.text().trim();
                if (((_a = cell.attr('data-label')) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes('rtg')) || ((_b = cell.attr('data-label')) === null || _b === void 0 ? void 0 : _b.toLowerCase().includes('year'))) {
                    row[key] = parseInt(text);
                }
                else {
                    row[key] = text;
                }
            });
            body.push(row);
        });
        return body;
    };
    return Get;
}());
exports.default = Get;
//# sourceMappingURL=get.js.map