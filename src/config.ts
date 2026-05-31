/**
 * ✨ PERSONALIZE YOUR SURPRISE HERE ✨
 * Change these values to make the site uniquely yours.
 */

/** Secret password to unlock the site (case-insensitive) */
export const SECRET_PASSWORD = '18022022'

/** When your relationship started — used for the duration counter */
export const RELATIONSHIP_START = new Date('2020-01-13')

/** His name (used in messages) */
export const HIS_NAME = 'My Love'

/** Pet name / nickname — shown on welcome after unlock */
export const PET_NAME = 'Birthday Boy'

/** Your name (for the letter signature) */
export const YOUR_NAME = 'Yours Forever'

/** Optional: path to background music in /public (e.g. '/music.mp3') */
export const BACKGROUND_MUSIC = '/music.mp3'

/** Optional: voice note for the birthday letter in /public (e.g. '/voice.mp3') */
export const VOICE_NOTE = '/voice.mp3'

/** Teasing messages when wrong password is entered */
export const WRONG_PASSWORD_MESSAGES = [
  "Areyy! Ah password idhi kaadhu ra 🥺 Nuvvu marchipoya entii??",
  'Malli try chey, my birthday boy ❤️',
  'Wrong password = no cake & no love 🎂😤',
  'Neeku naaku maatrame thelisina mana favourite day bangaram😍',
  'Inka kanipettaledhaa nuvvu? Ila ayithe ela asaluuuu😔',
  'Almost… neeku konchem hint isthale inka.... Mana... First..... Meeeeet.... 😘',
]

/** Shown while unlocking — fake "loading" the birthday surprise */
export const UNLOCK_PROGRESS_MESSAGES = [
  'Finally you made it!!',
  'Birthday ki extra spice add chedham…',
  'Neeku best wishes decrypt chestunna…',
  'Finally unlocked for my favorite person…',
]


/** Timeline events — edit dates and stories */
export const TIMELINE_EVENTS = [
  {
    id: 'met',
    title: 'Manam first time maatladukovadam',
    date: 'Gurthuledhu😔',
    description:
      'Unexpected ga na life loki vachav ah Fb lo manam kalavadam ento antha chaala different ga vundhi. Evarno nitho kalapadaniki try chesi unexpected ga manam kalisam ',
      icon: '✨',
  },
  {
    id: 'first-chat',
    title: 'Conversations',
    date: 'Everyday',
    description:
      'Prathi roju manam maatladukovadam, ma akka pakkana vundatam thanki theliyakunda night antha chat cheskovadam, Day motham eppudu free vuntey appudu maatladukovadam, Antha chaala special ga vundedhi kadha',
    icon: '💬',
  },
  {
    id: 'first-call',
    title: 'Calls',
    date: 'Everyday',
    description:
      'Prathi roju calls and video calls cheskovadam, especially midnight calls, nen intlo theliyakunda neetho maatladataniki kindhaki paiki whashrooms ani avi ani ivi ani thiragada, nuvvemo motham night antha walking cheskuntu vundatam dhomalu kottukovadam antha chaala baagundedhi',
    icon: '📞',
  },
  {
    id: 'first-fight',
    title: 'First meet',
    date: 'February 18, 2022',
    description:
      'Mana first meet gurinchi entha cheppina thakkuve, akka pelli addam pettukoni manam kalavdam, okarni okaru chuskovadam ,tension padatam, body motham shiver avvadam - Intha ayina kaani antha bayam lo kuda ma intlo bedroom loki vachi kisslu huglu.... Only one thing manam asalu okka photo kuda theeskoledhu ah roju',
    icon: '🌈',
  },
  {
    id: 'favorite',
    title: 'Intlo godava',
    date: 'April 10, 2022',
    description:
      'Ma intlo thelsipoyindhi mana gurnchi adhi kuda ah chetha fellow valla, Appudu nunchi manam maatladukoledhu , nuv emo badhalo thagadam adhi idhi ilantvi chaala ayyayi, Manaki Almost 1 and half years ayindhi, still nuv wait chesthune vunnav nenu bayam tho ninnu contact avvakundane vunnanu, At last tharvatha nenu na number nunchi msg cheyyadam malli mana journey start...!!', 
    icon: '💫',
  },
  {
    id:'engineering',
    title: 'Engineering',
    date: '2023-2026',
    description:
    ' Na Engineering start ayyindhi, starting lo baagane vunnam, tharvatha tharvatha manam kalisi vundedhani kana kottukovadame ekkuva ipoyindhi still adhe avuthu vundhi',
    icon: '🎓',
  },
  {
    id: 'today',
    title: 'Today — Your Birthday',
    date: 'June 2, 2026',
    description:
      'Eroju nee birthday. Happy Birthday, my love!❤️',
    icon: '🎂',
  },
]

/** Memory gallery — replace image URLs with your photos in /public */
export const MEMORIES = [
  {
    id: 1,
    category: 'our best moments',
    caption: 'Mana first meet',
    image: '/photos/photo1.png',
    rotation: -4,
  },
  {
    id: 2,
    category: 'funny memories',
    caption: 'That time we couldn\'t stop laughing',
    image: '/photos/photo2.png',
    rotation: 3,
  },
  {
    id: 3,
    category: 'screenshots/chats',
    caption: 'Our midnight conversations',
    image: '/photos/photo3.jpeg',
    rotation: -2,
  },
  {
    id: 4,
    category: 'favorite selfies',
    caption: 'My favorite face in the world',
    image: '/photos/photo4.jpg',
    rotation: 5,
  },
  {
    id: 5,
    category: 'special dates',
    caption: 'Every date with you feels like a movie',
    image: '/photos/photo5.jpeg',
    rotation: -3,
  },
]



/** Hidden love notes scattered across the site */
export const HIDDEN_NOTES = [
  {
    id: 'note-1',
    trigger: 'Click me ❤️',
    message:
      'Hey surprise! Roju roju ki nee meedha prema perigipothundhi ra pichi fellow💕',
  },
  {
    id: 'note-2',
    trigger: 'A secret for you',
    message:
      'Inko secret ento thelusa, Meeru antey nak konchem bayam sir!',
  },
  {
    id: 'note-3',
    trigger: 'One more secret',
    message:
      'Nuvvu nannu chuskunedhaaniki, care chesedhi avi anni annu eppatiki marchipolenu. Intha baaga chuskuntey evaru ra ninnu vadhu anukuntaru chepuu 💕',
  },
  {
    id: 'note-4',
    trigger: 'You found hidden love 💌',
    message:
      ' Naa bangaram nuv, Love you Nanna💗',
  },
  {
    id: 'note-5',
    trigger: '🎂 Birthday bonus',
    message:
      'I love you so much Bava garu💕',
  },
]

/** Birthday letter content */
export const BIRTHDAY_LETTER = `My Dearest ${HIS_NAME},

Happy Birthday ra! 

Neekosam nenu eppudu emi cheyyaledhu, edhaina chesindhi vundhi antey adhi intlo vallaki theliyakunda nenu neeku time ivvadam♥️

Eppuudu anukunta neekosam edho okati cheyyali ninnu happy ga vunchali ani kaani na life ento ra ninnu happy ga vunchadam kaadhu ga navalla nuv headache thechukunela chesthunna ani anipisthundhi.

Thank you for your time, nuv naatho ah midnight calls, silly jokes, manam saradhaga kottukovadam prathi moment oka best memory. Nuvvu world's most beautiful soul.

Na side nunhi eppudu okate nuv eppudu happy ga , peaceful ga vundali ani korukuntunna.

Nenu vunna lekapoyina eppudu nuv navvuthu, prashanthamga kopam thagginchukoni vundu raa. Hoping for a year filled with joy, laughter, and all the love you deserve.

${YOUR_NAME} ❤️ (Nee wife)`


