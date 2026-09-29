# JcBx Alliance Site - shared source

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.
Deployed on Vercel. No server or database - it's a static site that pulls
live content from a Google Sheet and a Google Calendar at build time and on
an hourly revalidation interval (ISR).

## Where to look

- `src/lib/sheet-feed.ts`   - the interesting one. Turns Google Sheet tabs into
                              site content, with static fallbacks if the fetch fails.
- `src/lib/calendar-feed.ts`- parses a private Google Calendar .ics feed into events.
- `src/lib/data.ts`         - all static content + the TypeScript types.
- `src/app/`                - one folder per page/route.
- `src/components/`         - Countdown (live multi-event timers), Ticker, EventTime.

## Removed from this package

- `.env.local` - held the private Google Calendar secret URL. To run this you'd
  need your own: `CALENDAR_ICS_URL=<your calendar's secret .ics address>`
- The Google Sheet ID in `src/lib/sheet-feed.ts` is replaced with
  `YOUR_SHEET_ID_HERE`. Point it at your own sheet with tabs named:
  `Juicebox Heros`, `Member of the Week`, `Hall of Fame`,
  `LEADERS - How We Operate`, `FAQ`.
- `public/wiki/heroes/*.png` - community-made infographics credited on the site
  to Aethernis (#1210), Taco Legion (#659 LD9), and Rickle. Left out because
  they're their creators' work, not ours to redistribute. The page still
  renders; the images just 404.
- `node_modules/`, `.next/`, `.vercel/` - build artifacts and local link state.

## Running it

```
npm install
npm run dev
```

Note: the Discord invite link in `src/lib/data.ts` is a real one, though it's
already displayed publicly on the site's New Member Guide page.
