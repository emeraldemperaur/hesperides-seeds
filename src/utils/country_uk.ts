export interface UKCountryData {
  name: string;
  capital: string;
  majorCities: string[];
  localAuthorities: string[]; 
  languages: string[];
}

export type UKDictionary = Record<string, UKCountryData>;

export const ukCountries: UKDictionary = {
  "ENGLAND": {
    name: "England",
    capital: "London",
    majorCities: ["London", "Birmingham", "Manchester", "Leeds", "Liverpool", "Newcastle", "Bristol", "Sheffield"],
    localAuthorities: ["Greater London", "Greater Manchester", "West Midlands", "West Yorkshire", "Merseyside", "Kent", "Essex", "Hampshire", "Surrey", "Lancashire", "Hertfordshire", "Cornwall"], 
    languages: ["English", "Cornish"]
  },
  "SCOTLAND": {
    name: "Scotland",
    capital: "Edinburgh",
    majorCities: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Inverness", "Stirling"],
    localAuthorities: ["Glasgow City", "City of Edinburgh", "Fife", "North Lanarkshire", "South Lanarkshire", "Highland", "Aberdeenshire", "West Lothian", "Renfrewshire", "Falkirk", "Dumfries and Galloway"],
    languages: ["English", "Scots", "Scottish Gaelic"]
  },
  "WALES": {
    name: "Wales (Cymru)",
    capital: "Cardiff",
    majorCities: ["Cardiff", "Swansea", "Newport", "Bangor", "St Asaph"],
    localAuthorities: ["Cardiff", "Swansea", "Rhondda Cynon Taf", "Carmarthenshire", "Caerphilly", "Flintshire", "Newport", "Pembrokeshire", "Powys", "Gwynedd"],
    languages: ["English", "Welsh (Cymraeg)"]
  },
  "NORTHERN_IRELAND": {
    name: "Northern Ireland",
    capital: "Belfast",
    majorCities: ["Belfast", "Derry (Londonderry)", "Lisburn", "Newry", "Armagh"],
    localAuthorities: ["Belfast", "Armagh City, Banbridge and Craigavon", "Newry, Mourne and Down", "Derry City and Strabane", "Antrim and Newtownabbey", "Mid and East Antrim", "Causeway Coast and Glens"],
    languages: ["English", "Irish", "Ulster Scots"]
  }
};

/**
 * Get United Kingdom constituent country by specified name
 */
export const getUKCountryByName = (name: string): UKCountryData | undefined => {
  const searchName = name.trim().toLowerCase();
  return Object.values(ukCountries).find(
    (country) => country.name.toLowerCase().includes(searchName)
  );
};

/**
 * Find United Kingdom country by a specified local authority/council name
 */
export const getCountryByAuthority = (authorityName: string): UKCountryData | undefined => {
  const searchAuthority = authorityName.trim().toLowerCase();
  return Object.values(ukCountries).find((country) =>
    country.localAuthorities.some((authority) => authority.toLowerCase().includes(searchAuthority))
  );
};

/**
 * Find United Kingdom country by a specified City name
 */
export const getCountryByCity = (cityName: string): UKCountryData | undefined => {
  const searchCity = cityName.trim().toLowerCase();
  return Object.values(ukCountries).find((country) =>
    country.majorCities.some((city) => city.toLowerCase().includes(searchCity))
  );
};

/**
 * Find * United Kigdom countries by a specified language
 */
export const getCountriesByLanguage = (language: string): UKCountryData[] => {
  const searchLang = language.trim().toLowerCase();
  return Object.values(ukCountries).filter((country) =>
    country.languages.some((language) => language.toLowerCase().includes(searchLang))
  );
};