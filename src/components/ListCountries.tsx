import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { country } from './../interfaces/country';

interface IProps {
    countries: Array<country>;
    setSelectedCountry: Function;
    filters: {
        language?: string;
        region?: string;
        currency?: string;
    };
    searchQuery: string;
}

const hasLanguage = (country: country, filterlanguage: string): boolean => {
    const { officialLanguages = [] } = country;
    let result = officialLanguages.find((oLanguage: { name: string }) => {
        return filterlanguage === oLanguage.name;
    });

    return result ? true : false;
};

const hasCurrency = (country: country, filterCurrency: string): boolean => {
    const { currencies = [] } = country;
    let result = currencies.find((currency: { name: string }) => {
        return filterCurrency === currency.name;
    });

    return result ? true : false;
};

const isRegion = (country: country, filterRegion: string): boolean => {
    let result;
    try {
        result = country.subregion.region.name === filterRegion;
    } catch (error) {
        result = false;
    }

    return result;
};

function ListCountries(props: IProps) {
    const {
        filters,
        setSelectedCountry,
        filters: { language = '', currency = '', region = '' },
        countries,
        searchQuery,
    } = props;
    const [filteredCountries, setFilteredCountries] = useState<Array<country>>(
        []
    );

    useEffect(() => {
        setFilteredCountries(filterCountries(countries));
    }, [filters, countries, searchQuery]);

    const filterCountries = (countries: Array<country>) => {
        if (!language && !region && !currency && !searchQuery) {
            return countries;
        }

        let byLanguage: Array<country> = [];
        let byRegion: Array<country> = [];
        let byCurrency: Array<country> = [];
        let byQuery: Array<country> = [];
        let toIntersect = [];

        countries.forEach((country: country) => {
            if (language && hasLanguage(country, language)) {
                byLanguage.push(country);
            }
            if (currency && hasCurrency(country, currency)) {
                byCurrency.push(country);
            }
            if (region && isRegion(country, region)) {
                byRegion.push(country);
            }
            if (
                searchQuery &&
                (country.name
                    .toLocaleLowerCase()
                    .startsWith(searchQuery.toLocaleLowerCase()) ||
                    country.alpha2Code
                        .toLocaleLowerCase()
                        .startsWith(searchQuery.toLocaleLowerCase()))
            ) {
                byQuery.push(country);
            }
        });

        if (language) toIntersect.push(byLanguage);
        if (region) toIntersect.push(byRegion);
        if (currency) toIntersect.push(byCurrency);
        if (searchQuery) toIntersect.push(byQuery);

        let result = _.intersection(...toIntersect);

        return result;
    };

    const Countries = () =>
        filteredCountries.map((country: country, index: number) => {
            return (
                <Link
                    to={`/country/${country.alpha2Code.toLocaleLowerCase()}`}
                    key={index}
                    onClick={() => setSelectedCountry(country)}
                >
                    <span>{country.name}</span>
                </Link>
            );
        });

    return <>{Countries()}</>;
}

export default ListCountries;

