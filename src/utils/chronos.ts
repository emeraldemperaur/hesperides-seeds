export function getTimeStamp(): string {
    let now: Date = new Date(); 
  return now.toISOString();
}

export function getDate(): string {
    let now: Date = new Date(); 
    let isoDateOnly = now.toISOString().split('T')[0];
    return isoDateOnly;
}

/**
 * Returns time-based greeting
 * 
 * e.g. Good Morning, Good Afternoon, or Good Evening.
 * * @param {Date} [date=new Date()] - Optional Date object parameter. Defaults to current system time.
 * @returns {string} greeting.
 */
export const getTimeBasedGreeting = (date: Date = new Date()): string => {
  const currentHour = date.getHours();
  if (currentHour >= 0 && currentHour < 12) {
    return "Good Morning";
  } 
  if (currentHour >= 12 && currentHour < 17) {
    return "Good Afternoon";
  } 
  return "Good Evening";
};