import { adaptFranceRegions, adaptUSStates, getGlobalRegionsByLanguage, 
    getLocalOptionsBySubdivisionId, getSubdivisionsByCountry } from "utils/country_global";

jest.mock('utils/country_us', () => ({
  usStates: {
    CALIFORNIA: {
      name: 'California',
      abbreviation: 'CA',
      capital: 'Sacramento',
      majorCities: ['Los Angeles', 'San Francisco'],
      municipalities: ['Los Angeles County', 'Orange County'],
      languages: ['English', 'Spanish']
    },
    DISTRICT_OF_COLUMBIA: {
      name: 'District of Columbia',
      abbreviation: 'DC',
      capital: 'Washington, D.C.',
      majorCities: ['Washington, D.C.'],
      municipalities: ['District of Columbia'],
      languages: ['English']
    }
  }
}));

jest.mock('utils/country_fr', () => ({
  franceRegions: {
    NORMANDY: {
      name: 'Normandy',
      capital: 'Rouen',
      majorCities: ['Rouen', 'Caen'],
      departments: ['Calvados', 'Eure'],
      languages: ['French', 'Norman']
    }
  }
}));

jest.mock('utils/country_au', () => ({ australiaStates: {} }));
jest.mock('utils/country_ca', () => ({ canadaProvinces: {} }));
jest.mock('utils/country_it', () => ({ italyRegions: {} }));
jest.mock('utils/country_mc', () => ({ monacoWards: {} }));
jest.mock('utils/country_ng', () => ({ nigeriaStates: {} }));
jest.mock('utils/country_uk', () => ({ ukCountries: {} }));


describe('Unified Global Interface Tests', () => {

  describe('UGI Adapter()', () => {
    it('UGI Adapter() :: Adapted US States to the GlobalSubdivision Format', () => {
      const result = adaptUSStates();
      expect(result).toHaveLength(2);
      
      const california = result.find(r => r.id === 'US-CALIFORNIA');
      expect(california).toBeDefined();
      expect(california?.countryCode).toBe('US');
      expect(california?.type).toBe('State');
      expect(california?.localSubdivisions).toEqual(['Los Angeles County', 'Orange County']);
      const dc = result.find(r => r.id === 'US-DISTRICT_OF_COLUMBIA');
      expect(dc?.type).toBe('Federal Capital Territory');
    });

    it('UGI Adapter() :: Adapted France Regions', () => {
      const result = adaptFranceRegions();
      const normandy = result.find(r => r.id === 'FR-NORMANDY');
      
      expect(normandy).toBeDefined();
      expect(normandy?.countryCode).toBe('FR');
      expect(normandy?.type).toBe('Region');
      expect(normandy?.localSubdivisions).toEqual(['Calvados', 'Eure']);
    });
  });

  describe('UGI Helper()', () => {
    
    it('UGI Helper() :: getSubdivisionsByCountry() returned correct subdivisions for specified country code', () => {
      const usResults = getSubdivisionsByCountry('US');
      expect(usResults.length).toBeGreaterThan(0);
      expect(usResults.every(r => r.countryCode === 'US')).toBe(true);

      const frResults = getSubdivisionsByCountry('fr');
      expect(frResults.length).toBeGreaterThan(0);
      expect(frResults[0].id).toBe('FR-NORMANDY');
    });

    it('UGI Helper() :: getLocalOptionsBySubdivisionId() returned array of local subdivisions', () => {
      const options = getLocalOptionsBySubdivisionId('FR-NORMANDY');
      expect(options).toEqual(['Calvados', 'Eure']);
    });

    it('UGI Helper() :: getLocalOptionsBySubdivisionId() returned empty array when ID not found or invalid', () => {
      const options = getLocalOptionsBySubdivisionId('INVALID-ID');
      expect(options).toEqual([]);
    });

    it('UGI Helper() :: getGlobalRegionsByLanguage() returned regions for specified language', () => {
      const spanishRegions = getGlobalRegionsByLanguage('spanish');
      expect(spanishRegions).toHaveLength(1);
      expect(spanishRegions[0].id).toBe('US-CALIFORNIA');

      const frenchRegions = getGlobalRegionsByLanguage('FRENCH');
      expect(frenchRegions).toHaveLength(1);
      expect(frenchRegions[0].id).toBe('FR-NORMANDY');

      const klingonRegions = getGlobalRegionsByLanguage('Klingon');
      expect(klingonRegions).toHaveLength(0);
    });
  });
});