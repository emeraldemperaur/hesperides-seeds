import { australiaStates } from "./country_au";
import { canadaProvinces } from "./country_ca";
import { franceRegions } from "./country_fr";
import { italyRegions } from "./country_it";
import { monacoWards } from "./country_mc";
import { nigeriaStates } from "./country_ng";
import { ukCountries } from "./country_uk";
import { usStates } from "./country_us";

export type SubdivisionTier = 
  | 'State' 
  | 'Province' 
  | 'Territory' 
  | 'Region' 
  | 'Constituent Country' 
  | 'Ward' 
  | 'Federal Capital Territory'
  | 'Unknown';

export interface GlobalSubdivision {
  /**
  * Unique global key 
  * 
  * e.g. "US-CA", "FR-NORMANDY"
  */
  id: string;
  /**
  * ISO Alpha-2 code 
  * 
  * e.g. "US", "NG", "FR"
  */
  countryCode: string;
  /**
  * Country name 
  * 
  * e.g. "Italy", "France", "Nigeria"
  */
  name: string;
  /**  
  * Subdivision Tier 
  * 
  * e.g. "State", "Province", "Territory", "Region", "Constituent Country", "Ward", "Federal Capital Territory", "Unknown"
  */
  type: SubdivisionTier;
  /**  
  * Country abbreviation 
  * 
  * e.g. `US`, `CA`, `AU` 
  */
  abbreviation?: string;
  /**  
  * Country capital city 
  */
  capital: string;
  /**  
  * Country major cities
  */
  majorCities: string[];
  /**  
  * Country local sub divisions.
  * 
  * i.e. LGAs, Departments, Counties, and Landmarks
  */
  localSubdivisions: string[];
  /**  
  * Country languages
  */
  languages: string[];
}

/**
 * Maps United State's 50 States, Cities, Counties and Local Municipalities
 */
export const adaptUSStates = (): GlobalSubdivision[] => {
  return Object.entries(usStates).map(([key, data]) => ({
    id: `US-${key}`,
    countryCode: "US",
    name: data.name,
    type: key === "DISTRICT_OF_COLUMBIA" ? 'Federal Capital Territory' : 'State',
    abbreviation: data.abbreviation,
    capital: data.capital,
    majorCities: data.majorCities,
    localSubdivisions: data.municipalities,
    languages: data.languages
  }));
};

/**
 * Maps France's 18 Regions and respective Départements
 */
export const adaptFranceRegions = (): GlobalSubdivision[] => {
  return Object.entries(franceRegions).map(([key, data]) => ({
    id: `FR-${key}`,
    countryCode: "FR",
    name: data.name,
    type: 'Region',
    capital: data.capital,
    majorCities: data.majorCities,
    localSubdivisions: data.departments,
    languages: data.languages
  }));
};

/**
 * Maps Monaco's 9 Quartiers or Wards
 */
export const adaptMonacoWards = (): GlobalSubdivision[] => {
  return Object.entries(monacoWards).map(([key, data]) => ({
    id: `MC-${key}`,
    countryCode: "MC",
    name: data.name,
    type: data.type as SubdivisionTier,
    capital: data.capital,
    majorCities: [data.city],
    localSubdivisions: data.landmarks, 
    languages: data.languages
  }));
};

/**
 * Maps Nigeria's 36 States, Cities and Local Government Areas
 */
export const adaptNigeriaStates = (): GlobalSubdivision[] => {
  return Object.entries(nigeriaStates).map(([key, data]) => ({
    id: `NG-${key}`,
    countryCode: "NG",
    name: data.name,
    type: key === "FCT" ? 'Federal Capital Territory' : 'State',
    capital: data.capital,
    majorCities: data.majorCities,
    localSubdivisions: data.lgas,
    languages: data.languages
  }));
};

/**
 * Maps Italy's 20 Regions and their Provinces/Metropolitan Cities
 */
export const adaptItalyRegions = (): GlobalSubdivision[] => {
  return Object.entries(italyRegions).map(([key, data]) => ({
    id: `IT-${key}`,
    countryCode: "IT",
    name: data.name,
    type: 'Region',
    capital: data.capital,
    majorCities: data.majorCities,
    localSubdivisions: data.provinces,
    languages: data.languages
  }));
};

/**
 * Maps Canada's 10 Provinces and 3 Territories
 */
export const adaptCanadaProvinces = (): GlobalSubdivision[] => {
  return Object.entries(canadaProvinces).map(([key, data]) => ({
    id: `CA-${key}`,
    countryCode: "CA",
    name: data.name,
    type: data.type,
    capital: data.capital,
    majorCities: data.majorCities,
    localSubdivisions: data.municipalities,
    languages: data.languages
  }));
};

/**
 * Maps Australia's 6 States and 2 Territories
 */
export const adaptAustraliaStates = (): GlobalSubdivision[] => {
  return Object.entries(australiaStates).map(([key, data]) => ({
    id: `AU-${key}`,
    countryCode: "AU",
    name: data.name,
    type: data.type,
    abbreviation: data.abbreviation,
    capital: data.capital,
    majorCities: data.majorCities,
    localSubdivisions: data.lgas,
    languages: data.languages
  }));
};

/**
 * Maps UK's 4 Constituent Countries
 */
export const adaptUKCountries = (): GlobalSubdivision[] => {
  return Object.entries(ukCountries).map(([key, data]) => ({
    id: `GB-${key}`,
    countryCode: "GB", 
    name: data.name,
    type: 'Constituent Country',
    capital: data.capital,
    majorCities: data.majorCities,
    localSubdivisions: data.localAuthorities,
    languages: data.languages
  }));
};

export const globalSubdivisions: GlobalSubdivision[] = [
  ...adaptUSStates(),
  ...adaptFranceRegions(),
  ...adaptMonacoWards(),
  ...adaptNigeriaStates(),
  ...adaptItalyRegions(),
  ...adaptCanadaProvinces(),
  ...adaptAustraliaStates(),
  ...adaptUKCountries()
];

/**
 * Get * subdivisions for a specified country code
 */
export const getSubdivisionsByCountry = (countryCode: string): GlobalSubdivision[] => {
  return globalSubdivisions.filter(sub => sub.countryCode === countryCode.toUpperCase());
};

/**
 * Get local options for a specific Subdivision
 * 
 * Input `global ID` to get all subdivisions.
 * 
 * e.g. "FR-NORMANDY"
 */
export const getLocalOptionsBySubdivisionId = (id: string): string[] => {
  const subdivision = globalSubdivisions.find(sub => sub.id === id);
  return subdivision ? subdivision.localSubdivisions : [];
};

/**
 * Get * global regions by specified language.
 */
export const getGlobalRegionsByLanguage = (language: string): GlobalSubdivision[] => {
  const searchLang = language.trim().toLowerCase();
  return globalSubdivisions.filter(sub => 
    sub.languages.some(lang => lang.toLowerCase().includes(searchLang))
  );
};