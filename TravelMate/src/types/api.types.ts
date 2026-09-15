export interface Language {
    id: number;
    code: string;
    name: string;
}

export interface LocalizedInfo {
    id: number;
    languageId: number;
    name: string;
    description: string;
    language: Language;
}

export interface TravelItem {
    id: number;
    image: string;
    infos: LocalizedInfo[];
}

export interface Country extends TravelItem {
    code: string;
}

export interface City extends TravelItem {
    countryId: number;
    slug: string;
}

export interface Attraction extends TravelItem {
    cityId: number;
    slug: string;
    latitude: string;
    longitude: string;
    address: string;
    website: string;
}