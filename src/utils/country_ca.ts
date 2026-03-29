export type CanadianRegionType = 'Province' | 'Territory';

export interface CanadianProvinceData {
  name: string;
  type: CanadianRegionType;
  capital: string;
  majorCities: string[];
  municipalities: string[]; 
  languages: string[];
}

export type CanadaDictionary = Record<string, CanadianProvinceData>;

export const canadaProvinces: CanadaDictionary = {
  "ALBERTA": {
    name: "Alberta",
    type: "Province",
    capital: "Edmonton",
    majorCities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert"],
    municipalities: ["Wood Buffalo", "Strathcona County", "Rocky View County", "Parkland County", "Leduc County", "Sturgeon County"],
    languages: ["English"]
  },
  "BRITISH_COLUMBIA": {
    name: "British Columbia",
    type: "Province",
    capital: "Victoria",
    majorCities: ["Vancouver", "Surrey", "Burnaby", "Richmond", "Kelowna", "Victoria"],
    municipalities: ["Metro Vancouver", "Capital Regional District", "Fraser Valley", "Central Okanagan", "Nanaimo", "Thompson-Nicola"],
    languages: ["English"]
  },
  "MANITOBA": {
    name: "Manitoba",
    type: "Province",
    capital: "Winnipeg",
    majorCities: ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie"],
    municipalities: ["Springfield", "Hanover", "Macdonald", "Taché", "Ritchot", "St. Clements"],
    languages: ["English", "French", "Cree", "Ojibwe"]
  },
  "NEW_BRUNSWICK": {
    name: "New Brunswick",
    type: "Province",
    capital: "Fredericton",
    majorCities: ["Moncton", "Saint John", "Fredericton", "Dieppe", "Miramichi"],
    municipalities: ["Gloucester", "Westmorland", "Kings", "Restigouche", "Madawaska", "Charlotte"],
    languages: ["English", "French"]
  },
  "NEWFOUNDLAND_AND_LABRADOR": {
    name: "Newfoundland and Labrador",
    type: "Province",
    capital: "St. John's",
    majorCities: ["St. John's", "Conception Bay South", "Mount Pearl", "Paradise", "Corner Brook"],
    municipalities: ["Avalon", "Burin Peninsula", "Kittiwake Coast", "Labrador", "Gander", "Grand Falls-Windsor"],
    languages: ["English", "Inuktitut", "Innu-aimun"]
  },
  "NOVA_SCOTIA": {
    name: "Nova Scotia",
    type: "Province",
    capital: "Halifax",
    majorCities: ["Halifax", "Sydney", "Dartmouth", "Truro", "New Glasgow"],
    municipalities: ["Halifax Regional Municipality", "Cape Breton", "Kings", "Colchester", "Lunenburg", "Pictou"],
    languages: ["English", "French", "Mi'kmaq"]
  },
  "ONTARIO": {
    name: "Ontario",
    type: "Province",
    capital: "Toronto",
    majorCities: ["Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton", "London"],
    municipalities: ["Peel Region", "York Region", "Durham Region", "Halton Region", "Niagara Region", "Waterloo Region"],
    languages: ["English", "French"]
  },
  "PRINCE_EDWARD_ISLAND": {
    name: "Prince Edward Island",
    type: "Province",
    capital: "Charlottetown",
    majorCities: ["Charlottetown", "Summerside", "Stratford", "Cornwall", "Montague"],
    municipalities: ["Queens County", "Prince County", "Kings County"],
    languages: ["English", "French"]
  },
  "QUEBEC": {
    name: "Quebec",
    type: "Province",
    capital: "Quebec City",
    majorCities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke"],
    municipalities: ["Montréal", "Capitale-Nationale", "Laval", "Outaouais", "Montérégie", "Laurentides", "Lanaudière"],
    languages: ["French", "English", "Inuktitut", "Cree"]
  },
  "SASKATCHEWAN": {
    name: "Saskatchewan",
    type: "Province",
    capital: "Regina",
    majorCities: ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Swift Current"],
    municipalities: ["Corman Park", "Edenwold", "Sherwood", "Buckland", "Vanscoy", "Prince Albert RM"],
    languages: ["English", "Cree", "Michif"]
  },
  "NORTHWEST_TERRITORIES": {
    name: "Northwest Territories",
    type: "Territory",
    capital: "Yellowknife",
    majorCities: ["Yellowknife", "Hay River", "Inuvik", "Fort Smith"],
    municipalities: ["Dehcho", "Inuvik Region", "North Slave", "Sahtu", "South Slave"],
    languages: ["English", "French", "Chipewyan", "Cree", "Tłı̨chǫ", "Inuinnaqtun", "Inuktitut", "Inuvialuktun", "North Slavey", "South Slavey", "Gwich'in"]
  },
  "NUNAVUT": {
    name: "Nunavut",
    type: "Territory",
    capital: "Iqaluit",
    majorCities: ["Iqaluit", "Rankin Inlet", "Arviat", "Baker Lake"],
    municipalities: ["Qikiqtaaluk", "Kivalliq", "Kitikmeot"],
    languages: ["Inuktitut", "Inuinnaqtun", "English", "French"]
  },
  "YUKON": {
    name: "Yukon",
    type: "Territory",
    capital: "Whitehorse",
    majorCities: ["Whitehorse", "Dawson City", "Watson Lake", "Haines Junction"],
    municipalities: ["Whitehorse", "Klondike", "Kluane", "Mount Lorne-Southern Lakes", "Vuntut Gwitchin"],
    languages: ["English", "French", "Gwich'in", "Hän", "Kaska", "Northern Tutchone", "Southern Tutchone", "Tlingit", "Upper Tanana"]
  }
};

/**
 * Get Canadian province/territory by name
 */
export const getProvinceByName = (name: string): CanadianProvinceData | undefined => {
  const searchName = name.trim().toLowerCase();
  return Object.values(canadaProvinces).find(
    (region) => region.name.toLowerCase() === searchName
  );
};

/**
 * Filter Canadian Regions by Type: Get only 'Province' OR 'Territory'
 */
export const getRegionsByType = (type: CanadianRegionType): CanadianProvinceData[] => {
  return Object.values(canadaProvinces).filter((region) => region.type === type);
};

/**
 * Find Canadian province/territory by specific City name
 */
export const getProvinceByCity = (cityName: string): CanadianProvinceData | undefined => {
  const searchCity = cityName.trim().toLowerCase();
  return Object.values(canadaProvinces).find((region) =>
    region.majorCities.some((city) => city.toLowerCase() === searchCity)
  );
};

/**
 * Find * Canadian provinces/territories by specified language
 */
export const getProvincesByLanguage = (language: string): CanadianProvinceData[] => {
  const searchLang = language.trim().toLowerCase();
  return Object.values(canadaProvinces).filter((region) =>
    region.languages.some((lang) => lang.toLowerCase() === searchLang)
  );
};

/**
 * Get flat array of * 13 Canadian Province and Territory names
 */
export const getAllProvinceNames = (): string[] => {
  return Object.values(canadaProvinces)
    .map(region => region.name)
    .sort((a, b) => a.localeCompare(b));
};