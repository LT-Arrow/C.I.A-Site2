# Crossworlds RPG — official website

Official home of Arcana Reality, the Cryptic Intelligence Agency and the Crossworlds Discord bot. Static HTML/CSS/JavaScript, compatible with the existing GitHub Pages project path and local file previews. No build step, API keys or npm dependencies required.

## Pages
- index.html: official Crossworlds homepage
- arcana.html / cia.html: distinct world introductions
- database.html: searchable/paginated 168-profile creature index with world filters and detail dialogs
- expeditions.html: all six bundled expeditions, bosses, hubs and CIA instability briefings
- incidents.html: the three original incident reports, with functional search and full details
- blacksites.html / agents.html: original archived site/personnel descriptions
- lore.html: lore overview and preserved archive references
- guide.html: beginner guide, invite link and searchable, role-filtered command guide
- cryptid-profiles/example-creature.html: existing Howler dossier at its original URL
- legacy/: original public website files, unchanged, retained for reference

## Deployment
Publish the repository root through GitHub Pages using the existing main-branch/root-folder setting. Relative links support https://lt-arrow.github.io/C.I.A-Site2/ without a custom domain. The original incidents URL is preserved. This static site does not run or host the Discord bot itself.

## Editing
Page text is in the HTML files. Creature and dungeon data is in assets/catalog.js (exported from the bundled game content). Shared styles and interactions are assets/crossworlds.css and assets/crossworlds.js. Update the public bot invite client ID in guide.html if needed. The supplied ID is copied from the existing local official bot website configuration; verify ownership before changing it.

This is a public lore/game guide, not a secure agent login or connected character dashboard. Bot records, admin lore, character saves and server-created creatures do not automatically synchronize to GitHub Pages. The legacy client-side login remains only within the preserved legacy copy and is not authentication. No private bot data, token, .env file or database is included.

Original incident details and agent/site descriptions are preserved. Relative timestamps are explicitly identified as original archive markers instead of current telemetry. Unsupported original placeholder totals and fake live alerts are absent from the official pages. Earth/Arcana remain separate in present canon; the future merger is not triggered by site or dungeon content.

## Verification
Checked local HTTP responses and relative page/asset links. Browser-tested creature search, world filtering, record dialogs, archived incident search/detail, expedition filtering/briefings, command role/search controls and mobile navigation. Checked phone layouts at 390px without horizontal overflow. Browser console reported no errors in tested flows.
