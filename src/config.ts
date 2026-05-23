/**
 * ✨ PERSONALIZE YOUR SURPRISE HERE ✨
 * Change these values to make the site uniquely yours.
 */

/** Secret password to unlock the site (case-insensitive) */
export const SECRET_PASSWORD = 'forever'

/** When your relationship started — used for the duration counter */
export const RELATIONSHIP_START = new Date('2024-01-15')

/** His name (used in messages) */
export const HIS_NAME = 'My Love'

/** Pet name / nickname — shown on welcome after unlock */
export const PET_NAME = 'Birthday Boy'

/** Your name (for the letter signature) */
export const YOUR_NAME = 'Yours Forever'

/** Optional: path to background music in /public (e.g. '/music.mp3') */
export const BACKGROUND_MUSIC = '/music.mp3'

/** Teasing messages when wrong password is entered */
export const WRONG_PASSWORD_MESSAGES = [
  "Hmm… that's not our special memory 🥺",
  'Try again, birthday boy ❤️',
  'Wrong password = no cake for you 🎂😤',
  'Nice try, but this gift is VIP only 💅',
  'You forgot? I am taking notes for roast time 📝',
  'Almost… think of our inside joke, handsome 😘',
]

/** Shown while unlocking — fake "loading" the birthday surprise */
export const UNLOCK_PROGRESS_MESSAGES = [
  'Wrapping virtual hugs…',
  'Inflating birthday balloons…',
  'Decrypting boyfriend.exe…',
  'Sprinkling extra love…',
  'Almost ready to spoil you…',
]

/** Random compliments — Compliment Generator button */
export const BIRTHDAY_COMPLIMENTS = [
  "You're the human version of a warm hug on a cold day 🤗",
  'Officially certified: Best Boyfriend™ (expires never)',
  'Your laugh should be patented — too powerful',
  "I'd choose you in every timeline, every universe ✨",
  'You make my heart do the cha-cha 💃',
  'Somewhere out there, someone is lucky… oh wait, that\'s me',
  'You age like fine wine but act like a golden retriever 🐕',
  '10/10 would fall in love with you again',
  'Your face = my favorite notification',
  'Birthday king energy only today 👑',
  'You\'re the reason my phone battery dies (texting you)',
  'Scientific fact: you are illegally cute',
]

/** Timeline events — edit dates and stories */
export const TIMELINE_EVENTS = [
  {
    id: 'met',
    title: 'The Day We Met',
    date: 'January 15, 2024',
    description:
      'The universe aligned that day. I didn\'t know my life was about to change forever — but my heart already knew.',
    icon: '✨',
  },
  {
    id: 'first-chat',
    title: 'First Conversation',
    date: 'January 16, 2024',
    description:
      'Every message felt like magic. I couldn\'t stop smiling at my phone like a fool — and I\'ve been smiling ever since.',
    icon: '💬',
  },
  {
    id: 'first-call',
    title: 'First Call',
    date: 'January 20, 2024',
    description:
      'Your voice became my favorite sound. Hours felt like minutes. I never wanted to hang up.',
    icon: '📞',
  },
  {
    id: 'first-fight',
    title: 'First Fight & Makeup',
    date: 'February 2024',
    description:
      'We learned that love isn\'t perfect — but choosing each other after every storm makes us unbreakable.',
    icon: '🌈',
  },
  {
    id: 'favorite',
    title: 'Favorite Memory Together',
    date: 'Our forever moment',
    description:
      'Every laugh, every late-night talk, every quiet moment — they all live in my heart as my favorite chapters of us.',
    icon: '💫',
  },
  {
    id: 'today',
    title: 'Today — Your Birthday',
    date: 'May 19, 2026',
    description:
      'The day the world got luckier. Today we celebrate YOU — the most beautiful soul I\'ve ever known. ❤️',
    icon: '🎂',
  },
]

/** Memory gallery — replace image URLs with your photos in /public */
export const MEMORIES = [
  {
    id: 1,
    category: 'our best moments',
    caption: 'The day I knew you were my person',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a57590ae?w=600&q=80',
    rotation: -4,
  },
  {
    id: 2,
    category: 'funny memories',
    caption: 'That time we couldn\'t stop laughing',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&q=80',
    rotation: 3,
  },
  {
    id: 3,
    category: 'screenshots/chats',
    caption: 'Our 3am conversations hit different',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e939e113?w=600&q=80',
    rotation: -2,
  },
  {
    id: 4,
    category: 'favorite selfies',
    caption: 'My favorite face in the world',
    image: 'https://images.unsplash.com/photo-1522673607200-23d1d93c9f0d?w=600&q=80',
    rotation: 5,
  },
  {
    id: 5,
    category: 'special dates',
    caption: 'Every date with you feels like a movie',
    image: 'https://images.unsplash.com/photo-1516589178581-6adc352ff1e4?w=600&q=80',
    rotation: -3,
  },
  {
    id: 6,
    category: 'our best moments',
    caption: 'Us against the world',
    image: 'https://images.unsplash.com/photo-1529333244-274b3e99a7f0?w=600&q=80',
    rotation: 2,
  },
]

/** Reasons I love you — flip cards */
export const LOVE_REASONS = [
  { front: 'Your Smile', back: 'Illegal levels of cuteness. Please never stop. 🚨' },
  { front: 'Your Voice', back: 'One "hey" from you and my brain goes: 🎂❤️🥰' },
  { front: 'Your Care', back: 'You remember the tiny things. I pretend I don\'t cry. I cry.' },
  { front: 'Your Laugh', back: 'Sounds goofy. Makes me happier than your birthday cake.' },
  { front: 'Your Annoying Side', back: 'Certified pest. Wouldn\'t trade you for anyone. Maybe for pizza. Maybe.' },
  { front: 'How You Understand Me', back: 'You get my weird. That\'s the real gift. Happy birthday, weirdo.' },
]

/** Hidden love notes scattered across the site */
export const HIDDEN_NOTES = [
  {
    id: 'note-1',
    trigger: 'Click me ❤️',
    message:
      'You found a secret! Just so you know… I fall in love with you a little more every single day. 💕',
  },
  {
    id: 'note-2',
    trigger: 'A secret for you',
    message:
      'Psst… you\'re the best thing that ever happened to me. I\'m so grateful the universe gave me YOU.',
  },
  {
    id: 'note-3',
    trigger: 'Reasons I adore you',
    message:
      'Reason #847: You make ordinary moments feel extraordinary. Reason #848: You\'re reading this. I love you.',
  },
  {
    id: 'note-4',
    trigger: 'You found hidden love 💌',
    message:
      'This little note is proof: my heart chose you, and it would choose you again in every lifetime. ❤️',
  },
  {
    id: 'note-5',
    trigger: '🎂 Birthday bonus',
    message:
      'Surprise! You get one free "I love you" from me today. Actually… you get unlimited. Use them wisely. Or don\'t. I\'ll say it anyway. 💕',
  },
]

/** Birthday letter content */
export const BIRTHDAY_LETTER = `My Dearest ${HIS_NAME},

Happy Birthday. Today isn't just another day on the calendar — it's the day the person I love most in this entire universe gets to be celebrated the way you deserve.

I made this little world for you because words on a screen could never hold everything my heart wants to say — but I'll try anyway.

You are my calm in the chaos, my laughter when life gets heavy, my home in every sense of the word. I love the way you care — gently, deeply, without ever asking for anything in return. I love your voice, your smile, the way you understand me even when I can't understand myself.

Thank you for every late-night conversation, every silly joke, every moment you chose us. Thank you for fighting for us, for growing with me, for being the most beautiful soul I've ever known.

On your birthday, I want you to know: you are loved beyond measure. You are cherished. You are my favorite person, my best friend, my forever.

May this year bring you every dream you've whispered to the stars — and may I be beside you for every single one.

With all my love, always and forever,

${YOUR_NAME} ❤️`
