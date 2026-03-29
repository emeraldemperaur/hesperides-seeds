import {
  getRandomName,
  searchNamesByMeaning,
  getNamesByLanguage
} from 'utils/namer';

jest.mock('utils/namer', () => {
  const originalModule = jest.requireActual('utils/namer');

  return {
    __esModule: true,
    ...originalModule,
    worldNames: {
      "NG": {
        countryName: "Nigeria",
        languages: ["English", "Yoruba", "Igbo"],
        maleNames: [
          { name: "Emeka", meaning: "Great deeds (Igbo)" },
          { name: "Obinna", meaning: "Father's Heart (Igbo)" },
          { name: "Oluwaseun", meaning: "We thank God (Yoruba)" },
          { name: "Chidubem", meaning: "Guided by God (Igbo)" },
          { name: "Tariq", meaning: "Morning star (Arabic/Hausa)" },
          { name: "Babatunde", meaning: "Father has returned (Yoruba)" }
        ],
        femaleNames: [
          { name: "Chiamaka", meaning: "God is beautiful" },
          { name: "Chinwe", meaning: "Honor confers a crown" }
        ]
      },
      "JP": {
        countryName: "Japan",
        languages: ["Japanese"],
        maleNames: [
          { name: "Haruto", meaning: "Sun flying" }
        ],
        femaleNames: [
          { name: "Yui", meaning: "Tie, bind, or gentle" },
          { name: "Aoi", meaning: "Hollyhock or blue" },
          { name: "Hina", meaning: "Sun or vegetables" },
          { name: "Sakura", meaning: "Cherry blossom" },
          { name: "Rin", meaning: "Dignified or severe" }
        ]
      }
    }
  };
});

describe('Global Namer Interface Tests', () => {

  describe('GNI :: getRandomName()', () => {
    it('GNI :: Returned a male name from specified country', () => {
      const result = getRandomName('NG', 'male');
      
      expect(result).toBeDefined();
      const possibleNames = ["Emeka", "Obinna", "Tariq", "Chidubem", "Babatunde", "Oluwaseun"];
      expect(possibleNames).toContain(result?.name);
    });

    it('GNI :: Returned a female name from specified country', () => {
      const result = getRandomName('JP', 'female');
      
      expect(result).toBeDefined();
      expect(result?.name).toBeDefined();
    });

    it('GNI :: Return undefined for invalid country code', () => {
      const result = getRandomName('INVALID', 'male');
      expect(result).toBeUndefined();
    });
    
    it('GNI :: Normalizes lowercase country codes', () => {
      const result = getRandomName('jp', 'male');
      expect(result?.name).toBeDefined();
    });
  });

  describe('GNI :: searchNamesByMeaning()', () => {
    it('GNI :: Returned names that contain specified keyword', () => {
      const results = searchNamesByMeaning('God');
      
      expect(results.length).toBe(15);
      expect(results.some(r => r.name === 'Chiamaka')).toBe(true);
    });

    it('GNI :: Normalizes name to enable case-insensitive search', () => {
      const results = searchNamesByMeaning('sun');
      
      expect(results.length).toBe(3);
      expect(results[0].name).toBeDefined();
    });

    it('GNI :: Returned empty array if no matching meanings found', () => {
      const results = searchNamesByMeaning('Dragon');
      expect(results).toEqual([]);
    });
  });

  describe('GNI :: getNamesByLanguage()', () => {
    it('GNI ::  Returned * names for a country by specified language', () => {
      const results = getNamesByLanguage('Yoruba');
      
      expect(results.length).toBe(12);
      const returnedNames = results.map(r => r.name);
      expect(returnedNames).toContain('Oluwaseun');
      expect(returnedNames).toContain('Folashade');
    });

    it('GNI :: Returned empty array if specified language not found', () => {
      const results = getNamesByLanguage('Klingon');
      expect(results).toEqual([]);
    });
  });
});