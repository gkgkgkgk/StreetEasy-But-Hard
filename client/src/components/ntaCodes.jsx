const ntaCodes = {"BX0101": "Mott Haven-Port Morris",
  "BX0102": "Melrose",
  "BX0201": "Hunts Point",
  "BX0202": "Longwood",
  "BX0291": "North & South Brother Islands",
  "BX0301": "Morrisania",
  "BX0302": "Claremont Village-Claremont (East)",
  "BX0303": "Crotona Park East",
  "BX0391": "Crotona Park",
  "BX0401": "Concourse-Concourse Village",
  "BX0402": "Highbridge",
  "BX0403": "Mount Eden-Claremont (West)",
  "BX0491": "Yankee Stadium-Macombs Dam Park",
  "BX0492": "Claremont Park",
  "BX0501": "University Heights (South)-Morris Heights",
  "BX0502": "Mount Hope",
  "BX0503": "Fordham Heights",
  "BX0601": "West Farms",
  "BX0602": "Tremont",
  "BX0603": "Belmont",
  "BX0701": "University Heights (North)-Fordham",
  "BX0702": "Bedford Park",
  "BX0703": "Norwood",
  "BX0801": "Kingsbridge Heights-Van Cortlandt Village",
  "BX0802": "Kingsbridge-Marble Hill",
  "BX0803": "Riverdale-Spuyten Duyvil",
  "BX0904": "Parkchester",
  "BX0901": "Soundview-Bruckner-Bronx River",
  "BX0902": "Soundview-Clason Point",
  "BX0903": "Castle Hill-Unionport",
  "BX0991": "Soundview Park",
  "BX1001": "Westchester Square",
  "BX1002": "Throgs Neck-Schuylerville",
  "BX1003": "Pelham Bay-Country Club-City Island",
  "BX1004": "Co-op City",
  "BX1071": "Hart Island",
  "BX1091": "Ferry Point Park-St. Raymond Cemetery",
  "BX1101": "Pelham Parkway-Van Nest",
  "BX1102": "Morris Park",
  "BX1103": "Pelham Gardens",
  "BX1104": "Allerton",
  "BX1161": "Hutchinson Metro Center",
  "BX1201": "Williamsbridge-Olinville",
  "BX1202": "Eastchester-Edenwald-Baychester",
  "BX1203": "Wakefield-Woodlawn",
  "BX1271": "Woodlawn Cemetery",
  "BX2691": "Van Cortlandt Park",
  "BX2791": "Bronx Park",
  "BX2891": "Pelham Bay Park",
  "QN0151": "Rikers Island",
  "BK0101": "Greenpoint",
  "BK0102": "Williamsburg",
  "BK0103": "South Williamsburg",
  "BK0104": "East Williamsburg",
  "BK0201": "Brooklyn Heights",
  "BK0202": "Downtown Brooklyn-DUMBO-Boerum Hill",
  "BK0203": "Fort Greene",
  "BK0204": "Clinton Hill",
  "BK0261": "Brooklyn Navy Yard",
  "BK0301": "Bedford-Stuyvesant (West)",
  "BK0302": "Bedford-Stuyvesant (East)",
  "BK0401": "Bushwick (West)",
  "BK0402": "Bushwick (East)",
  "BK0471": "The Evergreens Cemetery",
  "BK0501": "Cypress Hills",
  "BK0502": "East New York (North)",
  "BK0503": "East New York-New Lots",
  "BK0504": "Spring Creek-Starrett City",
  "BK0505": "East New York-City Line",
  "BK0571": "Highland Park-Cypress Hills Cemeteries (South)",
  "BK0601": "Carroll Gardens-Cobble Hill-Gowanus-Red Hook",
  "BK0602": "Park Slope",
  "BK0701": "Windsor Terrace-South Slope",
  "BK0702": "Sunset Park (West)",
  "BK0703": "Sunset Park (Central)",
  "BK0771": "Green-Wood Cemetery",
  "BK0801": "Prospect Heights",
  "BK0802": "Crown Heights (North)",
  "BK0891": "Lincoln Terrace Park",
  "BK0901": "Crown Heights (South)",
  "BK0902": "Prospect Lefferts Gardens-Wingate",
  "BK1001": "Bay Ridge",
  "BK1002": "Dyker Heights",
  "BK1061": "Fort Hamilton",
  "BK1091": "Dyker Beach Park",
  "BK1101": "Bensonhurst",
  "BK1102": "Bath Beach",
  "BK1103": "Gravesend (West)",
  "BK1201": "Sunset Park (East)-Borough Park (West)",
  "BK1202": "Borough Park",
  "BK1203": "Kensington",
  "BK1204": "Mapleton-Midwood (West)",
  "BK1301": "Gravesend (South)",
  "BK1302": "Coney Island-Sea Gate",
  "BK1303": "Brighton Beach",
  "BK1391": "Calvert Vaux Park",
  "BK1401": "Flatbush",
  "BK1402": "Flatbush (West)-Ditmas Park-Parkville",
  "BK1403": "Midwood",
  "BK1501": "Gravesend (East)-Homecrest",
  "BK1502": "Madison",
  "BK1503": "Sheepshead Bay-Manhattan Beach-Gerritsen Beach",
  "BK1601": "Ocean Hill",
  "BK1602": "Brownsville",
  "BK1701": "East Flatbush-Erasmus",
  "BK1702": "East Flatbush-Farragut",
  "BK1703": "East Flatbush-Rugby",
  "BK1704": "East Flatbush-Remsen Village",
  "BK1771": "Holy Cross Cemetery",
  "BK1801": "Flatlands",
  "BK1802": "Marine Park-Mill Basin-Bergen Beach",
  "BK1803": "Canarsie",
  "BK1891": "Marine Park-Plumb Island",
  "BK1892": "McGuire Fields",
  "BK1893": "Canarsie Park & Pier",
  "BK5591": "Prospect Park",
  "BK5691": "Barren Island-Floyd Bennett Field",
  "BK5692": "Jamaica Bay (West)",
  "BK5693": "Shirley Chisholm State Park",
  "MN0101": "Financial District-Battery Park City",
  "MN0102": "Tribeca-Civic Center",
  "MN0191": "The Battery-Governors Island-Ellis Island-Liberty Island",
  "MN0201": "SoHo-Little Italy-Hudson Square",
  "MN0202": "Greenwich Village",
  "MN0203": "West Village",
  "MN0301": "Chinatown-Two Bridges",
  "MN0302": "Lower East Side",
  "MN0303": "East Village",
  "MN1002": "Harlem (North)",
  "MN0401": "Chelsea-Hudson Yards",
  "MN0402": "Hell's Kitchen",
  "MN0501": "Midtown South-Flatiron-Union Square",
  "MN0502": "Midtown-Times Square",
  "MN0601": "Stuyvesant Town-Peter Cooper Village",
  "MN0602": "Gramercy",
  "MN0603": "Murray Hill-Kips Bay",
  "MN0604": "East Midtown-Turtle Bay",
  "MN0661": "United Nations",
  "MN0701": "Upper West Side-Lincoln Square",
  "MN0702": "Upper West Side (Central)",
  "MN0703": "Upper West Side-Manhattan Valley",
  "MN0801": "Upper East Side-Lenox Hill-Roosevelt Island",
  "MN0802": "Upper East Side-Carnegie Hill",
  "MN0803": "Upper East Side-Yorkville",
  "MN0901": "Morningside Heights",
  "MN0902": "Manhattanville-West Harlem",
  "MN0903": "Hamilton Heights-Sugar Hill",
  "MN1001": "Harlem (South)",
  "MN1101": "East Harlem (South)",
  "MN1102": "East Harlem (North)",
  "MN1191": "Randall's Island",
  "MN1201": "Washington Heights (South)",
  "MN1202": "Washington Heights (North)",
  "MN1203": "Inwood",
  "MN1291": "Highbridge Park",
  "MN1292": "Inwood Hill Park",
  "MN6491": "Central Park",
  "QN0101": "Astoria (North)-Ditmars-Steinway",
  "QN0102": "Old Astoria-Hallets Point",
  "QN0103": "Astoria (Central)",
  "QN0104": "Astoria (East)-Woodside (North)",
  "QN0105": "Queensbridge-Ravenswood-Dutch Kills",
  "QN0161": "Sunnyside Yards (North)",
  "QN0171": "St. Michael's Cemetery",
  "QN0191": "Astoria Park",
  "QN0201": "Long Island City-Hunters Point",
  "QN0202": "Sunnyside",
  "QN0203": "Woodside",
  "QN0261": "Sunnyside Yards (South)",
  "QN0271": "Calvary & Mount Zion Cemeteries",
  "QN0301": "Jackson Heights",
  "QN0302": "East Elmhurst",
  "QN0303": "North Corona",
  "QN0401": "Elmhurst",
  "QN0402": "Corona",
  "QN0501": "Maspeth",
  "QN0502": "Ridgewood",
  "QN0503": "Glendale",
  "QN0504": "Middle Village",
  "QN0571": "Mount Olivet & All Faiths Cemeteries",
  "QN0572": "Middle Village Cemetery",
  "QN0573": "St. John Cemetery",
  "QN0574": "Highland Park-Cypress Hills Cemeteries (North)",
  "QN0601": "Rego Park",
  "QN0602": "Forest Hills",
  "QN0701": "College Point",
  "QN0702": "Whitestone-Beechhurst",
  "QN0703": "Bay Terrace-Clearview",
  "QN0704": "Murray Hill-Broadway Flushing",
  "QN0705": "East Flushing",
  "QN1102": "Bayside",
  "QN0706": "Queensboro Hill",
  "QN0707": "Flushing-Willets Point",
  "QN0761": "Fort Totten",
  "QN0791": "Kissena Park",
  "QN0801": "Kew Gardens Hills",
  "QN0802": "Pomonok-Electchester-Hillcrest",
  "QN0803": "Fresh Meadows-Utopia",
  "QN0804": "Jamaica Estates-Holliswood",
  "QN0805": "Jamaica Hills-Briarwood",
  "QN0871": "Mount Hebron & Cedar Grove Cemeteries",
  "QN0891": "Cunningham Park",
  "QN0901": "Kew Gardens",
  "QN0902": "Richmond Hill",
  "QN0903": "South Richmond Hill",
  "QN0904": "Ozone Park (North)",
  "QN0905": "Woodhaven",
  "QN1001": "South Ozone Park",
  "QN1002": "Ozone Park",
  "QN1003": "Howard Beach-Lindenwood",
  "QN1091": "Spring Creek Park",
  "QN1101": "Auburndale",
  "QN1103": "Douglaston-Little Neck",
  "QN1104": "Oakland Gardens-Hollis Hills",
  "QN1191": "Alley Pond Park",
  "QN1201": "Jamaica",
  "QN1202": "South Jamaica",
  "QN1203": "Baisley Park",
  "QN1204": "Springfield Gardens (North)-Rochdale Village",
  "QN1205": "St. Albans",
  "QN1206": "Hollis",
  "QN1301": "Glen Oaks-Floral Park-New Hyde Park",
  "QN1302": "Bellerose",
  "QN1303": "Queens Village",
  "QN1304": "Cambria Heights",
  "QN1305": "Laurelton",
  "QN1306": "Springfield Gardens (South)-Brookville",
  "QN1307": "Rosedale",
  "QN1371": "Montefiore Cemetery",
  "QN1401": "Far Rockaway-Bayswater",
  "QN1402": "Rockaway Beach-Arverne-Edgemere",
  "QN1403": "Breezy Point-Belle Harbor-Rockaway Park-Broad Channel",
  "QN1491": "Rockaway Community Park",
  "QN8081": "LaGuardia Airport",
  "QN8191": "Flushing Meadows-Corona Park",
  "QN8291": "Forest Park",
  "QN8381": "John F. Kennedy International Airport",
  "QN8491": "Jamaica Bay (East)",
  "QN8492": "Jacob Riis Park-Fort Tilden-Breezy Point Tip",
  "SI0101": "St. George-New Brighton",
  "SI0102": "Tompkinsville-Stapleton-Clifton-Fox Hills",
  "SI0103": "Rosebank-Shore Acres-Park Hill",
  "SI0104": "West New Brighton-Silver Lake-Grymes Hill",
  "SI0105": "Westerleigh-Castleton Corners",
  "SI0106": "Port Richmond",
  "SI0107": "Mariner's Harbor-Arlington-Graniteville",
  "SI0191": "Snug Harbor",
  "SI0201": "Grasmere-Arrochar-South Beach-Dongan Hills",
  "SI0202": "New Dorp-Midland Beach",
  "SI0203": "Todt Hill-Emerson Hill-Lighthouse Hill-Manor Heights",
  "SI0204": "New Springville-Willowbrook-Bulls Head-Travis",
  "SI0291": "Freshkills Park (North)",
  "SI0301": "Oakwood-Richmondtown",
  "SI0302": "Great Kills-Eltingville",
  "SI0303": "Arden Heights-Rossville",
  "SI0304": "Annadale-Huguenot-Prince's Bay-Woodrow",
  "SI0305": "Tottenville-Charleston",
  "SI0391": "Freshkills Park (South)",
  "SI9561": "Fort Wadsworth",
  "SI9591": "Hoffman & Swinburne Islands",
  "SI9592": "Miller Field",
  "SI9593": "Great Kills Park"};

export default ntaCodes;