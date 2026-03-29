export type Continent = 
  | 'Africa' 
  | 'Antarctica' 
  | 'Asia' 
  | 'Europe' 
  | 'North America' 
  | 'Oceania' 
  | 'South America';

export interface CountryData {
  name: string;
  currency: string[];       // Array, because some countries use multiple currencies
  telephoneCode: string;    // String, to safely include the "+" symbol
  capitalCity: string;
  continent: Continent;
  languages: string[];      // Array, to support multilingual countries
}

export type CountryDictionary = Record<string, CountryData>;

export const worldCountries: CountryDictionary = {
  "AF": { name: "Afghanistan", currency: ["AFN"], telephoneCode: "+93", capitalCity: "Kabul", continent: "Asia", languages: ["Pashto", "Dari"] },
  "AL": { name: "Albania", currency: ["ALL"], telephoneCode: "+355", capitalCity: "Tirana", continent: "Europe", languages: ["Albanian"] },
  "DZ": { name: "Algeria", currency: ["DZD"], telephoneCode: "+213", capitalCity: "Algiers", continent: "Africa", languages: ["Arabic", "Tamazight"] },
  "AD": { name: "Andorra", currency: ["EUR"], telephoneCode: "+376", capitalCity: "Andorra la Vella", continent: "Europe", languages: ["Catalan"] },
  "AO": { name: "Angola", currency: ["AOA"], telephoneCode: "+244", capitalCity: "Luanda", continent: "Africa", languages: ["Portuguese"] },
  "AG": { name: "Antigua and Barbuda", currency: ["XCD"], telephoneCode: "+1-268", capitalCity: "St. John's", continent: "North America", languages: ["English"] },
  "AR": { name: "Argentina", currency: ["ARS"], telephoneCode: "+54", capitalCity: "Buenos Aires", continent: "South America", languages: ["Spanish"] },
  "AM": { name: "Armenia", currency: ["AMD"], telephoneCode: "+374", capitalCity: "Yerevan", continent: "Asia", languages: ["Armenian"] },
  "AU": { name: "Australia", currency: ["AUD"], telephoneCode: "+61", capitalCity: "Canberra", continent: "Oceania", languages: ["English"] },
  "AT": { name: "Austria", currency: ["EUR"], telephoneCode: "+43", capitalCity: "Vienna", continent: "Europe", languages: ["German"] },
  "AZ": { name: "Azerbaijan", currency: ["AZN"], telephoneCode: "+994", capitalCity: "Baku", continent: "Asia", languages: ["Azerbaijani"] },
  "BS": { name: "Bahamas", currency: ["BSD"], telephoneCode: "+1-242", capitalCity: "Nassau", continent: "North America", languages: ["English"] },
  "BH": { name: "Bahrain", currency: ["BHD"], telephoneCode: "+973", capitalCity: "Manama", continent: "Asia", languages: ["Arabic"] },
  "BD": { name: "Bangladesh", currency: ["BDT"], telephoneCode: "+880", capitalCity: "Dhaka", continent: "Asia", languages: ["Bengali"] },
  "BB": { name: "Barbados", currency: ["BBD"], telephoneCode: "+1-246", capitalCity: "Bridgetown", continent: "North America", languages: ["English"] },
  "BY": { name: "Belarus", currency: ["BYN"], telephoneCode: "+375", capitalCity: "Minsk", continent: "Europe", languages: ["Belarusian", "Russian"] },
  "BE": { name: "Belgium", currency: ["EUR"], telephoneCode: "+32", capitalCity: "Brussels", continent: "Europe", languages: ["Dutch", "French", "German"] },
  "BZ": { name: "Belize", currency: ["BZD"], telephoneCode: "+501", capitalCity: "Belmopan", continent: "North America", languages: ["English"] },
  "BJ": { name: "Benin", currency: ["XOF"], telephoneCode: "+229", capitalCity: "Porto-Novo", continent: "Africa", languages: ["French"] },
  "BT": { name: "Bhutan", currency: ["BTN", "INR"], telephoneCode: "+975", capitalCity: "Thimphu", continent: "Asia", languages: ["Dzongkha"] },
  "BO": { name: "Bolivia", currency: ["BOB"], telephoneCode: "+591", capitalCity: "Sucre", continent: "South America", languages: ["Spanish", "Quechua", "Aymara", "Guarani"] },
  "BA": { name: "Bosnia and Herzegovina", currency: ["BAM"], telephoneCode: "+387", capitalCity: "Sarajevo", continent: "Europe", languages: ["Bosnian", "Croatian", "Serbian"] },
  "BW": { name: "Botswana", currency: ["BWP"], telephoneCode: "+267", capitalCity: "Gaborone", continent: "Africa", languages: ["English", "Setswana"] },
  "BR": { name: "Brazil", currency: ["BRL"], telephoneCode: "+55", capitalCity: "Brasília", continent: "South America", languages: ["Portuguese"] },
  "BN": { name: "Brunei", currency: ["BND"], telephoneCode: "+673", capitalCity: "Bandar Seri Begawan", continent: "Asia", languages: ["Malay"] },
  "BG": { name: "Bulgaria", currency: ["BGN"], telephoneCode: "+359", capitalCity: "Sofia", continent: "Europe", languages: ["Bulgarian"] },
  "BF": { name: "Burkina Faso", currency: ["XOF"], telephoneCode: "+226", capitalCity: "Ouagadougou", continent: "Africa", languages: ["French"] },
  "BI": { name: "Burundi", currency: ["BIF"], telephoneCode: "+257", capitalCity: "Gitega", continent: "Africa", languages: ["Kirundi", "French", "English"] },
  "CV": { name: "Cabo Verde", currency: ["CVE"], telephoneCode: "+238", capitalCity: "Praia", continent: "Africa", languages: ["Portuguese"] },
  "KH": { name: "Cambodia", currency: ["KHR"], telephoneCode: "+855", capitalCity: "Phnom Penh", continent: "Asia", languages: ["Khmer"] },
  "CM": { name: "Cameroon", currency: ["XAF"], telephoneCode: "+237", capitalCity: "Yaoundé", continent: "Africa", languages: ["French", "English"] },
  "CA": { name: "Canada", currency: ["CAD"], telephoneCode: "+1", capitalCity: "Ottawa", continent: "North America", languages: ["English", "French"] },
  "CF": { name: "Central African Republic", currency: ["XAF"], telephoneCode: "+236", capitalCity: "Bangui", continent: "Africa", languages: ["Sango", "French"] },
  "TD": { name: "Chad", currency: ["XAF"], telephoneCode: "+235", capitalCity: "N'Djamena", continent: "Africa", languages: ["French", "Arabic"] },
  "CL": { name: "Chile", currency: ["CLP"], telephoneCode: "+56", capitalCity: "Santiago", continent: "South America", languages: ["Spanish"] },
  "CN": { name: "China", currency: ["CNY"], telephoneCode: "+86", capitalCity: "Beijing", continent: "Asia", languages: ["Standard Chinese"] },
  "CO": { name: "Colombia", currency: ["COP"], telephoneCode: "+57", capitalCity: "Bogotá", continent: "South America", languages: ["Spanish"] },
  "KM": { name: "Comoros", currency: ["KMF"], telephoneCode: "+269", capitalCity: "Moroni", continent: "Africa", languages: ["Comorian", "Arabic", "French"] },
  "CG": { name: "Congo", currency: ["XAF"], telephoneCode: "+242", capitalCity: "Brazzaville", continent: "Africa", languages: ["French"] },
  "CD": { name: "Congo (Democratic Republic)", currency: ["CDF"], telephoneCode: "+243", capitalCity: "Kinshasa", continent: "Africa", languages: ["French"] },
  "CR": { name: "Costa Rica", currency: ["CRC"], telephoneCode: "+506", capitalCity: "San José", continent: "North America", languages: ["Spanish"] },
  "HR": { name: "Croatia", currency: ["EUR"], telephoneCode: "+385", capitalCity: "Zagreb", continent: "Europe", languages: ["Croatian"] },
  "CU": { name: "Cuba", currency: ["CUP"], telephoneCode: "+53", capitalCity: "Havana", continent: "North America", languages: ["Spanish"] },
  "CY": { name: "Cyprus", currency: ["EUR"], telephoneCode: "+357", capitalCity: "Nicosia", continent: "Europe", languages: ["Greek", "Turkish"] },
  "CZ": { name: "Czechia", currency: ["CZK"], telephoneCode: "+420", capitalCity: "Prague", continent: "Europe", languages: ["Czech"] },
  "DK": { name: "Denmark", currency: ["DKK"], telephoneCode: "+45", capitalCity: "Copenhagen", continent: "Europe", languages: ["Danish"] },
  "DJ": { name: "Djibouti", currency: ["DJF"], telephoneCode: "+253", capitalCity: "Djibouti", continent: "Africa", languages: ["French", "Arabic"] },
  "DM": { name: "Dominica", currency: ["XCD"], telephoneCode: "+1-767", capitalCity: "Roseau", continent: "North America", languages: ["English"] },
  "DO": { name: "Dominican Republic", currency: ["DOP"], telephoneCode: "+1-809", capitalCity: "Santo Domingo", continent: "North America", languages: ["Spanish"] },
  "TL": { name: "East Timor (Timor-Leste)", currency: ["USD"], telephoneCode: "+670", capitalCity: "Dili", continent: "Asia", languages: ["Tetum", "Portuguese"] },
  "EC": { name: "Ecuador", currency: ["USD"], telephoneCode: "+593", capitalCity: "Quito", continent: "South America", languages: ["Spanish"] },
  "EG": { name: "Egypt", currency: ["EGP"], telephoneCode: "+20", capitalCity: "Cairo", continent: "Africa", languages: ["Arabic"] },
  "SV": { name: "El Salvador", currency: ["USD"], telephoneCode: "+503", capitalCity: "San Salvador", continent: "North America", languages: ["Spanish"] },
  "GQ": { name: "Equatorial Guinea", currency: ["XAF"], telephoneCode: "+240", capitalCity: "Malabo", continent: "Africa", languages: ["Spanish", "French", "Portuguese"] },
  "ER": { name: "Eritrea", currency: ["ERN"], telephoneCode: "+291", capitalCity: "Asmara", continent: "Africa", languages: ["Tigrinya", "Arabic", "English"] },
  "EE": { name: "Estonia", currency: ["EUR"], telephoneCode: "+372", capitalCity: "Tallinn", continent: "Europe", languages: ["Estonian"] },
  "SZ": { name: "Eswatini", currency: ["SZL", "ZAR"], telephoneCode: "+268", capitalCity: "Mbabane", continent: "Africa", languages: ["Swazi", "English"] },
  "ET": { name: "Ethiopia", currency: ["ETB"], telephoneCode: "+251", capitalCity: "Addis Ababa", continent: "Africa", languages: ["Amharic"] },
  "FJ": { name: "Fiji", currency: ["FJD"], telephoneCode: "+679", capitalCity: "Suva", continent: "Oceania", languages: ["English", "Fijian", "Fiji Hindi"] },
  "FI": { name: "Finland", currency: ["EUR"], telephoneCode: "+358", capitalCity: "Helsinki", continent: "Europe", languages: ["Finnish", "Swedish"] },
  "FR": { name: "France", currency: ["EUR"], telephoneCode: "+33", capitalCity: "Paris", continent: "Europe", languages: ["French"] },
  "GA": { name: "Gabon", currency: ["XAF"], telephoneCode: "+241", capitalCity: "Libreville", continent: "Africa", languages: ["French"] },
  "GM": { name: "Gambia", currency: ["GMD"], telephoneCode: "+220", capitalCity: "Banjul", continent: "Africa", languages: ["English"] },
  "GE": { name: "Georgia", currency: ["GEL"], telephoneCode: "+995", capitalCity: "Tbilisi", continent: "Asia", languages: ["Georgian"] },
  "DE": { name: "Germany", currency: ["EUR"], telephoneCode: "+49", capitalCity: "Berlin", continent: "Europe", languages: ["German"] },
  "GH": { name: "Ghana", currency: ["GHS"], telephoneCode: "+233", capitalCity: "Accra", continent: "Africa", languages: ["English"] },
  "GR": { name: "Greece", currency: ["EUR"], telephoneCode: "+30", capitalCity: "Athens", continent: "Europe", languages: ["Greek"] },
  "GD": { name: "Grenada", currency: ["XCD"], telephoneCode: "+1-473", capitalCity: "St. George's", continent: "North America", languages: ["English"] },
  "GT": { name: "Guatemala", currency: ["GTQ"], telephoneCode: "+502", capitalCity: "Guatemala City", continent: "North America", languages: ["Spanish"] },
  "GN": { name: "Guinea", currency: ["GNF"], telephoneCode: "+224", capitalCity: "Conakry", continent: "Africa", languages: ["French"] },
  "GW": { name: "Guinea-Bissau", currency: ["XOF"], telephoneCode: "+245", capitalCity: "Bissau", continent: "Africa", languages: ["Portuguese"] },
  "GY": { name: "Guyana", currency: ["GYD"], telephoneCode: "+592", capitalCity: "Georgetown", continent: "South America", languages: ["English"] },
  "HT": { name: "Haiti", currency: ["HTG"], telephoneCode: "+509", capitalCity: "Port-au-Prince", continent: "North America", languages: ["French", "Haitian Creole"] },
  "HN": { name: "Honduras", currency: ["HNL"], telephoneCode: "+504", capitalCity: "Tegucigalpa", continent: "North America", languages: ["Spanish"] },
  "HU": { name: "Hungary", currency: ["HUF"], telephoneCode: "+36", capitalCity: "Budapest", continent: "Europe", languages: ["Hungarian"] },
  "IS": { name: "Iceland", currency: ["ISK"], telephoneCode: "+354", capitalCity: "Reykjavík", continent: "Europe", languages: ["Icelandic"] },
  "IN": { name: "India", currency: ["INR"], telephoneCode: "+91", capitalCity: "New Delhi", continent: "Asia", languages: ["Hindi", "English"] },
  "ID": { name: "Indonesia", currency: ["IDR"], telephoneCode: "+62", capitalCity: "Jakarta", continent: "Asia", languages: ["Indonesian"] },
  "IR": { name: "Iran", currency: ["IRR"], telephoneCode: "+98", capitalCity: "Tehran", continent: "Asia", languages: ["Persian"] },
  "IQ": { name: "Iraq", currency: ["IQD"], telephoneCode: "+964", capitalCity: "Baghdad", continent: "Asia", languages: ["Arabic", "Kurdish"] },
  "IE": { name: "Ireland", currency: ["EUR"], telephoneCode: "+353", capitalCity: "Dublin", continent: "Europe", languages: ["Irish", "English"] },
  "IL": { name: "Israel", currency: ["ILS"], telephoneCode: "+972", capitalCity: "Jerusalem", continent: "Asia", languages: ["Hebrew"] },
  "IT": { name: "Italy", currency: ["EUR"], telephoneCode: "+39", capitalCity: "Rome", continent: "Europe", languages: ["Italian"] },
  "CI": { name: "Ivory Coast", currency: ["XOF"], telephoneCode: "+225", capitalCity: "Yamoussoukro", continent: "Africa", languages: ["French"] },
  "JM": { name: "Jamaica", currency: ["JMD"], telephoneCode: "+1-876", capitalCity: "Kingston", continent: "North America", languages: ["English"] },
  "JP": { name: "Japan", currency: ["JPY"], telephoneCode: "+81", capitalCity: "Tokyo", continent: "Asia", languages: ["Japanese"] },
  "JO": { name: "Jordan", currency: ["JOD"], telephoneCode: "+962", capitalCity: "Amman", continent: "Asia", languages: ["Arabic"] },
  "KZ": { name: "Kazakhstan", currency: ["KZT"], telephoneCode: "+7", capitalCity: "Astana", continent: "Asia", languages: ["Kazakh", "Russian"] },
  "KE": { name: "Kenya", currency: ["KES"], telephoneCode: "+254", capitalCity: "Nairobi", continent: "Africa", languages: ["Swahili", "English"] },
  "KI": { name: "Kiribati", currency: ["AUD"], telephoneCode: "+686", capitalCity: "Tarawa", continent: "Oceania", languages: ["English", "Gilbertese"] },
  "KP": { name: "Korea (North)", currency: ["KPW"], telephoneCode: "+850", capitalCity: "Pyongyang", continent: "Asia", languages: ["Korean"] },
  "KR": { name: "Korea (South)", currency: ["KRW"], telephoneCode: "+82", capitalCity: "Seoul", continent: "Asia", languages: ["Korean"] },
  "KW": { name: "Kuwait", currency: ["KWD"], telephoneCode: "+965", capitalCity: "Kuwait City", continent: "Asia", languages: ["Arabic"] },
  "KG": { name: "Kyrgyzstan", currency: ["KGS"], telephoneCode: "+996", capitalCity: "Bishkek", continent: "Asia", languages: ["Kyrgyz", "Russian"] },
  "LA": { name: "Laos", currency: ["LAK"], telephoneCode: "+856", capitalCity: "Vientiane", continent: "Asia", languages: ["Lao"] },
  "LV": { name: "Latvia", currency: ["EUR"], telephoneCode: "+371", capitalCity: "Riga", continent: "Europe", languages: ["Latvian"] },
  "LB": { name: "Lebanon", currency: ["LBP"], telephoneCode: "+961", capitalCity: "Beirut", continent: "Asia", languages: ["Arabic"] },
  "LS": { name: "Lesotho", currency: ["LSL", "ZAR"], telephoneCode: "+266", capitalCity: "Maseru", continent: "Africa", languages: ["Sesotho", "English"] },
  "LR": { name: "Liberia", currency: ["LRD"], telephoneCode: "+231", capitalCity: "Monrovia", continent: "Africa", languages: ["English"] },
  "LY": { name: "Libya", currency: ["LYD"], telephoneCode: "+218", capitalCity: "Tripoli", continent: "Africa", languages: ["Arabic"] },
  "LI": { name: "Liechtenstein", currency: ["CHF"], telephoneCode: "+423", capitalCity: "Vaduz", continent: "Europe", languages: ["German"] },
  "LT": { name: "Lithuania", currency: ["EUR"], telephoneCode: "+370", capitalCity: "Vilnius", continent: "Europe", languages: ["Lithuanian"] },
  "LU": { name: "Luxembourg", currency: ["EUR"], telephoneCode: "+352", capitalCity: "Luxembourg City", continent: "Europe", languages: ["Luxembourgish", "French", "German"] },
  "MG": { name: "Madagascar", currency: ["MGA"], telephoneCode: "+261", capitalCity: "Antananarivo", continent: "Africa", languages: ["Malagasy", "French"] },
  "MW": { name: "Malawi", currency: ["MWK"], telephoneCode: "+265", capitalCity: "Lilongwe", continent: "Africa", languages: ["English", "Chewa"] },
  "MY": { name: "Malaysia", currency: ["MYR"], telephoneCode: "+60", capitalCity: "Kuala Lumpur", continent: "Asia", languages: ["Malay"] },
  "MV": { name: "Maldives", currency: ["MVR"], telephoneCode: "+960", capitalCity: "Malé", continent: "Asia", languages: ["Dhivehi"] },
  "ML": { name: "Mali", currency: ["XOF"], telephoneCode: "+223", capitalCity: "Bamako", continent: "Africa", languages: ["French"] },
  "MT": { name: "Malta", currency: ["EUR"], telephoneCode: "+356", capitalCity: "Valletta", continent: "Europe", languages: ["Maltese", "English"] },
  "MH": { name: "Marshall Islands", currency: ["USD"], telephoneCode: "+692", capitalCity: "Majuro", continent: "Oceania", languages: ["Marshallese", "English"] },
  "MR": { name: "Mauritania", currency: ["MRU"], telephoneCode: "+222", capitalCity: "Nouakchott", continent: "Africa", languages: ["Arabic"] },
  "MU": { name: "Mauritius", currency: ["MUR"], telephoneCode: "+230", capitalCity: "Port Louis", continent: "Africa", languages: ["English", "French"] },
  "MX": { name: "Mexico", currency: ["MXN"], telephoneCode: "+52", capitalCity: "Mexico City", continent: "North America", languages: ["Spanish"] },
  "FM": { name: "Micronesia", currency: ["USD"], telephoneCode: "+691", capitalCity: "Palikir", continent: "Oceania", languages: ["English"] },
  "MD": { name: "Moldova", currency: ["MDL"], telephoneCode: "+373", capitalCity: "Chișinău", continent: "Europe", languages: ["Romanian"] },
  "MC": { name: "Monaco", currency: ["EUR"], telephoneCode: "+377", capitalCity: "Monaco", continent: "Europe", languages: ["French"] },
  "MN": { name: "Mongolia", currency: ["MNT"], telephoneCode: "+976", capitalCity: "Ulaanbaatar", continent: "Asia", languages: ["Mongolian"] },
  "ME": { name: "Montenegro", currency: ["EUR"], telephoneCode: "+382", capitalCity: "Podgorica", continent: "Europe", languages: ["Montenegrin"] },
  "MA": { name: "Morocco", currency: ["MAD"], telephoneCode: "+212", capitalCity: "Rabat", continent: "Africa", languages: ["Arabic", "Tamazight"] },
  "MZ": { name: "Mozambique", currency: ["MZN"], telephoneCode: "+258", capitalCity: "Maputo", continent: "Africa", languages: ["Portuguese"] },
  "MM": { name: "Myanmar (Burma)", currency: ["MMK"], telephoneCode: "+95", capitalCity: "Naypyidaw", continent: "Asia", languages: ["Burmese"] },
  "NA": { name: "Namibia", currency: ["NAD", "ZAR"], telephoneCode: "+264", capitalCity: "Windhoek", continent: "Africa", languages: ["English"] },
  "NR": { name: "Nauru", currency: ["AUD"], telephoneCode: "+674", capitalCity: "Yaren", continent: "Oceania", languages: ["Nauruan", "English"] },
  "NP": { name: "Nepal", currency: ["NPR"], telephoneCode: "+977", capitalCity: "Kathmandu", continent: "Asia", languages: ["Nepali"] },
  "NL": { name: "Netherlands", currency: ["EUR"], telephoneCode: "+31", capitalCity: "Amsterdam", continent: "Europe", languages: ["Dutch"] },
  "NZ": { name: "New Zealand", currency: ["NZD"], telephoneCode: "+64", capitalCity: "Wellington", continent: "Oceania", languages: ["English", "Māori"] },
  "NI": { name: "Nicaragua", currency: ["NIO"], telephoneCode: "+505", capitalCity: "Managua", continent: "North America", languages: ["Spanish"] },
  "NE": { name: "Niger", currency: ["XOF"], telephoneCode: "+227", capitalCity: "Niamey", continent: "Africa", languages: ["French"] },
  "NG": { name: "Nigeria", currency: ["NGN"], telephoneCode: "+234", capitalCity: "Abuja", continent: "Africa", languages: ["English", "Igbo", "Yoruba", "Hausa"] },
  "MK": { name: "North Macedonia", currency: ["MKD"], telephoneCode: "+389", capitalCity: "Skopje", continent: "Europe", languages: ["Macedonian"] },
  "NO": { name: "Norway", currency: ["NOK"], telephoneCode: "+47", capitalCity: "Oslo", continent: "Europe", languages: ["Norwegian"] },
  "OM": { name: "Oman", currency: ["OMR"], telephoneCode: "+968", capitalCity: "Muscat", continent: "Asia", languages: ["Arabic"] },
  "PK": { name: "Pakistan", currency: ["PKR"], telephoneCode: "+92", capitalCity: "Islamabad", continent: "Asia", languages: ["Urdu", "English"] },
  "PW": { name: "Palau", currency: ["USD"], telephoneCode: "+680", capitalCity: "Ngerulmud", continent: "Oceania", languages: ["Palauan", "English"] },
  "PS": { name: "Palestine State", currency: ["ILS", "JOD"], telephoneCode: "+970", capitalCity: "Jerusalem", continent: "Asia", languages: ["Arabic"] },
  "PA": { name: "Panama", currency: ["PAB", "USD"], telephoneCode: "+507", capitalCity: "Panama City", continent: "North America", languages: ["Spanish"] },
  "PG": { name: "Papua New Guinea", currency: ["PGK"], telephoneCode: "+675", capitalCity: "Port Moresby", continent: "Oceania", languages: ["Hiri Motu", "Tok Pisin", "English"] },
  "PY": { name: "Paraguay", currency: ["PYG"], telephoneCode: "+595", capitalCity: "Asunción", continent: "South America", languages: ["Spanish", "Guarani"] },
  "PE": { name: "Peru", currency: ["PEN"], telephoneCode: "+51", capitalCity: "Lima", continent: "South America", languages: ["Spanish", "Quechua", "Aymara"] },
  "PH": { name: "Philippines", currency: ["PHP"], telephoneCode: "+63", capitalCity: "Manila", continent: "Asia", languages: ["Filipino", "English"] },
  "PL": { name: "Poland", currency: ["PLN"], telephoneCode: "+48", capitalCity: "Warsaw", continent: "Europe", languages: ["Polish"] },
  "PT": { name: "Portugal", currency: ["EUR"], telephoneCode: "+351", capitalCity: "Lisbon", continent: "Europe", languages: ["Portuguese"] },
  "QA": { name: "Qatar", currency: ["QAR"], telephoneCode: "+974", capitalCity: "Doha", continent: "Asia", languages: ["Arabic"] },
  "RO": { name: "Romania", currency: ["RON"], telephoneCode: "+40", capitalCity: "Bucharest", continent: "Europe", languages: ["Romanian"] },
  "RU": { name: "Russia", currency: ["RUB"], telephoneCode: "+7", capitalCity: "Moscow", continent: "Europe", languages: ["Russian"] },
  "RW": { name: "Rwanda", currency: ["RWF"], telephoneCode: "+250", capitalCity: "Kigali", continent: "Africa", languages: ["Kinyarwanda", "French", "English", "Swahili"] },
  "KN": { name: "Saint Kitts and Nevis", currency: ["XCD"], telephoneCode: "+1-869", capitalCity: "Basseterre", continent: "North America", languages: ["English"] },
  "LC": { name: "Saint Lucia", currency: ["XCD"], telephoneCode: "+1-758", capitalCity: "Castries", continent: "North America", languages: ["English"] },
  "VC": { name: "Saint Vincent and the Grenadines", currency: ["XCD"], telephoneCode: "+1-784", capitalCity: "Kingstown", continent: "North America", languages: ["English"] },
  "WS": { name: "Samoa", currency: ["WST"], telephoneCode: "+685", capitalCity: "Apia", continent: "Oceania", languages: ["Samoan", "English"] },
  "SM": { name: "San Marino", currency: ["EUR"], telephoneCode: "+378", capitalCity: "San Marino", continent: "Europe", languages: ["Italian"] },
  "ST": { name: "Sao Tome and Principe", currency: ["STN"], telephoneCode: "+239", capitalCity: "São Tomé", continent: "Africa", languages: ["Portuguese"] },
  "SA": { name: "Saudi Arabia", currency: ["SAR"], telephoneCode: "+966", capitalCity: "Riyadh", continent: "Asia", languages: ["Arabic"] },
  "SN": { name: "Senegal", currency: ["XOF"], telephoneCode: "+221", capitalCity: "Dakar", continent: "Africa", languages: ["French"] },
  "RS": { name: "Serbia", currency: ["RSD"], telephoneCode: "+381", capitalCity: "Belgrade", continent: "Europe", languages: ["Serbian"] },
  "SC": { name: "Seychelles", currency: ["SCR"], telephoneCode: "+248", capitalCity: "Victoria", continent: "Africa", languages: ["Seychellois Creole", "English", "French"] },
  "SL": { name: "Sierra Leone", currency: ["SLL"], telephoneCode: "+232", capitalCity: "Freetown", continent: "Africa", languages: ["English"] },
  "SG": { name: "Singapore", currency: ["SGD"], telephoneCode: "+65", capitalCity: "Singapore", continent: "Asia", languages: ["English", "Malay", "Mandarin", "Tamil"] },
  "SK": { name: "Slovakia", currency: ["EUR"], telephoneCode: "+421", capitalCity: "Bratislava", continent: "Europe", languages: ["Slovak"] },
  "SI": { name: "Slovenia", currency: ["EUR"], telephoneCode: "+386", capitalCity: "Ljubljana", continent: "Europe", languages: ["Slovenian"] },
  "SB": { name: "Solomon Islands", currency: ["SBD"], telephoneCode: "+677", capitalCity: "Honiara", continent: "Oceania", languages: ["English"] },
  "SO": { name: "Somalia", currency: ["SOS"], telephoneCode: "+252", capitalCity: "Mogadishu", continent: "Africa", languages: ["Somali", "Arabic"] },
  "ZA": { name: "South Africa", currency: ["ZAR"], telephoneCode: "+27", capitalCity: "Pretoria", continent: "Africa", languages: ["Zulu", "Xhosa", "Afrikaans", "English"] },
  "SS": { name: "South Sudan", currency: ["SSP"], telephoneCode: "+211", capitalCity: "Juba", continent: "Africa", languages: ["English"] },
  "ES": { name: "Spain", currency: ["EUR"], telephoneCode: "+34", capitalCity: "Madrid", continent: "Europe", languages: ["Spanish"] },
  "LK": { name: "Sri Lanka", currency: ["LKR"], telephoneCode: "+94", capitalCity: "Sri Jayawardenepura Kotte", continent: "Asia", languages: ["Sinhala", "Tamil"] },
  "SD": { name: "Sudan", currency: ["SDG"], telephoneCode: "+249", capitalCity: "Khartoum", continent: "Africa", languages: ["Arabic", "English"] },
  "SR": { name: "Suriname", currency: ["SRD"], telephoneCode: "+597", capitalCity: "Paramaribo", continent: "South America", languages: ["Dutch"] },
  "SE": { name: "Sweden", currency: ["SEK"], telephoneCode: "+46", capitalCity: "Stockholm", continent: "Europe", languages: ["Swedish"] },
  "CH": { name: "Switzerland", currency: ["CHF"], telephoneCode: "+41", capitalCity: "Bern", continent: "Europe", languages: ["German", "French", "Italian", "Romansh"] },
  "SY": { name: "Syria", currency: ["SYP"], telephoneCode: "+963", capitalCity: "Damascus", continent: "Asia", languages: ["Arabic"] },
  "TJ": { name: "Tajikistan", currency: ["TJS"], telephoneCode: "+992", capitalCity: "Dushanbe", continent: "Asia", languages: ["Tajik", "Russian"] },
  "TZ": { name: "Tanzania", currency: ["TZS"], telephoneCode: "+255", capitalCity: "Dodoma", continent: "Africa", languages: ["Swahili", "English"] },
  "TH": { name: "Thailand", currency: ["THB"], telephoneCode: "+66", capitalCity: "Bangkok", continent: "Asia", languages: ["Thai"] },
  "TG": { name: "Togo", currency: ["XOF"], telephoneCode: "+228", capitalCity: "Lomé", continent: "Africa", languages: ["French"] },
  "TO": { name: "Tonga", currency: ["TOP"], telephoneCode: "+676", capitalCity: "Nukuʻalofa", continent: "Oceania", languages: ["Tongan", "English"] },
  "TT": { name: "Trinidad and Tobago", currency: ["TTD"], telephoneCode: "+1-868", capitalCity: "Port of Spain", continent: "North America", languages: ["English"] },
  "TN": { name: "Tunisia", currency: ["TND"], telephoneCode: "+216", capitalCity: "Tunis", continent: "Africa", languages: ["Arabic"] },
  "TR": { name: "Turkey", currency: ["TRY"], telephoneCode: "+90", capitalCity: "Ankara", continent: "Asia", languages: ["Turkish"] },
  "TM": { name: "Turkmenistan", currency: ["TMT"], telephoneCode: "+993", capitalCity: "Ashgabat", continent: "Asia", languages: ["Turkmen"] },
  "TV": { name: "Tuvalu", currency: ["AUD"], telephoneCode: "+688", capitalCity: "Funafuti", continent: "Oceania", languages: ["Tuvaluan", "English"] },
  "UG": { name: "Uganda", currency: ["UGX"], telephoneCode: "+256", capitalCity: "Kampala", continent: "Africa", languages: ["English", "Swahili"] },
  "UA": { name: "Ukraine", currency: ["UAH"], telephoneCode: "+380", capitalCity: "Kyiv", continent: "Europe", languages: ["Ukrainian"] },
  "AE": { name: "United Arab Emirates", currency: ["AED"], telephoneCode: "+971", capitalCity: "Abu Dhabi", continent: "Asia", languages: ["Arabic"] },
  "GB": { name: "United Kingdom", currency: ["GBP"], telephoneCode: "+44", capitalCity: "London", continent: "Europe", languages: ["English"] },
  "US": { name: "United States", currency: ["USD"], telephoneCode: "+1", capitalCity: "Washington, D.C.", continent: "North America", languages: ["English"] },
  "UY": { name: "Uruguay", currency: ["UYU"], telephoneCode: "+598", capitalCity: "Montevideo", continent: "South America", languages: ["Spanish"] },
  "UZ": { name: "Uzbekistan", currency: ["UZS"], telephoneCode: "+998", capitalCity: "Tashkent", continent: "Asia", languages: ["Uzbek"] },
  "VU": { name: "Vanuatu", currency: ["VUV"], telephoneCode: "+678", capitalCity: "Port Vila", continent: "Oceania", languages: ["Bislama", "English", "French"] },
  "VA": { name: "Vatican City", currency: ["EUR"], telephoneCode: "+379", capitalCity: "Vatican City", continent: "Europe", languages: ["Italian", "Latin"] },
  "VE": { name: "Venezuela", currency: ["VES"], telephoneCode: "+58", capitalCity: "Caracas", continent: "South America", languages: ["Spanish"] },
  "VN": { name: "Vietnam", currency: ["VND"], telephoneCode: "+84", capitalCity: "Hanoi", continent: "Asia", languages: ["Vietnamese"] },
  "YE": { name: "Yemen", currency: ["YER"], telephoneCode: "+967", capitalCity: "Sana'a", continent: "Asia", languages: ["Arabic"] },
  "ZM": { name: "Zambia", currency: ["ZMW"], telephoneCode: "+260", capitalCity: "Lusaka", continent: "Africa", languages: ["English"] },
  "ZW": { name: "Zimbabwe", currency: ["ZWL"], telephoneCode: "+263", capitalCity: "Harare", continent: "Africa", languages: ["English", "Shona", "Ndebele"] }
};

/**
 * Get single country by ISO Code
 * Returns country data or undefined.
 */
export const getCountryByCode = (code: string): CountryData | undefined => {
  return worldCountries[code.toUpperCase()];
};

/**
 * Get * countries by continent name
 */
export const getCountriesByContinent = (continent: Continent): CountryData[] => {
  return Object.values(worldCountries).filter(
    (country) => country.continent === continent
  );
};

/**
 * Find * countries that speak specified language
 */
export const getCountriesByLanguage = (language: string): CountryData[] => {
  const searchLang = language.toLowerCase();
  return Object.values(worldCountries).filter((country) =>
    country.languages.some((lang) => lang.toLowerCase() === searchLang)
  );
};

/**
 * Filter country by name
 */
export const searchCountriesByName = (query: string): CountryData[] => {
  const searchTerm = query.toLowerCase();
  return Object.values(worldCountries).filter((country) =>
    country.name.toLowerCase().includes(searchTerm)
  );
};

/**
 * Get * unique global currencies
 */
export const getAllUniqueCurrencies = (): string[] => {
  const allCurrencies = Object.values(worldCountries).flatMap((c) => c.currency);
  return Array.from(new Set(allCurrencies)).sort();
};