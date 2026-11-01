// Language strings (English, Tamil, Hindi) and the t() helper. LANG, BLK and DEFTIP are shared app globals.

let LANG='en',BLK=[],DEFTIP=30;

const TR={en:{home:'Home',explore:'Explore',board:'Board',chats:'Chats',activity:'Activity',profile:'Profile',help:'Help',post:'Post errand',post2:'Post an errand',map:'Open the map',h1a:'Skip the walk.',h1b:'Someone’s already going.',p:'Ask a classmate near the canteen, xerox shop or library to grab it for you. Tip a little, get on with your day.',prefs:'Preferences & safety',lang:'Language'},
 ta:{home:'முகப்பு',explore:'ஆராய்க',board:'பலகை',chats:'அரட்டைகள்',activity:'செயல்பாடு',profile:'சுயவிவரம்',help:'உதவி',post:'பணியைப் பதிவிடு',post2:'பணியைப் பதிவிடுங்கள்',map:'வரைபடத்தைத் திற',h1a:'நடக்க வேண்டாம்.',h1b:'யாரோ ஏற்கனவே செல்கிறார்கள்.',p:'கேண்டீன், ஜெராக்ஸ் கடை அல்லது நூலகத்தின் அருகில் உள்ள சக மாணவரிடம் கேளுங்கள். சிறிய டிப்ஸ் கொடுங்கள், உங்கள் நாளைத் தொடருங்கள்.',prefs:'விருப்பங்கள் & பாதுகாப்பு',lang:'மொழி'},
 hi:{home:'होम',explore:'खोजें',board:'बोर्ड',chats:'चैट',activity:'गतिविधि',profile:'प्रोफ़ाइल',help:'सहायता',post:'काम पोस्ट करें',post2:'काम पोस्ट करें',map:'नक्शा खोलें',h1a:'चलना बचाइए।',h1b:'कोई पहले से जा रहा है।',p:'कैंटीन, ज़ेरॉक्स की दुकान या लाइब्रेरी के पास मौजूद सहपाठी से मँगवाइए। थोड़ी टिप दीजिए और अपने दिन में आगे बढ़िए।',prefs:'प्राथमिकताएँ और सुरक्षा',lang:'भाषा'}};
TR.en.settings='Settings';TR.ta.settings='அமைப்புகள்';TR.hi.settings='सेटिंग्स';
TR.en.rewards='Rewards';TR.ta.rewards='வெகுமதிகள்';TR.hi.rewards='रिवॉर्ड्स';

const t=k=>(TR[LANG]&&TR[LANG][k])||TR.en[k]||k;
