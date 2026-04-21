# Dengyuhan Dai Personal Website

This repository contains the source code for my personal academic website, deployed with GitHub Pages.

## Overview

The site presents:

- academic profile and short introduction
- education and research experience
- research projects and technical interests
- writing / fiction section
- contact information
- bilingual English / Chinese content toggle

The site is built as a lightweight static website with plain HTML, CSS, and JavaScript.

## Structure

Main pages:

- [index.html](./index.html): homepage
- [experience.html](./experience.html): detailed experience page
- [research.html](./research.html): research and projects page
- [hound.html](./hound.html): writing page
- [contact.html](./contact.html): contact page

Assets:

- [assets/css/styles.css](./assets/css/styles.css): global styles
- [assets/js/i18n.js](./assets/js/i18n.js): bilingual text dictionary and language toggle logic
- `assets/images/`: images and logos
- `assets/videos/`: video assets
- `assets/docs/`: linked documents

## Bilingual Content

The English / Chinese switch is implemented in:

- [assets/js/i18n.js](./assets/js/i18n.js)

How it works:

- translatable elements in the HTML use `data-i18n="key"`
- the script maps each key to `en` and `zh` text
- clicking the language button swaps the displayed text
- the selected language is saved in `localStorage`

If you want to edit the Chinese or English copy:

1. Open [assets/js/i18n.js](./assets/js/i18n.js)
2. Find the corresponding key in `dictionaries.en` or `dictionaries.zh`
3. Update the value

For text that includes inline HTML such as `<strong>`, the page uses `data-i18n-mode="html"`, so the value in the dictionary can contain HTML.

## Editing Notes

- Most visible text is controlled through `assets/js/i18n.js`
- Layout and appearance are controlled through `assets/css/styles.css`
- Page structure and section ordering are controlled in the individual `.html` files

If you are changing section content:

- short labels, descriptions, and translated text: edit `assets/js/i18n.js`
- page layout or section blocks: edit the relevant `.html` file
- spacing, alignment, typography, colors, and nav layout: edit `assets/css/styles.css`

## Local Preview

Because this is a static site, you can preview it locally by opening `index.html` in a browser.

If you prefer using a local server, any simple static server will work.

## Deployment

This repository is intended to be deployed through GitHub Pages from the `main` branch.

Remote:

- `origin`: `https://github.com/TomoriNa0/TomoriNa0.github.io.git`

## Maintenance

When updating the site, a typical workflow is:

1. Edit content or styles
2. Preview locally
3. Commit changes
4. Push to `main`

## License

This repository is for personal website source and content. Reuse of text, design, or media should be discussed with the repository owner.
