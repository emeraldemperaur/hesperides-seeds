export interface NameDetail {
  name: string;
  meaning: string;
}

export interface CountryNamesData {
  countryName: string;
  languages: string[];
  maleNames: NameDetail[];
  femaleNames: NameDetail[];
}

export type GlobalNamesDictionary = Record<string, CountryNamesData>;

export const worldNames: GlobalNamesDictionary = {
  "NG": {
    countryName: "Nigeria",
    languages: ["English", "Hausa", "Yoruba", "Igbo"],
    maleNames: [
      { name: "Emeka", meaning: "Great deeds (Igbo)" },
      { name: "Obinna", meaning: "Father's Heart (Igbo)" },
      { name: "Oluwaseun", meaning: "We thank God (Yoruba)" },
      { name: "Chidubem", meaning: "Guided by God (Igbo)" },
      { name: "Tariq", meaning: "Morning star (Arabic/Hausa)" },
      { name: "Babatunde", meaning: "Father has returned (Yoruba)" }
    ],
    femaleNames: [
      { name: "Chinwe", meaning: "God owns life (Igbo)" },
      { name: "Amina", meaning: "Trustworthy and faithful (Arabic/Hausa)" },
      { name: "Chiamaka", meaning: "God is beautiful (Igbo)" },
      { name: "Folashade", meaning: "Honor confers a crown (Yoruba)" },
      { name: "Zainab", meaning: "Fragrant flower (Arabic/Hausa)" },
      { name: "Nneka", meaning: "Mother is supreme (Igbo)" }
    ]
  },
  "JP": {
    countryName: "Japan",
    languages: ["Japanese"],
    maleNames: [
      { name: "Haruto", meaning: "Sun flying" },
      { name: "Sota", meaning: "Smooth and thick" },
      { name: "Yuto", meaning: "Gentle person" },
      { name: "Haruki", meaning: "Shining sun" },
      { name: "Riku", meaning: "Land or continent" }
    ],
    femaleNames: [
      { name: "Yui", meaning: "Tie, bind, or gentle" },
      { name: "Aoi", meaning: "Hollyhock or blue" },
      { name: "Hina", meaning: "Sun or vegetables" },
      { name: "Sakura", meaning: "Cherry blossom" },
      { name: "Rin", meaning: "Dignified or severe" }
    ]
  },
  "FR": {
    countryName: "France",
    languages: ["French"],
    maleNames: [
      { name: "Gabriel", meaning: "God is my strength" },
      { name: "Léo", meaning: "Lion" },
      { name: "Raphaël", meaning: "God has healed" },
      { name: "Arthur", meaning: "Bear king" },
      { name: "Louis", meaning: "Famous warrior" }
    ],
    femaleNames: [
      { name: "Emma", meaning: "Universal or whole" },
      { name: "Jade", meaning: "Stone of the side (precious stone)" },
      { name: "Louise", meaning: "Famous warrior" },
      { name: "Alice", meaning: "Noble type" },
      { name: "Chloé", meaning: "Blooming or green shoot" }
    ]
  },
  "MX": {
    countryName: "Mexico",
    languages: ["Spanish", "Nahuatl", "Maya"],
    maleNames: [
      { name: "Santiago", meaning: "Saint James" },
      { name: "Mateo", meaning: "Gift of God" },
      { name: "Sebastián", meaning: "Venerable or revered" },
      { name: "Leonardo", meaning: "Brave as a lion" },
      { name: "Matías", meaning: "Gift of God" }
    ],
    femaleNames: [
      { name: "Sofía", meaning: "Wisdom" },
      { name: "María", meaning: "Beloved or bitter" },
      { name: "Valentina", meaning: "Strong and healthy" },
      { name: "Regina", meaning: "Queen" },
      { name: "Camila", meaning: "Young ceremonial attendant" }
    ]
  },
  "IN": {
    countryName: "India",
    languages: ["Hindi", "English", "Bengali", "Telugu", "Marathi"],
    maleNames: [
      { name: "Aarav", meaning: "Peaceful or wise" },
      { name: "Vihaan", meaning: "Dawn or morning" },
      { name: "Arjun", meaning: "Bright, shining, or white" },
      { name: "Sai", meaning: "Divine or saint" },
      { name: "Krishna", meaning: "Dark, black, or all-attractive" }
    ],
    femaleNames: [
      { name: "Aadya", meaning: "First power or beginning" },
      { name: "Diya", meaning: "Lamp or light" },
      { name: "Saanvi", meaning: "Goddess Lakshmi" },
      { name: "Ananya", meaning: "Unique or matchless" },
      { name: "Kiara", meaning: "Dark-haired or bright" }
    ]
  },
  "EG": {
    countryName: "Egypt",
    languages: ["Arabic"],
    maleNames: [
      { name: "Mohamed", meaning: "Praiseworthy" },
      { name: "Youssef", meaning: "God increases" },
      { name: "Ahmed", meaning: "Highly praised" },
      { name: "Mahmoud", meaning: "Praised" },
      { name: "Mostafa", meaning: "The chosen one" }
    ],
    femaleNames: [
      { name: "Fatima", meaning: "Captivating or weaning" },
      { name: "Aya", meaning: "Sign, miracle, or verse" },
      { name: "Mariam", meaning: "Beloved or pious" },
      { name: "Habiba", meaning: "Beloved or sweetheart" },
      { name: "Salma", meaning: "Safe or peaceful" }
    ]
  },
  "RU": {
    countryName: "Russia",
    languages: ["Russian"],
    maleNames: [
      { name: "Alexander", meaning: "Defender of men" },
      { name: "Mikhail", meaning: "Who is like God?" },
      { name: "Maxim", meaning: "The greatest" },
      { name: "Ivan", meaning: "God is gracious" },
      { name: "Dmitry", meaning: "Devoted to Demeter (Earth Mother)" }
    ],
    femaleNames: [
      { name: "Anastasia", meaning: "Resurrection" },
      { name: "Maria", meaning: "Beloved" },
      { name: "Daria", meaning: "Possessing goodness" },
      { name: "Anna", meaning: "Grace" },
      { name: "Victoria", meaning: "Victory" }
    ]
  },
  "BR": {
    countryName: "Brazil",
    languages: ["Portuguese"],
    maleNames: [
      { name: "Miguel", meaning: "Who is like God?" },
      { name: "Arthur", meaning: "Bear king" },
      { name: "Heitor", meaning: "Holding fast" },
      { name: "Gael", meaning: "Generous or joy" },
      { name: "Davi", meaning: "Beloved" }
    ],
    femaleNames: [
      { name: "Helena", meaning: "Shining light" },
      { name: "Alice", meaning: "Noble type" },
      { name: "Laura", meaning: "Bay laurel" },
      { name: "Manuela", meaning: "God is with us" },
      { name: "Valentina", meaning: "Strong and healthy" }
    ]
  },
  "ZA": {
    countryName: "South Africa",
    languages: ["Zulu", "Xhosa", "Afrikaans", "English"],
    maleNames: [
      { name: "Siyabonga", meaning: "We are thankful (Zulu)" },
      { name: "Thabo", meaning: "Joy or happiness (Sotho)" },
      { name: "Bandile", meaning: "They have multiplied (Zulu/Xhosa)" },
      { name: "Willem", meaning: "Resolute protector (Afrikaans)" },
      { name: "Lungile", meaning: "The good one (Zulu)" }
    ],
    femaleNames: [
      { name: "Zandile", meaning: "They have multiplied (Zulu)" },
      { name: "Thandeka", meaning: "Lovable (Zulu)" },
      { name: "Lerato", meaning: "Love (Sotho)" },
      { name: "Johanna", meaning: "God is gracious (Afrikaans)" },
      { name: "Naledi", meaning: "Star (Sotho/Tswana)" }
    ]
  },
  "CN": {
    countryName: "China",
    languages: ["Standard Chinese (Mandarin)"],
    maleNames: [
      { name: "Wei", meaning: "Great or robust" },
      { name: "Hao", meaning: "Grand or heroic" },
      { name: "Jian", meaning: "Build or establish" },
      { name: "Jun", meaning: "Handsome or talented" },
      { name: "Cheng", meaning: "Accomplish or succeed" }
    ],
    femaleNames: [
      { name: "Fang", meaning: "Fragrant or virtuous" },
      { name: "Jing", meaning: "Quiet or gentle" },
      { name: "Min", meaning: "Quick or clever" },
      { name: "Yan", meaning: "Beautiful or swallow bird" },
      { name: "Xia", meaning: "Rosy clouds or summer" }
    ]
  }
};

/**
 * Get random name based on gender and country code.
 */
export const getRandomName = (countryCode: string, gender: 'male' | 'female'): NameDetail | undefined => {
  const countryData = worldNames[countryCode.toUpperCase()];
  if (!countryData) return undefined;

  const namesArray = gender === 'male' ? countryData.maleNames : countryData.femaleNames;
  const randomIndex = Math.floor(Math.random() * namesArray.length);
  
  return namesArray[randomIndex];
};

/**
 * Search * global names for a specific meaning 
 * 
 * e.g., "God", "Light", "Strong".
 * 
 * Returns an array of names and respective origin countries.
 */
export const searchNamesByMeaning = (keyword: string): Array<{ country: string, name: string, meaning: string }> => {
  const searchWord = keyword.toLowerCase();
  const results: Array<{ country: string, name: string, meaning: string }> = [];

  Object.values(worldNames).forEach(country => {
    const allNames = [...country.maleNames, ...country.femaleNames];
    
    allNames.forEach(nameData => {
      if (nameData.meaning.toLowerCase().includes(searchWord)) {
        results.push({
          country: country.countryName,
          name: nameData.name,
          meaning: nameData.meaning
        });
      }
    });
  });

  return results;
};

/**
 * Get * male or female names by specified language
 */
export const getNamesByLanguage = (language: string): NameDetail[] => {
  const searchLang = language.toLowerCase();
  const results: NameDetail[] = [];

  Object.values(worldNames).forEach(country => {
    if (country.languages.some(lang => lang.toLowerCase().includes(searchLang))) {
      results.push(...country.maleNames, ...country.femaleNames);
    }
  });

  return results;
};