"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var config_json_1 = require("../config.json");
var axios = axios_1.default.create({
    baseURL: config_json_1.base
});
function GET(options) {
    options = Object.assign(options, {
        method: 'GET',
        timeout: 5000
    });
    var x = axios(options)
        .catch(function (e) {
        console.error(e);
        throw e;
    });
    if (options.responseType === 'stream')
        return x;
    else
        return x.then(function (res) { return res.data; });
}
exports.GET = GET;
function POST(options) {
    options = Object.assign(options, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return axios(options)
        .then(function (res) { return res.data; })
        .catch(function (e) {
        throw e;
    });
}
exports.POST = POST;
//# sourceMappingURL=requests.js.map