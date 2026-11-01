# CampusRun

A hyperlocal peer-to-peer errand app for college students. Ask a classmate who is already near the canteen, xerox shop or library to pick something up for you, and tip them a little.

**Live demo:** https://YOUR-USERNAME.github.io/campusrun/

## Features

- Campus map with locations and students nearby
- Post errands with a quick menu, print ordering and scheduling
- WhatsApp-style chats with live tracking and a 4-digit delivery PIN
- Trips (announce where you are heading) and a campus board
- Rewards: points, levels, missions, daily streak, badges and a rewards store
- Wallet, reviews, favourites and a block list
- Student verification, help and support, safety centre
- Settings: language (English, Tamil, Hindi), colour themes, text size and more

## Project structure

```
campusrun/
├── index.html              Page shell: loads the CSS, libraries and scripts
├── css/
│   ├── base.css            Base styles, animations, scrollbars
│   └── themes.css          Colour themes (Ocean, Midnight, Sunset, Rose, Cream & coral)
└── js/
    ├── tailwind.config.js  Maps Tailwind colours to the active theme
    ├── core.js             React hooks, htm tag, shared class strings
    ├── icons.js            SVG icon set
    ├── data.js             Locations, categories and demo seed data
    ├── i18n.js             English, Tamil and Hindi strings, t() helper
    ├── components/
    │   ├── ui.js           Avatar, chip, modal, form field, switch, etc.
    │   ├── tools.js        Notification bell and SOS button
    │   ├── modals.js       Post errand, radar, OTP, review, safety, trips
    │   └── chat.js         Chat list and conversation
    ├── views/
    │   ├── home.js         Home page
    │   ├── explore.js      Map and nearby errands
    │   ├── board.js        Trips and campus board
    │   ├── activity.js     My requests and deliveries
    │   ├── rewards.js      Points, missions, badges, store
    │   ├── profile.js      Profile, wallet, verification
    │   └── settings.js     Settings and Help & support
    └── app.js              App state, simulated runners, layout, render
```

The scripts are plain (non-module) files that share one global scope, so the order of the `<script>` tags in `index.html` matters.

## Tech

React 18, htm and Tailwind CSS from CDNs. No build step and no npm install.

## Run it locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Note

This is a front-end prototype. Errands, chats and students are simulated in the browser and reset on refresh. There is no real login, backend, live GPS or payment processing.
