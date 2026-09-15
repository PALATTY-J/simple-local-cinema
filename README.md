# 🍿 Local Cinema

**Your videos. Your browser. Bring your own popcorn.**

### [▶ Open Local Cinema · local-cinema.online](https://local-cinema.online/)

A small, free video player for files on your computer. Pick a video, make yourself comfortable, and let your browser do the playing.

**No installation · No uploads · No external player libraries**

---

## On the menu

[The origin story](#why-this-exists) · [Features](#features) · [Get started](#getting-started) · [Controls](#playback-controls) · [Shortcuts](#keyboard-shortcuts) · [Watch history](#watch-history) · [Privacy](#privacy-and-offline-use) · [Compatibility](#video-compatibility) · [Credits](#credits)

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
- Use custom play, pause, seek, skip, volume, and mute controls.
- Adjust playback speed from 0.5× to 2×.
- See brief rewind and fast-forward feedback over the video.
- Keep a watch history with saved resume positions in this browser.
- Use fullscreen and picture-in-picture where your browser supports them.
- Enjoy a responsive interface with a collapsible history sidebar.
- Download the single HTML file and play supported videos offline.

## Getting started

### Play online

Visit **[local-cinema.online](https://local-cinema.online/)** and click **Open video**. Choose a file from your device. The page plays it locally; the app does not upload your video.

### Play offline

1. Download [`index.html`](index.html).
2. Open it in a browser with JavaScript enabled.
3. Click **Open video** or **Choose a video**, or drag a file onto the player.
4. Press **Play** if playback does not start automatically.

No install, package manager, or local web server is required.

## Playback controls

| Control | Action |
| --- | --- |
| Play / pause | Start or pause playback. Clicking the video also toggles playback. |
| Rewind / forward | Skip 10 seconds backward or forward. |
| Timeline | Seek to a point in the video. |
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

Browsers do not let a web page keep a permanent handle to a video selected from your computer. After a reload, click a saved entry and you may see **“Did this video move out? 🍿”**. Choose **Find video** and select the original file to resume. This message also appears if you simply returned later; the browser forgets temporary file access even when the video never moved.

To reconnect a renamed file, select it from the prompt. The player checks its size and last-modified time before restoring the saved position. A different or modified file is not linked to that history entry. Choose **Open video** to play it as a new item.

History belongs to the website address and browser profile you used. It will not carry over between the production site, a preview address, and a downloaded copy. Private browsing, clearing site data, or browser storage restrictions can remove or prevent saved history. If local storage is unavailable, video playback still works.

## Privacy and offline use

Videos are played from local browser object URLs. Local Cinema does not upload, modify, or store video contents. It saves only history details such as the file name, size, last-modified time, duration, and resume position in browser local storage. It does not store the original file path.

All player code, styles, and icons are included in `index.html`. There are no external player libraries, remote fonts, analytics, or tracking scripts. The hosted page needs a connection to load; a downloaded copy of `index.html` can be opened offline.

## Video compatibility

Playback depends on the codecs supported by your browser and operating system. **MP4 with H.264 video and AAC audio** and **WebM** are good formats to try. A file picker may allow other formats such as MKV, AVI, and MOV, but the browser may not decode them. Changing a file extension does not convert its format.

Local Cinema does not convert video, add codecs, load subtitle files, or stream internet video. Picture-in-picture and fullscreen availability also depends on the browser.

## Credits

- **Popcorn favicon:** Arcticons by Donnnno, shared under [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The icon is recolored lavender.
- **Playback icons:** Material Symbols and Material Symbols Light by Google. See the [Material Design Icons license](https://github.com/google/material-design-icons/blob/master/LICENSE).

Attribution comments are included with the embedded SVGs. These icon credits do not set a license for the rest of this project.

## Co-development note

**This project was co-developed using OpenAI Codex**, which assisted with implementation, interface styling, iterative improvements, and documentation under human direction. AI assistance does not guarantee bug-free code or support for every browser. This is an independent project, not an official OpenAI product or endorsement.

---

[▶ Head to Local Cinema](https://local-cinema.online/)
