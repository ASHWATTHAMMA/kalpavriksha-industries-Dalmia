// Multilingual Translation Dictionary
const translations = {
  en: {
    // Navigation
    navSoilSensor: "Soil Sensor",
    navSmartDrip: "Smart Drip",
    navAgriDrone: "Agri Drone",
    navLogout: "Logout",
    
    // Product Title
    productTitle: "Kalpavriksha Agricultural Drone",
    
    // Analysis Cards
    heatLevel: "Heat Level",
    waterStress: "Water Stress",
    diseaseSpread: "Disease Spread",
    
    // Legend Labels
    legendOptimal: "Optimal",
    legendModerate: "Moderate",
    legendSevere: "Severe",
    legendNone: "None",
    legendSevereInfection: "Severe Infection",
    legendExcess: "Excess",
    legendSevereStress: "Severe Stress",
    
    // Scan Details
    scanLabel: "Scan:",
    avgTemp: "Avg. Temp:",
    avgMoisture: "Avg. Moisture:",
    affectedArea: "Affected Area:",
    
    // Heat Descriptions
    heatDesc1: "Severe crop stress detected across large sections of the field.",
    heatDesc2: "Mild to moderate heat stress detected, concentrated along the upper-right zone.",
    heatDesc3: "Uniform temperature distribution observed, indicating healthy crop conditions throughout.",
    
    // Water Descriptions
    waterDesc1: "Water distribution appears uneven, with clear signs of excess moisture at the center.",
    waterDesc2: "Optimal moisture levels maintained across most zones, with minor dry patches in corners.",
    waterDesc3: "Critical water shortage detected in multiple zones, immediate irrigation recommended.",
    
    // Disease Descriptions
    diseaseDesc1: "Localized infection hotspots detected, with minor affected patches across the field.",
    diseaseDesc2: "Widespread disease presence observed, requiring immediate intervention in affected areas.",
    diseaseDesc3: "Healthy crop status confirmed, no significant disease markers detected across the field.",
    
    // Weather Section
    weatherTitle: "Mumbai Weather Forecast",
    weatherSubtitle: "Live 3-Day Automated Forecast for Your Fields",
    weatherToday: "Today",
    weatherTomorrow: "Tomorrow",
    weatherHumidity: "Humidity:",
    weatherRain: "Rain:",
    weatherWind: "Wind:",
    weatherLastUpdated: "Last Updated:",
    weatherUnavailable: "Unavailable",
    weatherError: "Unable to refresh live data",
    
    // Description Block
    descTitle: "Your Farm's Eye in the Sky.",
    descText: "A next-generation autonomous drone for real-time crop monitoring, disease detection, and precision spraying. Equipped with AI analysis, it helps farmers identify crop health issues, manage irrigation, and forecast yield more efficiently.",
    descTagline: "Your Farm's Eye in the Sky.",
    
    // Language Selector
    languageLabel: "Language",
    selectLanguage: "Select Language",
    
    // Header Navigation
    navSoilSensor: "Soil Sensor",
    navSmartDrip: "Smart Drip",
    navAgriDrone: "Agri Drone",
    navLogout: "Logout",
    
    // Footer
    footerTagline: "IoT Solutions for Smarter Agriculture",
    footerDescription: "Empowering farmers with cutting-edge technology for sustainable and efficient farming practices.",
    footerQuickLinks: "Quick Links",
    footerDashboardAccess: "Dashboard Access",
    footerContactSupport: "Contact & Support",
    footerProjectInfo: "A Heritage of Innovation and Sustainability",
    footerCopyright: "© 2025 Kalpavriksha. All Rights Reserved.",
    
    // Login Page (index.html)
    loginTitle: "Kalpavriksha Dashboard Login",
    loginSubHeader: "Monitor your systems with real-time data",
    uniqueCodePlaceholder: "Enter Unique Code",
    uniqueCodeTooltip: "Enter your client access key provided by your administrator",
    selectProduct: "Select Product",
    productSoil: "Kalpavriksha Soil Quality Sensor",
    productDrip: "Smart Drip Irrigation Mechanism",
    productDrone: "Kalpavriksha Agricultural Drone",
    accessDashboard: "Access Dashboard",
    helpLink: "Lost Product ID? Contact Support",
    
    // Soil Sensor Page
    soilSensorTitle: "Kalpavriksha Soil Quality Sensor",
    soilDashboardTitle: "Dynamic Soil & pH Analysis Dashboard",
    soilComposition: "Local Soil Composition",
    soilPHValue: "Calculated Soil pH Value",
    phCaption: "pH value calculated based on sensor data and weighted soil composition analysis.",
    nutrientProfileTitle: "Nutrient Profile for Dominant Soil:",
    nutrientsRich: "Nutrients RICH In (High)",
    nutrientsPoor: "Nutrients POOR In (Deficient)",
    recommendationsTitle: "Actionable Plan & Recommended Next Steps",
    recommendationsSummary: "Based on your current soil conditions, follow these prioritized recommendations for optimal crop health.",
    immediateActions: "Immediate Actions",
    longTermActions: "Long-Term Actions",
    monitorMoisture: "Monitor Soil Moisture",
    loading: "Loading...",
    
    // Soil Sensor Recommendations
    addressNutrientDeficiencies: "Address Nutrient Deficiencies",
    phMonitoring: "pH Monitoring",
    maintainSoilQuality: "Maintain Soil Quality",
    leverageExistingNutrients: "Leverage Existing Nutrients",
    longTermSoilHealth: "Long-Term Soil Health",
    knowYourSoil: "Know Your Soil. Grow with Confidence.",
    soilDescText: "An advanced IoT startup designed to measure pH levels, nutrient balance, and sunlight exposure. It helps farmers and gardeners make soil quality instantly, enabling smarter decisions for healthier crops and sustainability.",
    soilDescTagline: "Know Your Soil. Grow with Confidence.",
    
    // Drip Irrigation Page
    dripIrrigationTitle: "Smart Drip Irrigation Mechanism",
    moistureStatusTitle: "Current Soil Moisture & Irrigation Status",
    statusOptimal: "Optimal - No Action Needed",
    statusRecommendation: "Your soil moisture is ideal for plant health.",
    nutrientWarning: "Nutrient Warning:",
    nutrientAlertText: "Current low moisture is hindering plant nutrient uptake. Water soon to ensure nutrient availability.",
    waterUsageTitle: "Water Usage & Efficiency",
    waterSavedLabel: "Water Saved This Month",
    waterSavedValue: "1,250 Liters",
    savingsPercent: "(15% Savings)",
    nextWatering: "Next Watering: Estimated in",
    etIndexTitle: "Evapotranspiration Index",
    etLow: "Low",
    etModerate: "Moderate",
    etHigh: "High",
    etSevere: "Severe",
    moistureLossRate: "Moisture Loss Rate:",
    dripDescTitle: "Every Drop Counts.",
    dripDescText: "An intelligent drip irrigation system that automatically detects dry zones and supplies precise amounts of water only where needed. This ensures optimal hydration while minimizing water waste — perfect for eco-friendly farming.",
    dripDescTagline: "Every Drop Counts."
  },
  
  hi: {
    // Navigation
    navSoilSensor: "मिट्टी सेंसर",
    navSmartDrip: "स्मार्ट ड्रिप",
    navAgriDrone: "कृषि ड्रोन",
    navLogout: "लॉगआउट",
    
    // Product Title
    productTitle: "कल्पवृक्ष कृषि ड्रोन",
    
    // Analysis Cards
    heatLevel: "गर्मी का स्तर",
    waterStress: "जल तनाव",
    diseaseSpread: "रोग प्रसार",
    
    // Legend Labels
    legendOptimal: "इष्टतम",
    legendModerate: "मध्यम",
    legendSevere: "गंभीर",
    legendNone: "कोई नहीं",
    legendSevereInfection: "गंभीर संक्रमण",
    legendExcess: "अधिक",
    legendSevereStress: "गंभीर तनाव",
    
    // Scan Details
    scanLabel: "स्कैन:",
    avgTemp: "औसत तापमान:",
    avgMoisture: "औसत नमी:",
    affectedArea: "प्रभावित क्षेत्र:",
    
    // Heat Descriptions
    heatDesc1: "खेत के बड़े हिस्सों में गंभीर फसल तनाव का पता चला।",
    heatDesc2: "ऊपरी-दाएं क्षेत्र में केंद्रित हल्के से मध्यम गर्मी तनाव का पता चला।",
    heatDesc3: "समान तापमान वितरण देखा गया, जो पूरे खेत में स्वस्थ फसल स्थिति को दर्शाता है।",
    
    // Water Descriptions
    waterDesc1: "जल वितरण असमान दिखाई देता है, केंद्र में अधिक नमी के स्पष्ट संकेत हैं।",
    waterDesc2: "अधिकांश क्षेत्रों में इष्टतम नमी स्तर बनाए रखा गया, कोनों में मामूली सूखे धब्बे हैं।",
    waterDesc3: "कई क्षेत्रों में गंभीर जल की कमी का पता चला, तत्काल सिंचाई की सिफारिश की जाती है।",
    
    // Disease Descriptions
    diseaseDesc1: "स्थानीयकृत संक्रमण हॉटस्पॉट का पता चला, खेत में मामूली प्रभावित धब्बे हैं।",
    diseaseDesc2: "व्यापक रोग उपस्थिति देखी गई, प्रभावित क्षेत्रों में तत्काल हस्तक्षेप की आवश्यकता है।",
    diseaseDesc3: "स्वस्थ फसल स्थिति की पुष्टि की गई, खेत में कोई महत्वपूर्ण रोग चिह्न नहीं पाए गए।",
    
    // Weather Section
    weatherTitle: "मुंबई मौसम पूर्वानुमान",
    weatherSubtitle: "आपके खेतों के लिए लाइव 3-दिवसीय स्वचालित पूर्वानुमान",
    weatherToday: "आज",
    weatherTomorrow: "कल",
    weatherHumidity: "आर्द्रता:",
    weatherRain: "बारिश:",
    weatherWind: "हवा:",
    weatherLastUpdated: "अंतिम अपडेट:",
    weatherUnavailable: "अनुपलब्ध",
    weatherError: "लाइव डेटा रीफ्रेश करने में असमर्थ",
    
    // Description Block
    descTitle: "आपके खेत की आकाश में आंख।",
    descText: "वास्तविक समय फसल निगरानी, रोग का पता लगाने और सटीक छिड़काव के लिए अगली पीढ़ी का स्वायत्त ड्रोन। एआई विश्लेषण से लैस, यह किसानों को फसल स्वास्थ्य समस्याओं की पहचान करने, सिंचाई प्रबंधित करने और उपज का पूर्वानुमान लगाने में मदद करता है।",
    descTagline: "आपके खेत की आकाश में आंख।",
    
    // Language Selector
    languageLabel: "भाषा",
    selectLanguage: "भाषा चुनें",
    
    // Header Navigation
    navSoilSensor: "मिट्टी सेंसर",
    navSmartDrip: "स्मार्ट ड्रिप",
    navAgriDrone: "कृषि ड्रोन",
    navLogout: "लॉगआउट",
    
    // Footer
    footerTagline: "स्मार्ट कृषि के लिए IoT समाधान",
    footerDescription: "टिकाऊ और कुशल कृषि प्रथाओं के लिए अत्याधुनिक तकनीक के साथ किसानों को सशक्त बनाना।",
    footerQuickLinks: "त्वरित लिंक",
    footerDashboardAccess: "डैशबोर्ड एक्सेस",
    footerContactSupport: "संपर्क और सहायता",
    footerProjectInfo: "नवाचार और स्थिरता की विरासत",
    footerCopyright: "© 2025 कल्पवृक्ष। सर्वाधिकार सुरक्षित।",
    
    // Login Page (index.html)
    loginTitle: "कल्पवृक्ष डैशबोर्ड लॉगिन",
    loginSubHeader: "वास्तविक समय डेटा के साथ अपने सिस्टम की निगरानी करें",
    uniqueCodePlaceholder: "विशिष्ट कोड दर्ज करें",
    uniqueCodeTooltip: "अपने व्यवस्थापक द्वारा प्रदान की गई क्लाइंट एक्सेस कुंजी दर्ज करें",
    selectProduct: "उत्पाद चुनें",
    productSoil: "कल्पवृक्ष मिट्टी गुणवत्ता सेंसर",
    productDrip: "स्मार्ट ड्रिप सिंचाई तंत्र",
    productDrone: "कल्पवृक्ष कृषि ड्रोन",
    accessDashboard: "डैशबोर्ड एक्सेस करें",
    helpLink: "उत्पाद आईडी खो गई? सहायता से संपर्क करें",
    
    // Soil Sensor Page
    soilSensorTitle: "कल्पवृक्ष मिट्टी गुणवत्ता सेंसर",
    soilDashboardTitle: "गतिशील मिट्टी और pH विश्लेषण डैशबोर्ड",
    soilComposition: "स्थानीय मिट्टी संरचना",
    soilPHValue: "गणना की गई मिट्टी pH मान",
    phCaption: "सेंसर डेटा और भारित मिट्टी संरचना विश्लेषण के आधार पर pH मान की गणना की गई।",
    nutrientProfileTitle: "प्रमुख मिट्टी के लिए पोषक तत्व प्रोफ़ाइल:",
    nutrientsRich: "पोषक तत्व समृद्ध (उच्च)",
    nutrientsPoor: "पोषक तत्व कमी (न्यून)",
    recommendationsTitle: "कार्य योजना और अनुशंसित अगले कदम",
    recommendationsSummary: "आपकी वर्तमान मिट्टी की स्थिति के आधार पर, इष्टतम फसल स्वास्थ्य के लिए इन प्राथमिकता वाली सिफारिशों का पालन करें।",
    immediateActions: "तत्काल कार्रवाई",
    longTermActions: "दीर्घकालिक कार्रवाई",
    monitorMoisture: "मिट्टी की नमी की निगरानी करें",
    loading: "लोड हो रहा है...",
    
    // Soil Sensor Recommendations
    addressNutrientDeficiencies: "पोषक तत्व की कमी को दूर करें",
    phMonitoring: "pH निगरानी",
    maintainSoilQuality: "मिट्टी की गुणवत्ता बनाए रखें",
    leverageExistingNutrients: "मौजूदा पोषक तत्वों का लाभ उठाएं",
    longTermSoilHealth: "दीर्घकालिक मिट्टी स्वास्थ्य",
    knowYourSoil: "अपनी मिट्टी को जानें। आत्मविश्वास के साथ उगाएं।",
    soilDescText: "एक उन्नत IoT स्टार्टअप जो pH स्तर, पोषक तत्व संतुलन और सूर्य के प्रकाश के संपर्क को मापने के लिए डिज़ाइन किया गया है। यह किसानों और बागवानों को तुरंत मिट्टी की गुणवत्ता बनाने में मदद करता है, जिससे स्वस्थ फसलों और स्थिरता के लिए स्मार्ट निर्णय लिए जा सकें।",
    soilDescTagline: "अपनी मिट्टी को जानें। आत्मविश्वास के साथ उगाएं।",
    
    // Drip Irrigation Page
    dripIrrigationTitle: "स्मार्ट ड्रिप सिंचाई तंत्र",
    moistureStatusTitle: "वर्तमान मिट्टी की नमी और सिंचाई स्थिति",
    statusOptimal: "इष्टतम - कोई कार्रवाई की आवश्यकता नहीं",
    statusRecommendation: "आपकी मिट्टी की नमी पौधे के स्वास्थ्य के लिए आदर्श है।",
    nutrientWarning: "पोषक तत्व चेतावनी:",
    nutrientAlertText: "वर्तमान कम नमी पौधे के पोषक तत्व अवशोषण में बाधा डाल रही है। पोषक तत्व उपलब्धता सुनिश्चित करने के लिए जल्द ही पानी दें।",
    waterUsageTitle: "जल उपयोग और दक्षता",
    waterSavedLabel: "इस महीने बचाया गया पानी",
    waterSavedValue: "1,250 लीटर",
    savingsPercent: "(15% बचत)",
    nextWatering: "अगली सिंचाई: अनुमानित समय",
    etIndexTitle: "वाष्पोत्सर्जन सूचकांक",
    etLow: "कम",
    etModerate: "मध्यम",
    etHigh: "उच्च",
    etSevere: "गंभीर",
    moistureLossRate: "नमी हानि दर:",
    dripDescTitle: "हर बूंद मायने रखती है।",
    dripDescText: "एक बुद्धिमान ड्रिप सिंचाई प्रणाली जो स्वचालित रूप से सूखे क्षेत्रों का पता लगाती है और केवल वहीं आवश्यक मात्रा में पानी की आपूर्ति करती है। यह इष्टतम जलयोजन सुनिश्चित करते हुए पानी की बर्बादी को कम करता है - पर्यावरण के अनुकूल खेती के लिए एकदम सही।",
    dripDescTagline: "हर बूंद मायने रखती है।"
  },
  
  te: {
    // Navigation
    navSoilSensor: "మట్టి సెన్సార్",
    navSmartDrip: "స్మార్ట్ డ్రిప్",
    navAgriDrone: "వ్యవసాయ డ్రోన్",
    navLogout: "లాగ్అవుట్",
    
    // Product Title
    productTitle: "కల్పవృక్ష వ్యవసాయ డ్రోన్",
    
    // Analysis Cards
    heatLevel: "వేడి స్థాయి",
    waterStress: "నీటి ఒత్తిడి",
    diseaseSpread: "వ్యాధి వ్యాప్తి",
    
    // Legend Labels
    legendOptimal: "సరైనది",
    legendModerate: "మధ్యస్థ",
    legendSevere: "తీవ్రమైన",
    legendNone: "ఏదీ లేదు",
    legendSevereInfection: "తీవ్రమైన సంక్రమణ",
    legendExcess: "అధికం",
    legendSevereStress: "తీవ్రమైన ఒత్తిడి",
    
    // Scan Details
    scanLabel: "స్కాన్:",
    avgTemp: "సగటు ఉష్ణోగ్రత:",
    avgMoisture: "సగటు తేమ:",
    affectedArea: "ప్రభావిత ప్రాంతం:",
    
    // Heat Descriptions
    heatDesc1: "పొలంలోని పెద్ద విభాగాలలో తీవ్రమైన పంట ఒత్తిడి గుర్తించబడింది.",
    heatDesc2: "ఎగువ-కుడి ప్రాంతంలో కేంద్రీకృతమై తేలికపాటి నుండి మధ్యస్థ వేడి ఒత్తిడి గుర్తించబడింది.",
    heatDesc3: "ఏకరీతి ఉష్ణోగ్రత పంపిణీ గమనించబడింది, ఇది మొత్తం పొలంలో ఆరోగ్యకరమైన పంట పరిస్థితులను సూచిస్తుంది.",
    
    // Water Descriptions
    waterDesc1: "నీటి పంపిణీ అసమానంగా కనిపిస్తుంది, మధ్యలో అధిక తేమ యొక్క స్పష్టమైన సంకేతాలు ఉన్నాయి.",
    waterDesc2: "చాలా ప్రాంతాలలో సరైన తేమ స్థాయిలు నిర్వహించబడ్డాయి, మూలల్లో చిన్న పొడి మచ్చలు ఉన్నాయి.",
    waterDesc3: "అనేక ప్రాంతాలలో తీవ్రమైన నీటి కొరత గుర్తించబడింది, తక్షణ నీటిపారుదల సిఫార్సు చేయబడింది.",
    
    // Disease Descriptions
    diseaseDesc1: "స్థానికీకరించిన సంక్రమణ హాట్‌స్పాట్‌లు గుర్తించబడ్డాయి, పొలం అంతటా చిన్న ప్రభావిత మచ్చలు ఉన్నాయి.",
    diseaseDesc2: "విస్తృత వ్యాధి ఉనికి గమనించబడింది, ప్రభావిత ప్రాంతాలలో తక్షణ జోక్యం అవసరం.",
    diseaseDesc3: "ఆరోగ్యకరమైన పంట స్థితి నిర్ధారించబడింది, పొలం అంతటా ముఖ్యమైన వ్యాధి గుర్తులు గుర్తించబడలేదు.",
    
    // Weather Section
    weatherTitle: "ముంబై వాతావరణ సూచన",
    weatherSubtitle: "మీ పొలాల కోసం ప్రత్యక్ష 3-రోజుల స్వయంచాలక సూచన",
    weatherToday: "ఈరోజు",
    weatherTomorrow: "రేపు",
    weatherHumidity: "తేమ:",
    weatherRain: "వర్షం:",
    weatherWind: "గాలి:",
    weatherLastUpdated: "చివరిగా నవీకరించబడింది:",
    weatherUnavailable: "అందుబాటులో లేదు",
    weatherError: "ప్రత్యక్ష డేటాను రిఫ్రెష్ చేయడం సాధ్యం కాలేదు",
    
    // Description Block
    descTitle: "మీ పొలం యొక్క ఆకాశంలో కన్ను.",
    descText: "నిజ-సమయ పంట పర్యవేక్షణ, వ్యాధి గుర్తింపు మరియు ఖచ్చితమైన స్ప్రేయింగ్ కోసం తరువాతి తరం స్వయంప్రతిపత్త డ్రోన్. AI విశ్లేషణతో అమర్చబడి, ఇది రైతులకు పంట ఆరోగ్య సమస్యలను గుర్తించడానికి, నీటిపారుదలను నిర్వహించడానికి మరియు దిగుబడిని మరింత సమర్థవంతంగా అంచనా వేయడానికి సహాయపడుతుంది.",
    descTagline: "మీ పొలం యొక్క ఆకాశంలో కన్ను.",
    
    // Language Selector
    languageLabel: "భాష",
    selectLanguage: "భాషను ఎంచుకోండి",
    
    // Header Navigation
    navSoilSensor: "మట్టి సెన్సార్",
    navSmartDrip: "స్మార్ట్ డ్రిప్",
    navAgriDrone: "వ్యవసాయ డ్రోన్",
    navLogout: "లాగ్అవుట్",
    
    // Footer
    footerTagline: "స్మార్ట్ వ్యవసాయం కోసం IoT పరిష్కారాలు",
    footerDescription: "స్థిరమైన మరియు సమర్థవంతమైన వ్యవసాయ పద్ధతుల కోసం అత్యాధునిక సాంకేతికతతో రైతులను శక్తివంతం చేయడం.",
    footerQuickLinks: "శీఘ్ర లింక్‌లు",
    footerDashboardAccess: "డాష్‌బోర్డ్ యాక్సెస్",
    footerContactSupport: "సంప్రదింపు & మద్దతు",
    footerProjectInfo: "ఆవిష్కరణ మరియు స్థిరత్వం యొక్క వారసత్వం",
    footerCopyright: "© 2025 కల్పవృక్ష. అన్ని హక్కులు రక్షించబడ్డాయి.",
    
    // Login Page (index.html)
    loginTitle: "కల్పవృక్ష డాష్‌బోర్డ్ లాగిన్",
    loginSubHeader: "నిజ-సమయ డేటాతో మీ సిస్టమ్‌లను పర్యవేక్షించండి",
    uniqueCodePlaceholder: "ప్రత్యేక కోడ్ నమోదు చేయండి",
    uniqueCodeTooltip: "మీ నిర్వాహకుడు అందించిన క్లయింట్ యాక్సెస్ కీని నమోదు చేయండి",
    selectProduct: "ఉత్పత్తిని ఎంచుకోండి",
    productSoil: "కల్పవృక్ష మట్టి నాణ్యత సెన్సార్",
    productDrip: "స్మార్ట్ డ్రిప్ నీటిపారుదల యంత్రాంగం",
    productDrone: "కల్పవృక్ష వ్యవసాయ డ్రోన్",
    accessDashboard: "డాష్‌బోర్డ్ యాక్సెస్ చేయండి",
    helpLink: "ఉత్పత్తి ID పోయిందా? మద్దతును సంప్రదించండి",
    
    // Soil Sensor Page
    soilSensorTitle: "కల్పవృక్ష మట్టి నాణ్యత సెన్సార్",
    soilDashboardTitle: "డైనమిక్ మట్టి & pH విశ్లేషణ డాష్‌బోర్డ్",
    soilComposition: "స్థానిక మట్టి కూర్పు",
    soilPHValue: "లెక్కించిన మట్టి pH విలువ",
    phCaption: "సెన్సార్ డేటా మరియు బరువున్న మట్టి కూర్పు విశ్లేషణ ఆధారంగా pH విలువ లెక్కించబడింది.",
    nutrientProfileTitle: "ప్రధాన మట్టి కోసం పోషక ప్రొఫైల్:",
    nutrientsRich: "పోషకాలు సమృద్ధి (అధిక)",
    nutrientsPoor: "పోషకాలు లోపం (తక్కువ)",
    recommendationsTitle: "కార్యాచరణ ప్రణాళిక & సిఫార్సు చేయబడిన తదుపరి దశలు",
    recommendationsSummary: "మీ ప్రస్తుత మట్టి పరిస్థితుల ఆధారంగా, సరైన పంట ఆరోగ్యం కోసం ఈ ప్రాధాన్యత సిఫార్సులను అనుసరించండి.",
    immediateActions: "తక్షణ చర్యలు",
    longTermActions: "దీర్ఘకాలిక చర్యలు",
    monitorMoisture: "మట్టి తేమను పర్యవేక్షించండి",
    loading: "లోడ్ అవుతోంది...",
    
    // Soil Sensor Recommendations
    addressNutrientDeficiencies: "పోషక లోపాలను పరిష్కరించండి",
    phMonitoring: "pH పర్యవేక్షణ",
    maintainSoilQuality: "మట్టి నాణ్యతను నిర్వహించండి",
    leverageExistingNutrients: "ఇప్పటికే ఉన్న పోషకాలను ఉపయోగించుకోండి",
    longTermSoilHealth: "దీర్ఘకాలిక మట్టి ఆరోగ్యం",
    knowYourSoil: "మీ మట్టిని తెలుసుకోండి. విశ్వాసంతో పెంచండి.",
    soilDescText: "pH స్థాయిలు, పోషక సమతుల్యత మరియు సూర్యరశ్మి బహిర్గతాన్ని కొలవడానికి రూపొందించిన అధునాతన IoT స్టార్టప్. ఇది రైతులు మరియు తోటమాలులకు తక్షణమే మట్టి నాణ్యతను తయారు చేయడంలో సహాయపడుతుంది, ఆరోగ్యకరమైన పంటలు మరియు స్థిరత్వం కోసం తెలివైన నిర్ణయాలను ప్రారంభిస్తుంది.",
    soilDescTagline: "మీ మట్టిని తెలుసుకోండి. విశ్వాసంతో పెంచండి.",
    
    // Drip Irrigation Page
    dripIrrigationTitle: "స్మార్ట్ డ్రిప్ నీటిపారుదల యంత్రాంగం",
    moistureStatusTitle: "ప్రస్తుత మట్టి తేమ & నీటిపారుదల స్థితి",
    statusOptimal: "సరైనది - చర్య అవసరం లేదు",
    statusRecommendation: "మీ మట్టి తేమ మొక్క ఆరోగ్యానికి అనువైనది.",
    nutrientWarning: "పోషక హెచ్చరిక:",
    nutrientAlertText: "ప్రస్తుత తక్కువ తేమ మొక్క పోషక గ్రహణానికి అడ్డుగా ఉంది. పోషక లభ్యతను నిర్ధారించడానికి త్వరలో నీరు పోయండి.",
    waterUsageTitle: "నీటి వినియోగం & సామర్థ్యం",
    waterSavedLabel: "ఈ నెలలో ఆదా చేసిన నీరు",
    waterSavedValue: "1,250 లీటర్లు",
    savingsPercent: "(15% ఆదా)",
    nextWatering: "తదుపరి నీటిపారుదల: అంచనా సమయం",
    etIndexTitle: "బాష్పవాయువు సూచిక",
    etLow: "తక్కువ",
    etModerate: "మధ్యస్థ",
    etHigh: "అధిక",
    etSevere: "తీవ్రమైన",
    moistureLossRate: "తేమ నష్ట రేటు:",
    dripDescTitle: "ప్రతి చుక్క లెక్క.",
    dripDescText: "ఒక తెలివైన డ్రిప్ నీటిపారుదల వ్యవస్థ స్వయంచాలకంగా పొడి ప్రాంతాలను గుర్తిస్తుంది మరియు అవసరమైన చోట మాత్రమే ఖచ్చితమైన మొత్తంలో నీటిని సరఫరా చేస్తుంది. ఇది నీటి వ్యర్థాన్ని తగ్గిస్తూ సరైన హైడ్రేషన్‌ను నిర్ధారిస్తుంది - పర్యావరణ అనుకూల వ్యవసాయానికి సరైనది.",
    dripDescTagline: "ప్రతి చుక్క లెక్క."
  },
  
  kn: {
    // Navigation
    navSoilSensor: "ಮಣ್ಣಿನ ಸಂವೇದಕ",
    navSmartDrip: "ಸ್ಮಾರ್ಟ್ ಡ್ರಿಪ್",
    navAgriDrone: "ಕೃಷಿ ಡ್ರೋನ್",
    navLogout: "ಲಾಗ್ಔಟ್",
    
    // Product Title
    productTitle: "ಕಲ್ಪವೃಕ್ಷ ಕೃಷಿ ಡ್ರೋನ್",
    
    // Analysis Cards
    heatLevel: "ಶಾಖದ ಮಟ್ಟ",
    waterStress: "ನೀರಿನ ಒತ್ತಡ",
    diseaseSpread: "ರೋಗ ಹರಡುವಿಕೆ",
    
    // Legend Labels
    legendOptimal: "ಅತ್ಯುತ್ತಮ",
    legendModerate: "ಮಧ್ಯಮ",
    legendSevere: "ತೀವ್ರ",
    legendNone: "ಯಾವುದೂ ಇಲ್ಲ",
    legendSevereInfection: "ತೀವ್ರ ಸೋಂಕು",
    legendExcess: "ಹೆಚ್ಚು",
    legendSevereStress: "ತೀವ್ರ ಒತ್ತಡ",
    
    // Scan Details
    scanLabel: "ಸ್ಕ್ಯಾನ್:",
    avgTemp: "ಸರಾಸರಿ ತಾಪಮಾನ:",
    avgMoisture: "ಸರಾಸರಿ ತೇವಾಂಶ:",
    affectedArea: "ಪೀಡಿತ ಪ್ರದೇಶ:",
    
    // Heat Descriptions
    heatDesc1: "ಹೊಲದ ದೊಡ್ಡ ವಿಭಾಗಗಳಲ್ಲಿ ತೀವ್ರ ಬೆಳೆ ಒತ್ತಡ ಪತ್ತೆಯಾಗಿದೆ.",
    heatDesc2: "ಮೇಲಿನ-ಬಲ ವಲಯದಲ್ಲಿ ಕೇಂದ್ರೀಕೃತವಾಗಿ ಸೌಮ್ಯದಿಂದ ಮಧ್ಯಮ ಶಾಖದ ಒತ್ತಡ ಪತ್ತೆಯಾಗಿದೆ.",
    heatDesc3: "ಏಕರೂಪದ ತಾಪಮಾನ ವಿತರಣೆ ಗಮನಿಸಲಾಗಿದೆ, ಇದು ಸಂಪೂರ್ಣ ಹೊಲದಲ್ಲಿ ಆರೋಗ್ಯಕರ ಬೆಳೆ ಪರಿಸ್ಥಿತಿಗಳನ್ನು ಸೂಚಿಸುತ್ತದೆ.",
    
    // Water Descriptions
    waterDesc1: "ನೀರಿನ ವಿತರಣೆ ಅಸಮಾನವಾಗಿ ಕಾಣುತ್ತದೆ, ಮಧ್ಯದಲ್ಲಿ ಹೆಚ್ಚುವರಿ ತೇವಾಂಶದ ಸ್ಪಷ್ಟ ಚಿಹ್ನೆಗಳಿವೆ.",
    waterDesc2: "ಹೆಚ್ಚಿನ ವಲಯಗಳಲ್ಲಿ ಅತ್ಯುತ್ತಮ ತೇವಾಂಶ ಮಟ್ಟಗಳನ್ನು ನಿರ್ವಹಿಸಲಾಗಿದೆ, ಮೂಲೆಗಳಲ್ಲಿ ಸಣ್ಣ ಒಣ ತೇಪೆಗಳಿವೆ.",
    waterDesc3: "ಅನೇಕ ವಲಯಗಳಲ್ಲಿ ತೀವ್ರ ನೀರಿನ ಕೊರತೆ ಪತ್ತೆಯಾಗಿದೆ, ತಕ್ಷಣದ ನೀರಾವರಿ ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ.",
    
    // Disease Descriptions
    diseaseDesc1: "ಸ್ಥಳೀಕರಿಸಿದ ಸೋಂಕು ಹಾಟ್‌ಸ್ಪಾಟ್‌ಗಳು ಪತ್ತೆಯಾಗಿವೆ, ಹೊಲದಾದ್ಯಂತ ಸಣ್ಣ ಪೀಡಿತ ತೇಪೆಗಳಿವೆ.",
    diseaseDesc2: "ವ್ಯಾಪಕ ರೋಗ ಉಪಸ್ಥಿತಿ ಗಮನಿಸಲಾಗಿದೆ, ಪೀಡಿತ ಪ್ರದೇಶಗಳಲ್ಲಿ ತಕ್ಷಣದ ಹಸ್ತಕ್ಷೇಪ ಅಗತ್ಯವಿದೆ.",
    diseaseDesc3: "ಆರೋಗ್ಯಕರ ಬೆಳೆ ಸ್ಥಿತಿ ದೃಢೀಕರಿಸಲಾಗಿದೆ, ಹೊಲದಾದ್ಯಂತ ಯಾವುದೇ ಗಮನಾರ್ಹ ರೋಗ ಗುರುತುಗಳು ಪತ್ತೆಯಾಗಿಲ್ಲ.",
    
    // Weather Section
    weatherTitle: "ಮುಂಬೈ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ",
    weatherSubtitle: "ನಿಮ್ಮ ಹೊಲಗಳಿಗೆ ನೇರ 3-ದಿನಗಳ ಸ್ವಯಂಚಾಲಿತ ಮುನ್ಸೂಚನೆ",
    weatherToday: "ಇಂದು",
    weatherTomorrow: "ನಾಳೆ",
    weatherHumidity: "ತೇವಾಂಶ:",
    weatherRain: "ಮಳೆ:",
    weatherWind: "ಗಾಳಿ:",
    weatherLastUpdated: "ಕೊನೆಯ ನವೀಕರಣ:",
    weatherUnavailable: "ಲಭ್ಯವಿಲ್ಲ",
    weatherError: "ನೇರ ಡೇಟಾವನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ",
    
    // Description Block
    descTitle: "ನಿಮ್ಮ ಹೊಲದ ಆಕಾಶದಲ್ಲಿ ಕಣ್ಣು.",
    descText: "ನೈಜ-ಸಮಯದ ಬೆಳೆ ಮೇಲ್ವಿಚಾರಣೆ, ರೋಗ ಪತ್ತೆ ಮತ್ತು ನಿಖರವಾದ ಸಿಂಪಡಣೆಗಾಗಿ ಮುಂದಿನ ಪೀಳಿಗೆಯ ಸ್ವಾಯತ್ತ ಡ್ರೋನ್. AI ವಿಶ್ಲೇಷಣೆಯೊಂದಿಗೆ ಸಜ್ಜುಗೊಂಡಿದೆ, ಇದು ರೈತರಿಗೆ ಬೆಳೆ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳನ್ನು ಗುರುತಿಸಲು, ನೀರಾವರಿ ನಿರ್ವಹಿಸಲು ಮತ್ತು ಇಳುವರಿಯನ್ನು ಹೆಚ್ಚು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಮುನ್ಸೂಚಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    descTagline: "ನಿಮ್ಮ ಹೊಲದ ಆಕಾಶದಲ್ಲಿ ಕಣ್ಣು.",
    
    // Language Selector
    languageLabel: "ಭಾಷೆ",
    selectLanguage: "ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    
    // Header Navigation
    navSoilSensor: "ಮಣ್ಣಿನ ಸಂವೇದಕ",
    navSmartDrip: "ಸ್ಮಾರ್ಟ್ ಡ್ರಿಪ್",
    navAgriDrone: "ಕೃಷಿ ಡ್ರೋನ್",
    navLogout: "ಲಾಗ್ಔಟ್",
    
    // Footer
    footerTagline: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿಗಾಗಿ IoT ಪರಿಹಾರಗಳು",
    footerDescription: "ಸುಸ್ಥಿರ ಮತ್ತು ಸಮರ್ಥ ಕೃಷಿ ಪದ್ಧತಿಗಳಿಗಾಗಿ ಅತ್ಯಾಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು.",
    footerQuickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    footerDashboardAccess: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶ",
    footerContactSupport: "ಸಂಪರ್ಕ & ಬೆಂಬಲ",
    footerProjectInfo: "ನಾವೀನ್ಯತೆ ಮತ್ತು ಸುಸ್ಥಿರತೆಯ ಪರಂಪರೆ",
    footerCopyright: "© 2025 ಕಲ್ಪವೃಕ್ಷ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    
    // Login Page (index.html)
    loginTitle: "ಕಲ್ಪವೃಕ್ಷ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಲಾಗಿನ್",
    loginSubHeader: "ನೈಜ-ಸಮಯದ ಡೇಟಾದೊಂದಿಗೆ ನಿಮ್ಮ ವ್ಯವಸ್ಥೆಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
    uniqueCodePlaceholder: "ವಿಶಿಷ್ಟ ಕೋಡ್ ನಮೂದಿಸಿ",
    uniqueCodeTooltip: "ನಿಮ್ಮ ನಿರ್ವಾಹಕರು ಒದಗಿಸಿದ ಕ್ಲೈಂಟ್ ಪ್ರವೇಶ ಕೀಲಿಯನ್ನು ನಮೂದಿಸಿ",
    selectProduct: "ಉತ್ಪನ್ನವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    productSoil: "ಕಲ್ಪವೃಕ್ಷ ಮಣ್ಣಿನ ಗುಣಮಟ್ಟ ಸಂವೇದಕ",
    productDrip: "ಸ್ಮಾರ್ಟ್ ಡ್ರಿಪ್ ನೀರಾವರಿ ಯಾಂತ್ರಿಕತೆ",
    productDrone: "ಕಲ್ಪವೃಕ್ಷ ಕೃಷಿ ಡ್ರೋನ್",
    accessDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಪ್ರವೇಶಿಸಿ",
    helpLink: "ಉತ್ಪನ್ನ ID ಕಳೆದುಹೋಗಿದೆಯೇ? ಬೆಂಬಲವನ್ನು ಸಂಪರ್ಕಿಸಿ",
    
    // Soil Sensor Page
    soilSensorTitle: "ಕಲ್ಪವೃಕ್ಷ ಮಣ್ಣಿನ ಗುಣಮಟ್ಟ ಸಂವೇದಕ",
    soilDashboardTitle: "ಡೈನಾಮಿಕ್ ಮಣ್ಣು & pH ವಿಶ್ಲೇಷಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
    soilComposition: "ಸ್ಥಳೀಯ ಮಣ್ಣಿನ ಸಂಯೋಜನೆ",
    soilPHValue: "ಲೆಕ್ಕಾಚಾರ ಮಾಡಿದ ಮಣ್ಣಿನ pH ಮೌಲ್ಯ",
    phCaption: "ಸಂವೇದಕ ಡೇಟಾ ಮತ್ತು ತೂಕದ ಮಣ್ಣಿನ ಸಂಯೋಜನೆ ವಿಶ್ಲೇಷಣೆಯ ಆಧಾರದ ಮೇಲೆ pH ಮೌಲ್ಯವನ್ನು ಲೆಕ್ಕಾಚಾರ ಮಾಡಲಾಗಿದೆ.",
    nutrientProfileTitle: "ಪ್ರಧಾನ ಮಣ್ಣಿಗೆ ಪೋಷಕಾಂಶ ಪ್ರೊಫೈಲ್:",
    nutrientsRich: "ಪೋಷಕಾಂಶಗಳು ಸಮೃದ್ಧ (ಹೆಚ್ಚು)",
    nutrientsPoor: "ಪೋಷಕಾಂಶಗಳು ಕೊರತೆ (ಕಡಿಮೆ)",
    recommendationsTitle: "ಕ್ರಿಯಾಶೀಲ ಯೋಜನೆ & ಶಿಫಾರಸು ಮಾಡಿದ ಮುಂದಿನ ಹಂತಗಳು",
    recommendationsSummary: "ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಮಣ್ಣಿನ ಪರಿಸ್ಥಿತಿಗಳ ಆಧಾರದ ಮೇಲೆ, ಅತ್ಯುತ್ತಮ ಬೆಳೆ ಆರೋಗ್ಯಕ್ಕಾಗಿ ಈ ಆದ್ಯತೆಯ ಶಿಫಾರಸುಗಳನ್ನು ಅನುಸರಿಸಿ.",
    immediateActions: "ತಕ್ಷಣದ ಕ್ರಮಗಳು",
    longTermActions: "ದೀರ್ಘಾವಧಿಯ ಕ್ರಮಗಳು",
    monitorMoisture: "ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ",
    loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    
    // Soil Sensor Recommendations
    addressNutrientDeficiencies: "ಪೋಷಕಾಂಶ ಕೊರತೆಗಳನ್ನು ಪರಿಹರಿಸಿ",
    phMonitoring: "pH ಮೇಲ್ವಿಚಾರಣೆ",
    maintainSoilQuality: "ಮಣ್ಣಿನ ಗುಣಮಟ್ಟವನ್ನು ನಿರ್ವಹಿಸಿ",
    leverageExistingNutrients: "ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಪೋಷಕಾಂಶಗಳನ್ನು ಬಳಸಿಕೊಳ್ಳಿ",
    longTermSoilHealth: "ದೀರ್ಘಾವಧಿಯ ಮಣ್ಣಿನ ಆರೋಗ್ಯ",
    knowYourSoil: "ನಿಮ್ಮ ಮಣ್ಣನ್ನು ತಿಳಿಯಿರಿ. ವಿಶ್ವಾಸದಿಂದ ಬೆಳೆಯಿರಿ.",
    soilDescText: "pH ಮಟ್ಟಗಳು, ಪೋಷಕಾಂಶ ಸಮತೋಲನ ಮತ್ತು ಸೂರ್ಯನ ಬೆಳಕಿನ ಒಡ್ಡುವಿಕೆಯನ್ನು ಅಳೆಯಲು ವಿನ್ಯಾಸಗೊಳಿಸಿದ ಸುಧಾರಿತ IoT ಸ್ಟಾರ್ಟಪ್. ಇದು ರೈತರು ಮತ್ತು ತೋಟಗಾರರಿಗೆ ತಕ್ಷಣವೇ ಮಣ್ಣಿನ ಗುಣಮಟ್ಟವನ್ನು ತಯಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಆರೋಗ್ಯಕರ ಬೆಳೆಗಳು ಮತ್ತು ಸುಸ್ಥಿರತೆಗಾಗಿ ಬುದ್ಧಿವಂತ ನಿರ್ಧಾರಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.",
    soilDescTagline: "ನಿಮ್ಮ ಮಣ್ಣನ್ನು ತಿಳಿಯಿರಿ. ವಿಶ್ವಾಸದಿಂದ ಬೆಳೆಯಿರಿ.",
    
    // Drip Irrigation Page
    dripIrrigationTitle: "ಸ್ಮಾರ್ಟ್ ಡ್ರಿಪ್ ನೀರಾವರಿ ಯಾಂತ್ರಿಕತೆ",
    moistureStatusTitle: "ಪ್ರಸ್ತುತ ಮಣ್ಣಿನ ತೇವಾಂಶ & ನೀರಾವರಿ ಸ್ಥಿತಿ",
    statusOptimal: "ಅತ್ಯುತ್ತಮ - ಯಾವುದೇ ಕ್ರಮ ಅಗತ್ಯವಿಲ್ಲ",
    statusRecommendation: "ನಿಮ್ಮ ಮಣ್ಣಿನ ತೇವಾಂಶ ಸಸ್ಯ ಆರೋಗ್ಯಕ್ಕೆ ಸೂಕ್ತವಾಗಿದೆ.",
    nutrientWarning: "ಪೋಷಕಾಂಶ ಎಚ್ಚರಿಕೆ:",
    nutrientAlertText: "ಪ್ರಸ್ತುತ ಕಡಿಮೆ ತೇವಾಂಶವು ಸಸ್ಯ ಪೋಷಕಾಂಶ ಹೀರಿಕೊಳ್ಳುವಿಕೆಗೆ ಅಡ್ಡಿಯಾಗುತ್ತಿದೆ. ಪೋಷಕಾಂಶ ಲಭ್ಯತೆಯನ್ನು ಖಚಿತಪಡಿಸಲು ಶೀಘ್ರದಲ್ಲೇ ನೀರು ಹಾಕಿ.",
    waterUsageTitle: "ನೀರಿನ ಬಳಕೆ & ದಕ್ಷತೆ",
    waterSavedLabel: "ಈ ತಿಂಗಳು ಉಳಿಸಿದ ನೀರು",
    waterSavedValue: "1,250 ಲೀಟರ್‌ಗಳು",
    savingsPercent: "(15% ಉಳಿತಾಯ)",
    nextWatering: "ಮುಂದಿನ ನೀರಾವರಿ: ಅಂದಾಜು ಸಮಯ",
    etIndexTitle: "ಬಾಷ್ಪೀಕರಣ ಸೂಚ್ಯಂಕ",
    etLow: "ಕಡಿಮೆ",
    etModerate: "ಮಧ್ಯಮ",
    etHigh: "ಹೆಚ್ಚು",
    etSevere: "ತೀವ್ರ",
    moistureLossRate: "ತೇವಾಂಶ ನಷ್ಟ ದರ:",
    dripDescTitle: "ಪ್ರತಿ ಹನಿ ಎಣಿಕೆ.",
    dripDescText: "ಒಂದು ಬುದ್ಧಿವಂತ ಡ್ರಿಪ್ ನೀರಾವರಿ ವ್ಯವಸ್ಥೆಯು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒಣ ವಲಯಗಳನ್ನು ಪತ್ತೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಅಗತ್ಯವಿರುವ ಸ್ಥಳದಲ್ಲಿ ಮಾತ್ರ ನಿಖರವಾದ ಪ್ರಮಾಣದ ನೀರನ್ನು ಪೂರೈಸುತ್ತದೆ. ಇದು ನೀರಿನ ವ್ಯರ್ಥವನ್ನು ಕಡಿಮೆ ಮಾಡುವಾಗ ಅತ್ಯುತ್ತಮ ಜಲಸಂಚಯವನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ - ಪರಿಸರ ಸ್ನೇಹಿ ಕೃಷಿಗೆ ಪರಿಪೂರ್ಣ.",
    dripDescTagline: "ಪ್ರತಿ ಹನಿ ಎಣಿಕೆ."
  }
};
