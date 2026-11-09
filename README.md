Browser console snippets that pull every option out of a dropdown on a web page and give you a clean, copyable list. There are two scripts, depending on the type of dropdown.

## Which script do I need?

Right-click the dropdown → **Inspect** and look at the HTML.

| You see | Dropdown type | Use |
|---|---|---|
| `<select>` with `<option>` tags | Native dropdown | [Script 2](https://github.com/abinahm/dropdown-copy-paste/blob/main/dropdown_native.js) |
| `<div class="menu">` with `<div class="item">` entries (Semantic UI and similar) | Custom dropdown | [Script 1](https://github.com/abinahm/dropdown-copy-paste/blob/main/dropdown_universal.js) |
| `<input class="search">` inside a dropdown | Custom dropdown (search box) | [Script 1](https://github.com/abinahm/dropdown-copy-paste/blob/main/dropdown_universal.js) |

## Script 1: Custom dropdown

Works on Semantic UI style dropdowns where the options are `.item` elements inside a `.menu`.

### Usage

1. **Open the dropdown** on the page so the options are loaded.
2. Right-click it → **Inspect**.
3. In the Elements panel, click the dropdown's `<input class="search">`, its `.menu` div, or the outer `.dropdown` div so it's highlighted.
4. Open the **Console** tab (`F12`).
5. Paste the script and press **Enter**.
6. The list is copied to your clipboard, so paste it wherever you need it.

`$0` is a DevTools shortcut for the element currently selected in the Elements panel, so no ID or class name is needed.

## Script 2: Native `<select>` dropdown

Works on standard HTML `<select>` elements.

### Usage

1. Right-click the dropdown → **Inspect** and note the `<select>` element's ID (for example, `i12-main`).
2. Open the **Console** tab (`F12`).
3. Paste the script below, replacing the ID in `querySelector` if needed, and press **Enter**.
4. Copy the list printed in the console.


## Tips

- **IDs often change.** Auto-generated IDs like `i12-main` can change between page loads or sites.
- **Copy to clipboard.** To copy the output of Script 2 instead of just printing it, add `copy(titles.join('\n'));` at the end. `copy()` is a DevTools console helper and doesn't work in normal page scripts.
