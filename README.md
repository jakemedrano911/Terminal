# Terminal Configuration

This project renders a retro terminal interface that reads its content from
`config.json`. You can supply your own configuration file at runtime through the
page itself.

## Loading a custom configuration

1. Open `index.html` in your browser.
2. Use the **Config** file input beside the power button to select a JSON file
   that matches the structure of `config.json`.
3. Press the **Power** button to start the terminal. The uploaded configuration
   will be used if provided; otherwise the default `config.json` is loaded.

If you power off the terminal you can choose a different file and power on
again to reload with the new configuration.


## Optional Passwords and Dud Words

The hacking mini-game can be customized by providing a `password` and optional
`dudWords` in the `hacking` section of the configuration. This allows you to
control exactly which words appear during the puzzle.

- If you supply more candidate words than the selected difficulty requires, only
  your words are used.
- If you only provide `dudWords` and omit `password`, one of the provided
  words is selected as the password and the rest remain duds. Any additional
  slots are backfilled with random entries from the internal list if needed.
- If you supply fewer words, the remaining slots are backfilled with random
  entries from the internal list.
- The length of the provided password sets the length of all candidate words,
  overriding the difficulty's normal character-length range.

Example:

```json
{
  "hacking": {
    "difficulty": "Average",
    "password": "HARDWARE",
    "dudWords": ["RESEARCH", "SCIENTIST"]
  }
}
```

In this example the password is eight letters long, so every generated word will
also contain eight characters. Because only two dud words are supplied, the
terminal backfills the remaining required words with random eight-letter
candidates.

## Preferences

Use the **Prefs** button beside the terminal to adjust audio volumes or typing
speeds. Setting the **User Speed** or **Computer Speed** slider to `0` skips its
respective animation entirely. Your chosen settings are stored in your browser
and restored on the next visit.

## Offline installation

The terminal now ships with a Progressive Web App shell so it can keep working
without an active network connection.

1. Open `index.html` from a local server or your preferred hosting provider.
2. Use your browser's install prompt (or the “Add to Home Screen” option on
   mobile) to install **RobCo Termlink**.
3. The first load caches `index.html`, the builder, configuration, fonts, and
   all bundled audio. Future launches can run entirely offline.

If you update the project files, revisit the page once online to refresh the
cache. A lightweight static server such as `python -m http.server` still works
for local testing, but the install step is no longer required once the cache is
primed.

## Custom audio sources

Custom enter-key sounds can now come from either hosted URLs or a local folder:

- Enter a web-accessible directory (for example, a GitHub Pages folder or a
  local server) in **Custom Sound Source → Hosted URL** and the terminal will
  fetch `.wav` and `.mp3` files as before.
- Choose **Pick a local folder when the terminal loads** in the builder to have
  the running terminal prompt for a folder using the File System Access API.
  Once granted, the selection is remembered in the browser and works offline.

When working offline, remember that hosted URLs still need to be reachable over
HTTP/HTTPS. Local folders are only available in browsers that support
`window.showDirectoryPicker`; if unavailable, the Hosted URL option remains the
fallback.
