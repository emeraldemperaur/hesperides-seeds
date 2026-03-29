export interface FrenchRegionData {
  name: string;
  capital: string;
  majorCities: string[];
  departments: string[]; 
  languages: string[];
}

export type FranceDictionary = Record<string, FrenchRegionData>;

export const franceRegions: FranceDictionary = {
  "AUVERGNE_RHONE_ALPES": {
    name: "Auvergne-Rhône-Alpes",
    capital: "Lyon",
    majorCities: ["Lyon", "Grenoble", "Saint-Étienne", "Clermont-Ferrand", "Annecy"],
    departments: ["Ain", "Allier", "Ardèche", "Cantal", "Drôme", "Isère", "Loire", "Haute-Loire", "Puy-de-Dôme", "Rhône", "Métropole de Lyon", "Savoie", "Haute-Savoie"],
    languages: ["French", "Arpitan (Franco-Provençal)", "Occitan"]
  },
  "BOURGOGNE_FRANCHE_COMTE": {
    name: "Bourgogne-Franche-Comté",
    capital: "Dijon",
    majorCities: ["Dijon", "Besançon", "Belfort", "Chalon-sur-Saône", "Nevers"],
    departments: ["Côte-d'Or", "Doubs", "Jura", "Nièvre", "Haute-Saône", "Saône-et-Loire", "Yonne", "Territoire de Belfort"],
    languages: ["French", "Franc-Comtois", "Burgundian"]
  },
  "BRITTANY": {
    name: "Brittany (Bretagne)",
    capital: "Rennes",
    majorCities: ["Rennes", "Brest", "Quimper", "Lorient", "Vannes"],
    departments: ["Côtes-d'Armor", "Finistère", "Ille-et-Vilaine", "Morbihan"],
    languages: ["French", "Breton", "Gallo"]
  },
  "CENTRE_VAL_DE_LOIRE": {
    name: "Centre-Val de Loire",
    capital: "Orléans",
    majorCities: ["Orléans", "Tours", "Bourges", "Blois", "Châteauroux"],
    departments: ["Cher", "Eure-et-Loir", "Indre", "Indre-et-Loire", "Loir-et-Cher", "Loiret"],
    languages: ["French"]
  },
  "CORSICA": {
    name: "Corsica (Corse)",
    capital: "Ajaccio",
    majorCities: ["Ajaccio", "Bastia", "Porto-Vecchio", "Corte"],
    departments: ["Corse-du-Sud", "Haute-Corse"],
    languages: ["French", "Corsican"]
  },
  "GRAND_EST": {
    name: "Grand Est",
    capital: "Strasbourg",
    majorCities: ["Strasbourg", "Reims", "Metz", "Nancy", "Mulhouse"],
    departments: ["Ardennes", "Aube", "Marne", "Haute-Marne", "Meurthe-et-Moselle", "Meuse", "Moselle", "Bas-Rhin", "Haut-Rhin", "Vosges"],
    languages: ["French", "Alsatian", "Lorraine Franconian", "Champenois"]
  },
  "HAUTS_DE_FRANCE": {
    name: "Hauts-de-France",
    capital: "Lille",
    majorCities: ["Lille", "Amiens", "Roubaix", "Tourcoing", "Calais"],
    departments: ["Aisne", "Nord", "Oise", "Pas-de-Calais", "Somme"],
    languages: ["French", "Picard", "West Flemish"]
  },
  "ILE_DE_FRANCE": {
    name: "Île-de-France",
    capital: "Paris",
    majorCities: ["Paris", "Boulogne-Billancourt", "Saint-Denis", "Versailles", "Argenteuil"],
    departments: ["Paris", "Seine-et-Marne", "Yvelines", "Essonne", "Hauts-de-Seine", "Seine-Saint-Denis", "Val-de-Marne", "Val-d'Oise"],
    languages: ["French"]
  },
  "NORMANDY": {
    name: "Normandy (Normandie)",
    capital: "Rouen",
    majorCities: ["Rouen", "Caen", "Le Havre", "Cherbourg", "Évreux"],
    departments: ["Calvados", "Eure", "Manche", "Orne", "Seine-Maritime"],
    languages: ["French", "Norman"]
  },
  "NOUVELLE_AQUITAINE": {
    name: "Nouvelle-Aquitaine",
    capital: "Bordeaux",
    majorCities: ["Bordeaux", "Limoges", "Poitiers", "Pau", "La Rochelle"],
    departments: ["Charente", "Charente-Maritime", "Corrèze", "Creuse", "Dordogne", "Gironde", "Landes", "Lot-et-Garonne", "Pyrénées-Atlantiques", "Deux-Sèvres", "Vienne", "Haute-Vienne"],
    languages: ["French", "Occitan", "Basque", "Poitevin-Saintongeais"]
  },
  "OCCITANIE": {
    name: "Occitanie",
    capital: "Toulouse",
    majorCities: ["Toulouse", "Montpellier", "Nîmes", "Perpignan", "Béziers"],
    departments: ["Ariège", "Aude", "Aveyron", "Gard", "Haute-Garonne", "Gers", "Hérault", "Lot", "Lozère", "Hautes-Pyrénées", "Pyrénées-Orientales", "Tarn", "Tarn-et-Garonne"],
    languages: ["French", "Occitan", "Catalan"]
  },
  "PAYS_DE_LA_LOIRE": {
    name: "Pays de la Loire",
    capital: "Nantes",
    majorCities: ["Nantes", "Angers", "Le Mans", "Saint-Nazaire", "Cholet"],
    departments: ["Loire-Atlantique", "Maine-et-Loire", "Mayenne", "Sarthe", "Vendée"],
    languages: ["French", "Gallo", "Breton"]
  },
  "PROVENCE_ALPES_COTE_D_AZUR": {
    name: "Provence-Alpes-Côte d'Azur (PACA)",
    capital: "Marseille",
    majorCities: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Avignon"],
    departments: ["Alpes-de-Haute-Provence", "Hautes-Alpes", "Alpes-Maritimes", "Bouches-du-Rhône", "Var", "Vaucluse"],
    languages: ["French", "Provençal (Occitan)", "Niçard"]
  },
  // --- OVERSEAS REGIONS (Régions d'outre-mer) ---
  "GUADELOUPE": {
    name: "Guadeloupe",
    capital: "Basse-Terre",
    majorCities: ["Les Abymes", "Baie-Mahault", "Le Gosier", "Basse-Terre"],
    departments: ["Guadeloupe"],
    languages: ["French", "Antillean Creole"]
  },
  "MARTINIQUE": {
    name: "Martinique",
    capital: "Fort-de-France",
    majorCities: ["Fort-de-France", "Le Lamentin", "Le Robert", "Schœlcher"],
    departments: ["Martinique"],
    languages: ["French", "Martinican Creole"]
  },
  "FRENCH_GUIANA": {
    name: "French Guiana (Guyane)",
    capital: "Cayenne",
    majorCities: ["Cayenne", "Saint-Laurent-du-Maroni", "Matoury", "Kourou"],
    departments: ["Guyane"],
    languages: ["French", "Guianan Creole", "Amerindian languages", "Maroon languages"]
  },
  "LA_REUNION": {
    name: "La Réunion",
    capital: "Saint-Denis",
    majorCities: ["Saint-Denis", "Saint-Paul", "Saint-Pierre", "Le Tampon"],
    departments: ["La Réunion"],
    languages: ["French", "Réunion Creole"]
  },
  "MAYOTTE": {
    name: "Mayotte",
    capital: "Mamoudzou",
    majorCities: ["Mamoudzou", "Koungou", "Dzaoudzi", "Sada"],
    departments: ["Mayotte"],
    languages: ["French", "Shimaore", "Kibushi"]
  }
};

/**
 * Get French region by name(s) e.g. "Brittany or "Bretagne"
 */
export const getRegionByName = (name: string): FrenchRegionData | undefined => {
  const searchName = name.trim().toLowerCase();
  return Object.values(franceRegions).find(
    (region) => region.name.toLowerCase().includes(searchName)
  );
};

/**
 * Find French region by specified Department name
 */
export const getRegionByDepartment = (deptName: string): FrenchRegionData | undefined => {
  const searchDept = deptName.trim().toLowerCase();
  return Object.values(franceRegions).find((region) =>
    region.departments.some((dept) => dept.toLowerCase() === searchDept)
  );
};

/**
 * Find French region by specified City name
 */
export const getRegionByCity = (cityName: string): FrenchRegionData | undefined => {
  const searchCity = cityName.trim().toLowerCase();
  return Object.values(franceRegions).find((region) =>
    region.majorCities.some((city) => city.toLowerCase() === searchCity)
  );
};

/**
 * Find * French regions by specified language
 */
export const getRegionsByLanguage = (language: string): FrenchRegionData[] => {
  const searchLang = language.trim().toLowerCase();
  return Object.values(franceRegions).filter((region) =>
    region.languages.some((lang) => lang.toLowerCase() === searchLang)
  );
};

/**
 * Get flat list of * 101 French Departments
 */
export const getAllDepartments = (): string[] => {
  const allDepartments = Object.values(franceRegions).flatMap((region) => region.departments);
  return Array.from(new Set(allDepartments)).sort((a, b) => a.localeCompare(b));
};