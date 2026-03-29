export interface NigerianStateData {
  name: string;
  capital: string;
  majorCities: string[];
  lgas: string[];
  languages: string[];
}

export type NigeriaDictionary = Record<string, NigerianStateData>;

export const nigeriaStates: NigeriaDictionary = {
  "ABIA": {
    name: "Abia",
    capital: "Umuahia",
    majorCities: ["Aba", "Umuahia", "Arochukwu", "Ohafia"],
    lgas: ["Aba North", "Aba South", "Arochukwu", "Bende", "Ikwuano", "Isiala Ngwa North", "Isiala Ngwa South", "Isuikwuato", "Obi Ngwa", "Ohafia", "Osisioma", "Ugwunagbo", "Ukwa East", "Ukwa West", "Umuahia North", "Umuahia South", "Umu Nneochi"],
    languages: ["Igbo"]
  },
  "ADAMAWA": {
    name: "Adamawa",
    capital: "Yola",
    majorCities: ["Yola", "Mubi", "Jimeta", "Numan"],
    lgas: ["Demsa", "Fufure", "Ganye", "Gayuk", "Gombi", "Grie", "Hong", "Jada", "Lamurde", "Madagali", "Maiha", "Mayo Belwa", "Michika", "Mubi North", "Mubi South", "Numan", "Shelleng", "Song", "Toungo", "Yola North", "Yola South"],
    languages: ["Fulfulde", "Hausa", "Bata", "Bwatiye", "Chamba", "Higgi", "Margi"]
  },
  "AKWA_IBOM": {
    name: "Akwa Ibom",
    capital: "Uyo",
    majorCities: ["Uyo", "Eket", "Ikot Ekpene", "Oron"],
    lgas: ["Abak", "Eastern Obolo", "Eket", "Esit Eket", "Essien Udim", "Etim Ekpo", "Etinan", "Ibeno", "Ibesikpo Asutan", "Ibiono-Ibom", "Ika", "Ikono", "Ikot Abasi", "Ikot Ekpene", "Ini", "Itu", "Mbo", "Mkpat-Enin", "Nsit-Atai", "Nsit-Ibom", "Nsit-Ubium", "Obot Akara", "Okobo", "Onna", "Oron", "Oruk Anam", "Udung-Uko", "Ukanafun", "Uruan", "Urue-Offong/Oruko", "Uyo"],
    languages: ["Ibibio", "Annang", "Oron", "Eket"]
  },
  "ANAMBRA": {
    name: "Anambra",
    capital: "Awka",
    majorCities: ["Onitsha", "Awka", "Nnewi", "Ekwulobia"],
    lgas: ["Aguata", "Anambra East", "Anambra West", "Anaocha", "Awka North", "Awka South", "Ayamelum", "Dunukofia", "Ekwusigo", "Idemili North", "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", "Ogbaru", "Onitsha North", "Onitsha South", "Orumba North", "Orumba South", "Oyi"],
    languages: ["Igbo"]
  },
  "BAUCHI": {
    name: "Bauchi",
    capital: "Bauchi",
    majorCities: ["Bauchi", "Azare", "Misau", "Jama'are"],
    lgas: ["Alkaleri", "Bauchi", "Bogoro", "Damban", "Darazo", "Dass", "Gamawa", "Ganjuwa", "Giade", "Itas/Gadau", "Jama'are", "Katagum", "Kirfi", "Misau", "Ningi", "Shira", "Tafawa Balewa", "Toro", "Warji", "Zaki"],
    languages: ["Hausa", "Fulfulde", "Gerawa", "Sayawa", "Jarawa"]
  },
  "BAYELSA": {
    name: "Bayelsa",
    capital: "Yenagoa",
    majorCities: ["Yenagoa", "Amassoma", "Ogbia", "Nembe"],
    lgas: ["Brass", "Ekeremor", "Kolokuma/Opokuma", "Nembe", "Ogbia", "Sagbama", "Southern Ijaw", "Yenagoa"],
    languages: ["Ijaw", "Nembe", "Ogbia", "Epie-Atissa"]
  },
  "BENUE": {
    name: "Benue",
    capital: "Makurdi",
    majorCities: ["Makurdi", "Gboko", "Otukpo", "Katsina-Ala"],
    lgas: ["Ado", "Agatu", "Apa", "Buruku", "Gboko", "Guma", "Gwer East", "Gwer West", "Katsina-Ala", "Konshisha", "Kwande", "Logo", "Makurdi", "Obi", "Ogbadibo", "Ohimini", "Oju", "Okpokwu", "Otukpo", "Tarka", "Ukum", "Ushongo", "Vandeikya"],
    languages: ["Tiv", "Idoma", "Igede"]
  },
  "BORNO": {
    name: "Borno",
    capital: "Maiduguri",
    majorCities: ["Maiduguri", "Jere", "Biu", "Bama"],
    lgas: ["Abadam", "Askira/Uba", "Bama", "Bayo", "Biu", "Chibok", "Damboa", "Dikwa", "Gubio", "Guzamala", "Gwoza", "Hawul", "Jere", "Kaga", "Kala/Balge", "Konduga", "Kukawa", "Kwaya Kusar", "Mafa", "Magumeri", "Maiduguri", "Marte", "Mobbar", "Monguno", "Ngala", "Nganzai", "Shani"],
    languages: ["Kanuri", "Hausa", "Babur", "Marghi", "Shuwa Arabic"]
  },
  "CROSS_RIVER": {
    name: "Cross River",
    capital: "Calabar",
    majorCities: ["Calabar", "Ikom", "Ogoja", "Ugep"],
    lgas: ["Abi", "Akamkpa", "Akpabuyo", "Bakassi", "Bekwarra", "Biase", "Boki", "Calabar Municipal", "Calabar South", "Etung", "Ikom", "Obanliku", "Obubra", "Obudu", "Odukpani", "Ogoja", "Yakuur", "Yala"],
    languages: ["Efik", "Ejagham", "Bekwarra"]
  },
  "DELTA": {
    name: "Delta",
    capital: "Asaba",
    majorCities: ["Warri", "Asaba", "Sapele", "Ughelli", "Agbor"],
    lgas: ["Aniocha North", "Aniocha South", "Bomadi", "Burutu", "Ethiope East", "Ethiope West", "Ika North East", "Ika South", "Isoko North", "Isoko South", "Ndokwa East", "Ndokwa West", "Okpe", "Oshimili North", "Oshimili South", "Patani", "Sapele", "Udu", "Ughelli North", "Ughelli South", "Ukwuani", "Uvwie", "Warri North", "Warri South", "Warri South West"],
    languages: ["Urhobo", "Igbo", "Ijaw", "Isoko", "Itsekiri"]
  },
  "EBONYI": {
    name: "Ebonyi",
    capital: "Abakaliki",
    majorCities: ["Abakaliki", "Afikpo", "Onueke"],
    lgas: ["Abakaliki", "Afikpo North", "Afikpo South", "Ebonyi", "Ezza North", "Ezza South", "Ikwo", "Ishielu", "Ivo", "Izzi", "Ohaozara", "Ohaukwu", "Onicha"],
    languages: ["Igbo"]
  },
  "EDO": {
    name: "Edo",
    capital: "Benin City",
    majorCities: ["Benin City", "Auchi", "Uromi", "Ekpoma"],
    lgas: ["Akoko-Edo", "Egor", "Esan Central", "Esan North-East", "Esan South-East", "Esan West", "Etsako Central", "Etsako East", "Etsako West", "Igueben", "Ikpoba Okha", "Orhionmwon", "Oredo", "Ovia North-East", "Ovia South-West", "Owan East", "Owan West", "Uhunmwonde"],
    languages: ["Edo", "Esan", "Afemai", "Ora"]
  },
  "EKITI": {
    name: "Ekiti",
    capital: "Ado Ekiti",
    majorCities: ["Ado Ekiti", "Ikere Ekiti", "Ilawe Ekiti", "Ijero Ekiti"],
    lgas: ["Ado Ekiti", "Efon", "Ekiti East", "Ekiti South-West", "Ekiti West", "Emure", "Gbonyin", "Ido Osi", "Ijero", "Ikere", "Ikole", "Ilejemeje", "Irepodun/Ifelodun", "Ise/Orun", "Moba", "Oye"],
    languages: ["Yoruba"]
  },
  "ENUGU": {
    name: "Enugu",
    capital: "Enugu",
    majorCities: ["Enugu", "Nsukka", "Agbani", "Awgu"],
    lgas: ["Aninri", "Awgu", "Enugu East", "Enugu North", "Enugu South", "Ezeagu", "Igbo Etiti", "Igbo Eze North", "Igbo Eze South", "Isi Uzo", "Nkanu East", "Nkanu West", "Nsukka", "Oji River", "Udenu", "Udi", "Uzo Uwani"],
    languages: ["Igbo"]
  },
  "GOMBE": {
    name: "Gombe",
    capital: "Gombe",
    majorCities: ["Gombe", "Kaltungo", "Billiri", "Bajoga"],
    lgas: ["Akko", "Balanga", "Billiri", "Dukku", "Funakaye", "Gombe", "Kaltungo", "Kwami", "Nafada", "Shongom", "Yamaltu/Deba"],
    languages: ["Hausa", "Tangale", "Tera", "Waja", "Fulfulde"]
  },
  "IMO": {
    name: "Imo",
    capital: "Owerri",
    majorCities: ["Owerri", "Orlu", "Okigwe", "Oguta"],
    lgas: ["Aboh Mbaise", "Ahiazu Mbaise", "Ehime Mbano", "Ezinihitte", "Ideato North", "Ideato South", "Ihitte/Uboma", "Ikeduru", "Isiala Mbano", "Isu", "Mbaitoli", "Ngor Okpala", "Njaba", "Nkwerre", "Nwangele", "Obowo", "Oguta", "Ohaji/Egbema", "Okigwe", "Orlu", "Orsu", "Oru East", "Oru West", "Owerri Municipal", "Owerri North", "Owerri West", "Unuimo"],
    languages: ["Igbo"]
  },
  "JIGAWA": {
    name: "Jigawa",
    capital: "Dutse",
    majorCities: ["Dutse", "Hadejia", "Kazaure", "Gumel"],
    lgas: ["Auyo", "Babura", "Biriniwa", "Birnin Kudu", "Buji", "Dutse", "Gagarawa", "Garki", "Gumel", "Guri", "Gwaram", "Gwiwa", "Hadejia", "Jahun", "Kafin Hausa", "Kaugama", "Kazaure", "Kiri Kasama", "Kiyawa", "Maigatari", "Malam Madori", "Miga", "Ringim", "Roni", "Sule Tankarkar", "Taura", "Yankwashi"],
    languages: ["Hausa", "Fulfulde"]
  },
  "KADUNA": {
    name: "Kaduna",
    capital: "Kaduna",
    majorCities: ["Kaduna", "Zaria", "Kafanchan", "Zonkwa"],
    lgas: ["Birnin Gwari", "Chikun", "Giwa", "Igabi", "Ikara", "Jaba", "Jema'a", "Kachia", "Kaduna North", "Kaduna South", "Kagarko", "Kajuru", "Kaura", "Kauru", "Kubau", "Kudan", "Lere", "Makarfi", "Sabon Gari", "Sanga", "Soba", "Zangon Kataf", "Zaria"],
    languages: ["Hausa", "Gbagyi", "Tyap", "Fulfulde"]
  },
  "KANO": {
    name: "Kano",
    capital: "Kano",
    majorCities: ["Kano", "Wudil", "Gwarzo", "Bichi"],
    lgas: ["Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu", "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Mallam", "Gaya", "Gezawa", "Gwale", "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura", "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila", "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"],
    languages: ["Hausa", "Fulfulde"]
  },
  "KATSINA": {
    name: "Katsina",
    capital: "Katsina",
    majorCities: ["Katsina", "Daura", "Funtua", "Malumfashi"],
    lgas: ["Bakori", "Batagarawa", "Batsari", "Baure", "Bindawa", "Charanchi", "Dandume", "Danja", "Dan Musa", "Daura", "Dutsi", "Dutsin Ma", "Faskari", "Funtua", "Ingawa", "Jibia", "Kafur", "Kaita", "Kankara", "Kankia", "Katsina", "Kurfi", "Kusada", "Mai'Adua", "Malumfashi", "Mani", "Mashi", "Matazu", "Musawa", "Rimi", "Sabuwa", "Safana", "Sandamu", "Zango"],
    languages: ["Hausa", "Fulfulde"]
  },
  "KEBBI": {
    name: "Kebbi",
    capital: "Birnin Kebbi",
    majorCities: ["Birnin Kebbi", "Argungu", "Yauri", "Zuru"],
    lgas: ["Aleiro", "Arewa Dandi", "Argungu", "Augie", "Bagudo", "Birnin Kebbi", "Bunza", "Dandi", "Fakai", "Gwandu", "Jega", "Kalgo", "Koko/Besse", "Maiyama", "Ngaski", "Sakaba", "Shanga", "Suru", "Wasagu/Danko", "Yauri", "Zuru"],
    languages: ["Hausa", "Fulfulde", "Dakarkari", "Zarma"]
  },
  "KOGI": {
    name: "Kogi",
    capital: "Lokoja",
    majorCities: ["Lokoja", "Okene", "Idah", "Kabba", "Anyigba"],
    lgas: ["Adavi", "Ajaokuta", "Ankpa", "Bassa", "Dekina", "Ibaji", "Idah", "Igalamela Odolu", "Ijumu", "Kabba/Bunu", "Kogi", "Lokoja", "Mopa Muro", "Ofu", "Ogori/Magongo", "Okehi", "Okene", "Olamaboro", "Omala", "Yagba East", "Yagba West"],
    languages: ["Igala", "Ebira", "Okun", "Bassa"]
  },
  "KWARA": {
    name: "Kwara",
    capital: "Ilorin",
    majorCities: ["Ilorin", "Offa", "Jebba", "Omu-Aran"],
    lgas: ["Asa", "Baruten", "Edu", "Ekiti", "Ifelodun", "Ilorin East", "Ilorin South", "Ilorin West", "Irepodun", "Isin", "Kaiama", "Moro", "Offa", "Oke Ero", "Oyun", "Pategi"],
    languages: ["Yoruba", "Nupe", "Bariba", "Fulfulde"]
  },
  "LAGOS": {
    name: "Lagos",
    capital: "Ikeja",
    majorCities: ["Lagos", "Ikeja", "Epe", "Badagry", "Ikorodu"],
    lgas: ["Agege", "Ajeromi-Ifelodun", "Alimosho", "Amuwo-Odofin", "Apapa", "Badagry", "Epe", "Eti Osa", "Ibeju-Lekki", "Ifako-Ijaiye", "Ikeja", "Ikorodu", "Kosofe", "Lagos Island", "Lagos Mainland", "Mushin", "Ojo", "Oshodi-Isolo", "Shomolu", "Surulere"],
    languages: ["Yoruba", "English", "Nigerian Pidgin"]
  },
  "NASARAWA": {
    name: "Nasarawa",
    capital: "Lafia",
    majorCities: ["Lafia", "Keffi", "Akwanga", "Karu"],
    lgas: ["Akwanga", "Awe", "Doma", "Karu", "Keana", "Keffi", "Kokona", "Lafia", "Nasarawa", "Nasarawa Egon", "Obi", "Toto", "Wamba"],
    languages: ["Alago", "Eggon", "Hausa", "Gwandara"]
  },
  "NIGER": {
    name: "Niger",
    capital: "Minna",
    majorCities: ["Minna", "Bida", "Suleja", "Kontagora"],
    lgas: ["Agaie", "Agwara", "Bida", "Borgu", "Bosso", "Chanchaga", "Edati", "Gbako", "Gurara", "Katcha", "Kontagora", "Lapai", "Lavun", "Magama", "Mariga", "Mashegu", "Mokwa", "Moya", "Paikoro", "Rafi", "Rijau", "Shiroro", "Suleja", "Tafa", "Wushishi"],
    languages: ["Nupe", "Gbagyi", "Hausa", "Kambari"]
  },
  "OGUN": {
    name: "Ogun",
    capital: "Abeokuta",
    majorCities: ["Abeokuta", "Ijebu Ode", "Sagamu", "Ota"],
    lgas: ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Egbado North", "Egbado South", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu North East", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Shagamu"],
    languages: ["Yoruba"]
  },
  "ONDO": {
    name: "Ondo",
    capital: "Akure",
    majorCities: ["Akure", "Ondo City", "Owo", "Okitipupa"],
    lgas: ["Akoko North-East", "Akoko North-West", "Akoko South-East", "Akoko South-West", "Akure North", "Akure South", "Ese Odo", "Idanre", "Ifedore", "Ilaje", "Ile Oluji/Okeigbo", "Irele", "Odigbo", "Okitipupa", "Ondo East", "Ondo West", "Ose", "Owo"],
    languages: ["Yoruba", "Ijaw"]
  },
  "OSUN": {
    name: "Osun",
    capital: "Osogbo",
    majorCities: ["Osogbo", "Ile-Ife", "Ilesa", "Ede"],
    lgas: ["Aiyedaade", "Aiyedire", "Atakunmosa East", "Atakunmosa West", "Boluwaduro", "Boripe", "Ede North", "Ede South", "Egbedore", "Ejigbo", "Ife Central", "Ife East", "Ife North", "Ife South", "Ifedayo", "Ifelodun", "Ila", "Ilesa East", "Ilesa West", "Irepodun", "Irewole", "Isokan", "Iwo", "Obokun", "Odo Otin", "Ola Oluwa", "Olorunda", "Oriade", "Orolu", "Osogbo"],
    languages: ["Yoruba"]
  },
  "OYO": {
    name: "Oyo",
    capital: "Ibadan",
    majorCities: ["Ibadan", "Ogbomosho", "Oyo", "Iseyin"],
    lgas: ["Afijio", "Akinyele", "Atiba", "Atisbo", "Egbeda", "Ibadan North", "Ibadan North-East", "Ibadan North-West", "Ibadan South-East", "Ibadan South-West", "Ibarapa Central", "Ibarapa East", "Ibarapa North", "Ido", "Irepo", "Iseyin", "Itesiwaju", "Iwajowa", "Kajola", "Lagelu", "Ogbomosho North", "Ogbomosho South", "Ogo Oluwa", "Olorunsogo", "Oluyole", "Ona Ara", "Orelope", "Ori Ire", "Oyo East", "Oyo West", "Saki East", "Saki West", "Surulere"],
    languages: ["Yoruba"]
  },
  "PLATEAU": {
    name: "Plateau",
    capital: "Jos",
    majorCities: ["Jos", "Pankshin", "Shendam", "Bukuru"],
    lgas: ["Bokkos", "Barkin Ladi", "Bassa", "Jos East", "Jos North", "Jos South", "Kanam", "Kanke", "Langtang North", "Langtang South", "Mangu", "Mikang", "Pankshin", "Qua'an Pan", "Riyom", "Shendam", "Wase"],
    languages: ["Berom", "Ngas", "Tarok", "Hausa", "Mwaghavul"]
  },
  "RIVERS": {
    name: "Rivers",
    capital: "Port Harcourt",
    majorCities: ["Port Harcourt", "Obio-Akpor", "Eleme", "Bonny"],
    lgas: ["Abua/Odual", "Ahoada East", "Ahoada West", "Akuku-Toru", "Andoni", "Asari-Toru", "Bonny", "Degema", "Eleme", "Emuoha", "Etche", "Gokana", "Ikwerre", "Khana", "Obio/Akpor", "Ogba/Egbema/Ndoni", "Ogu/Bolo", "Okrika", "Omuma", "Opobo/Nkoro", "Oyigbo", "Port Harcourt", "Tai"],
    languages: ["Ikwerre", "Ijaw", "Ogoni", "Kalabari", "Igbo"]
  },
  "SOKOTO": {
    name: "Sokoto",
    capital: "Sokoto",
    majorCities: ["Sokoto", "Tambuwal", "Gwadabawa", "Illela"],
    lgas: ["Binji", "Bodinga", "Dange Shuni", "Gada", "Goronyo", "Gudu", "Gwadabawa", "Illela", "Isa", "Kebbe", "Kware", "Rabah", "Sabon Birni", "Shagari", "Silame", "Sokoto North", "Sokoto South", "Tambuwal", "Tangaza", "Tureta", "Wamako", "Wurno", "Yabo"],
    languages: ["Hausa", "Fulfulde"]
  },
  "TARABA": {
    name: "Taraba",
    capital: "Jalingo",
    majorCities: ["Jalingo", "Wukari", "Bali", "Takum"],
    lgas: ["Ardo Kola", "Bali", "Donga", "Gashaka", "Gassol", "Ibi", "Jalingo", "Karim Lamido", "Kumi", "Lau", "Sardauna", "Takum", "Ussa", "Wukari", "Yorro", "Zing"],
    languages: ["Fulfulde", "Jukun", "Hausa", "Mumuye", "Tiv"]
  },
  "YOBE": {
    name: "Yobe",
    capital: "Damaturu",
    majorCities: ["Damaturu", "Potiskum", "Gashua", "Nguru"],
    lgas: ["Bade", "Bursari", "Damaturu", "Fika", "Fune", "Geidam", "Gujba", "Gulani", "Jakusko", "Karasuwa", "Machina", "Nangere", "Nguru", "Potiskum", "Tarmuwa", "Yunusari", "Yusufari"],
    languages: ["Kanuri", "Hausa", "Karekare", "Bade", "Fulfulde"]
  },
  "ZAMFARA": {
    name: "Zamfara",
    capital: "Gusau",
    majorCities: ["Gusau", "Kaura Namoda", "Talata Mafara"],
    lgas: ["Anka", "Bakura", "Birnin Magaji/Kiyaw", "Bukkuyum", "Bungudu", "Gummi", "Gusau", "Kaura Namoda", "Maradun", "Maru", "Shinkafi", "Talata Mafara", "Tsafe", "Zurmi"],
    languages: ["Hausa", "Fulfulde"]
  },
  "FCT": {
    name: "Federal Capital Territory",
    capital: "Abuja",
    majorCities: ["Abuja", "Gwagwalada", "Kuje", "Bwari"],
    lgas: ["Abaji", "Bwari", "Gwagwalada", "Kuje", "Kwali", "Municipal Area Council (AMAC)"],
    languages: ["English", "Hausa", "Gbagyi", "Gwandara"]
  }
};

/**
 * Get Nigerian state by name
 * 
 * E.g. "lagos", "Lagos", "LAGOS" returns Lagos state object.
 */
export const getStateByName = (name: string): NigerianStateData | undefined => {
  const searchName = name.trim().toLowerCase();
  return Object.values(nigeriaStates).find(
    (state) => state.name.toLowerCase() === searchName
  );
};

/**
 * Get Nigerian state by key using O(1) Lookup
 * 
 * E.g. "cross river", "Cross River", "CROSS RIVER" returns CROSS_RIVER state object.
 */
export const getStateByKey = (name: string): NigerianStateData | undefined => {
  const formattedKey = name.trim().toUpperCase().replace(/\s+/g, '_');
  return nigeriaStates[formattedKey];
};

/**
 * Find Nigerian state with specified Local Government Area (LGA) name
 */
export const getStateByLga = (lgaName: string): NigerianStateData | undefined => {
  const searchLga = lgaName.trim().toLowerCase();
  return Object.values(nigeriaStates).find((state) =>
    state.lgas.some((lga) => lga.toLowerCase() === searchLga)
  );
};

/**
 * Find Nigerian state with specified City name
 */
export const getStateByCity = (cityName: string): NigerianStateData | undefined => {
  const searchCity = cityName.trim().toLowerCase();
  return Object.values(nigeriaStates).find((state) =>
    state.majorCities.some((city) => city.toLowerCase() === searchCity)
  );
};

/**
 * Find * Nigerian states where specified language is spoken
 * Returns array of states.
 */
export const getStatesByLanguage = (language: string): NigerianStateData[] => {
  const searchLang = language.trim().toLowerCase();
  return Object.values(nigeriaStates).filter((state) =>
    state.languages.some((lang) => lang.toLowerCase() === searchLang)
  );
};

/**
 * Get flat list of * unique languages spoken across Nigeria
 */
export const getAllUniqueLanguages = (): string[] => {
  const allLanguages = Object.values(nigeriaStates).flatMap((state) => state.languages);
  return Array.from(new Set(allLanguages)).sort();
};

