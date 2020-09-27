export declare type CountryCode = 'AFG' | 'ALB' | 'DZA' | 'ASM' | 'AND' | 'AGO' | 'AIA' | 'ATA' | 'ATG' | 'ARG' | 'ARM' | 'ABW' | 'AUS' | 'AUT' | 'AZE' | 'BHS' | 'BHR' | 'BGD' | 'BRB' | 'BLR' | 'BEL' | 'BLZ' | 'BEN' | 'BMU' | 'BTN' | 'BOL' | 'BES' | 'BIH' | 'BWA' | 'BVT' | 'BRA' | 'IOT' | 'BRN' | 'BGR' | 'BFA' | 'BDI' | 'CPV' | 'KHM' | 'CMR' | 'CAN' | 'CYM' | 'CAF' | 'TCD' | 'CHL' | 'CHN' | 'CXR' | 'CCK' | 'COL' | 'COM' | 'COD' | 'COG' | 'COK' | 'CRI' | 'HRV' | 'CUB' | 'CUW' | 'CYP' | 'CZE' | 'CIV' | 'DNK' | 'DJI' | 'DMA' | 'DOM' | 'ECU' | 'EGY' | 'SLV' | 'GNQ' | 'ERI' | 'EST' | 'SWZ' | 'ETH' | 'FLK' | 'FRO' | 'FJI' | 'FIN' | 'FRA' | 'GUF' | 'PYF' | 'ATF' | 'GAB' | 'GMB' | 'GEO' | 'DEU' | 'GHA' | 'GIB' | 'GRC' | 'GRL' | 'GRD' | 'GLP' | 'GUM' | 'GTM' | 'GGY' | 'GIN' | 'GNB' | 'GUY' | 'HTI' | 'HMD' | 'VAT' | 'HND' | 'HKG' | 'HUN' | 'ISL' | 'IND' | 'IDN' | 'IRN' | 'IRQ' | 'IRL' | 'IMN' | 'ISR' | 'ITA' | 'JAM' | 'JPN' | 'JEY' | 'JOR' | 'KAZ' | 'KEN' | 'KIR' | 'PRK' | 'KOR' | 'KWT' | 'KGZ' | 'LAO' | 'LVA' | 'LBN' | 'LSO' | 'LBR' | 'LBY' | 'LIE' | 'LTU' | 'LUX' | 'MAC' | 'MDG' | 'MWI' | 'MYS' | 'MDV' | 'MLI' | 'MLT' | 'MHL' | 'MTQ' | 'MRT' | 'MUS' | 'MYT' | 'MEX' | 'FSM' | 'MDA' | 'MCO' | 'MNG' | 'MNE' | 'MSR' | 'MAR' | 'MOZ' | 'MMR' | 'NAM' | 'NRU' | 'NPL' | 'NLD' | 'NCL' | 'NZL' | 'NIC' | 'NER' | 'NGA' | 'NIU' | 'NFK' | 'MNP' | 'NOR' | 'OMN' | 'PAK' | 'PLW' | 'PSE' | 'PAN' | 'PNG' | 'PRY' | 'PER' | 'PHL' | 'PCN' | 'POL' | 'PRT' | 'PRI' | 'QAT' | 'MKD' | 'ROU' | 'RUS' | 'RWA' | 'REU' | 'BLM' | 'SHN' | 'KNA' | 'LCA' | 'MAF' | 'SPM' | 'VCT' | 'WSM' | 'SMR' | 'STP' | 'SAU' | 'SEN' | 'SRB' | 'SYC' | 'SLE' | 'SGP' | 'SXM' | 'SVK' | 'SVN' | 'SLB' | 'SOM' | 'ZAF' | 'SGS' | 'SSD' | 'ESP' | 'LKA' | 'SDN' | 'SUR' | 'SJM' | 'SWE' | 'CHE' | 'SYR' | 'TWN' | 'TJK' | 'TZA' | 'THA' | 'TLS' | 'TGO' | 'TKL' | 'TON' | 'TTO' | 'TUN' | 'TUR' | 'TKM' | 'TCA' | 'TUV' | 'UGA' | 'UKR' | 'ARE' | 'GBR' | 'UMI' | 'USA' | 'URY' | 'UZB' | 'VUT' | 'VEN' | 'VNM' | 'VGB' | 'VIR' | 'WLF' | 'ESH' | 'YEM' | 'ZMB' | 'ZWE' | 'ALA';
export declare type RatingCategory = 'std' | 'rpd' | 'blz';
export declare type FIDETitles = 'all_g' | 'g' | 'wg' | 'm' | 'wm' | 'f' | 'wf' | 'c' | 'wc';
export declare type OtherTitle = 'all_o' | 'FA' | 'IA' | 'FI' | 'FST' | 'DI' | 'IO';
declare const TitleDict: {
    titled: string;
    GM: string;
    WGM: string;
    IM: string;
    WIM: string;
    FM: string;
    CM: string;
    WCM: string;
};
export declare type Title = keyof typeof TitleDict;
export interface SearchConfig {
    search: string;
    search_rating: 'all' | RatingCategory;
    search_country: 'all' | CountryCode;
    search_title: 'all' | FIDETitles;
    search_other_title: 'all' | OtherTitle;
    search_year: undefined;
    search_low: number;
    search_high: number;
    search_inactive: 'off' | 'on';
    search_exrated: 'off' | 'on';
    search_radio: undefined;
    search_bday_start: 'all' | number;
    search_bday_end: 'all' | number;
    search_asc?: 'descending' | 'ascending';
    search_gender?: 'M' | 'F';
    simple: 1;
}
export interface SearchOptions {
    ratingCategory?: RatingCategory;
    country?: CountryCode;
    title?: Title;
    otherTitle?: OtherTitle;
    minRating?: number;
    maxRating?: number;
    inactive?: boolean;
    unrated?: boolean;
    bornAfter?: number;
    bornBefore?: number;
    gender?: 'M' | 'F';
    nb?: number;
}
export interface TableRow {
    [key: string]: string | number;
}
export declare type Table = TableRow[];
export interface SearchProfile {
    id: string;
    Name: string;
    Title: Title;
    Fed: CountryCode;
    'Std.': number | null;
    'Rpd.': number | null;
    'Blz.': number | null;
    'B-Year': number;
}
export {};
