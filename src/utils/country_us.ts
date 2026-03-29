export interface USStateData {
  name: string;
  abbreviation: string;
  capital: string;
  majorCities: string[];
  municipalities: string[]; 
  languages: string[];
}

export type USDictionary = Record<string, USStateData>;

export const usStates: USDictionary = {
  "ALABAMA": { name: "Alabama", abbreviation: "AL", capital: "Montgomery", majorCities: ["Birmingham", "Huntsville", "Mobile", "Montgomery"], municipalities: ["Jefferson County", "Mobile County", "Madison County", "Montgomery County"], languages: ["English", "Spanish"] },
  "ALASKA": { name: "Alaska", abbreviation: "AK", capital: "Juneau", majorCities: ["Anchorage", "Fairbanks", "Juneau", "Sitka"], municipalities: ["Anchorage Municipality", "Matanuska-Susitna Borough", "Fairbanks North Star Borough", "Kenai Peninsula Borough"], languages: ["English", "Yup'ik", "Inupiaq"] },
  "ARIZONA": { name: "Arizona", abbreviation: "AZ", capital: "Phoenix", majorCities: ["Phoenix", "Tucson", "Mesa", "Chandler"], municipalities: ["Maricopa County", "Pima County", "Pinal County", "Yavapai County"], languages: ["English", "Spanish", "Navajo"] },
  "ARKANSAS": { name: "Arkansas", abbreviation: "AR", capital: "Little Rock", majorCities: ["Little Rock", "Fayetteville", "Fort Smith", "Springdale"], municipalities: ["Pulaski County", "Benton County", "Washington County", "Sebastian County"], languages: ["English", "Spanish"] },
  "CALIFORNIA": { name: "California", abbreviation: "CA", capital: "Sacramento", majorCities: ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno"], municipalities: ["Los Angeles County", "San Diego County", "Orange County", "Riverside County", "Santa Clara County"], languages: ["English", "Spanish", "Chinese", "Tagalog", "Vietnamese"] },
  "COLORADO": { name: "Colorado", abbreviation: "CO", capital: "Denver", majorCities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins"], municipalities: ["El Paso County", "Denver County", "Arapahoe County", "Jefferson County"], languages: ["English", "Spanish"] },
  "CONNECTICUT": { name: "Connecticut", abbreviation: "CT", capital: "Hartford", majorCities: ["Bridgeport", "New Haven", "Stamford", "Hartford"], municipalities: ["Fairfield County", "Hartford County", "New Haven County", "New London County"], languages: ["English", "Spanish", "Portuguese"] },
  "DELAWARE": { name: "Delaware", abbreviation: "DE", capital: "Dover", majorCities: ["Wilmington", "Dover", "Newark", "Middletown"], municipalities: ["New Castle County", "Sussex County", "Kent County"], languages: ["English", "Spanish"] },
  "FLORIDA": { name: "Florida", abbreviation: "FL", capital: "Tallahassee", majorCities: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg"], municipalities: ["Miami-Dade County", "Broward County", "Palm Beach County", "Hillsborough County"], languages: ["English", "Spanish", "Haitian Creole"] },
  "GEORGIA": { name: "Georgia", abbreviation: "GA", capital: "Atlanta", majorCities: ["Atlanta", "Augusta", "Columbus", "Macon", "Savannah"], municipalities: ["Fulton County", "Gwinnett County", "Cobb County", "DeKalb County"], languages: ["English", "Spanish", "Korean"] },
  "HAWAII": { name: "Hawaii", abbreviation: "HI", capital: "Honolulu", majorCities: ["Honolulu", "Pearl City", "Hilo", "Kailua"], municipalities: ["Honolulu County", "Hawaii County", "Maui County", "Kauai County"], languages: ["English", "Hawaiian", "Ilocano", "Tagalog", "Japanese"] },
  "IDAHO": { name: "Idaho", abbreviation: "ID", capital: "Boise", majorCities: ["Boise", "Meridian", "Nampa", "Idaho Falls"], municipalities: ["Ada County", "Canyon County", "Kootenai County", "Bonneville County"], languages: ["English", "Spanish"] },
  "ILLINOIS": { name: "Illinois", abbreviation: "IL", capital: "Springfield", majorCities: ["Chicago", "Aurora", "Naperville", "Joliet", "Springfield"], municipalities: ["Cook County", "DuPage County", "Lake County", "Will County"], languages: ["English", "Spanish", "Polish"] },
  "INDIANA": { name: "Indiana", abbreviation: "IN", capital: "Indianapolis", majorCities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"], municipalities: ["Marion County", "Lake County", "Allen County", "Hamilton County"], languages: ["English", "Spanish"] },
  "IOWA": { name: "Iowa", abbreviation: "IA", capital: "Des Moines", majorCities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"], municipalities: ["Polk County", "Linn County", "Scott County", "Johnson County"], languages: ["English", "Spanish"] },
  "KANSAS": { name: "Kansas", abbreviation: "KS", capital: "Topeka", majorCities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka"], municipalities: ["Johnson County", "Sedgwick County", "Shawnee County", "Wyandotte County"], languages: ["English", "Spanish"] },
  "KENTUCKY": { name: "Kentucky", abbreviation: "KY", capital: "Frankfort", majorCities: ["Louisville", "Lexington", "Bowling Green", "Owensboro"], municipalities: ["Jefferson County", "Fayette County", "Kenton County", "Boone County"], languages: ["English", "Spanish"] },
  "LOUISIANA": { name: "Louisiana", abbreviation: "LA", capital: "Baton Rouge", majorCities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"], municipalities: ["East Baton Rouge Parish", "Jefferson Parish", "Orleans Parish", "Caddo Parish"], languages: ["English", "Spanish", "French", "Louisiana Creole"] },
  "MAINE": { name: "Maine", abbreviation: "ME", capital: "Augusta", majorCities: ["Portland", "Lewiston", "Bangor", "South Portland"], municipalities: ["Cumberland County", "York County", "Penobscot County", "Kennebec County"], languages: ["English", "French"] },
  "MARYLAND": { name: "Maryland", abbreviation: "MD", capital: "Annapolis", majorCities: ["Baltimore", "Columbia", "Germantown", "Silver Spring"], municipalities: ["Montgomery County", "Prince George's County", "Baltimore County", "Anne Arundel County"], languages: ["English", "Spanish", "French"] },
  "MASSACHUSETTS": { name: "Massachusetts", abbreviation: "MA", capital: "Boston", majorCities: ["Boston", "Worcester", "Springfield", "Cambridge"], municipalities: ["Middlesex County", "Worcester County", "Essex County", "Suffolk County"], languages: ["English", "Spanish", "Portuguese", "Haitian Creole"] },
  "MICHIGAN": { name: "Michigan", abbreviation: "MI", capital: "Lansing", majorCities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor"], municipalities: ["Wayne County", "Oakland County", "Macomb County", "Kent County"], languages: ["English", "Spanish", "Arabic"] },
  "MINNESOTA": { name: "Minnesota", abbreviation: "MN", capital: "St. Paul", majorCities: ["Minneapolis", "St. Paul", "Rochester", "Duluth"], municipalities: ["Hennepin County", "Ramsey County", "Dakota County", "Anoka County"], languages: ["English", "Spanish", "Somali", "Hmong"] },
  "MISSISSIPPI": { name: "Mississippi", abbreviation: "MS", capital: "Jackson", majorCities: ["Jackson", "Gulfport", "Southaven", "Biloxi"], municipalities: ["Hinds County", "Harrison County", "DeSoto County", "Rankin County"], languages: ["English", "Spanish"] },
  "MISSOURI": { name: "Missouri", abbreviation: "MO", capital: "Jefferson City", majorCities: ["Kansas City", "St. Louis", "Springfield", "Columbia"], municipalities: ["St. Louis County", "Jackson County", "St. Charles County", "Greene County"], languages: ["English", "Spanish"] },
  "MONTANA": { name: "Montana", abbreviation: "MT", capital: "Helena", majorCities: ["Billings", "Missoula", "Great Falls", "Bozeman"], municipalities: ["Yellowstone County", "Missoula County", "Gallatin County", "Flathead County"], languages: ["English", "Spanish", "Crow"] },
  "NEBRASKA": { name: "Nebraska", abbreviation: "NE", capital: "Lincoln", majorCities: ["Omaha", "Lincoln", "Bellevue", "Grand Island"], municipalities: ["Douglas County", "Lancaster County", "Sarpy County", "Hall County"], languages: ["English", "Spanish"] },
  "NEVADA": { name: "Nevada", abbreviation: "NV", capital: "Carson City", majorCities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas"], municipalities: ["Clark County", "Washoe County", "Lyon County", "Elko County"], languages: ["English", "Spanish", "Tagalog"] },
  "NEW_HAMPSHIRE": { name: "New Hampshire", abbreviation: "NH", capital: "Concord", majorCities: ["Manchester", "Nashua", "Concord", "Derry"], municipalities: ["Hillsborough County", "Rockingham County", "Merrimack County", "Strafford County"], languages: ["English", "French", "Spanish"] },
  "NEW_JERSEY": { name: "New Jersey", abbreviation: "NJ", capital: "Trenton", majorCities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton"], municipalities: ["Bergen County", "Middlesex County", "Essex County", "Hudson County"], languages: ["English", "Spanish", "Chinese", "Portuguese"] },
  "NEW_MEXICO": { name: "New Mexico", abbreviation: "NM", capital: "Santa Fe", majorCities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe"], municipalities: ["Bernalillo County", "Doña Ana County", "Santa Fe County", "Sandoval County"], languages: ["English", "Spanish", "Navajo"] },
  "NEW_YORK": { name: "New York", abbreviation: "NY", capital: "Albany", majorCities: ["New York City", "Buffalo", "Yonkers", "Rochester", "Syracuse"], municipalities: ["Kings County", "Queens County", "New York County", "Suffolk County", "Bronx County", "Erie County"], languages: ["English", "Spanish", "Chinese", "Russian", "Yiddish"] },
  "NORTH_CAROLINA": { name: "North Carolina", abbreviation: "NC", capital: "Raleigh", majorCities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"], municipalities: ["Wake County", "Mecklenburg County", "Guilford County", "Forsyth County"], languages: ["English", "Spanish"] },
  "NORTH_DAKOTA": { name: "North Dakota", abbreviation: "ND", capital: "Bismarck", majorCities: ["Fargo", "Bismarck", "Grand Forks", "Minot"], municipalities: ["Cass County", "Burleigh County", "Grand Forks County", "Ward County"], languages: ["English", "Spanish", "German"] },
  "OHIO": { name: "Ohio", abbreviation: "OH", capital: "Columbus", majorCities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"], municipalities: ["Franklin County", "Cuyahoga County", "Hamilton County", "Summit County"], languages: ["English", "Spanish", "German"] },
  "OKLAHOMA": { name: "Oklahoma", abbreviation: "OK", capital: "Oklahoma City", majorCities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"], municipalities: ["Oklahoma County", "Tulsa County", "Cleveland County", "Comanche County"], languages: ["English", "Spanish", "Cherokee", "Vietnamese"] },
  "OREGON": { name: "Oregon", abbreviation: "OR", capital: "Salem", majorCities: ["Portland", "Eugene", "Salem", "Gresham"], municipalities: ["Multnomah County", "Washington County", "Clackamas County", "Lane County"], languages: ["English", "Spanish", "Vietnamese"] },
  "PENNSYLVANIA": { name: "Pennsylvania", abbreviation: "PA", capital: "Harrisburg", majorCities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie"], municipalities: ["Philadelphia County", "Allegheny County", "Montgomery County", "Bucks County"], languages: ["English", "Spanish", "Chinese", "Pennsylvania Dutch"] },
  "RHODE_ISLAND": { name: "Rhode Island", abbreviation: "RI", capital: "Providence", majorCities: ["Providence", "Cranston", "Warwick", "Pawtucket"], municipalities: ["Providence County", "Kent County", "Washington County", "Newport County"], languages: ["English", "Spanish", "Portuguese"] },
  "SOUTH_CAROLINA": { name: "South Carolina", abbreviation: "SC", capital: "Columbia", majorCities: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant"], municipalities: ["Greenville County", "Richland County", "Charleston County", "Horry County"], languages: ["English", "Spanish"] },
  "SOUTH_DAKOTA": { name: "South Dakota", abbreviation: "SD", capital: "Pierre", majorCities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings"], municipalities: ["Minnehaha County", "Pennington County", "Lincoln County", "Brown County"], languages: ["English", "Spanish", "Dakota/Lakota"] },
  "TENNESSEE": { name: "Tennessee", abbreviation: "TN", capital: "Nashville", majorCities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"], municipalities: ["Shelby County", "Davidson County", "Knox County", "Hamilton County"], languages: ["English", "Spanish", "Arabic"] },
  "TEXAS": { name: "Texas", abbreviation: "TX", capital: "Austin", majorCities: ["Houston", "San Antonio", "Dallas", "Austin", "Fort Worth"], municipalities: ["Harris County", "Dallas County", "Tarrant County", "Bexar County", "Travis County"], languages: ["English", "Spanish", "Vietnamese"] },
  "UTAH": { name: "Utah", abbreviation: "UT", capital: "Salt Lake City", majorCities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan"], municipalities: ["Salt Lake County", "Utah County", "Davis County", "Weber County"], languages: ["English", "Spanish"] },
  "VERMONT": { name: "Vermont", abbreviation: "VT", capital: "Montpelier", majorCities: ["Burlington", "South Burlington", "Rutland", "Barre"], municipalities: ["Chittenden County", "Rutland County", "Washington County", "Windsor County"], languages: ["English", "French"] },
  "VIRGINIA": { name: "Virginia", abbreviation: "VA", capital: "Richmond", majorCities: ["Virginia Beach", "Chesapeake", "Norfolk", "Richmond", "Arlington"], municipalities: ["Fairfax County", "Prince William County", "Loudoun County", "Chesterfield County"], languages: ["English", "Spanish", "Korean", "Vietnamese"] },
  "WASHINGTON": { name: "Washington", abbreviation: "WA", capital: "Olympia", majorCities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"], municipalities: ["King County", "Pierce County", "Snohomish County", "Spokane County"], languages: ["English", "Spanish", "Chinese", "Vietnamese"] },
  "WEST_VIRGINIA": { name: "West Virginia", abbreviation: "WV", capital: "Charleston", majorCities: ["Charleston", "Huntington", "Morgantown", "Parkersburg"], municipalities: ["Kanawha County", "Berkeley County", "Monongalia County", "Cabell County"], languages: ["English", "Spanish"] },
  "WISCONSIN": { name: "Wisconsin", abbreviation: "WI", capital: "Madison", majorCities: ["Milwaukee", "Madison", "Green Bay", "Kenosha"], municipalities: ["Milwaukee County", "Dane County", "Waukesha County", "Brown County"], languages: ["English", "Spanish", "Hmong"] },
  "WYOMING": { name: "Wyoming", abbreviation: "WY", capital: "Cheyenne", majorCities: ["Cheyenne", "Casper", "Gillette", "Laramie"], municipalities: ["Laramie County", "Natrona County", "Campbell County", "Sweetwater County"], languages: ["English", "Spanish"] },
  "DISTRICT_OF_COLUMBIA": { name: "District of Columbia", abbreviation: "DC", capital: "Washington, D.C.", majorCities: ["Washington, D.C."], municipalities: ["District of Columbia"], languages: ["English", "Spanish", "Amharic"] }
};


/**
 * Get US state by specified name (e.g. 'New York' or 'new york')
 */
export const getStateByName = (name: string): USStateData | undefined => {
  const searchName = name.trim().toLowerCase();
  return Object.values(usStates).find(
    (state) => state.name.toLowerCase() === searchName
  );
};

/**
 * Get US state by 2-letter abbreviation - O(N) Search 
 * 
 * e.g `CA`, `ca`, `TX`
 */
export const getStateByAbbreviation = (abbr: string): USStateData | undefined => {
  const searchAbbrevation = abbr.trim().toUpperCase();
  return Object.values(usStates).find(
    (state) => state.abbreviation === searchAbbrevation
  );
};

/**
 * Find US state by specified County/Parish/Borough name
 */
export const getStateByMunicipality = (municipalityName: string): USStateData | undefined => {
  const searchMunicipality = municipalityName.trim().toLowerCase();
  return Object.values(usStates).find((state) =>
    state.municipalities.some((municipality: string) => municipality.toLowerCase().includes(searchMunicipality))
  );
};

/**
 * Find * US states by specified language
 */
export const getStatesByLanguage = (language: string): USStateData[] => {
  const searchLang = language.trim().toLowerCase();
  return Object.values(usStates).filter((state) =>
    state.languages.some((language: string) => language.toLowerCase() === searchLang)
  );
};

/**
 * Get flat array of * 51 US State/District Abbreviations
 * 
 * Returns: ["AK", "AL", "AR", "AZ", ...]
 */
export const getAllAbbreviations = (): string[] => {
  return Object.values(usStates)
    .map(state => state.abbreviation)
    .sort((a, b) => a.localeCompare(b));
};