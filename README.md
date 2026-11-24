# funsies

Two games set in the same stone courtyard garden, built to play on an iPhone. Each game is a single HTML file with no build step and no dependencies, and both share one look: carved stone being slowly taken over by plants, four seasons, frosted panels and synthesized sounds.

| Game | What it is | Folder | Play it |
| ---- | ---------- | ------ | ------- |
| **Arbor & Arch** | Chess | [`chess/`](chess/) | https://luiserodz93.github.io/funsies/chess/ |
| **Leaf & Letter** | Hangman | [`hangman/`](hangman/) | https://luiserodz93.github.io/funsies/hangman/ |

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

**Both games** have four seasons (Spring, Autumn, Winter, Night) with drifting petals, leaves, snow or fireflies, synthesized sounds, auto-save, and offline play once installed.

## Put it online with GitHub Pages

1. On GitHub, open the repo, then **Settings → Pages**.
2. Under **Build and deployment**, set Source to **Deploy from a branch**, pick `main` and `/ (root)`, then click **Save**.
3. After a minute or two both games are live at the addresses in the table above.

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
2. On the database's **Rules** tab, replace everything with the contents of [`firebase.rules.json`](firebase.rules.json) and click **Publish**. This one file covers both games. **Publish it again whenever it changes**, or the new parts are refused (hangman live play and its stats need the current version).
3. Copy the database URL shown at the top of the **Data** tab, for example `https://your-project-default-rtdb.firebaseio.com`.
4. Set `var FIREBASE_DB = "...";` to that URL in both `chess/index.html` and `hangman/index.html`.

The database URL is not a secret. It is meant to appear in public web pages, and the rules are what protect the data. Each game uses well under 1 KB. Nothing is deleted automatically, so to clear old games, delete the `games` or `hangman` node in the console.

## Play stats

Both games send anonymous play stats unless the player turns off **Share anonymous play stats** in the menu:

- **Google Analytics** (one property, `G-K2XD82086T`, with each game reporting its own app name): city-level location, device type, sessions and game events. Google signals and ad personalization are off.
- **Firebase logs**, which the rules make write-only:
  - `logs/sessions`: one record per visit with device type, active time and counts. Hangman visits carry `app: "hangman"`.
  - `logs/games`: one record per finished or abandoned chess game.
  - `logs/words`: one record per finished or abandoned hangman round: mode, level, result, word length, guesses, misses, dug-up letters and time. The word itself is recorded only for words the computer picked, never for words friends hide.
  - `logs/errors`: up to five script errors per visit, to diagnose problems on real phones.

## Security notes

**What protects the games**
- Each friend game (chess) and hidden word (hangman) has a random 72-bit ID from the browser's cryptographic generator. The ID is the only way to read or write it, and the database rules block listing.
- Every database write is checked for format and size. A chess game's record can only grow by one move at a time, so nobody can lock a game by padding it, roll it back, or delete it. Moves are replayed and checked for legality on each phone before they are shown.
- A hangman word's record holds only the guesses, never the word. It can only be extended: each write must start with the previous record, so guesses can't be rewritten or removed. The sender's phone replays the guesses against the word it kept and ignores anything that doesn't fit.
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
