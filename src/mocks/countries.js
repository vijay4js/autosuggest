const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getCounties = async () => {
  await delay(10000);
  return countries;
};

const countries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    region: "Asia",
    alpha2Code: "AF",
    flag: "https://restcountries.eu/data/afg.svg"
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    region: "Europe",
    alpha2Code: "AX",
    flag: "https://restcountries.eu/data/ala.svg"
  },
  {
    name: "Albania",
    capital: "Tirana",
    region: "Europe",
    alpha2Code: "AL",
    flag: "https://restcountries.eu/data/alb.svg"
  },
  {
    name: "Algeria",
    capital: "Algiers",
    region: "Africa",
    alpha2Code: "DZ",
    flag: "https://restcountries.eu/data/dza.svg"
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    region: "Oceania",
    alpha2Code: "AS",
    flag: "https://restcountries.eu/data/asm.svg"
  },
  {
    name: "Andorra",
    capital: "Andorra la Vella",
    region: "Europe",
    alpha2Code: "AD",
    flag: "https://restcountries.eu/data/and.svg"
  },
  {
    name: "Angola",
    capital: "Luanda",
    region: "Africa",
    alpha2Code: "AO",
    flag: "https://restcountries.eu/data/ago.svg"
  },
  {
    name: "Anguilla",
    capital: "The Valley",
    region: "Americas",
    alpha2Code: "AI",
    flag: "https://restcountries.eu/data/aia.svg"
  },
  {
    name: "Antarctica",
    capital: "",
    region: "Polar",
    alpha2Code: "AQ",
    flag: "https://restcountries.eu/data/ata.svg"
  },
  {
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    region: "Americas",
    alpha2Code: "AG",
    flag: "https://restcountries.eu/data/atg.svg"
  },
  {
    name: "Argentina",
    capital: "Buenos Aires",
    region: "Americas",
    alpha2Code: "AR",
    flag: "https://restcountries.eu/data/arg.svg"
  },
  {
    name: "Armenia",
    capital: "Yerevan",
    region: "Asia",
    alpha2Code: "AM",
    flag: "https://restcountries.eu/data/arm.svg"
  },
  {
    name: "Aruba",
    capital: "Oranjestad",
    region: "Americas",
    alpha2Code: "AW",
    flag: "https://restcountries.eu/data/abw.svg"
  },
  {
    name: "Australia",
    capital: "Canberra",
    region: "Oceania",
    alpha2Code: "AU",
    flag: "https://restcountries.eu/data/aus.svg"
  },
  {
    name: "Austria",
    capital: "Vienna",
    region: "Europe",
    alpha2Code: "AT",
    flag: "https://restcountries.eu/data/aut.svg"
  },
  {
    name: "Azerbaijan",
    capital: "Baku",
    region: "Asia",
    alpha2Code: "AZ",
    flag: "https://restcountries.eu/data/aze.svg"
  },
  {
    name: "Bahamas",
    capital: "Nassau",
    region: "Americas",
    alpha2Code: "BS",
    flag: "https://restcountries.eu/data/bhs.svg"
  },
  {
    name: "Bahrain",
    capital: "Manama",
    region: "Asia",
    alpha2Code: "BH",
    flag: "https://restcountries.eu/data/bhr.svg"
  },
  {
    name: "Bangladesh",
    capital: "Dhaka",
    region: "Asia",
    alpha2Code: "BD",
    flag: "https://restcountries.eu/data/bgd.svg"
  },
  {
    name: "Barbados",
    capital: "Bridgetown",
    region: "Americas",
    alpha2Code: "BB",
    flag: "https://restcountries.eu/data/brb.svg"
  },
  {
    name: "Belarus",
    capital: "Minsk",
    region: "Europe",
    alpha2Code: "BY",
    flag: "https://restcountries.eu/data/blr.svg"
  },
  {
    name: "Belgium",
    capital: "Brussels",
    region: "Europe",
    alpha2Code: "BE",
    flag: "https://restcountries.eu/data/bel.svg"
  },
  {
    name: "Belize",
    capital: "Belmopan",
    region: "Americas",
    alpha2Code: "BZ",
    flag: "https://restcountries.eu/data/blz.svg"
  },
  {
    name: "Benin",
    capital: "Porto-Novo",
    region: "Africa",
    alpha2Code: "BJ",
    flag: "https://restcountries.eu/data/ben.svg"
  },
  {
    name: "Bermuda",
    capital: "Hamilton",
    region: "Americas",
    alpha2Code: "BM",
    flag: "https://restcountries.eu/data/bmu.svg"
  },
  {
    name: "Bhutan",
    capital: "Thimphu",
    region: "Asia",
    alpha2Code: "BT",
    flag: "https://restcountries.eu/data/btn.svg"
  },
  {
    name: "Bolivia (Plurinational State of)",
    capital: "Sucre",
    region: "Americas",
    alpha2Code: "BO",
    flag: "https://restcountries.eu/data/bol.svg"
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    capital: "Kralendijk",
    region: "Americas",
    alpha2Code: "BQ",
    flag: "https://restcountries.eu/data/bes.svg"
  },
  {
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    region: "Europe",
    alpha2Code: "BA",
    flag: "https://restcountries.eu/data/bih.svg"
  },
  {
    name: "Botswana",
    capital: "Gaborone",
    region: "Africa",
    alpha2Code: "BW",
    flag: "https://restcountries.eu/data/bwa.svg"
  },
  {
    name: "Bouvet Island",
    capital: "",
    region: "",
    alpha2Code: "BV",
    flag: "https://restcountries.eu/data/bvt.svg"
  },
  {
    name: "Brazil",
    capital: "Brasília",
    region: "Americas",
    alpha2Code: "BR",
    flag: "https://restcountries.eu/data/bra.svg"
  },
  {
    name: "British Indian Ocean Territory",
    capital: "Diego Garcia",
    region: "Africa",
    alpha2Code: "IO",
    flag: "https://restcountries.eu/data/iot.svg"
  },
  {
    name: "United States Minor Outlying Islands",
    capital: "",
    region: "Americas",
    alpha2Code: "UM",
    flag: "https://restcountries.eu/data/umi.svg"
  },
  {
    name: "Virgin Islands (British)",
    capital: "Road Town",
    region: "Americas",
    alpha2Code: "VG",
    flag: "https://restcountries.eu/data/vgb.svg"
  },
  {
    name: "Virgin Islands (U.S.)",
    capital: "Charlotte Amalie",
    region: "Americas",
    alpha2Code: "VI",
    flag: "https://restcountries.eu/data/vir.svg"
  },
  {
    name: "Brunei Darussalam",
    capital: "Bandar Seri Begawan",
    region: "Asia",
    alpha2Code: "BN",
    flag: "https://restcountries.eu/data/brn.svg"
  },
  {
    name: "Bulgaria",
    capital: "Sofia",
    region: "Europe",
    alpha2Code: "BG",
    flag: "https://restcountries.eu/data/bgr.svg"
  },
  {
    name: "Burkina Faso",
    capital: "Ouagadougou",
    region: "Africa",
    alpha2Code: "BF",
    flag: "https://restcountries.eu/data/bfa.svg"
  },
  {
    name: "Burundi",
    capital: "Bujumbura",
    region: "Africa",
    alpha2Code: "BI",
    flag: "https://restcountries.eu/data/bdi.svg"
  },
  {
    name: "Cambodia",
    capital: "Phnom Penh",
    region: "Asia",
    alpha2Code: "KH",
    flag: "https://restcountries.eu/data/khm.svg"
  },
  {
    name: "Cameroon",
    capital: "Yaoundé",
    region: "Africa",
    alpha2Code: "CM",
    flag: "https://restcountries.eu/data/cmr.svg"
  },
  {
    name: "Canada",
    capital: "Ottawa",
    region: "Americas",
    alpha2Code: "CA",
    flag: "https://restcountries.eu/data/can.svg"
  },
  {
    name: "Cabo Verde",
    capital: "Praia",
    region: "Africa",
    alpha2Code: "CV",
    flag: "https://restcountries.eu/data/cpv.svg"
  },
  {
    name: "Cayman Islands",
    capital: "George Town",
    region: "Americas",
    alpha2Code: "KY",
    flag: "https://restcountries.eu/data/cym.svg"
  },
  {
    name: "Central African Republic",
    capital: "Bangui",
    region: "Africa",
    alpha2Code: "CF",
    flag: "https://restcountries.eu/data/caf.svg"
  },
  {
    name: "Chad",
    capital: "N'Djamena",
    region: "Africa",
    alpha2Code: "TD",
    flag: "https://restcountries.eu/data/tcd.svg"
  },
  {
    name: "Chile",
    capital: "Santiago",
    region: "Americas",
    alpha2Code: "CL",
    flag: "https://restcountries.eu/data/chl.svg"
  },
  {
    name: "China",
    capital: "Beijing",
    region: "Asia",
    alpha2Code: "CN",
    flag: "https://restcountries.eu/data/chn.svg"
  },
  {
    name: "Christmas Island",
    capital: "Flying Fish Cove",
    region: "Oceania",
    alpha2Code: "CX",
    flag: "https://restcountries.eu/data/cxr.svg"
  },
  {
    name: "Cocos (Keeling) Islands",
    capital: "West Island",
    region: "Oceania",
    alpha2Code: "CC",
    flag: "https://restcountries.eu/data/cck.svg"
  },
  {
    name: "Colombia",
    capital: "Bogotá",
    region: "Americas",
    alpha2Code: "CO",
    flag: "https://restcountries.eu/data/col.svg"
  },
  {
    name: "Comoros",
    capital: "Moroni",
    region: "Africa",
    alpha2Code: "KM",
    flag: "https://restcountries.eu/data/com.svg"
  },
  {
    name: "Congo",
    capital: "Brazzaville",
    region: "Africa",
    alpha2Code: "CG",
    flag: "https://restcountries.eu/data/cog.svg"
  },
  {
    name: "Congo (Democratic Republic of the)",
    capital: "Kinshasa",
    region: "Africa",
    alpha2Code: "CD",
    flag: "https://restcountries.eu/data/cod.svg"
  },
  {
    name: "Cook Islands",
    capital: "Avarua",
    region: "Oceania",
    alpha2Code: "CK",
    flag: "https://restcountries.eu/data/cok.svg"
  },
  {
    name: "Costa Rica",
    capital: "San José",
    region: "Americas",
    alpha2Code: "CR",
    flag: "https://restcountries.eu/data/cri.svg"
  },
  {
    name: "Croatia",
    capital: "Zagreb",
    region: "Europe",
    alpha2Code: "HR",
    flag: "https://restcountries.eu/data/hrv.svg"
  },
  {
    name: "Cuba",
    capital: "Havana",
    region: "Americas",
    alpha2Code: "CU",
    flag: "https://restcountries.eu/data/cub.svg"
  },
  {
    name: "Curaçao",
    capital: "Willemstad",
    region: "Americas",
    alpha2Code: "CW",
    flag: "https://restcountries.eu/data/cuw.svg"
  },
  {
    name: "Cyprus",
    capital: "Nicosia",
    region: "Europe",
    alpha2Code: "CY",
    flag: "https://restcountries.eu/data/cyp.svg"
  },
  {
    name: "Czech Republic",
    capital: "Prague",
    region: "Europe",
    alpha2Code: "CZ",
    flag: "https://restcountries.eu/data/cze.svg"
  },
  {
    name: "Denmark",
    capital: "Copenhagen",
    region: "Europe",
    alpha2Code: "DK",
    flag: "https://restcountries.eu/data/dnk.svg"
  },
  {
    name: "Djibouti",
    capital: "Djibouti",
    region: "Africa",
    alpha2Code: "DJ",
    flag: "https://restcountries.eu/data/dji.svg"
  },
  {
    name: "Dominica",
    capital: "Roseau",
    region: "Americas",
    alpha2Code: "DM",
    flag: "https://restcountries.eu/data/dma.svg"
  },
  {
    name: "Dominican Republic",
    capital: "Santo Domingo",
    region: "Americas",
    alpha2Code: "DO",
    flag: "https://restcountries.eu/data/dom.svg"
  },
  {
    name: "Ecuador",
    capital: "Quito",
    region: "Americas",
    alpha2Code: "EC",
    flag: "https://restcountries.eu/data/ecu.svg"
  },
  {
    name: "Egypt",
    capital: "Cairo",
    region: "Africa",
    alpha2Code: "EG",
    flag: "https://restcountries.eu/data/egy.svg"
  },
  {
    name: "El Salvador",
    capital: "San Salvador",
    region: "Americas",
    alpha2Code: "SV",
    flag: "https://restcountries.eu/data/slv.svg"
  },
  {
    name: "Equatorial Guinea",
    capital: "Malabo",
    region: "Africa",
    alpha2Code: "GQ",
    flag: "https://restcountries.eu/data/gnq.svg"
  },
  {
    name: "Eritrea",
    capital: "Asmara",
    region: "Africa",
    alpha2Code: "ER",
    flag: "https://restcountries.eu/data/eri.svg"
  },
  {
    name: "Estonia",
    capital: "Tallinn",
    region: "Europe",
    alpha2Code: "EE",
    flag: "https://restcountries.eu/data/est.svg"
  },
  {
    name: "Ethiopia",
    capital: "Addis Ababa",
    region: "Africa",
    alpha2Code: "ET",
    flag: "https://restcountries.eu/data/eth.svg"
  },
  {
    name: "Falkland Islands (Malvinas)",
    capital: "Stanley",
    region: "Americas",
    alpha2Code: "FK",
    flag: "https://restcountries.eu/data/flk.svg"
  },
  {
    name: "Faroe Islands",
    capital: "Tórshavn",
    region: "Europe",
    alpha2Code: "FO",
    flag: "https://restcountries.eu/data/fro.svg"
  },
  {
    name: "Fiji",
    capital: "Suva",
    region: "Oceania",
    alpha2Code: "FJ",
    flag: "https://restcountries.eu/data/fji.svg"
  },
  {
    name: "Finland",
    capital: "Helsinki",
    region: "Europe",
    alpha2Code: "FI",
    flag: "https://restcountries.eu/data/fin.svg"
  },
  {
    name: "France",
    capital: "Paris",
    region: "Europe",
    alpha2Code: "FR",
    flag: "https://restcountries.eu/data/fra.svg"
  },
  {
    name: "French Guiana",
    capital: "Cayenne",
    region: "Americas",
    alpha2Code: "GF",
    flag: "https://restcountries.eu/data/guf.svg"
  },
  {
    name: "French Polynesia",
    capital: "Papeetē",
    region: "Oceania",
    alpha2Code: "PF",
    flag: "https://restcountries.eu/data/pyf.svg"
  },
  {
    name: "French Southern Territories",
    capital: "Port-aux-Français",
    region: "Africa",
    alpha2Code: "TF",
    flag: "https://restcountries.eu/data/atf.svg"
  },
  {
    name: "Gabon",
    capital: "Libreville",
    region: "Africa",
    alpha2Code: "GA",
    flag: "https://restcountries.eu/data/gab.svg"
  },
  {
    name: "Gambia",
    capital: "Banjul",
    region: "Africa",
    alpha2Code: "GM",
    flag: "https://restcountries.eu/data/gmb.svg"
  },
  {
    name: "Georgia",
    capital: "Tbilisi",
    region: "Asia",
    alpha2Code: "GE",
    flag: "https://restcountries.eu/data/geo.svg"
  },
  {
    name: "Germany",
    capital: "Berlin",
    region: "Europe",
    alpha2Code: "DE",
    flag: "https://restcountries.eu/data/deu.svg"
  },
  {
    name: "Ghana",
    capital: "Accra",
    region: "Africa",
    alpha2Code: "GH",
    flag: "https://restcountries.eu/data/gha.svg"
  },
  {
    name: "Gibraltar",
    capital: "Gibraltar",
    region: "Europe",
    alpha2Code: "GI",
    flag: "https://restcountries.eu/data/gib.svg"
  },
  {
    name: "Greece",
    capital: "Athens",
    region: "Europe",
    alpha2Code: "GR",
    flag: "https://restcountries.eu/data/grc.svg"
  },
  {
    name: "Greenland",
    capital: "Nuuk",
    region: "Americas",
    alpha2Code: "GL",
    flag: "https://restcountries.eu/data/grl.svg"
  },
  {
    name: "Grenada",
    capital: "St. George's",
    region: "Americas",
    alpha2Code: "GD",
    flag: "https://restcountries.eu/data/grd.svg"
  },
  {
    name: "Guadeloupe",
    capital: "Basse-Terre",
    region: "Americas",
    alpha2Code: "GP",
    flag: "https://restcountries.eu/data/glp.svg"
  },
  {
    name: "Guam",
    capital: "Hagåtña",
    region: "Oceania",
    alpha2Code: "GU",
    flag: "https://restcountries.eu/data/gum.svg"
  },
  {
    name: "Guatemala",
    capital: "Guatemala City",
    region: "Americas",
    alpha2Code: "GT",
    flag: "https://restcountries.eu/data/gtm.svg"
  },
  {
    name: "Guernsey",
    capital: "St. Peter Port",
    region: "Europe",
    alpha2Code: "GG",
    flag: "https://restcountries.eu/data/ggy.svg"
  },
  {
    name: "Guinea",
    capital: "Conakry",
    region: "Africa",
    alpha2Code: "GN",
    flag: "https://restcountries.eu/data/gin.svg"
  },
  {
    name: "Guinea-Bissau",
    capital: "Bissau",
    region: "Africa",
    alpha2Code: "GW",
    flag: "https://restcountries.eu/data/gnb.svg"
  },
  {
    name: "Guyana",
    capital: "Georgetown",
    region: "Americas",
    alpha2Code: "GY",
    flag: "https://restcountries.eu/data/guy.svg"
  },
  {
    name: "Haiti",
    capital: "Port-au-Prince",
    region: "Americas",
    alpha2Code: "HT",
    flag: "https://restcountries.eu/data/hti.svg"
  },
  {
    name: "Heard Island and McDonald Islands",
    capital: "",
    region: "",
    alpha2Code: "HM",
    flag: "https://restcountries.eu/data/hmd.svg"
  },
  {
    name: "Holy See",
    capital: "Rome",
    region: "Europe",
    alpha2Code: "VA",
    flag: "https://restcountries.eu/data/vat.svg"
  },
  {
    name: "Honduras",
    capital: "Tegucigalpa",
    region: "Americas",
    alpha2Code: "HN",
    flag: "https://restcountries.eu/data/hnd.svg"
  },
  {
    name: "Hong Kong",
    capital: "City of Victoria",
    region: "Asia",
    alpha2Code: "HK",
    flag: "https://restcountries.eu/data/hkg.svg"
  },
  {
    name: "Hungary",
    capital: "Budapest",
    region: "Europe",
    alpha2Code: "HU",
    flag: "https://restcountries.eu/data/hun.svg"
  },
  {
    name: "Iceland",
    capital: "Reykjavík",
    region: "Europe",
    alpha2Code: "IS",
    flag: "https://restcountries.eu/data/isl.svg"
  },
  {
    name: "India",
    capital: "New Delhi",
    region: "Asia",
    alpha2Code: "IN",
    flag: "https://restcountries.eu/data/ind.svg"
  },
  {
    name: "Indonesia",
    capital: "Jakarta",
    region: "Asia",
    alpha2Code: "ID",
    flag: "https://restcountries.eu/data/idn.svg"
  },
  {
    name: "Côte d'Ivoire",
    capital: "Yamoussoukro",
    region: "Africa",
    alpha2Code: "CI",
    flag: "https://restcountries.eu/data/civ.svg"
  },
  {
    name: "Iran (Islamic Republic of)",
    capital: "Tehran",
    region: "Asia",
    alpha2Code: "IR",
    flag: "https://restcountries.eu/data/irn.svg"
  },
  {
    name: "Iraq",
    capital: "Baghdad",
    region: "Asia",
    alpha2Code: "IQ",
    flag: "https://restcountries.eu/data/irq.svg"
  },
  {
    name: "Ireland",
    capital: "Dublin",
    region: "Europe",
    alpha2Code: "IE",
    flag: "https://restcountries.eu/data/irl.svg"
  },
  {
    name: "Isle of Man",
    capital: "Douglas",
    region: "Europe",
    alpha2Code: "IM",
    flag: "https://restcountries.eu/data/imn.svg"
  },
  {
    name: "Israel",
    capital: "Jerusalem",
    region: "Asia",
    alpha2Code: "IL",
    flag: "https://restcountries.eu/data/isr.svg"
  },
  {
    name: "Italy",
    capital: "Rome",
    region: "Europe",
    alpha2Code: "IT",
    flag: "https://restcountries.eu/data/ita.svg"
  },
  {
    name: "Jamaica",
    capital: "Kingston",
    region: "Americas",
    alpha2Code: "JM",
    flag: "https://restcountries.eu/data/jam.svg"
  },
  {
    name: "Japan",
    capital: "Tokyo",
    region: "Asia",
    alpha2Code: "JP",
    flag: "https://restcountries.eu/data/jpn.svg"
  },
  {
    name: "Jersey",
    capital: "Saint Helier",
    region: "Europe",
    alpha2Code: "JE",
    flag: "https://restcountries.eu/data/jey.svg"
  },
  {
    name: "Jordan",
    capital: "Amman",
    region: "Asia",
    alpha2Code: "JO",
    flag: "https://restcountries.eu/data/jor.svg"
  },
  {
    name: "Kazakhstan",
    capital: "Astana",
    region: "Asia",
    alpha2Code: "KZ",
    flag: "https://restcountries.eu/data/kaz.svg"
  },
  {
    name: "Kenya",
    capital: "Nairobi",
    region: "Africa",
    alpha2Code: "KE",
    flag: "https://restcountries.eu/data/ken.svg"
  },
  {
    name: "Kiribati",
    capital: "South Tarawa",
    region: "Oceania",
    alpha2Code: "KI",
    flag: "https://restcountries.eu/data/kir.svg"
  },
  {
    name: "Kuwait",
    capital: "Kuwait City",
    region: "Asia",
    alpha2Code: "KW",
    flag: "https://restcountries.eu/data/kwt.svg"
  },
  {
    name: "Kyrgyzstan",
    capital: "Bishkek",
    region: "Asia",
    alpha2Code: "KG",
    flag: "https://restcountries.eu/data/kgz.svg"
  },
  {
    name: "Lao People's Democratic Republic",
    capital: "Vientiane",
    region: "Asia",
    alpha2Code: "LA",
    flag: "https://restcountries.eu/data/lao.svg"
  },
  {
    name: "Latvia",
    capital: "Riga",
    region: "Europe",
    alpha2Code: "LV",
    flag: "https://restcountries.eu/data/lva.svg"
  },
  {
    name: "Lebanon",
    capital: "Beirut",
    region: "Asia",
    alpha2Code: "LB",
    flag: "https://restcountries.eu/data/lbn.svg"
  },
  {
    name: "Lesotho",
    capital: "Maseru",
    region: "Africa",
    alpha2Code: "LS",
    flag: "https://restcountries.eu/data/lso.svg"
  },
  {
    name: "Liberia",
    capital: "Monrovia",
    region: "Africa",
    alpha2Code: "LR",
    flag: "https://restcountries.eu/data/lbr.svg"
  },
  {
    name: "Libya",
    capital: "Tripoli",
    region: "Africa",
    alpha2Code: "LY",
    flag: "https://restcountries.eu/data/lby.svg"
  },
  {
    name: "Liechtenstein",
    capital: "Vaduz",
    region: "Europe",
    alpha2Code: "LI",
    flag: "https://restcountries.eu/data/lie.svg"
  },
  {
    name: "Lithuania",
    capital: "Vilnius",
    region: "Europe",
    alpha2Code: "LT",
    flag: "https://restcountries.eu/data/ltu.svg"
  },
  {
    name: "Luxembourg",
    capital: "Luxembourg",
    region: "Europe",
    alpha2Code: "LU",
    flag: "https://restcountries.eu/data/lux.svg"
  },
  {
    name: "Macao",
    capital: "",
    region: "Asia",
    alpha2Code: "MO",
    flag: "https://restcountries.eu/data/mac.svg"
  },
  {
    name: "Macedonia (the former Yugoslav Republic of)",
    capital: "Skopje",
    region: "Europe",
    alpha2Code: "MK",
    flag: "https://restcountries.eu/data/mkd.svg"
  },
  {
    name: "Madagascar",
    capital: "Antananarivo",
    region: "Africa",
    alpha2Code: "MG",
    flag: "https://restcountries.eu/data/mdg.svg"
  },
  {
    name: "Malawi",
    capital: "Lilongwe",
    region: "Africa",
    alpha2Code: "MW",
    flag: "https://restcountries.eu/data/mwi.svg"
  },
  {
    name: "Malaysia",
    capital: "Kuala Lumpur",
    region: "Asia",
    alpha2Code: "MY",
    flag: "https://restcountries.eu/data/mys.svg"
  },
  {
    name: "Maldives",
    capital: "Malé",
    region: "Asia",
    alpha2Code: "MV",
    flag: "https://restcountries.eu/data/mdv.svg"
  },
  {
    name: "Mali",
    capital: "Bamako",
    region: "Africa",
    alpha2Code: "ML",
    flag: "https://restcountries.eu/data/mli.svg"
  },
  {
    name: "Malta",
    capital: "Valletta",
    region: "Europe",
    alpha2Code: "MT",
    flag: "https://restcountries.eu/data/mlt.svg"
  },
  {
    name: "Marshall Islands",
    capital: "Majuro",
    region: "Oceania",
    alpha2Code: "MH",
    flag: "https://restcountries.eu/data/mhl.svg"
  },
  {
    name: "Martinique",
    capital: "Fort-de-France",
    region: "Americas",
    alpha2Code: "MQ",
    flag: "https://restcountries.eu/data/mtq.svg"
  },
  {
    name: "Mauritania",
    capital: "Nouakchott",
    region: "Africa",
    alpha2Code: "MR",
    flag: "https://restcountries.eu/data/mrt.svg"
  },
  {
    name: "Mauritius",
    capital: "Port Louis",
    region: "Africa",
    alpha2Code: "MU",
    flag: "https://restcountries.eu/data/mus.svg"
  },
  {
    name: "Mayotte",
    capital: "Mamoudzou",
    region: "Africa",
    alpha2Code: "YT",
    flag: "https://restcountries.eu/data/myt.svg"
  },
  {
    name: "Mexico",
    capital: "Mexico City",
    region: "Americas",
    alpha2Code: "MX",
    flag: "https://restcountries.eu/data/mex.svg"
  },
  {
    name: "Micronesia (Federated States of)",
    capital: "Palikir",
    region: "Oceania",
    alpha2Code: "FM",
    flag: "https://restcountries.eu/data/fsm.svg"
  },
  {
    name: "Moldova (Republic of)",
    capital: "Chișinău",
    region: "Europe",
    alpha2Code: "MD",
    flag: "https://restcountries.eu/data/mda.svg"
  },
  {
    name: "Monaco",
    capital: "Monaco",
    region: "Europe",
    alpha2Code: "MC",
    flag: "https://restcountries.eu/data/mco.svg"
  },
  {
    name: "Mongolia",
    capital: "Ulan Bator",
    region: "Asia",
    alpha2Code: "MN",
    flag: "https://restcountries.eu/data/mng.svg"
  },
  {
    name: "Montenegro",
    capital: "Podgorica",
    region: "Europe",
    alpha2Code: "ME",
    flag: "https://restcountries.eu/data/mne.svg"
  },
  {
    name: "Montserrat",
    capital: "Plymouth",
    region: "Americas",
    alpha2Code: "MS",
    flag: "https://restcountries.eu/data/msr.svg"
  },
  {
    name: "Morocco",
    capital: "Rabat",
    region: "Africa",
    alpha2Code: "MA",
    flag: "https://restcountries.eu/data/mar.svg"
  },
  {
    name: "Mozambique",
    capital: "Maputo",
    region: "Africa",
    alpha2Code: "MZ",
    flag: "https://restcountries.eu/data/moz.svg"
  },
  {
    name: "Myanmar",
    capital: "Naypyidaw",
    region: "Asia",
    alpha2Code: "MM",
    flag: "https://restcountries.eu/data/mmr.svg"
  },
  {
    name: "Namibia",
    capital: "Windhoek",
    region: "Africa",
    alpha2Code: "NA",
    flag: "https://restcountries.eu/data/nam.svg"
  },
  {
    name: "Nauru",
    capital: "Yaren",
    region: "Oceania",
    alpha2Code: "NR",
    flag: "https://restcountries.eu/data/nru.svg"
  },
  {
    name: "Nepal",
    capital: "Kathmandu",
    region: "Asia",
    alpha2Code: "NP",
    flag: "https://restcountries.eu/data/npl.svg"
  },
  {
    name: "Netherlands",
    capital: "Amsterdam",
    region: "Europe",
    alpha2Code: "NL",
    flag: "https://restcountries.eu/data/nld.svg"
  },
  {
    name: "New Caledonia",
    capital: "Nouméa",
    region: "Oceania",
    alpha2Code: "NC",
    flag: "https://restcountries.eu/data/ncl.svg"
  },
  {
    name: "New Zealand",
    capital: "Wellington",
    region: "Oceania",
    alpha2Code: "NZ",
    flag: "https://restcountries.eu/data/nzl.svg"
  },
  {
    name: "Nicaragua",
    capital: "Managua",
    region: "Americas",
    alpha2Code: "NI",
    flag: "https://restcountries.eu/data/nic.svg"
  },
  {
    name: "Niger",
    capital: "Niamey",
    region: "Africa",
    alpha2Code: "NE",
    flag: "https://restcountries.eu/data/ner.svg"
  },
  {
    name: "Nigeria",
    capital: "Abuja",
    region: "Africa",
    alpha2Code: "NG",
    flag: "https://restcountries.eu/data/nga.svg"
  },
  {
    name: "Niue",
    capital: "Alofi",
    region: "Oceania",
    alpha2Code: "NU",
    flag: "https://restcountries.eu/data/niu.svg"
  },
  {
    name: "Norfolk Island",
    capital: "Kingston",
    region: "Oceania",
    alpha2Code: "NF",
    flag: "https://restcountries.eu/data/nfk.svg"
  },
  {
    name: "Korea (Democratic People's Republic of)",
    capital: "Pyongyang",
    region: "Asia",
    alpha2Code: "KP",
    flag: "https://restcountries.eu/data/prk.svg"
  },
  {
    name: "Northern Mariana Islands",
    capital: "Saipan",
    region: "Oceania",
    alpha2Code: "MP",
    flag: "https://restcountries.eu/data/mnp.svg"
  },
  {
    name: "Norway",
    capital: "Oslo",
    region: "Europe",
    alpha2Code: "NO",
    flag: "https://restcountries.eu/data/nor.svg"
  },
  {
    name: "Oman",
    capital: "Muscat",
    region: "Asia",
    alpha2Code: "OM",
    flag: "https://restcountries.eu/data/omn.svg"
  },
  {
    name: "Pakistan",
    capital: "Islamabad",
    region: "Asia",
    alpha2Code: "PK",
    flag: "https://restcountries.eu/data/pak.svg"
  },
  {
    name: "Palau",
    capital: "Ngerulmud",
    region: "Oceania",
    alpha2Code: "PW",
    flag: "https://restcountries.eu/data/plw.svg"
  },
  {
    name: "Palestine, State of",
    capital: "Ramallah",
    region: "Asia",
    alpha2Code: "PS",
    flag: "https://restcountries.eu/data/pse.svg"
  },
  {
    name: "Panama",
    capital: "Panama City",
    region: "Americas",
    alpha2Code: "PA",
    flag: "https://restcountries.eu/data/pan.svg"
  },
  {
    name: "Papua New Guinea",
    capital: "Port Moresby",
    region: "Oceania",
    alpha2Code: "PG",
    flag: "https://restcountries.eu/data/png.svg"
  },
  {
    name: "Paraguay",
    capital: "Asunción",
    region: "Americas",
    alpha2Code: "PY",
    flag: "https://restcountries.eu/data/pry.svg"
  },
  {
    name: "Peru",
    capital: "Lima",
    region: "Americas",
    alpha2Code: "PE",
    flag: "https://restcountries.eu/data/per.svg"
  },
  {
    name: "Philippines",
    capital: "Manila",
    region: "Asia",
    alpha2Code: "PH",
    flag: "https://restcountries.eu/data/phl.svg"
  },
  {
    name: "Pitcairn",
    capital: "Adamstown",
    region: "Oceania",
    alpha2Code: "PN",
    flag: "https://restcountries.eu/data/pcn.svg"
  },
  {
    name: "Poland",
    capital: "Warsaw",
    region: "Europe",
    alpha2Code: "PL",
    flag: "https://restcountries.eu/data/pol.svg"
  },
  {
    name: "Portugal",
    capital: "Lisbon",
    region: "Europe",
    alpha2Code: "PT",
    flag: "https://restcountries.eu/data/prt.svg"
  },
  {
    name: "Puerto Rico",
    capital: "San Juan",
    region: "Americas",
    alpha2Code: "PR",
    flag: "https://restcountries.eu/data/pri.svg"
  },
  {
    name: "Qatar",
    capital: "Doha",
    region: "Asia",
    alpha2Code: "QA",
    flag: "https://restcountries.eu/data/qat.svg"
  },
  {
    name: "Republic of Kosovo",
    capital: "Pristina",
    region: "Europe",
    alpha2Code: "XK",
    flag: "https://restcountries.eu/data/kos.svg"
  },
  {
    name: "Réunion",
    capital: "Saint-Denis",
    region: "Africa",
    alpha2Code: "RE",
    flag: "https://restcountries.eu/data/reu.svg"
  },
  {
    name: "Romania",
    capital: "Bucharest",
    region: "Europe",
    alpha2Code: "RO",
    flag: "https://restcountries.eu/data/rou.svg"
  },
  {
    name: "Russian Federation",
    capital: "Moscow",
    region: "Europe",
    alpha2Code: "RU",
    flag: "https://restcountries.eu/data/rus.svg"
  },
  {
    name: "Rwanda",
    capital: "Kigali",
    region: "Africa",
    alpha2Code: "RW",
    flag: "https://restcountries.eu/data/rwa.svg"
  },
  {
    name: "Saint Barthélemy",
    capital: "Gustavia",
    region: "Americas",
    alpha2Code: "BL",
    flag: "https://restcountries.eu/data/blm.svg"
  },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    capital: "Jamestown",
    region: "Africa",
    alpha2Code: "SH",
    flag: "https://restcountries.eu/data/shn.svg"
  },
  {
    name: "Saint Kitts and Nevis",
    capital: "Basseterre",
    region: "Americas",
    alpha2Code: "KN",
    flag: "https://restcountries.eu/data/kna.svg"
  },
  {
    name: "Saint Lucia",
    capital: "Castries",
    region: "Americas",
    alpha2Code: "LC",
    flag: "https://restcountries.eu/data/lca.svg"
  },
  {
    name: "Saint Martin (French part)",
    capital: "Marigot",
    region: "Americas",
    alpha2Code: "MF",
    flag: "https://restcountries.eu/data/maf.svg"
  },
  {
    name: "Saint Pierre and Miquelon",
    capital: "Saint-Pierre",
    region: "Americas",
    alpha2Code: "PM",
    flag: "https://restcountries.eu/data/spm.svg"
  },
  {
    name: "Saint Vincent and the Grenadines",
    capital: "Kingstown",
    region: "Americas",
    alpha2Code: "VC",
    flag: "https://restcountries.eu/data/vct.svg"
  },
  {
    name: "Samoa",
    capital: "Apia",
    region: "Oceania",
    alpha2Code: "WS",
    flag: "https://restcountries.eu/data/wsm.svg"
  },
  {
    name: "San Marino",
    capital: "City of San Marino",
    region: "Europe",
    alpha2Code: "SM",
    flag: "https://restcountries.eu/data/smr.svg"
  },
  {
    name: "Sao Tome and Principe",
    capital: "São Tomé",
    region: "Africa",
    alpha2Code: "ST",
    flag: "https://restcountries.eu/data/stp.svg"
  },
  {
    name: "Saudi Arabia",
    capital: "Riyadh",
    region: "Asia",
    alpha2Code: "SA",
    flag: "https://restcountries.eu/data/sau.svg"
  },
  {
    name: "Senegal",
    capital: "Dakar",
    region: "Africa",
    alpha2Code: "SN",
    flag: "https://restcountries.eu/data/sen.svg"
  },
  {
    name: "Serbia",
    capital: "Belgrade",
    region: "Europe",
    alpha2Code: "RS",
    flag: "https://restcountries.eu/data/srb.svg"
  },
  {
    name: "Seychelles",
    capital: "Victoria",
    region: "Africa",
    alpha2Code: "SC",
    flag: "https://restcountries.eu/data/syc.svg"
  },
  {
    name: "Sierra Leone",
    capital: "Freetown",
    region: "Africa",
    alpha2Code: "SL",
    flag: "https://restcountries.eu/data/sle.svg"
  },
  {
    name: "Singapore",
    capital: "Singapore",
    region: "Asia",
    alpha2Code: "SG",
    flag: "https://restcountries.eu/data/sgp.svg"
  },
  {
    name: "Sint Maarten (Dutch part)",
    capital: "Philipsburg",
    region: "Americas",
    alpha2Code: "SX",
    flag: "https://restcountries.eu/data/sxm.svg"
  },
  {
    name: "Slovakia",
    capital: "Bratislava",
    region: "Europe",
    alpha2Code: "SK",
    flag: "https://restcountries.eu/data/svk.svg"
  },
  {
    name: "Slovenia",
    capital: "Ljubljana",
    region: "Europe",
    alpha2Code: "SI",
    flag: "https://restcountries.eu/data/svn.svg"
  },
  {
    name: "Solomon Islands",
    capital: "Honiara",
    region: "Oceania",
    alpha2Code: "SB",
    flag: "https://restcountries.eu/data/slb.svg"
  },
  {
    name: "Somalia",
    capital: "Mogadishu",
    region: "Africa",
    alpha2Code: "SO",
    flag: "https://restcountries.eu/data/som.svg"
  },
  {
    name: "South Africa",
    capital: "Pretoria",
    region: "Africa",
    alpha2Code: "ZA",
    flag: "https://restcountries.eu/data/zaf.svg"
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    capital: "King Edward Point",
    region: "Americas",
    alpha2Code: "GS",
    flag: "https://restcountries.eu/data/sgs.svg"
  },
  {
    name: "Korea (Republic of)",
    capital: "Seoul",
    region: "Asia",
    alpha2Code: "KR",
    flag: "https://restcountries.eu/data/kor.svg"
  },
  {
    name: "South Sudan",
    capital: "Juba",
    region: "Africa",
    alpha2Code: "SS",
    flag: "https://restcountries.eu/data/ssd.svg"
  },
  {
    name: "Spain",
    capital: "Madrid",
    region: "Europe",
    alpha2Code: "ES",
    flag: "https://restcountries.eu/data/esp.svg"
  },
  {
    name: "Sri Lanka",
    capital: "Colombo",
    region: "Asia",
    alpha2Code: "LK",
    flag: "https://restcountries.eu/data/lka.svg"
  },
  {
    name: "Sudan",
    capital: "Khartoum",
    region: "Africa",
    alpha2Code: "SD",
    flag: "https://restcountries.eu/data/sdn.svg"
  },
  {
    name: "Suriname",
    capital: "Paramaribo",
    region: "Americas",
    alpha2Code: "SR",
    flag: "https://restcountries.eu/data/sur.svg"
  },
  {
    name: "Svalbard and Jan Mayen",
    capital: "Longyearbyen",
    region: "Europe",
    alpha2Code: "SJ",
    flag: "https://restcountries.eu/data/sjm.svg"
  },
  {
    name: "Swaziland",
    capital: "Lobamba",
    region: "Africa",
    alpha2Code: "SZ",
    flag: "https://restcountries.eu/data/swz.svg"
  },
  {
    name: "Sweden",
    capital: "Stockholm",
    region: "Europe",
    alpha2Code: "SE",
    flag: "https://restcountries.eu/data/swe.svg"
  },
  {
    name: "Switzerland",
    capital: "Bern",
    region: "Europe",
    alpha2Code: "CH",
    flag: "https://restcountries.eu/data/che.svg"
  },
  {
    name: "Syrian Arab Republic",
    capital: "Damascus",
    region: "Asia",
    alpha2Code: "SY",
    flag: "https://restcountries.eu/data/syr.svg"
  },
  {
    name: "Taiwan",
    capital: "Taipei",
    region: "Asia",
    alpha2Code: "TW",
    flag: "https://restcountries.eu/data/twn.svg"
  },
  {
    name: "Tajikistan",
    capital: "Dushanbe",
    region: "Asia",
    alpha2Code: "TJ",
    flag: "https://restcountries.eu/data/tjk.svg"
  },
  {
    name: "Tanzania, United Republic of",
    capital: "Dodoma",
    region: "Africa",
    alpha2Code: "TZ",
    flag: "https://restcountries.eu/data/tza.svg"
  },
  {
    name: "Thailand",
    capital: "Bangkok",
    region: "Asia",
    alpha2Code: "TH",
    flag: "https://restcountries.eu/data/tha.svg"
  },
  {
    name: "Timor-Leste",
    capital: "Dili",
    region: "Asia",
    alpha2Code: "TL",
    flag: "https://restcountries.eu/data/tls.svg"
  },
  {
    name: "Togo",
    capital: "Lomé",
    region: "Africa",
    alpha2Code: "TG",
    flag: "https://restcountries.eu/data/tgo.svg"
  },
  {
    name: "Tokelau",
    capital: "Fakaofo",
    region: "Oceania",
    alpha2Code: "TK",
    flag: "https://restcountries.eu/data/tkl.svg"
  },
  {
    name: "Tonga",
    capital: "Nuku'alofa",
    region: "Oceania",
    alpha2Code: "TO",
    flag: "https://restcountries.eu/data/ton.svg"
  },
  {
    name: "Trinidad and Tobago",
    capital: "Port of Spain",
    region: "Americas",
    alpha2Code: "TT",
    flag: "https://restcountries.eu/data/tto.svg"
  },
  {
    name: "Tunisia",
    capital: "Tunis",
    region: "Africa",
    alpha2Code: "TN",
    flag: "https://restcountries.eu/data/tun.svg"
  },
  {
    name: "Turkey",
    capital: "Ankara",
    region: "Asia",
    alpha2Code: "TR",
    flag: "https://restcountries.eu/data/tur.svg"
  },
  {
    name: "Turkmenistan",
    capital: "Ashgabat",
    region: "Asia",
    alpha2Code: "TM",
    flag: "https://restcountries.eu/data/tkm.svg"
  },
  {
    name: "Turks and Caicos Islands",
    capital: "Cockburn Town",
    region: "Americas",
    alpha2Code: "TC",
    flag: "https://restcountries.eu/data/tca.svg"
  },
  {
    name: "Tuvalu",
    capital: "Funafuti",
    region: "Oceania",
    alpha2Code: "TV",
    flag: "https://restcountries.eu/data/tuv.svg"
  },
  {
    name: "Uganda",
    capital: "Kampala",
    region: "Africa",
    alpha2Code: "UG",
    flag: "https://restcountries.eu/data/uga.svg"
  },
  {
    name: "Ukraine",
    capital: "Kiev",
    region: "Europe",
    alpha2Code: "UA",
    flag: "https://restcountries.eu/data/ukr.svg"
  },
  {
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    region: "Asia",
    alpha2Code: "AE",
    flag: "https://restcountries.eu/data/are.svg"
  },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London",
    region: "Europe",
    alpha2Code: "GB",
    flag: "https://restcountries.eu/data/gbr.svg"
  },
  {
    name: "United States of America",
    capital: "Washington, D.C.",
    region: "Americas",
    alpha2Code: "US",
    flag: "https://restcountries.eu/data/usa.svg"
  },
  {
    name: "Uruguay",
    capital: "Montevideo",
    region: "Americas",
    alpha2Code: "UY",
    flag: "https://restcountries.eu/data/ury.svg"
  },
  {
    name: "Uzbekistan",
    capital: "Tashkent",
    region: "Asia",
    alpha2Code: "UZ",
    flag: "https://restcountries.eu/data/uzb.svg"
  },
  {
    name: "Vanuatu",
    capital: "Port Vila",
    region: "Oceania",
    alpha2Code: "VU",
    flag: "https://restcountries.eu/data/vut.svg"
  },
  {
    name: "Venezuela (Bolivarian Republic of)",
    capital: "Caracas",
    region: "Americas",
    alpha2Code: "VE",
    flag: "https://restcountries.eu/data/ven.svg"
  },
  {
    name: "Viet Nam",
    capital: "Hanoi",
    region: "Asia",
    alpha2Code: "VN",
    flag: "https://restcountries.eu/data/vnm.svg"
  },
  {
    name: "Wallis and Futuna",
    capital: "Mata-Utu",
    region: "Oceania",
    alpha2Code: "WF",
    flag: "https://restcountries.eu/data/wlf.svg"
  },
  {
    name: "Western Sahara",
    capital: "El Aaiún",
    region: "Africa",
    alpha2Code: "EH",
    flag: "https://restcountries.eu/data/esh.svg"
  },
  {
    name: "Yemen",
    capital: "Sana'a",
    region: "Asia",
    alpha2Code: "YE",
    flag: "https://restcountries.eu/data/yem.svg"
  },
  {
    name: "Zambia",
    capital: "Lusaka",
    region: "Africa",
    alpha2Code: "ZM",
    flag: "https://restcountries.eu/data/zmb.svg"
  },
  {
    name: "Zimbabwe",
    capital: "Harare",
    region: "Africa",
    alpha2Code: "ZW",
    flag: "https://restcountries.eu/data/zwe.svg"
  }
];

export { getCounties, countries };
