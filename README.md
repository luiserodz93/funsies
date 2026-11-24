# funsies

## Arbor & Arch (chess)

A chess game set in a stone garden, built to play on an iPhone. Everything lives in [`chess/`](chess/), and the whole game is one HTML file with no build step and no dependencies.

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
- Play a friend live on their own phone: send one invite link, and while you both have the game open, moves appear on each other's screen instantly, with an online indicator. If someone steps away, the game catches up when they return. Moves sync through your own Firebase Realtime Database once it's set up (see below), or the free [ntfy.sh](https://ntfy.sh) relay until then. If neither is reachable, each move can still be sent as a link
- Play several friends at once: the **Your games** list (grid icon, top right) shows every friend game with whose turn it is, and a badge counts games waiting on you. Games you're not looking at keep syncing, and a tap on the "played" note jumps to that game. Your game on this phone (computer or same phone) is kept separately
- Same phone pass & play, with three board views: Same side, Face to face (phone flat on a table) and Turn board
- Tap or drag to move, legal-move markers, hints, undo, and a move list
- Four seasons (Spring, Autumn, Winter, Night) with drifting petals, leaves, snow or fireflies
- Synthesized sounds, game auto-saves, and it works offline once installed

## Leaf & Letter (hangman)

Hangman in the same stone garden as Arbor & Arch. Everything lives in [`hangman/`](hangman/), again as one HTML file with no build step and no dependencies.

A carved limestone pillar and lintel stand in the courtyard with ivy climbing them. Each wrong letter drops a leaf from the ivy and adds a piece to a small stone figure. Solve the word before the last leaf falls.

**Features**

- Three levels: Seedling (10 leaves, shorter words), Willow (8 leaves, everyday words), Ancient Oak (6 leaves, long words)
- Play the computer with word categories (Garden, Animals, Countries, Food, Science, Home, or any of them)
- Play a friend on their own phone: type a secret word and an optional clue, and the game gives you a short code to text them. They enter the code under **New game → Play a friend → I have a code**. No server is involved; the word is scrambled into the code
- Same phone: one player types the word hidden, then hands the phone over
- Dig up a letter (costs one leaf) and a two-tap Give up
- Win, loss and streak record, the same four seasons with drifting petals, leaves, snow or fireflies, synthesized sounds, auto-save, and offline play once installed

## Put it online with GitHub Pages

1. Merge this branch into `main`. Pages can also serve another branch if you choose it in step 3.
2. On GitHub, open the repo, then **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, pick `main` and `/ (root)`, then click **Save**.
4. After a minute or two the games are live at:
   - Chess: **https://luiserodz93.github.io/funsies/chess/**
   - Hangman: **https://luiserodz93.github.io/funsies/hangman/**

GitHub Pages on a free account requires the repository to be public.

## Play it on an iPhone

1. Open the link in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. It now opens full screen like an app and keeps working without internet.

To play a friend on their own phone, open **Your games → Invite a new friend** (or **New → Play a friend**), optionally add their name and yours, and tap **Start** to text them the invite. Repeat for each friend you want to play. Game links open in Safari, even if you've added the game to your home screen. Sending the `index.html` file itself does not work well on an iPhone, because the Files app previews HTML without running the game.

## Live play with Firebase

Live play uses a Firebase Realtime Database through its web API, so no Firebase library is loaded.

1. In the [Firebase console](https://console.firebase.google.com), open your project, go to **Build → Realtime Database**, and create a database in **locked mode**.
2. On the database's **Rules** tab, replace everything with the contents of [`chess/firebase.rules.json`](chess/firebase.rules.json) and click **Publish**. These rules allow reading and writing only individual games by their random ID. They check every write's format, stop a game from being rolled back or deleted, and block the rest of the database.
3. Copy the database URL shown at the top of the **Data** tab, for example `https://your-project-default-rtdb.firebaseio.com`.
4. In `chess/index.html`, set `var FIREBASE_DB = "";` to that URL.

The database URL is not a secret. It is meant to appear in public web pages, and the rules above are what protect the data. Each game uses well under 1 KB. Games aren't deleted automatically, so if you ever want to clear old ones, delete the `games` node in the console.


## Security notes

**What protects the game**
- Each friend game has a random 72-bit ID from the browser's cryptographic generator. The ID is the only way to read or write that game, and the database rules block listing games.
- Every database write is checked for format and size. A game's record can only grow by one move at a time, so nobody can lock a game by padding it, roll it back, or delete it. Moves are also replayed and checked for legality on each phone before they are shown.
- Names and other text from links are escaped before display, and invisible or direction-changing characters are stripped.
- A Content Security Policy limits the page to its own code, Google Fonts, Google Analytics and the game's Firebase database. Referrers are turned off.
- Each phone uses a separate random player ID per game, so games can't be linked to the same device.
- Analytics runs without Google signals or ad personalization. Logs are write-only and hold no names or exact locations.

**Known limits (accepted for a casual game without accounts)**
- Anyone who has a game's link can make moves in that game. Keep invite links between the people playing.
- The database accepts new games and log entries from anyone on the internet, which someone could abuse to fill the free plan's storage. The Spark plan can't run up charges. If it becomes a problem, Firebase App Check and anonymous sign-in are the next steps.
- GitHub Pages can't send custom HTTP headers, so `X-Content-Type-Options` and `frame-ancestors` can't be set. The CSP and referrer policy are set with `<meta>` tags instead.
