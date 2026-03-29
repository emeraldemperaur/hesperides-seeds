export type AustralianRegionType = 'State' | 'Territory';

export interface AustralianStateData {
  name: string;
  abbreviation: string;
  type: AustralianRegionType;
  capital: string;
  majorCities: string[];
  lgas: string[];
  languages: string[];
}

export type AustraliaDictionary = Record<string, AustralianStateData>;

export const australiaStates: AustraliaDictionary = {
  "NEW_SOUTH_WALES": {
    name: "New South Wales",
    abbreviation: "NSW",
    type: "State",
    capital: "Sydney",
    majorCities: ["Sydney", "Newcastle", "Wollongong", "Central Coast", "Maitland"],
    lgas: ["City of Sydney", "Canterbury-Bankstown", "Blacktown City", "Inner West", "Northern Beaches", "City of Parramatta", "Sutherland Shire"],
    languages: ["English", "Mandarin", "Arabic", "Cantonese", "Vietnamese"]
  },
  "VICTORIA": {
    name: "Victoria",
    abbreviation: "VIC",
    type: "State",
    capital: "Melbourne",
    majorCities: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"],
    lgas: ["City of Melbourne", "City of Casey", "Greater Dandenong", "City of Wyndham", "City of Boroondara", "City of Monash", "Greater Geelong"],
    languages: ["English", "Mandarin", "Italian", "Greek", "Vietnamese"]
  },
  "QUEENSLAND": {
    name: "Queensland",
    abbreviation: "QLD",
    type: "State",
    capital: "Brisbane",
    majorCities: ["Brisbane", "Gold Coast", "Sunshine Coast", "Townsville", "Cairns"],
    lgas: ["Brisbane City", "Gold Coast City", "Moreton Bay Region", "Logan City", "Sunshine Coast Region", "Townsville City"],
    languages: ["English", "Mandarin", "Vietnamese", "Samoan"]
  },
  "WESTERN_AUSTRALIA": {
    name: "Western Australia",
    abbreviation: "WA",
    type: "State",
    capital: "Perth",
    majorCities: ["Perth", "Mandurah", "Bunbury", "Geraldton", "Kalgoorlie-Boulder"],
    lgas: ["City of Stirling", "City of Joondalup", "City of Wanneroo", "City of Swan", "City of Gosnells", "City of Perth"],
    languages: ["English", "Mandarin", "Italian", "Vietnamese"]
  },
  "SOUTH_AUSTRALIA": {
    name: "South Australia",
    abbreviation: "SA",
    type: "State",
    capital: "Adelaide",
    majorCities: ["Adelaide", "Mount Gambier", "Gawler", "Whyalla", "Murray Bridge"],
    lgas: ["City of Adelaide", "City of Onkaparinga", "City of Salisbury", "City of Port Adelaide Enfield", "City of Marion", "City of Charles Sturt"],
    languages: ["English", "Italian", "Mandarin", "Greek", "Vietnamese"]
  },
  "TASMANIA": {
    name: "Tasmania",
    abbreviation: "TAS",
    type: "State",
    capital: "Hobart",
    majorCities: ["Hobart", "Launceston", "Devonport", "Burnie"],
    lgas: ["City of Hobart", "City of Launceston", "Clarence City", "Glenorchy City", "Kingborough", "Meander Valley"],
    languages: ["English", "Mandarin", "Nepali"]
  },
  "AUSTRALIAN_CAPITAL_TERRITORY": {
    name: "Australian Capital Territory",
    abbreviation: "ACT",
    type: "Territory",
    capital: "Canberra",
    majorCities: ["Canberra"],
    lgas: ["Unincorporated (ACT Government)"],
    languages: ["English", "Mandarin", "Vietnamese", "Punjabi"]
  },
  "NORTHERN_TERRITORY": {
    name: "Northern Territory",
    abbreviation: "NT",
    type: "Territory",
    capital: "Darwin",
    majorCities: ["Darwin", "Palmerston", "Alice Springs", "Katherine"],
    lgas: ["City of Darwin", "City of Palmerston", "Alice Springs Town", "Litchfield Municipality", "Barkly Region", "East Arnhem Region"],
    languages: ["English", "Kriol", "Djambarrpuyngu", "Warlpiri", "Murrinh-patha"]
  }
};

/**
 * Get Australian state/territory by specified name
 */
export const getRegionByName = (name: string): AustralianStateData | undefined => {
  const searchName = name.trim().toLowerCase();
  return Object.values(australiaStates).find(
    (region) => region.name.toLowerCase() === searchName
  );
};

/**
 * Get Australian state/territory by Abbreviation
 * 
 * e.g. `QLD`, `qld`, `NSW`
 */
export const getRegionByAbbreviation = (abbr: string): AustralianStateData | undefined => {
  const searchAbbr = abbr.trim().toUpperCase();
  return Object.values(australiaStates).find(
    (region) => region.abbreviation === searchAbbr
  );
};

/**
 * Filter Australian regions by Type: `State` OR `Territory`
 */
export const getRegionsByType = (type: AustralianRegionType): AustralianStateData[] => {
  return Object.values(australiaStates).filter((region) => region.type === type);
};

/**
 * Find Australian state by specified LGA (Local Government Area)
 */
export const getRegionByLga = (lgaName: string): AustralianStateData | undefined => {
  const searchLga = lgaName.trim().toLowerCase();
  return Object.values(australiaStates).find((region) =>
    region.lgas.some((lga) => lga.toLowerCase().includes(searchLga))
  );
};

/**
 * Get flat array of * 8 Australian State/Territory Abbreviations
 * 
 * Returns: ["ACT", "NSW", "NT", "QLD", "SA", "TAS", "VIC", "WA"]
 */
export const getAllAbbreviations = (): string[] => {
  return Object.values(australiaStates)
    .map(region => region.abbreviation)
    .sort((a, b) => a.localeCompare(b));
};