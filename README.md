# funsies

Three games set in the same stone courtyard garden, built to play on an iPhone. Each game is a single HTML file with no build step and no dependencies, and all share one look: carved stone being slowly taken over by plants, four seasons, frosted panels and synthesized sounds.

| Game | What it is | Folder | Play it |
| ---- | ---------- | ------ | ------- |
| **Arbor & Arch** | Chess | [`chess/`](chess/) | https://luiserodz93.github.io/funsies/chess/ |
| **Leaf & Letter** | Hangman | [`hangman/`](hangman/) | https://luiserodz93.github.io/funsies/hangman/ |
| **Brick & Blueprint** | House designer: facades and floor plans | [`facade/`](facade/) | https://luiserodz93.github.io/funsies/facade/ |

## Arbor & Arch (chess)

**Pieces.** Each piece is a small piece of architecture overgrown by nature:

| Piece  | Name            | Look                                          |
| ------ | --------------- | --------------------------------------------- |
| King   | Grove Sanctuary | Domed temple crowned by a sprouting cross     |
| Queen  | Lotus Temple    | Stone petals opening like a lotus             |
| Rook   | Ivy Tower       | Battlements wrapped in climbing ivy           |
| Bishop | Gothic Spire    | Pointed arch with a lancet window             |
| Knight | Topiary Steed   | Stone horse with a mane of clipped leaves     |
| Pawn   | Sapling Column  | Column with a seed sprouting on top           |

The sides are **Limestone** (light) and **Basalt** (dark, with lantern-lit windows).

**Features**

- Full chess rules: castling, en passant, promotion, check, checkmate, stalemate, threefold repetition, the 50-move rule and insufficient material
- Play against the computer at three levels: Seedling, Willow, Ancient Oak
- Play a friend live on their own phone: send one invite link, and while you both have the game open, moves appear on each other's screen instantly, with an online indicator. If someone steps away, the game catches up when they return. If the live connection isn't reachable, each move can still be sent as a link
- Play several friends at once: the **Your games** list (grid icon, top right) shows every friend game with whose turn it is, and a badge counts games waiting on you. Games you're not looking at keep syncing, and a tap on the "played" note jumps to that game. Your game on this phone (computer or same phone) is kept separately
- Same phone pass & play, with three board views: Same side, Face to face (phone flat on a table) and Turn board
- Tap or drag to move, legal-move markers, hints, undo, and a move list

## Leaf & Letter (hangman)

A carved limestone pillar and lintel stand in the courtyard with ivy climbing them. Each wrong letter drops a leaf from the ivy and adds a piece to a small stone figure. Find the word before the last leaf falls.

**Features**

- Three ivy levels: Seedling (10 leaves, shorter words), Willow (8 leaves, everyday words) and Ancient Oak (6 leaves, long words)
- Play the computer, with word beds to choose from: Garden, Animals, Countries, Food, Science, Home, or any of them
- Hide a word for a friend on their own phone: type the word, an optional clue and the ivy level, and send one invite link. While they guess, the **Your words** list (grid icon, top right) shows their progress live, with a "Guessing now" marker, and you get a note when they find it or run out of leaves. A badge counts results you haven't seen. You can have several words out at once
- No link? The game also gives a short code your friend can type under **New game → Play a friend → I have a code**. Code games work anywhere, including offline, but don't report back live
- Same phone: one player types the word hidden, then hands the phone over
- Dig up a letter (costs one leaf) and a two-tap Give up
- Win, loss and streak record

**Arbor & Arch and Leaf & Letter** have four seasons (Spring, Autumn, Winter, Night) with drifting petals, leaves, snow or fireflies, synthesized sounds, auto-save, and offline play once installed.

## Brick & Blueprint (house designer)

A drafting board in the garden for designing a house two ways: the **Front** (the facade) and the **Plan** (the floor plan), switched at the top left of the board. Both belong to the same design. It mixes CAD precision (real sizes, a snapping grid, snap to other parts, typed dimensions, layers) with paint-box freedom (colors, textures, freehand pen and a paint bucket). It's a free sandbox: no scores or goals.

**Front parts:** walls (brick, stone, siding, board and batten, stucco, shingle), roofs (gable, hip, flat, shed, mansard, gambrel), windows, doors, trim (cornice, band, column, pilaster, quoins, surround), plants (shrub, tree, hedge, flower box, ivy), steps and chimneys.

**Plan parts:** rooms that show their name and floor area (wood, tile, carpet, stone or concrete floors), walls, doors with their swing (single, double, sliding), windows, stairs (straight or spiral), furniture, kitchen, bath and laundry fixtures, and plants. Door swings, furniture and fixtures rotate in 90° steps and mirror.

**Library:** ready-made items for each view. Front: windows, doors, roofs and structure, trim and garden. Plan: doors and windows, kitchen and laundry appliances (fridge, stove, sink, dishwasher, counter, island, washer, dryer), bathroom fixtures, living and dining furniture, bedroom furniture, stairs and plants. Pick one, then tap the board to place it or drag to size it.

**Linked views:** ground-floor windows and doors on the front wall are linked to the plan's front wall (the bottom edge of the rooms). Placing one in either view adds its twin to the other, moving or resizing it moves the twin, and deleting it deletes both. Dotted lines under each view show where the other view's walls and openings fall, and parts snap to them. Turn linking off, or link openings drawn earlier, from the menu. The starter cottage comes linked.

**Features**

- Tap to drop a part or drag to draw it at any size. Smart placing on the front: a roof tapped above a wall fits that wall, a door stands on the wall's base, a trim band spans the wall
- Select, move and resize with handles, with a live size readout. Snap chips toggle grid snap, snap to other parts and the ground (with guide lines), and ortho for straight lines
- Select several parts by dragging a box across empty board, or turn on Multi and tap them. Move them together, group and ungroup, align edges, centers, tops and bottoms, space them evenly, match sizes, mirror, duplicate, or delete them at once
- Copy and paste between the front and plan views and between designs (the clipboard survives a reload)
- Nudge buttons (and arrow keys) move the selection one grid step at a time; Add dimensions puts width and height dimensions on any part
- In the plan, doors and windows tapped near a room edge or straight wall sit in that wall, and doors swing into the side you tapped. A badge shows the room count and total floor area
- Paint box can pick up a color and texture from any part
- Part settings: style, texture, color (palette or any color), exact sizes and positions typed in feet and inches (the default, with metres in the menu), room names, layer, center on wall or in room, mirror, rotate, duplicate, repeat in a row or column, front and back
- Labels, lines, pen strokes and dimension lines in both views
- Five layers (Structure, Openings, Details, Sketch, Dimensions) that can be hidden or locked
- Undo and redo, pinch to zoom, two-finger pan, zoom buttons and fit to screen
- Day, dusk and night skies for the front (windows light up at night)
- Designs auto-save on the phone, with a gallery, copies and three starter houses (the Garden cottage comes with a matching floor plan)
- Save a picture (PNG) or an SVG of either view, or share a link that carries the whole design, front and plan, inside it, so nothing is uploaded
- Works in portrait and landscape

## Put it online with GitHub Pages

1. On GitHub, open the repo, then **Settings → Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**, pick `main` and `/ (root)`, then click **Save**.
3. After a minute or two all three games are live at the addresses in the table above.

GitHub Pages on a free account requires the repository to be public.

## Play on an iPhone

1. Open a game's link in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. It now opens full screen like an app and keeps working without internet. Each game gets its own icon.

**Chess with a friend:** open **Your games → Invite a new friend** (or **New → Play a friend**), optionally add their name and yours, and tap **Start** to text them the invite. Repeat for each friend you want to play.

**Hangman with a friend:** open **Your words → Hide a word for a friend** (or **New game → Play a friend → Send a word**), type the word, an optional clue and both names, pick the ivy level, and tap **Send invite**.

Game links open in Safari, even if you've added the game to your home screen. Sending the `index.html` file itself does not work well on an iPhone, because the Files app previews HTML without running the game.

## Live play with Firebase

Both games share one Firebase Realtime Database, used through its web API, so no Firebase library is loaded. Chess games live under `games/`, hangman words under `hangman/`, and play stats under `logs/`. If no database is set, live play falls back to the free [ntfy.sh](https://ntfy.sh) relay.

1. In the [Firebase console](https://console.firebase.google.com), open your project, go to **Build → Realtime Database**, and create a database in **locked mode**.
2. On the database's **Rules** tab, replace everything with the contents of [`firebase.rules.json`](firebase.rules.json) and click **Publish**. This one file covers all three games. **Publish it again whenever it changes**, or the new parts are refused (hangman live play and its stats need the current version).
3. Copy the database URL shown at the top of the **Data** tab, for example `https://your-project-default-rtdb.firebaseio.com`.
4. Set `var FIREBASE_DB = "...";` to that URL in both `chess/index.html` and `hangman/index.html`.

The database URL is not a secret. It is meant to appear in public web pages, and the rules are what protect the data. Each game uses well under 1 KB. Nothing is deleted automatically, so to clear old games, delete the `games` or `hangman` node in the console.

## Play stats

All three games send anonymous play stats unless the player turns off **Share anonymous play stats** in the menu:

- **Google Analytics** (one property, `G-K2XD82086T`, with each game reporting its own app name): city-level location, device type, sessions and game events. Google signals and ad personalization are off.
- **Firebase logs**, which the rules make write-only:
  - `logs/sessions`: one record per visit with device type, active time and counts. Hangman visits carry `app: "hangman"` and house designer visits `app: "facade"` (where `games` counts new designs and `moves` counts parts placed). Brick & Blueprint sends no drawings and writes nothing else to the database, so it needs no rules change.
  - `logs/games`: one record per finished or abandoned chess game.
  - `logs/words`: one record per finished or abandoned hangman round: mode, level, result, word length, guesses, misses, dug-up letters and time. The word itself is recorded only for words the computer picked, never for words friends hide.
  - `logs/errors`: up to five script errors per visit, to diagnose problems on real phones.

## Security notes

**What protects the games**
- Each friend game (chess) and hidden word (hangman) has a random 72-bit ID from the browser's cryptographic generator. The ID is the only way to read or write it, and the database rules block listing.
- Every database write is checked for format and size. A chess game's record can only grow by one move at a time, so nobody can lock a game by padding it, roll it back, or delete it. Moves are replayed and checked for legality on each phone before they are shown.
- A hangman word's record holds only the guesses, never the word. It can only be extended: each write must start with the previous record, so guesses can't be rewritten or removed. The sender's phone replays the guesses against the word it kept and ignores anything that doesn't fit.
- Brick & Blueprint share links are checked part by part when opened: only known parts, styles and textures, colors in `#rrggbb` form, sizes within limits, labels cleaned and escaped, and a cap on the decompressed size
- Names, clues and other text from links or the database are escaped before display, and invisible or direction-changing characters are stripped.
- Saved data is checked field by field when a game loads, so a damaged store can't break the page.
- A Content Security Policy limits each page to its own code, Google Fonts, Google Analytics, the Firebase database and the ntfy.sh relay. Referrers are turned off.
- Each phone uses a separate random player ID per game, so games can't be linked to the same device.
- Analytics runs without Google signals or ad personalization. Logs are write-only and hold no names, exact locations or friends' words.

**Known limits (accepted for casual games without accounts)**
- Anyone who has a game's link can make moves in that game, or guesses on that word. Keep invite links between the people playing.
- A hangman word travels inside its link and code in scrambled form. That hides it from a glance at the message, but it isn't encryption: someone determined to cheat could decode it from the link. The friend's phone needs the word to check guesses, and there's no server to keep it secret.
- The database accepts new games and log entries from anyone on the internet, which someone could abuse to fill the free plan's storage. The Spark plan can't run up charges. If it becomes a problem, Firebase App Check and anonymous sign-in are the next steps.
- GitHub Pages can't send custom HTTP headers, so `X-Content-Type-Options` and `frame-ancestors` can't be set. The CSP and referrer policy are set with `<meta>` tags instead.
