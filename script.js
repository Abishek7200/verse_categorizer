// Tamil Bible BSI version verses data
// Tamil Bible BSI version verses data
const verses = {
    hope: [
        "எரேமியா 29:11 - நீங்கள் எதிர்பார்த்திருக்கும் முடிவை உங்களுக்கு கொடுக்கும்படிக்கு நான் உங்கள்பேரில் நினைத்திருக்கிற நினைவுகளை அறிவேன் என்று கர்த்தர் சொல்லுகிறார்; அவைகள் தீமைக்கல்ல, சமாதானத்துக்கேதுவான நினைவுகளே.",
        "ரோமர் 15:13 - பரிசுத்த ஆவியின் பலத்தினாலே உங்களுக்கு நம்பிக்கை பெருகும்படிக்கு, நம்பிக்கையின் தேவன் விசுவாசத்தினால் உண்டாகும் எல்லாவித சந்தோஷத்தினாலும் சமாதானத்தினாலும் உங்களை நிரப்புவாராக.",
        "சங்கீதம் 42:11 - என் ஆத்துமாவே, நீ ஏன் கலங்குகிறாய்? ஏன் எனக்குள் தியங்குகிறாய்? தேவனை நோக்கிக் காத்திரு; என் முகத்திற்கு இரட்சிப்பும் என் தேவனுமாயிருக்கிறவரை நான் இன்னும் துதிப்பேன்.",
        "2 இரா-18:5 - அவன் இஸ்ரவேலின் தேவனாகிய கர்த்தரின்மேல் வைத்த நம்பிக்கையிலே, அவனுக்குப் பின்னும் அவனுக்கு முன்னும் இருந்த யூதாவின் ராஜாக்களிலெல்லாம் அவனைப்போல் ஒருவனும் இருந்ததில்லை.",
        "ஏசாயா 40:31 - கர்த்தருக்குக் காத்திருக்கிறவர்களோ புதுப்பெலனடைந்து, கழுகுகளைப்போலச் செட்டைகளை அடித்து எழும்புவார்கள்; அவர்கள் ஓடினாலும் இளைப்படையார்கள், நடந்தாலும் சோர்ந்துபோகார்கள்.",
        "மீகா 7:7 - நானோ கர்த்தரை நோக்கிக்கொண்டு, என் இரட்சிப்பின் தேவனுக்குக் காத்திருப்பேன்; என் தேவன் என்னைக் கேட்டருளுவார்.",
        "ரோமர் 5:3,4 - அதுமாத்திரமல்ல, உபத்திரவம் பொறுமையையும், பொறுமை பரீட்சையையும், பரீட்சை நம்பிக்கையையும் உண்டாக்குகிறதென்று நாங்கள் அறிந்து, உபத்திரவங்களிலேயும் மேன்மைபாராட்டுகிறோம்.",
        "1 கொரிந்தியர் 13:13 - இப்பொழுது விசுவாசம், நம்பிக்கை, அன்பு இம்மூன்றும் நிலைத்திருக்கிறது; இவைகளில் அன்பே பெரியது.",
        "ரோமர் 12:12 - நம்பிக்கையிலே சந்தோஷமாயிருங்கள்; உபத்திரவத்திலே பொறுமையாயிருங்கள்; ஜெபத்திலே உறுதியாய்த் தரித்திருங்கள்.",
        "எபிரெயர் 11:1 - விசுவாசமானது நம்பப்படுகிறவைகளின் உறுதியும், காணப்படாதவைகளின் நிச்சயமுமாயிருக்கிறது.",
        "ரோமர் 8:24 - அந்த நம்பிக்கையினாலே நாம் இரட்சிக்கப்பட்டிருக்கிறோம். காணப்படுகிறதை நம்புகிறது நம்பிக்கையல்ல; ஒருவன் தான் காண்கிறதை நம்பவேண்டுவதென்ன?",
        "ரோமர் 8:25 - நாம் காணாததை நம்பினோமாகில், அது வருகிறதற்குப் பொறுமையோடே காத்திருப்போம்.",
        "சங்கீதம் 4:5 - நீதியின் பலிகளைச் செலுத்தி, கர்த்தர்மேல் நம்பிக்கையாயிருங்கள்.",
        "சங்கீதம் 9:18 - எளியவன் என்றைக்கும் மறக்கப்படுவதில்லை; சிறுமைப்பட்டவர்களுடைய நம்பிக்கை ஒருபோதும் கெட்டுப் போவதில்லை.",
        "சங்கீதம் 13:5 - நான் உம்முடைய கிருபையின்மேல் நம்பிக்கையாயிருக்கிறேன்; உம்முடைய இரட்சிப்பினால் என் இருதயம் களிகூரும்.",
        "சங்கீதம் 22:4 - எங்கள் பிதாக்கள் உம்மிடத்தில் நம்பிக்கைவைத்தார்கள்; நம்பின அவர்களை நீர் விடுவித்தீர்.",
        "சங்கீதம் 22:9 - நீரே என்னைக் கர்ப்பத்திலிருந்து எடுத்தவர்; என் தாயின் முலைப்பாலை நான் உண்கையில் என்னை உம்முடையபேரில் நம்பிக்கையாயிருக்கப்பண்ணினீர்.",
        "சங்கீதம் 27:3 - எனக்கு விரோதமாக ஒரு பாளயமிறங்கினாலும், என் இருதயம் பயப்படாது; என்மேல் யுத்தம் எழும்பினாலும், இதிலே நான் நம்பிக்கையாயிருப்பேன்.",
        "சங்கீதம் 34:8 - கர்த்தர் நல்லவர் என்பதை ருசித்துப்பாருங்கள்; அவர்மேல் நம்பிக்கையாயிருக்கிற மனுஷன் பாக்கியவான்.",
        "சங்கீதம் 37:5 - உன் வழியைக் கர்த்தருக்கு ஒப்புவித்து, அவர்மேல் நம்பிக்கையாயிரு; அவரே காரியத்தை வாய்க்கப்பண்ணுவார்.",
        "சங்கீதம் 40:4 - அகங்காரிகளையும் பொய்யைச் சார்ந்திருக்கிறவர்களையும் நோக்காமல், கர்த்தரையே தன் நம்பிக்கையாக வைக்கிற மனுஷன் பாக்கியவான்.",
        "சங்கீதம் 65:5 - பூமியின் கடையாந்தரங்களிலும் தூரமான சமுத்திரங்களிலுமுள்ளவர்கள் எல்லாரும் நம்பும் நம்பிக்கையாயிருக்கிற எங்கள் இரட்சிப்பின் தேவனே, நீர் பயங்கரமான காரியங்களைச் செய்கிறதினால் எங்களுக்கு நீதியுள்ள உத்தரவு அருளுகிறீர்.",
        "சங்கீதம் 71:5 - கர்த்தராகிய ஆண்டவரே, நீரே என் நோக்கமும், என் சிறுவயதுதொடங்கி என் நம்பிக்கையுமாயிருக்கிறீர்.",
        "சங்கீதம் 71:14 - நானோ எப்பொழுதும் நம்பிக்கைகொண்டிருந்து, மேன்மேலும் உம்மைத் துதிப்பேன்.",
        "சங்கீதம் 73:28 - எனக்கோ, தேவனை அண்டிக்கொண்டிருப்பதே நலம்; நான் உமது கிரியைகளையெல்லாம் சொல்லிவரும்படி கர்த்தராகிய ஆண்டவர்மேல் என் நம்பிக்கையை வைத்திருக்கிறேன்.",
        "நீதி 3:26 - கர்த்தர் உன் நம்பிக்கையாயிருந்து, உன் கால் சிக்கிக்கொள்ளாதபடி காப்பார்.",
        "நீதி 10:28 - நீதிமான்களின் நம்பிக்கை மகிழ்ச்சியாகும்; துன்மார்க்கருடைய அபேட்சையோ அழியும்.",
        "நீதி 14:26 - கர்த்தருக்குப் பயப்படுகிறவனுக்குத் திடநம்பிக்கை உண்டு; அவன் பிள்ளைகளுக்கும் அடைக்கலம் கிடைக்கும்.",
        "நீதி 22:19 - உன் நம்பிக்கை கர்த்தர்மேல் இருக்கும்படி, இன்றையதினம் அவைகளை உனக்குத் தெரியப்படுத்துகிறேன்.",
        "நீதி 23:18 - நிச்சயமாகவே முடிவு உண்டு; உன் நம்பிக்கை வீண்போகாது.",
        "ஏசா 12:2 - இதோ, தேவனே என் இரட்சிப்பு; நான் பயப்படாமல் நம்பிக்கையாயிருப்பேன்; கர்த்தராகிய யேகோவா என் பெலனும், என் கீதமுமானவர்; அவரே எனக்கு இரட்சிப்புமானவர்.",
        "எரே 17:7 - கர்த்தர்மேல் நம்பிக்கைவைத்து, கர்த்தரைத் தன் நம்பிக்கையாகக் கொண்டிருக்கிற மனுஷன் பாக்கியவான்.",
        "புல 3:26 - கர்த்தருடைய இரட்சிப்புக்கு நம்பிக்கையோடு காத்திருக்கிறது நல்லது.",
        "சக 9:12 - நம்பிக்கையுடைய சிறைகளே, அரணுக்குத் திரும்புங்கள்; இரட்டிப்பான நன்மையைத் தருவேன், இன்றைக்கே தருவேன்."
    ],
    faith: [
        "எபிரெயர் 11:1 - விசுவாசமானது நம்பப்படுகிறவைகளின் உறுதியும், காணப்படாதவைகளின் நிச்சயமுமாயிருக்கிறது.",
        "எபிரெயர் 11:6 - விசுவாசமில்லாமல் தேவனுக்குப் பிரியமாயிருப்பது கூடாதகாரியம்; ஏனென்றால், தேவனிடத்தில் சேருகிறவன் அவர் உண்டென்றும், அவர் தம்மைத்தேடுகிறவர்களுக்குப் பலன் அளிக்கிறவரென்றும் விசுவாசிக்கவேண்டும்.",
        "யோவான் 11:40 - இயேசு அவளை நோக்கி: நீ விசுவாசித்தால் தேவனுடைய மகிமையைக் காண்பாய் என்று நான் உனக்குச் சொல்லவில்லையா என்றார்.",
        "யாக்கோபு 1:3 - உங்கள் விசுவாசத்தின் பரீட்சையானது பொறுமையை உண்டாக்குமென்று அறிந்து, அதை மிகுந்த சந்தோஷமாக எண்ணுங்கள்.",
        "1 பேதுரு 1:8 - அவரை நீங்கள் காணாமலிருந்தும் அவரிடத்தில் அன்புகூருகிறீர்கள்; இப்பொழுது அவரைத் தரிசியாமலிருந்தும் அவரிடத்தில் விசுவாசம் வைத்து, சொல்லிமுடியாததும் மகிமையால் நிறைந்ததுமாயிருக்கிற சந்தோஷமுள்ளவர்களாய்க் களிகூர்ந்து,",
        "1 பேதுரு 1:9 - உங்கள் விசுவாசத்தின் பலனாகிய ஆத்துமரட்சிப்பை அடைகிறீர்கள்.",
        "மாற்கு 9:23 - இயேசு அவனை நோக்கி: நீ விசுவாசிக்கக்கூடுமானால் ஆகும், விசுவாசிக்கிறவனுக்கு எல்லாம் கூடும் என்றார்.",
        "யோவான் 11:25 - இயேசு அவளை நோக்கி: நானே உயிர்த்தெழுதலும் ஜீவனுமாயிருக்கிறேன், என்னை விசுவாசிக்கிறவன் மரித்தாலும் பிழைப்பான்;",
        "யோவான் 11:26 - உயிரோடிருந்து என்னை விசுவாசிக்கிறவனெவனும் என்றென்றைக்கும் மரியாமலும் இருப்பான்; இதை விசுவாசிக்கிறாயா என்றார்.",
        "ரோமர் 14:1 - விசுவாசத்தில் பலவீனமுள்ளவனைச் சேர்த்துக்கொள்ளுங்கள்; ஆனாலும் அவனுடைய மன ஐயங்களைக் குற்றமாய் நிர்ணயிக்காமலிருங்கள்.",
        "மத்தேயு 21:22 - மேலும், நீங்கள் விசுவாசமுள்ளவர்களாய் ஜெபத்திலே எவைகளைக் கேட்பீர்களோ அவைகளையெல்லாம் பெறுவீர்கள் என்றார்.",
        "மாற்கு 10:52 - இயேசு அவனை நோக்கி: நீ போகலாம், உன் விசுவாசம் உன்னை இரட்சித்தது என்றார். உடனே அவன் பார்வையடைந்து, வழியிலே இயேசுவுக்குப் பின்சென்றான்.",
        "யோவான் 6:35 - இயேசு அவர்களை நோக்கி: ஜீவ அப்பம் நானே, என்னிடத்தில் வருகிறவன் ஒருக்காலும் பசியடையான், என்னிடத்தில் விசுவாசமாயிருக்கிறவன் ஒருக்காலும் தாகமடையான்.",
        "எபிரெயர் 11:11 - விசுவாசத்தினாலே சாராளும் வாக்குத்தத்தம்பண்ணினவர் உண்மையுள்ளவரென்றெண்ணி, கர்ப்பந்தரிக்கப் பெலனடைந்து, வயதுசென்றவளாயிருந்தும் பிள்ளைபெற்றாள்.",
        "ரோமர் 1:17 - விசுவாசத்தினாலே நீதிமான் பிழைப்பான் என்று எழுதியிருக்கிறபடி விசுவாசத்தினால் உண்டாகும் தேவநீதி விசுவாசத்திற்கென்று அந்தச் சுவிசேஷத்தினால் வெளிப்படுத்தப்படுகிறது.",
        "கலாத்தியர் 3:26 - நீங்களெல்லாரும் கிறிஸ்து இயேசுவைப்பற்றும் விசுவாசத்தினால் தேவனுடைய புத்திரராயிருக்கிறீர்களே."
    ],
    peace: [
        "பிலிப்பியர் 4:7 - 'இயேசுவில் காணப்படும் தேவனின் சமாதானம் உங்கள் இருதயங்களையும்...'",
        "யோவான் 14:27 - 'சமாதானத்தை நான் உங்களுக்கு விடுக்கிறேன்; எனது சமாதானத்தை உங்களுக்கு கொடுக்கிறேன்...'",
        "எசாயா 26:3 - 'நினைவில் உறுதியானவர்களைத் தேவன் சாந்தியிலே வைத்து பாதுகாப்பார்...'"
    ],
    wisdom: [
        "நீதிமொழிகள் 3:5-6 - 'உங்கள் பூரணமான மனதோடு தேவனின் மீது நம்பிக்கையாயிருங்கள்...'",
        "யாக்கோபு 1:5 - 'உங்களில் யாருக்காவது ஞானமில்லையெனில், தேவனை நாடி கேட்கட்டும்...'",
        "நீதிமொழிகள் 2:6 - 'தேவன் ஞானத்தை தருகிறார்; அவருடைய வாயிலிருந்து அறிவும் நுண்ணறிவும் வருகிறது.'"
    ],
    strength: [
        "எசாயா 40:31 - 'ஆனாலும், தேவனை நம்பும் அவர்கள் புதிய சக்தி பெறுவர்...'",
        "எபிசியர் 6:10 - 'கர்த்தருக்குள்ளே, அவருடைய வல்லமைவால் வலிமைபெறுங்கள்.'",
        "நீதிமொழிகள் 24:10 - 'நீங்கள் தாராளமில்லை என்றால், உங்கள் சக்தி குறைவாகும்.'"
    ],
    comfort: [
        "சங்கீதம் 34:18 - 'நான் உயர்ந்தவன் வஞ்சகராக இருக்கிறேன்; அவனும் நெருங்குகிறான்...'",
        "மத்தேயு 5:4 - 'அவர்களுக்குத்தானை துக்கம் கொண்டவர்கள் ஆசீர்வதிக்கப்பட்டவர்கள்!'",
        "2 கொரிந்தியர் 1:3-4 - 'எங்கள் கர்த்தருக்கும் தந்தையுக்கும் தேவனாகிய இயேசுவுக்கு நன்றி...' "
    ],
    guidance: [
        "நீதிமொழிகள் 3:6 - 'அவன் உங்களை வழிநடத்தும் வழியில் நடத்துக.'",
        "எசாயா 30:21 - 'உங்களின் பின்விளைவுகளை நீங்கள் கேட்கும்போது...' ",
        "சங்கீதம் 119:105 - 'உங்கள் வார்த்தை என் அடிபணியையும் அடிப்படையும்.'"
    ],
    gratitude: [
        "சங்கீதம் 107:1 - 'நாம் தேவனுக்கு நன்றி சொல்லுங்கள்; அவன் நன்கு செய்கிறான்.'",
        "1 திரொணிகர் 5:18 - 'எல்லா விஷயங்களிலும் நன்றி கூறுங்கள்.'",
        "எபிசியர் 5:20 - 'எல்லா நன்றியோடும், அன்போடும் தேவனை போற்றுங்கள்.'"
    ],
    love: [
        "1 கொரிந்தியர் 13:4-7 - 'அன்பு நீண்டகாலமாக பொறுத்தது, அன்பு சுலபமாகக்கூடுகிறது.'",
        "யோவான் 3:16 - 'தெய்வம் உலகத்தை அன்பு செய்தான்.'",
        "1 யோவான் 4:7 - 'அன்பு பெறும் ஒவ்வொருவரும் தேவனால் பிறக்கிறார்கள்.'"
    ],
    courage: [
        "எஸ்தேர் 4:14 - 'நீங்கள் இங்கு சற்று நம்பிக்கைமுடன் மடக்கியிருத்தாலும்...' ",
        "எஸ்ரா 10:4 - 'இந்த செயல்களைச் செய்யும் போது, தேவனை நம்புங்கள்!'",
        "யோசுவா 1:9 - 'சிங்கப்பாக இருப்பதற்கும் துணிச்சலாக இருப்பதற்கும், தேவன் உங்களோடு இருக்கிறார்.'"
    ],
    forgiveness: [
        "மத்தேயு 6:14-15 - 'நீங்கள் மனிதர்களுக்குப் பிறகு மன்னிக்கையில்லையெனில்...' ",
        "எபிசியர் 4:32 - 'ஒருவருக்கொருவர், தயவுடன், தயிரென உங்கள் மன்னிப்பு ...'",
        "லூக்கா 6:37 - 'மன்னிக்கையா இருங்கள், நீங்கள் மன்னிக்கையாயிருப்பீர்கள்.'"
    ],
    hopeintrials: [
        "ரோம் 5:3-4 - 'துயரங்களுக்குள்ளே நம்பிக்கை கொண்டு, நம்பிக்கை பயமற்றது.'",
        "2 கொரிந்தியர் 1:10 - 'எங்களை உயிர்ப்புக் காத்து நம்பிக்கை வைத்தோம்.'",
        "1 பத்திரசாரி 1:6 - 'இயேசு கிரிஸ்துவின் திரும்புமுன் நம்பிக்கையால் நமது நம்பிக்கை.'"
    ],
    joy: [
        "சங்கீதம் 16:11 - 'நீங்கள் மேல் மகிழ்ச்சி கொண்டு மகிழ்ச்சியாக காக்கும்.'",
        "நேயேமியா 8:10 - 'நம்பிக்கை என்னும் மகிழ்ச்சி உங்கள் சக்தி.'",
        "1 தேசனலோனிகர் 5:16 - 'என்றும் மகிழ்ச்சி கொண்டிருங்கள்.'"
    ],
    healing: [
        "எசாயா 53:5 - 'அவனுடைய கொரோடு நாம் குணமடைந்தோம்.'",
        "எபிரேயர் 12:13 - 'உங்கள் பாதைகளை, உங்களை ஊக்குவிக்கும் பயிற்சிகள்...'",
        "யாகோபு 5:15 - 'நம்பிக்கையால் மகிழ்ச்சியடையுங்கள், சுகமானவராக மாறுங்கள்.'"
    ],
    trust: [
        "சங்கீதம் 37:5 - 'உங்கள் வழிகளில் திரும்புங்கள், நம்பிக்கையுடன்.'",
        "நீதிமொழிகள் 3:5-6 - 'உங்கள் மனதின் நம்பிக்கை உணருங்கள்.'",
        "எசாயா 26:4 - 'நீங்கள் நம்பிக்கையுடன் நம்பிக்கையாயிருங்கள்.'"
    ],
    prayer: [
        "1 திரொனிகர் 5:17 - 'என்றும் பிரார்த்திக்கையில் இருங்கள்.'",
        "மத்தேயு 7:7 - 'அந்தப் பக்கம் மாட்டுங்கள், நீங்கள் மாட்டிக்கொள்கிறீர்கள்.'",
        "லூக்கா 18:1 - 'அவர் எப்போதும் பிரார்த்திக்கவும், ஓய்வில்லாமல் இருக்க வேண்டும்.'"
    ]
};

// Function to display verses based on category and update the URL
document.querySelectorAll('.category-card').forEach(function(card) {
    card.addEventListener('click', function() {
        let category = this.getAttribute('data-category');
        
        // Update the URL with the selected category ID
        window.location.hash = category;

        showCategory(category); // Show the selected category
    });
});

// Show category with like functionality
function showCategory(category) {
    let verseSection = document.getElementById('verseSection');
    let verseList = document.getElementById('verseList');
    let categoryTitle = document.getElementById('categoryTitle');

    // Set the category title
    categoryTitle.textContent = document.querySelector(`[data-category="${category}"] h2`).textContent;

    // Clear any previous verses
    verseList.innerHTML = '';

    // Populate verses with share and like buttons
    verses[category].forEach(function(verse, index) {
        let li = document.createElement('li');
        li.textContent = verse;

        // Create share button
        let shareButton = document.createElement('button');
        shareButton.textContent = "Share";
        shareButton.classList.add('shareSingleButton');
        shareButton.addEventListener('click', function() {
            shareVerse(verse);
        });

        // Create like button
        let likeButton = document.createElement('button');
        likeButton.textContent = "Like";
        likeButton.classList.add('likeButton');
        let likeCount = document.createElement('span');
        likeCount.textContent = getLikes(verse);
        likeButton.addEventListener('click', function() {
            updateLikes(verse);
            likeCount.textContent = getLikes(verse);
        });

        li.appendChild(shareButton);
        li.appendChild(likeButton);
        li.appendChild(likeCount);
        verseList.appendChild(li);
    });

    // Show the verse section and hide the categories
    document.querySelector('.categories').style.display = 'none';
    verseSection.style.display = 'block';
}

// Like functions
function getLikes(verse) {
    return localStorage.getItem(verse) || 0;
}

function updateLikes(verse) {
    let likes = parseInt(localStorage.getItem(verse) || 0);
    localStorage.setItem(verse, likes + 1);
}

// Function to share single verse
function shareVerse(verse) {
    shareContent(verse);
}

// Function to share content (handles both single verse and all verses)
function shareContent(content) {
    if (navigator.share) {
        navigator.share({
            text: content,
        }).catch((error) => console.log('Error sharing:', error));
    } else {
        let whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`;
        window.open(whatsappUrl, '_blank');
    }
}

// Back button functionality
document.getElementById('backButton').addEventListener('click', function() {
    goToHomepage();
});

// Search functionality for categories by data-category and h2 text
document.getElementById('searchInput').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let categories = document.querySelectorAll('.category-card');

    categories.forEach(function(card) {
        let categoryTitle = card.querySelector('h2').textContent.toLowerCase();
        let dataCategory = card.getAttribute('data-category').toLowerCase();
        
        if (categoryTitle.includes(searchTerm) || dataCategory.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Check if there's a hash in the URL on page load
window.addEventListener('load', function() {
    let hash = window.location.hash.substring(1); // Get the hash without the '#'
    if (hash && verses[hash]) {
        showCategory(hash); // Directly show the category if it exists in the verses object
    }
});

// Function to navigate to homepage
function goToHomepage() {
    window.location.href = 'index.html'; // Redirect to the homepage
}

// Event listener for header click
document.getElementById('header').addEventListener('click', function() {
    goToHomepage(); // Navigate to homepage
});
