# Romantic Birthday Surprise Website

A cinematic, interactive love-story experience built with React, Tailwind CSS, and Framer Motion.

## Quick start

```bash
cd birthday-surprise
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Personalize everything

Edit **`src/config.ts`** — this is your main customization file:

| Setting | What it does |
|---------|----------------|
| `SECRET_PASSWORD` | Password to unlock the site (default: `forever`) |
| `RELATIONSHIP_START` | Start date for the “we've been in love for” counter |
| `HIS_NAME` / `YOUR_NAME` | Names in messages and signature |
| `TIMELINE_EVENTS` | Your relationship story |
| `MEMORIES` | Photo gallery (replace image URLs with `/your-photo.jpg` in `public/`) |
| `LOVE_REASONS` | Flip cards with reasons you love him |
| `HIDDEN_NOTES` | Secret clickable notes |
| `BIRTHDAY_LETTER` | Full birthday letter text |

## Add your photos

1. Put images in the `public/` folder (e.g. `public/us-beach.jpg`)
2. In `config.ts`, set `image: '/us-beach.jpg'` for each memory

## Add background music

1. Add an MP3 file as `public/music.mp3`
2. Or change `BACKGROUND_MUSIC` in `config.ts`

Music starts after a successful unlock (browser autoplay rules may require one tap on the music button).

## Themes

Use the theme switcher (top-left) after unlocking:

- **Gold** — black + gold luxury romance
- **Stars** — dark blue night sky (default)
- **Pink** — soft pastel romantic

## Build for sharing

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to [Vercel](https://vercel.com), [Netlify](https://netlify.com), or GitHub Pages.

## Default unlock password

**`forever`** — change it in `src/config.ts` to a word only he would know (inside joke, anniversary date, pet name, etc.).

---

Made with love. Happy birthday to your favorite person.
