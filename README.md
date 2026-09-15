# Local Cinema

A lightweight video player for files on your computer, built into a single HTML file. Open a video, settle into a distraction-free layout, and control playback without installing an app or uploading your files.

All styles, scripts, and icons are embedded in `index.html`. There are no runtime dependencies, CDN requests, accounts, or build steps.

## Why this exists

It started with a deeply ambitious technical requirement: **watch a video.**

Naturally, the next step was to find a video player. Download an installer. Click Next. Pick an installation folder as though this were a major real-estate decision. Acquire another desktop icon. Possibly meet an update notification before meeting the opening credits.

Meanwhile, the browser was sitting there with twelve tabs open, quietly playing videos all day.

“Am I a joke to you?” it asked.

Fair point, browser.

That led to a small experiment: what if watching a local video only required opening a page and choosing a file? No installation ceremony. No account. No uploading a movie somewhere just to watch it on the computer that already contains the movie.

One HTML file later, Local Cinema existed.

Then came the perfectly reasonable requests: nicer controls, a history sidebar, resume positions, picture-in-picture, and little rewind icons. Apparently, “just a simple video player” is how a browser acquires a popcorn budget.

Dedicated media players still have their place, especially for formats the browser cannot decode. But for a video your browser already knows how to play, this project asks a very important question:

**What if we simply let it?**

## Features

- **Local playback:** Choose a video from your computer or drag it onto the player.
- **Custom controls:** Play, pause, scrub the timeline, skip backward or forward by 10 seconds, adjust volume, and mute.
- **Playback speed:** Choose 0.5×, 0.75×, 1×, 1.25×, 1.5×, or 2×.
- **Visual seek feedback:** Rewind and forward icons briefly appear over the video when using skip buttons or arrow keys.
- **Watch history:** Reopen recently selected videos and resume their playback positions during the current page session.
- **Fullscreen:** Expand the player using the control button or a keyboard shortcut.
- **Picture-in-picture:** Move the video into a floating window when the browser exposes a supported API.
- **Responsive layout:** A dark interface sized to `100svh`, with a separately scrollable history list and a collapsible sidebar on smaller screens.
- **Keyboard access:** Labeled controls, visible keyboard focus indicators, and playback shortcuts.
- **Offline operation:** Download the HTML file once and use it without an internet connection.

## Getting started

1. Download `index.html`, or clone this repository.
2. Open `index.html` in a browser with JavaScript enabled.
3. Click **Open video** or **Choose a video**, then select a local video. You can also drop a file onto the video area.
4. Playback starts when the browser permits it. If it does not start automatically, press **Play**.

No package installation or local web server is required.

### Optional local server

If you prefer to serve the page locally and have Python 3 installed, run this command from the project directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open `http://localhost:8000` in your browser. Stop the server with `Ctrl+C` in the terminal.

## Playback controls

| Control | Action |
| --- | --- |
| Play / pause | Start or pause the current video. Clicking the video also toggles playback. |
| Rewind 10 | Move backward by 10 seconds. |
| Forward 10 | Move forward by 10 seconds. |
| Timeline | Seek to a position in the video. |
| Speaker | Toggle mute. |
| Volume slider | Adjust the playback volume. |
| Speed selector | Change the playback rate from 0.5× to 2×. |
| Picture-in-picture | Enter or exit a floating video window, where supported. |
| Fullscreen | Enter or exit fullscreen. |
| History | Show or hide the watch-history sidebar. |
| Clear | Remove the history list without stopping the current video. |

The picture-in-picture button is hidden when no supported API is detected. It remains disabled until video data is available. Fullscreen behavior can differ between the standard player fullscreen mode and a browser's native video fullscreen mode.

### Keyboard shortcuts

| Key | Action |
| --- | --- |
| `Space` | Play or pause. |
| `←` | Rewind 10 seconds. |
| `→` | Forward 10 seconds. |
| `M` | Toggle mute. |
| `F` | Toggle fullscreen. |
| `Escape` | Close the history sidebar on narrow screens. The browser also handles leaving fullscreen. |

Playback shortcuts do not override focused buttons, inputs, or the speed selector. Those controls retain their normal keyboard behavior. Click a non-control part of the page if you want to use the page-wide shortcuts.

## Watch history and resume

History holds up to **50 recently opened videos**, with the most recently opened item first. Selecting an existing entry moves it to the top instead of adding a duplicate. Files are matched by name, size, and last-modified time.

- Click an entry to reopen it at its remembered position.
- Positions are tracked during playback.
- The visible **Resume at** timestamp refreshes after a seek or pause and when the history list is redrawn.
- Finishing a video resets its remembered position to the beginning.
- Clearing history does not delete files from your computer.

**History is stored only in page memory.** Reloading the page or closing the tab clears the list and its resume positions. There is no persistent library, local-storage database, or automatic access to previously selected files after a reload.

On narrow screens, history starts hidden and closes after a video is opened. Use **History** to bring it back.

## Offline playback and privacy

The application opens selected files using the browser's File API and `URL.createObjectURL()`. The resulting local object URL is assigned to an HTML `<video>` element.

- Video files are not uploaded by the application.
- The page contains no analytics, tracking scripts, remote fonts, or external player libraries.
- File references and watch history stay in memory for the current page session.
- The app does not modify the original video files.
- The active object URL is released when switching videos and when the page is discarded.

The current implementation uses the browser's video API directly with custom JavaScript controls. **PlayerJS is not required or included.**

For offline use, keep a local copy of `index.html`. A hosted copy still needs a connection to load the page initially; this project does not install a service worker or provide an offline web-app cache.

## Video compatibility and limitations

Selecting a file does not guarantee that the browser can decode it. Playback depends on the video's container, its video and audio codecs, and the browser and operating system.

The player's error message suggests trying **MP4 with H.264 video and AAC audio**, or **WebM**. Other selectable formats, such as MKV, AVI, MOV, and transport streams, may not play in your environment.

The player does not include:

- Video conversion or additional codec decoders.
- Subtitle-file loading or an audio-track selector.
- Streaming URL input or automatic playlist playback.
- Persistent history across reloads or devices.
- Guaranteed picture-in-picture or fullscreen support in every browser.

## Troubleshooting

| Issue | What to try |
| --- | --- |
| The video does not start automatically | Press **Play**; the browser may have blocked automatic playback. |
| A format error appears | Try a different video with a browser-supported combination of container and codecs. Renaming the extension does not convert a file. |
| Picture-in-picture is missing | The browser has not exposed a supported picture-in-picture API to this page. |
| Picture-in-picture is disabled | Wait for video data to load and check whether the video plays successfully. |
| Fullscreen does not open | Try the fullscreen button directly. The page reports an error if the browser rejects the request. |
| An arrow key adjusts a slider instead of skipping | A control has keyboard focus. Click outside the controls before using playback shortcuts. |
| History disappeared | Reloading or closing the page clears in-memory history. Reopen your videos to start a new list. |
| The old interface or favicon still appears | Refresh the page and make sure you opened the latest copy of `index.html`. |

## Project structure

```text
.
├── index.html   # Complete application: markup, CSS, JavaScript, and embedded SVGs
└── readme.md    # Project documentation
```

## Development and customization

Edit `index.html` directly and refresh the browser to see changes.

- **Theme and layout:** The `<style>` block contains colors, responsive rules, control sizing, and the `100svh` layout. The `--accent` variable sets the main lavender accent.
- **Icons:** Playback SVGs are defined in the `icons` object. The favicon is a separate encoded SVG in the document head; changing `--accent` does not recolor it automatically.
- **File loading:** `openVideo()` validates selected files, manages object URLs, and updates history.
- **History:** `savePosition()` and `renderHistory()` track positions and display entries.
- **Seeking:** `skip()` changes playback time and displays directional feedback. The `seeked` listener updates history after seeks.
- **Picture-in-picture:** `syncPiP()` updates availability and button state.

### Manual checks after changes

1. Open a supported video through the file picker and through drag-and-drop.
2. Check play/pause, timeline seeking, skip buttons, keyboard shortcuts, volume, and speed.
3. Seek while playing and while paused; confirm the history timestamp updates.
4. Open a second video, then reopen the first from history and check its resume position.
5. Clear history and confirm the active video continues playing.
6. Exercise fullscreen and picture-in-picture where available.
7. Check the layout at desktop and narrow viewport sizes.
8. Open the local HTML file without a network connection and verify playback.
9. Try an empty file and an unsupported file to check error messages.

## Icon credits

- **Popcorn favicon:** Arcticons by Donnnno. The supplied icon credits [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Its stroke was recolored to lavender (`#c2b0ff`).
- **Play, pause, and skip icons:** Material Symbols and Material Symbols Light by Google. See the [Material Design Icons license](https://github.com/google/material-design-icons/blob/master/LICENSE). The rewind version mirrors the circular arrow while keeping the “10” upright.

Attribution comments are also preserved in the embedded SVG source. These asset credits do not assign a license to the rest of the application's source code.

## AI co-development disclaimer

**This project was co-developed using OpenAI Codex.** Codex assisted with implementation, interface styling, iterative fixes, and documentation under human direction.

AI assistance does not guarantee that the code is free of bugs or compatible with every browser. Contributions and modifications should be reviewed and tested before use. This is an independent project and is not an official OpenAI product or an endorsement by OpenAI.
