export interface country {
    name: string;
    alpha2Code: string;
    officialLanguages: [];
    currencies: [];
    subregion: {
        name: string;
        region: {
            name: string;
        };
    };
    [x: string]: any;
};