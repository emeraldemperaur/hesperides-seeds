export type MonacoRegionType = 'Quartier' | 'Ward';

export interface MonacoWardData {
  name: string;
  type: MonacoRegionType;
  capital: string;     
  city: string;
  landmarks: string[];
  languages: string[];
}

export type MonacoDictionary = Record<string, MonacoWardData>;

export const monacoWards: MonacoDictionary = {
  "MONACO_VILLE": {
    name: "Monaco-Ville",
    type: "Quartier",
    capital: "Monaco",
    city: "Monaco",
    landmarks: ["Prince's Palace", "Saint Nicholas Cathedral", "Oceanographic Museum"],
    languages: ["French", "Monégasque", "Italian", "English"]
  },
  "MONTE_CARLO": {
    name: "Monte-Carlo",
    type: "Quartier",
    capital: "Monaco",
    city: "Monaco",
    landmarks: ["Monte Carlo Casino", "Hôtel de Paris", "Café de Paris", "Opéra de Monte-Carlo"],
    languages: ["French", "Monégasque", "Italian", "English"]
  },
  "LA_CONDAMINE": {
    name: "La Condamine",
    type: "Quartier",
    capital: "Monaco",
    city: "Monaco",
    landmarks: ["Port Hercules", "Place d'Armes", "Princess Antoinette Park"],
    languages: ["French", "Monégasque", "Italian", "English"]
  },
  "FONTVIEILLE": {
    name: "Fontvieille",
    type: "Quartier",
    capital: "Monaco",
    city: "Monaco",
    landmarks: ["Stade Louis II", "Monaco Heliport", "Princess Grace Rose Garden"],
    languages: ["French", "Monégasque", "Italian", "English"]
  },
  "LES_MONEGHETTI": {
    name: "Les Moneghetti",
    type: "Quartier",
    capital: "Monaco",
    city: "Monaco",
    landmarks: ["Gare de Monaco-Monte-Carlo (Train Station)", "Parc Princesse Antoinette"],
    languages: ["French", "Monégasque", "Italian", "English"]
  },
  "LA_ROUSSE": {
    name: "La Rousse/Saint-Roman",
    type: "Quartier",
    capital: "Monaco",
    city: "Monaco",
    landmarks: ["Odeon Tower (Tour Odéon)", "Monte-Carlo Country Club (bordering)"],
    languages: ["French", "Monégasque", "Italian", "English"]
  },
  "LARVOTTO": {
    name: "Larvotto",
    type: "Quartier",
    capital: "Monaco",
    city: "Monaco",
    landmarks: ["Larvotto Beach", "Grimaldi Forum", "Avenue Princess Grace"],
    languages: ["French", "Monégasque", "Italian", "English"]
  },
  "SAINT_MICHEL": {
    name: "Saint-Michel",
    type: "Quartier",
    capital: "Monaco",
    city: "Monaco",
    landmarks: ["Principality residential areas"],
    languages: ["French", "Monégasque", "Italian", "English"]
  },
  "LES_REVOIRES": {
    name: "Les Révoires",
    type: "Quartier",
    capital: "Monaco",
    city: "Monaco",
    landmarks: ["Jardin Exotique de Monaco (Exotic Garden)", "Chemin des Révoires (Highest point in Monaco)"],
    languages: ["French", "Monégasque", "Italian", "English"]
  }
};

/**
 * Get Monaco ward/quartier by specified name
 * 
 * e.g. 'Monte-Carlo' or 'monte carlo'
 */
export const getWardByName = (name: string): MonacoWardData | undefined => {
  const searchName = name.trim().toLowerCase().replace("-", " ");
  return Object.values(monacoWards).find(
    (ward) => ward.name.toLowerCase().replace("-", " ").includes(searchName)
  );
};

/**
 * Find Monaco ward by a specified famous Landmark as Monaco addresses often rely heavily on points of interest.
 */
export const getWardByLandmark = (landmarkName: string): MonacoWardData | undefined => {
  const searchLandmark = landmarkName.trim().toLowerCase();
  return Object.values(monacoWards).find((ward) =>
    ward.landmarks.some((landmark) => landmark.toLowerCase().includes(searchLandmark))
  );
};

/**
 * Get a flat array of * 9 Monaco Ward names
 */
export const getAllWardNames = (): string[] => {
  return Object.values(monacoWards)
    .map(ward => ward.name)
    .sort((a, b) => a.localeCompare(b));
};