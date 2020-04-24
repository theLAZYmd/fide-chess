import { SearchOptions } from './interfaces';
export default class FIDE {
    static search(searchstring: string, options?: SearchOptions): Promise<import("./interfaces").TableRow[]>;
}
