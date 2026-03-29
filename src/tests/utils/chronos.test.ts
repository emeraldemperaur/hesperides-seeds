import { getTimeBasedGreeting } from 'utils/chronos';

describe('Chronos :: getTimeBasedGreeting()', () => {

  describe('Chronos :: Overrides Date object', () => {
    
    it('Chronos :: Returned "Good Morning" between midnight and 11:59 AM', () => {
      const midnight = new Date('2023-01-01T00:00:00');
      expect(getTimeBasedGreeting(midnight)).toBe('Good Morning');
      const lateMorning = new Date('2023-01-01T11:59:00');
      expect(getTimeBasedGreeting(lateMorning)).toBe('Good Morning');
    });

    it('Chronos :: Returned "Good Afternoon" between 12:00 PM and 4:59 PM', () => {
      const noon = new Date('2023-01-01T12:00:00');
      expect(getTimeBasedGreeting(noon)).toBe('Good Afternoon');
      const lateAfternoon = new Date('2023-01-01T16:59:00');
      expect(getTimeBasedGreeting(lateAfternoon)).toBe('Good Afternoon');
    });

    it('Chronos :: Returned "Good Evening" between 5:00 PM and 11:59 PM', () => {
      const earlyEvening = new Date('2023-01-01T17:00:00');
      expect(getTimeBasedGreeting(earlyEvening)).toBe('Good Evening');
      const lateNight = new Date('2023-01-01T23:59:00');
      expect(getTimeBasedGreeting(lateNight)).toBe('Good Evening');
    });
  });

  describe('Chronos :: Detected system time without Date object', () => {    
    beforeAll(() => {
      jest.useFakeTimers();
    });
    afterAll(() => {
      jest.useRealTimers();
    });

    it('Chronos ::  Auto-detected current system time', () => {
      jest.setSystemTime(new Date('2023-01-01T14:00:00'));
      const result = getTimeBasedGreeting();
      expect(result).toBe('Good Afternoon');
    });
  });
});