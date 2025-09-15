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


## Per-item audio cues

Every interactive entry in a screen can define optional `hoverSound` and
`selectSound` properties. These values point to audio files (relative to the
HTML page) that should play when the item is highlighted or activated. Commands
can also specify the same properties so that typing a command triggers custom
audio before its output appears. When the sounds are omitted, the terminal falls
back to its default focus and select effects.

Example menu item:

```json
{
  "text": "> Initiate Launch Sequence",
  "command": "Launch parameters locked in.",
  "hoverSound": "Pip/Highlight4.wav",
  "selectSound": "Terminal 3/passgood.wav"
}
```

Example command entry:

```json
"diagnostics": {
  "command": "Running system diagnostics...",
  "help": true,
  "selectSound": "Terminal 3/passgood.wav"
}
```

The builder interface exposes these properties through the new **Select sound**
and **Hover sound** inputs shown beside each menu item and command. Enter a
relative or absolute URL to the audio clip you want to use; the builder exports
the values directly into `config.json`, and the terminal preloads and plays the
clips when needed.


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
