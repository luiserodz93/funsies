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
- Play a friend live on their own phone: send one invite link, and while you both have the game open, moves appear on each other's screen instantly, with an online indicator. If someone steps away, the game catches up when they return. Moves relay through the free [ntfy.sh](https://ntfy.sh) service on a randomly named channel, so there is no server to run and no account. If the relay is unreachable, each move can still be sent as a link
- Same phone pass & play, with three board views: Same side, Face to face (phone flat on a table) and Turn board
- Tap or drag to move, legal-move markers, hints, undo, and a move list
- Four seasons (Spring, Autumn, Winter, Night) with drifting petals, leaves, snow or fireflies
- Synthesized sounds, game auto-saves, and it works offline once installed

## Put it online with GitHub Pages

1. Merge this branch into `main`. Pages can also serve another branch if you choose it in step 3.
2. On GitHub, open the repo, then **Settings → Pages**.
3. Under **Build and deployment**, set Source to **Deploy from a branch**, pick `main` and `/ (root)`, then click **Save**.
4. After a minute or two the game is live at:
   **https://luiserodz93.github.io/funsies/chess/**

GitHub Pages on a free account requires the repository to be public.

## Play it on an iPhone

1. Open the link in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. It now opens full screen like an app and keeps working without internet.

To play a friend on their own phone, choose **New → Play a friend**, make your move (or pick Basalt to let them start), and tap **Send** to text them the invite. Game links open in Safari, even if you've added the game to your home screen. Sending the `index.html` file itself does not work well on an iPhone, because the Files app previews HTML without running the game.
