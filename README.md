# 🍿 Local Cinema

**Your videos. Your browser. Bring your own popcorn.**

### [▶ Open Local Cinema · local-cinema.online](https://local-cinema.online/)

*On GitHub, use ⌘-click (Mac) or Ctrl-click (Windows/Linux) to open it in a new tab.*

A small, free video player for files on your phone, tablet, or computer. Local Cinema is a **Progressive Web App (PWA)**: you can install it from your browser, open it like an app, and play local videos offline after the initial setup.

**Install on your device · Watch offline · No video uploads**

---

## On the menu

[The origin story](#why-this-exists) · [Features](#features) · [Get started](#getting-started) · [Play offline](#play-offline) · [Controls](#playback-controls) · [Shortcuts](#keyboard-shortcuts) · [Watch history](#watch-history) · [Privacy](#privacy-and-offline-use) · [Compatibility](#video-compatibility) · [Credits](#credits)

## Why this exists

It started with a deeply ambitious technical requirement: **watch a video.**

Naturally, the next step was to install a video player. Download an installer. Click Next. Pick an installation folder as though it were a major real-estate decision. Acquire another desktop icon. Possibly meet an update notification before meeting the opening credits.

Meanwhile, the browser was sitting there with twelve tabs open, quietly playing videos all day.

> “Am I a joke to you?” — the browser, probably.

Fair point, browser.

So this little experiment began: what if watching a local video only meant opening a page and choosing a file? No installation ceremony. No account. No uploading a movie just to watch it on the computer that already has the movie.

One HTML file later, Local Cinema existed.

Then came nicer controls, a history sidebar, resume positions, picture-in-picture, and little rewind icons. Apparently, “just a simple video player” is how a browser acquires a popcorn budget.

Dedicated media players still have their place, especially for formats a browser cannot decode. But if your browser can already play the video, why not let it?

## Features

- Open a video from your device or drag and drop it onto the player.
- Use custom play, pause, seek, skip, volume, and mute controls. Controls fade away after five seconds of inactivity during playback and return when you move or use the pointer over the player.
- Load `.srt` or `.vtt` subtitle files, then turn captions on or off while watching.
- Adjust playback speed from 0.5× to 2×.
- See brief rewind and fast-forward feedback over the video.
- Keep a watch history with saved resume positions in this browser.
- Use fullscreen and picture-in-picture where your browser supports them.
- Enjoy a responsive interface with a collapsible history sidebar.
- Install Local Cinema on your device and launch it in its own app window.
- Reopen the player offline after its first successful online setup.
- Download the single HTML file as another way to play supported videos offline.

## Getting started

### Play online

Visit **[local-cinema.online](https://local-cinema.online/)** and click **Open video**. Choose a file from your device. The page plays it locally; the app does not upload your video.

### Install on your device

Visit **[local-cinema.online](https://local-cinema.online/)** and choose **Install on your device** on the welcome screen, or **Install Local Cinema** in the history sidebar.

- **Android Chrome:** tap **Install on your device**, or open Chrome’s three-dot menu → **Add to Home screen → Install**. If viewing inside another app, open the page in Chrome first.
- **Desktop Chrome / Edge:** use the installation prompt or the browser’s **Install app** menu option.
- **iPhone / iPad:** open the site in Safari, tap **Share**, then **Add to Home Screen**. Enable **Open as Web App** if shown, then tap **Add**.
- **Mac Safari:** choose **File → Add to Dock**.

The phone and tablet layouts group playback controls into rows that fit the player. Touch controls stay visible below the video, keeping the picture and subtitles clear. History opens as a closable overlay on screens up to 1100px wide. The page scrolls vertically on phones and tablets so the player, controls, and status stay reachable on short screens. The layout adapts when rotating the device, with safe spacing around notches and home indicators.

Installation options depend on your browser and OS. You can always continue playing in the browser.

Installation references: [Apple’s iPhone guide](https://support.apple.com/guide/iphone/iphea86e5236/ios) and [Google’s Android guide](https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid).

### Play offline

**Install the PWA once, then bring your own videos—even without an internet connection.**

1. While online, visit **[local-cinema.online](https://local-cinema.online/)** and [install it on your device](#install-on-your-device).
2. Open the app online and wait for **Ready for offline use** on the welcome screen or in the history sidebar.
3. When offline, launch **Local Cinema** from your home screen, Dock, or app launcher.
4. Tap **Open video** or **Choose a video** and select a file saved on your device. Press **Play** if needed.
5. Use playback controls, change speed, or load local `.srt` / `.vtt` subtitles. Fullscreen and picture-in-picture work where your browser supports them.

Your videos stay on your device. The app saves its interface for offline use; it does not download, copy, or upload your movies. Make sure your video and subtitle files are available locally, rather than only in cloud storage. Supported video formats depend on your browser and device.

Watch history saves resume positions. After reopening the app, select the video and any subtitles again; installing the PWA does not give it permanent access to your files. Clearing site data or automatic browser storage cleanup can remove the offline app copy—open it online again to restore it.

Updates download when you open the app online. When **Update ready** appears, close all Local Cinema tabs and app windows, then reopen. Updates never force a reload during playback.

### Download for offline use

You can also use a standalone HTML copy without installing the PWA:

1. Download [`index.html`](index.html).
2. Open it in a browser with JavaScript enabled.
3. Click **Open video** or **Choose a video**, or drag a file onto the player.
4. Press **Play** if playback does not start automatically.

No install, package manager, or local web server is required.

## Playback controls

| Control | Action |
| --- | --- |
| Play / pause | Start or pause playback. Clicking the video also toggles playback. Controls fade after five seconds of inactivity while playing; move the pointer over the player to show them again. They remain visible while paused. |
| Rewind / forward | Skip 10 seconds backward or forward. |
| Timeline | Seek to a point in the video. |
| Load subtitles | Choose a `.srt` or `.vtt` file for the current video. SRT files are converted in memory for browser playback. |
| Captions menu | Turn the loaded subtitles on or off. Load another subtitle file to replace them. |
| Speaker / volume | Toggle mute or adjust volume. |
| Speed | Choose 0.5×, 0.75×, 1×, 1.25×, 1.5×, or 2×. |
| Picture-in-picture | Open a floating video window when supported. |
| Fullscreen | Expand or exit the player. |
| History | Show or hide recently opened videos. |
| Clear | Remove saved history without stopping the current video. |

### Keyboard shortcuts

| Key | Action |
| --- | --- |
| `Space` | Play or pause. |
| `←` | Rewind 10 seconds. |
| `→` | Forward 10 seconds. |
| `M` | Toggle mute. |
| `F` | Toggle fullscreen. |
| `Escape` | Close the history sidebar on narrow screens or leave fullscreen. |

Shortcuts work when a playback control or text input is not focused.

## Watch history

Local Cinema saves up to 50 recent video entries and their resume positions in this browser. History survives page reloads on the same site and browser profile.

The current file picker gives Local Cinema temporary access to the video you select. Installing the app does not make that access permanent. After a reload, click a saved entry and you may see **“Did this video move out? 🍿”**. Choose **Find video** and select the original file to resume. This message also appears if you simply returned later; the browser forgets temporary file access even when the video never moved.

To reconnect a renamed file, select it from the prompt. The player checks its size and last-modified time before restoring the saved position. A different or modified file is not linked to that history entry. Choose **Open video** to play it as a new item.

History belongs to the website address and browser profile you used. It will not carry over between the production site, a preview address, and a downloaded copy. Private browsing, clearing site data, or browser storage restrictions can remove or prevent saved history. If local storage is unavailable, video playback still works.

## Privacy and offline use

Videos are played from local browser object URLs. Local Cinema does not upload, modify, or store video contents. It saves only history details such as the file name, size, last-modified time, duration, and resume position in browser local storage. It does not store the original file path.

Subtitle files are read locally and attached to the video for playback; they are not uploaded or saved in watch history. Select them again after reloading the page.

All playback code, styles, and control icons are included in `index.html`. The hosted app caches its interface with a service worker after an initial online visit, allowing later offline launches. A downloaded copy of `index.html` also works offline without installation. The deployment build optionally injects `analytics.local.html` when that local file exists. It is ignored by Git, so a fresh clone builds without analytics. The current local snippet uses Google Analytics; its external requests are excluded from the offline cache. The downloaded source HTML has no analytics tag.

## Video compatibility

Playback depends on the codecs supported by your browser and operating system. **MP4 with H.264 video and AAC audio** and **WebM** are good formats to try. A file picker may allow other formats such as MKV, AVI, and MOV, but the browser may not decode them. Changing a file extension does not convert its format.

Local Cinema does not convert video, add codecs, or stream internet video. It supports text subtitles in SRT and WebVTT (`.vtt`) formats; subtitle appearance and cue support depend on the browser. Picture-in-picture and fullscreen availability also depends on the browser.

## Build and PWA maintenance

Local analytics (`analytics.local.html`), Cloudflare state (`.wrangler/`), Wrangler configuration, environment files, and generated output are excluded by `.gitignore`. `robots.txt`, `sitemap.xml`, and promotional copy in `post.txt` are also ignored. They are not required to run the player; the build includes the search metadata only when present locally. Keep `_headers` in Git: the build uses it for PWA cache headers. To enable analytics on your own deployment, create `analytics.local.html` containing your analytics snippet before building.

Run `npm run build` to generate `dist/` for Cloudflare Pages. The build copies the manifest, install icons, and cache headers, then versions `sw.js` using a hash of the deployed assets. Deploy the whole `dist/` directory together. `npm run deploy` builds and publishes it.

Run `npm run test:pwa` to check the built assets, script syntax, offline routes, cache cleanup, and requests excluded from caching. These checks simulate the service worker; installation should also be tested on target devices.

Service workers require HTTPS (or localhost for development). To check the production build locally, run `npm run build`, then `python3 -m http.server 8080 --directory dist` and open `http://localhost:8080`. Open once online, check offline readiness, switch the browser offline, and reload. Verify local playback, installation, and an update with an existing player window open. Preview the built directory so cache versions reflect source changes.

## Credits

- **Popcorn favicon, header logo, and install icons:** Arcticons by Donnnno, shared under [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The icon is recolored lavender; install icons place it on a dark background. The adapted icon artwork in `icons/app.svg` is shared under the same CC BY-SA 4.0 license.
- **Playback icons:** Material Symbols and Material Symbols Light by Google. See the [Material Design Icons license](https://github.com/google/material-design-icons/blob/master/LICENSE).

Attribution comments are included with the embedded SVGs. These icon credits do not set a license for the rest of this project.

## Co-development note

**This project was co-developed using OpenAI Codex**, which assisted with implementation, interface styling, iterative improvements, and documentation under human direction. AI assistance does not guarantee bug-free code or support for every browser. This is an independent project, not an official OpenAI product or endorsement.

---

[▶ Head to Local Cinema](https://local-cinema.online/)
