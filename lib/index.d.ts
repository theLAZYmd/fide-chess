import { SearchOptions, SearchProfile } from './interfaces';
export default class FIDE {
    static search(searchstring: string, options?: SearchOptions): Promise<SearchProfile[]>;
}
export * from './interfaces';
