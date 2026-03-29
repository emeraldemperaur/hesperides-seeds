export interface ItalianRegionData {
  name: string;
  capital: string;
  majorCities: string[];
  provinces: string[]; 
  languages: string[];
}

export type ItalyDictionary = Record<string, ItalianRegionData>;

export const italyRegions: ItalyDictionary = {
  "ABRUZZO": {
    name: "Abruzzo",
    capital: "L'Aquila",
    majorCities: ["Pescara", "L'Aquila", "Teramo", "Chieti", "Avezzano"],
    provinces: ["Chieti", "L'Aquila", "Pescara", "Teramo"],
    languages: ["Italian", "Neapolitan (Abruzzese)"]
  },
  "AOSTA_VALLEY": {
    name: "Aosta Valley (Valle d'Aosta)",
    capital: "Aosta",
    majorCities: ["Aosta", "Saint-Vincent", "Chatillon"],
    provinces: ["Aosta"],
    languages: ["Italian", "French", "Arpitan (Valdôtain)"]
  },
  "APULIA": {
    name: "Apulia (Puglia)",
    capital: "Bari",
    majorCities: ["Bari", "Taranto", "Foggia", "Andria", "Lecce", "Brindisi"],
    provinces: ["Bari", "Barletta-Andria-Trani", "Brindisi", "Foggia", "Lecce", "Taranto"],
    languages: ["Italian", "Neapolitan", "Sicilian (Tarantino, Salentino)", "Griko"]
  },
  "BASILICATA": {
    name: "Basilicata",
    capital: "Potenza",
    majorCities: ["Potenza", "Matera", "Melfi", "Policoro"],
    provinces: ["Matera", "Potenza"],
    languages: ["Italian", "Neapolitan"]
  },
  "CALABRIA": {
    name: "Calabria",
    capital: "Catanzaro",
    majorCities: ["Reggio Calabria", "Catanzaro", "Corigliano-Rossano", "Lamezia Terme", "Cosenza"],
    provinces: ["Catanzaro", "Cosenza", "Crotone", "Reggio Calabria", "Vibo Valentia"],
    languages: ["Italian", "Neapolitan", "Sicilian", "Griko"]
  },
  "CAMPANIA": {
    name: "Campania",
    capital: "Naples (Napoli)",
    majorCities: ["Naples", "Salerno", "Giugliano in Campania", "Torre del Greco", "Pozzuoli"],
    provinces: ["Avellino", "Benevento", "Caserta", "Naples", "Salerno"],
    languages: ["Italian", "Neapolitan"]
  },
  "EMILIA_ROMAGNA": {
    name: "Emilia-Romagna",
    capital: "Bologna",
    majorCities: ["Bologna", "Parma", "Modena", "Reggio Emilia", "Ravenna", "Rimini"],
    provinces: ["Bologna", "Ferrara", "Forlì-Cesena", "Modena", "Parma", "Piacenza", "Ravenna", "Reggio Emilia", "Rimini"],
    languages: ["Italian", "Emilian", "Romagnol"]
  },
  "FRIULI_VENEZIA_GIULIA": {
    name: "Friuli-Venezia Giulia",
    capital: "Trieste",
    majorCities: ["Trieste", "Udine", "Pordenone", "Gorizia"],
    provinces: ["Gorizia", "Pordenone", "Trieste", "Udine"],
    languages: ["Italian", "Friulian", "Slovene", "German"]
  },
  "LAZIO": {
    name: "Lazio",
    capital: "Rome (Roma)",
    majorCities: ["Rome", "Latina", "Guidonia Montecelio", "Fiumicino", "Viterbo"],
    provinces: ["Frosinone", "Latina", "Rieti", "Rome", "Viterbo"],
    languages: ["Italian", "Romanesco"]
  },
  "LIGURIA": {
    name: "Liguria",
    capital: "Genoa (Genova)",
    majorCities: ["Genoa", "La Spezia", "Savona", "Sanremo", "Imperia"],
    provinces: ["Genoa", "Imperia", "La Spezia", "Savona"],
    languages: ["Italian", "Ligurian"]
  },
  "LOMBARDY": {
    name: "Lombardy (Lombardia)",
    capital: "Milan (Milano)",
    majorCities: ["Milan", "Brescia", "Monza", "Bergamo", "Como", "Varese"],
    provinces: ["Bergamo", "Brescia", "Como", "Cremona", "Lecco", "Lodi", "Mantua", "Milan", "Monza and Brianza", "Pavia", "Sondrio", "Varese"],
    languages: ["Italian", "Lombard"]
  },
  "MARCHE": {
    name: "Marche",
    capital: "Ancona",
    majorCities: ["Ancona", "Pesaro", "Fano", "Ascoli Piceno", "San Benedetto del Tronto"],
    provinces: ["Ancona", "Ascoli Piceno", "Fermo", "Macerata", "Pesaro and Urbino"],
    languages: ["Italian"]
  },
  "MOLISE": {
    name: "Molise",
    capital: "Campobasso",
    majorCities: ["Campobasso", "Termoli", "Isernia", "Venafro"],
    provinces: ["Campobasso", "Isernia"],
    languages: ["Italian", "Neapolitan", "Molise Croatian", "Arbëreshë"]
  },
  "PIEDMONT": {
    name: "Piedmont (Piemonte)",
    capital: "Turin (Torino)",
    majorCities: ["Turin", "Novara", "Alessandria", "Asti", "Moncalieri", "Cuneo"],
    provinces: ["Alessandria", "Asti", "Biella", "Cuneo", "Novara", "Turin", "Verbano-Cusio-Ossola", "Vercelli"],
    languages: ["Italian", "Piedmontese", "Occitan", "Arpitan"]
  },
  "SARDINIA": {
    name: "Sardinia (Sardegna)",
    capital: "Cagliari",
    majorCities: ["Cagliari", "Sassari", "Quartu Sant'Elena", "Olbia", "Alghero"],
    provinces: ["Cagliari", "Nuoro", "Oristano", "Sassari", "South Sardinia"],
    languages: ["Italian", "Sardinian", "Corsican (Gallurese)", "Sassarese", "Catalan"]
  },
  "SICILY": {
    name: "Sicily (Sicilia)",
    capital: "Palermo",
    majorCities: ["Palermo", "Catania", "Messina", "Syracuse", "Marsala", "Ragusa"],
    provinces: ["Agrigento", "Caltanissetta", "Catania", "Enna", "Messina", "Palermo", "Ragusa", "Syracuse", "Trapani"],
    languages: ["Italian", "Sicilian"]
  },
  "TRENTINO_ALTO_ADIGE": {
    name: "Trentino-Alto Adige/Südtirol",
    capital: "Trento",
    majorCities: ["Trento", "Bolzano", "Merano", "Rovereto"],
    provinces: ["Bolzano", "Trento"],
    languages: ["Italian", "German", "Ladin"]
  },
  "TUSCANY": {
    name: "Tuscany (Toscana)",
    capital: "Florence (Firenze)",
    majorCities: ["Florence", "Prato", "Livorno", "Arezzo", "Pistoia", "Pisa", "Lucca"],
    provinces: ["Arezzo", "Florence", "Grosseto", "Livorno", "Lucca", "Massa and Carrara", "Pisa", "Pistoia", "Prato", "Siena"],
    languages: ["Italian"]
  },
  "UMBRIA": {
    name: "Umbria",
    capital: "Perugia",
    majorCities: ["Perugia", "Terni", "Foligno", "Città di Castello", "Spoleto"],
    provinces: ["Perugia", "Terni"],
    languages: ["Italian"]
  },
  "VENETO": {
    name: "Veneto",
    capital: "Venice (Venezia)",
    majorCities: ["Venice", "Verona", "Padua", "Vicenza", "Treviso"],
    provinces: ["Belluno", "Padua", "Rovigo", "Treviso", "Venice", "Verona", "Vicenza"],
    languages: ["Italian", "Venetian"]
  }
};

/**
 * Get Italian region by specified name(s) 
 * 
 * e.g. 'Piedmont' or 'Piemonte'
 */
export const getRegionByName = (name: string): ItalianRegionData | undefined => {
  const searchName = name.trim().toLowerCase();
  return Object.values(italyRegions).find(
    (region) => region.name.toLowerCase().includes(searchName)
  );
};

/**
 * Find Italian region by specified Province name
 */
export const getRegionByProvince = (provinceName: string): ItalianRegionData | undefined => {
  const searchProvince = provinceName.trim().toLowerCase();
  return Object.values(italyRegions).find((region) =>
    region.provinces.some((prov) => prov.toLowerCase().includes(searchProvince))
  );
};

/**
 * Find Italian region by specific Metropolitan City name
 */
export const getRegionByCity = (cityName: string): ItalianRegionData | undefined => {
  const searchCity = cityName.trim().toLowerCase();
  return Object.values(italyRegions).find((region) =>
    region.majorCities.some((city) => city.toLowerCase().includes(searchCity))
  );
};

/**
 * 4. Find * Italian regions by specified language
 */
export const getRegionsByLanguage = (language: string): ItalianRegionData[] => {
  const searchLang = language.trim().toLowerCase();
  return Object.values(italyRegions).filter((region) =>
    region.languages.some((lang) => lang.toLowerCase().includes(searchLang))
  );
};

/**
 * Get flat list of * 107 Italian Provinces
 */
export const getAllProvinces = (): string[] => {
  const allProvinces = Object.values(italyRegions).flatMap((region) => region.provinces);
  return Array.from(new Set(allProvinces)).sort((a, b) => a.localeCompare(b));
};