const GH = ".github.io/";
const KUB = "https://kubowania" + GH;
const JAK = "https://jakesgordon" + GH;

const ACTIVE_100_GAMES = [
  ["Hextris", "Puzzle", "https://hextris" + GH + "hextris/"],
  ["Clumsy Bird", "Arcade", "https://ellisonleao" + GH + "clumsy-bird/"],
  ["Astray 3D Maze", "Puzzle", "https://wwwtyro" + GH + "Astray/"],
  ["Tower Building", "Arcade", "https://iamkun" + GH + "tower_game/"],
  ["Pacman Canvas", "Arcade", "https://platzhersh" + GH + "pacman-canvas/"],
  ["JavaScript Tetris", "Puzzle", JAK + "javascript-tetris/"],
  ["Outrun Racer", "Racing", JAK + "javascript-racer/"],
  ["Breakout", "Arcade", JAK + "javascript-breakout/"],
  ["Pong", "Multiplayer", JAK + "javascript-pong/"],
  ["Snakes", "Arcade", JAK + "javascript-snakes/"],
  ["BoulderDash", "Puzzle", JAK + "javascript-boulderdash/"],
  ["Gauntlet", "Action", JAK + "javascript-gauntlet/"],
  ["Tiny Platformer", "Action", JAK + "javascript-tiny-platformer/"],
  ["Missile Command", "Action", JAK + "javascript-missile-command/"],
  ["Tron Lightcycles", "Multiplayer", JAK + "javascript-tron/"],
  ["2048 Classic", "Puzzle", "https://play2048.co"],
  ["2048 Cupcakes", "Puzzle", "https://0x0800" + GH + "2048-CUPCAKES/"],
  ["Flappy 2048", "Arcade", "https://hczhcz" + GH + "Flappy-2048/"],
  ["Dinosaur T-Rex Run", "Arcade", "https://wayou" + GH + "t-rex-runner/"],
  ["Onslaught Arena", "Action", "https://lostdecade" + GH + "onslaught_arena/"],
  ["Alien Invasion", "Action", "https://cykod" + GH + "AlienInvasion/"],
  ["Candy Box 2", "Action", "https://candybox2" + GH],
  ["Space Company", "Action", "https://sparticle999" + GH + "SpaceCompany/"],
  ["Trimps", "Action", "https://trimps" + GH],
  ["Emoji Minesweeper", "Puzzle", "https://muan" + GH + "emoji-minesweeper/"],
  ["Connect 4", "Multiplayer", "https://kenrick95" + GH + "c4/"],
  ["Othello / Reversi", "Multiplayer", "https://kylepaulsen" + GH + "Othello/"],
  ["Sliding Puzzle", "Puzzle", "https://macek" + GH + "sliding-puzzle/"],
  ["Doodle Jump", "Arcade", KUB + "Doodle-Jump/"],
  ["Space Invaders", "Action", KUB + "space-invaders/"],
  ["Whac-A-Mole", "Arcade", KUB + "whac-a-mole/"],
  ["Nokia 3310 Snake", "Arcade", KUB + "Nokia3310-Snake/"],
  ["Frogger", "Arcade", KUB + "Frogger/"],
  ["Candy Crush", "Puzzle", KUB + "candy-crush/"],
  ["Minesweeper", "Puzzle", KUB + "minesweeper/"],
  ["Flappy Bird", "Arcade", KUB + "flappy-bird/"],
  ["Pac-Man", "Arcade", KUB + "pac-man/"],
  ["Tetris Basic", "Puzzle", KUB + "Tetris-Basic/"],
  ["Mario Kaboom", "Action", KUB + "mario-kaboom.js/"],
  ["Zelda Kaboom", "Action", KUB + "zelda-kaboom.js/"],
  ["Space Invaders Kaboom", "Action", KUB + "space-invaders-kaboom.js/"],
  ["HTML5 Asteroids", "Action", "https://dmcinnes" + GH + "HTML5-Asteroids/"],
  ["Duck Hunt", "Action", "https://matt-surabian" + GH + "DuckHunt-JS/"],
  ["Diablo Web", "Action", "https://d07riv" + GH + "diabloweb/"],
  ["Trigger Rally", "Racing", "https://jareiko" + GH + "triggerrally/"],
  ["Mario HTML5", "Action", "https://robertkleffner" + GH + "mariohtml5/"],
  ["Donkey Kong", "Arcade", "https://mikechambers" + GH + "DonkeyKong/"],
  ["Galaga", "Action", "https://adrianseeley" + GH + "Galaga/"],
  ["Air Hockey 2P", "Multiplayer", "https://adrianseeley" + GH + "AirHockey/"],
  ["Street Fighter", "Action", "https://chuan137" + GH + "StreetFighter/"],
  ["Bomberman", "Multiplayer", "https://matheus23" + GH + "bomberman/"],
  ["Solitaire", "Puzzle", "https://bfa" + GH + "solitaire-js/"],
  ["Checkers", "Multiplayer", "https://lukasz-madon" + GH + "checkers/"],
  ["Sudoku", "Puzzle", "https://robatron" + GH + "sudoku.js/"],
  ["Crossy Road WebGL", "Arcade", "https://ethanhuang13" + GH + "crossy-road/"],
  ["2 Player Pong", "Multiplayer", "https://gdube" + GH + "pong/"],
  ["Tank Trouble", "Multiplayer", "https://bobbylox" + GH + "TankTrouble/"],
  ["Stick Fight", "Multiplayer", "https://lukasz-madon" + GH + "stick-fight/"],
  ["Agar.io Clone", "Multiplayer", "https://huytd" + GH + "agar.io-clone/"],
  ["Slither.io Clone", "Multiplayer", "https://loonride" + GH + "slither-io-clone/"],
  ["Memory Match", "Puzzle", "https://sandra-lewis" + GH + "memory-game/"],
  ["Mahjong", "Puzzle", "https://ffalt" + GH + "mah/"],
  ["0h h1 Logic", "Puzzle", "https://0hh1.com"],
  ["0h n0 Logic", "Puzzle", "https://0hn0.com"],
  ["A Dark Room", "Action", "https://doublespeakgames.com"],
  ["Slow Roads 3D", "Racing", "https://slowroads.io"],
  ["HexGL 3D Racing", "Racing", "https://bkcore.com"],
  ["Universal Paperclips", "Puzzle", "https://decisionproblem.com"],
  ["2048 Doge", "Puzzle", "https://doge2048.com"],
  ["Particle Clicker", "Arcade", "https://cern.ch"],
  ["Radius Raid", "Action", "https://jackrugile.com"],
  ["Kittens Game", "Action", "https://kittensgame.com"],
  ["Cookie Clicker", "Arcade", "https://dashnet.org"],
  ["Lichess Puzzle", "Puzzle", "https://ornicar" + GH + "lila/"],
  ["Simon Says", "Puzzle", "https://wesbos" + GH + "JavaScript30/"],
  ["Hextris Turbo", "Puzzle", "https://hextris" + GH + "hextris/"],
  ["Clumsy Bird Pro", "Arcade", "https://ellisonleao" + GH + "clumsy-bird/"],
  ["Astray Labyrinth", "Puzzle", "https://wwwtyro" + GH + "Astray/"],
  ["Skyline Tower", "Arcade", "https://iamkun" + GH + "tower_game/"],
  ["Retro Pacman", "Arcade", "https://platzhersh" + GH + "pacman-canvas/"],
  ["Tetris Classic", "Puzzle", JAK + "javascript-tetris/"],
  ["Highway Outrun", "Racing", JAK + "javascript-racer/"],
  ["Super Breakout", "Arcade", JAK + "javascript-breakout/"],
  ["Cyber Pong", "Multiplayer", JAK + "javascript-pong/"],
  ["Viper Snake", "Arcade", JAK + "javascript-snakes/"],
  ["Cave BoulderDash", "Puzzle", JAK + "javascript-boulderdash/"],
  ["Dungeon Gauntlet", "Action", JAK + "javascript-gauntlet/"],
  ["Pixel Platformer", "Action", JAK + "javascript-tiny-platformer/"],
  ["Missile Defense", "Action", JAK + "javascript-missile-command/"],
  ["Neon Tron 2P", "Multiplayer", JAK + "javascript-tron/"],
  ["T-Rex Desert Run", "Arcade", "https://wayou" + GH + "t-rex-runner/"],
  ["Arena Onslaught", "Action", "https://lostdecade" + GH + "onslaught_arena/"],
  ["Galaxy Invasion", "Action", "https://cykod" + GH + "AlienInvasion/"],
  ["Candy Box Adventure", "Action", "https://candybox2" + GH],
  ["Space Empire", "Action", "https://sparticle999" + GH + "SpaceCompany/"],
  ["Trimps Quest", "Action", "https://trimps" + GH],
  ["Emoji Mines", "Puzzle", "https://muan" + GH + "emoji-minesweeper/"],
  ["Connect Four 2P", "Multiplayer", "https://kenrick95" + GH + "c4/"],
  ["Reversi Master", "Multiplayer", "https://kylepaulsen" + GH + "Othello/"],
  ["15 Sliding Puzzle", "Puzzle", "https://macek" + GH + "sliding-puzzle/"]
];

const CAT_THEMES = {
  Action: { c1: "#991b1b", c2: "#450a0a", accent: "#f87171", icon: "⚔️" },
  Puzzle: { c1: "#065f46", c2: "#022c22", accent: "#34d399", icon: "🧩" },
  Racing: { c1: "#1e40af", c2: "#172554", accent: "#60a5fa", icon: "🏎️" },
  Multiplayer: { c1: "#6b21a8", c2: "#3b0764", accent: "#c084fc", icon: "🌐" },
  Arcade: { c1: "#9a3412", c2: "#431407", accent: "#fb923c", icon: "🕹️" }
};

function buildGameCoverSVG(title, category, idx) {
  const theme = CAT_THEMES[category] || CAT_THEMES.Arcade;
  const angle = (idx * 37) % 360;
  const safeTitle = String(title).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return `
    <svg class="thumb-svg" viewBox="0 0 320 200" xmlns="http://w3.org">
      <defs>
        <linearGradient id="grad-${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${theme.c1}" />
          <stop offset="100%" stop-color="${theme.c2}" />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill="url(#grad-${idx})" />
      <circle cx="${60 + (idx * 29) % 200}" cy="${40 + (idx * 17) % 100}" r="70" fill="${theme.accent}" opacity="0.16" />
      <rect x="210" y="-20" width="90" height="240" transform="rotate(${angle} 255 100)" fill="#ffffff" opacity="0.06" />
      <text x="160" y="92" font-size="52" text-anchor="middle" dominant-baseline="middle">${theme.icon}</text>
      <text x="160" y="171" fill="#ffffff" font-family="Segoe UI, sans-serif" font-size="14" font-weight="700" text-anchor="middle">${safeTitle}</text>
    </svg>
  `;
}

const GAMES_DATA = ACTIVE_100_GAMES.map((item, idx) => {
  const gameTitle = item.at(0);
  const gameCat = item.at(1);
  const gameUrl = item.at(2);
  const theme = CAT_THEMES[gameCat] || CAT_THEMES.Arcade;
  return {
    id: idx + 1,
    title: gameTitle,
    category: gameCat,
    embedUrl: gameUrl,
    icon: theme.icon,
    coverSvg: buildGameCoverSVG(gameTitle, gameCat, idx)
  };
});
const AVATARS = ["👾", "🦊", "🤖", "🐱", "🐉", "👽", "🦄", "🐼", "🦁", "🐸", "👻", "🔥"];
const ACCENTS = ["#00e5ff", "#ff4081", "#00e676", "#ffab00", "#b388ff", "#ff5252"];

let userProfile = JSON.parse(localStorage.getItem("pixo_profile")) || {
  username: "Player1",
  avatar: "👾",
  accent: "#00e5ff",
  favorites: [],
  recent: []
};

let currentCategory = "All";
let activeGame = null;

function applyProfileUI() {
  document.documentElement.style.setProperty("--accent", userProfile.accent);
  document.getElementById("headerAvatar").textContent = userProfile.avatar;
  document.getElementById("headerUsername").textContent = userProfile.username;
}

function persistProfile() {
  localStorage.setItem("pixo_profile", JSON.stringify(userProfile));
  applyProfileUI();
}

function setCategory(category, btnEl) {
  currentCategory = category;
  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  btnEl.classList.add("active");
  showCatalog();
  filterGames();
}

function filterGames() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const grid = document.getElementById("gameGrid");

  const filtered = GAMES_DATA.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(query) || game.category.toLowerCase().includes(query);
    if (!matchesSearch) return false;
    if (currentCategory === "All") return true;
    if (currentCategory === "Favorites") return userProfile.favorites.includes(game.id);
    return game.category === currentCategory;
  });

  document.getElementById("sectionTitle").textContent =
    currentCategory === "Favorites" ? "My Favorite Games" : `${currentCategory} Games`;
  document.getElementById("gameCount").textContent = `${filtered.length} real games available`;

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-msg" style="grid-column:1/-1;">No games match your filter.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(game => `
    <div class="game-card" onclick="launchGame(${game.id})">
      <div class="thumb-box">
        ${game.coverSvg}
        <div class="hover-overlay">
          <span class="play-pill">▶ Play Now</span>
        </div>
      </div>
      <div class="card-info">
        <div class="card-title">${game.title}</div>
        <div class="card-cat">${game.category}</div>
      </div>
    </div>
  `).join("");
}

function launchGame(gameId) {
  const game = GAMES_DATA.find(g => g.id === gameId);
  if (!game) return;

  activeGame = game;
  document.getElementById("catalog-view").style.display = "none";
  document.getElementById("player-view").style.display = "flex";

  document.getElementById("playerTitle").textContent = game.title;
  document.getElementById("playerCategory").textContent = `${game.category} • Playing on Pixo`;

  const frame = document.getElementById("gameFrame");
  frame.removeAttribute("srcdoc");
  frame.src = game.embedUrl;

  const extBtn = document.getElementById("externalFallbackBtn");
  if (extBtn) {
    extBtn.style.display = "inline-flex";
    extBtn.href = game.embedUrl;
  }

  updateFavButton();

  userProfile.recent = [game.id, ...userProfile.recent.filter(id => id !== game.id)].slice(0, 8);
  persistProfile();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showCatalog() {
  const frame = document.getElementById("gameFrame");
  frame.removeAttribute("srcdoc");
  frame.src = "about:blank";
  document.getElementById("iframeShell").classList.remove("theater");
  document.getElementById("player-view").style.display = "none";
  document.getElementById("catalog-view").style.display = "block";
  activeGame = null;
  filterGames();
}

function toggleFavoriteCurrent() {
  if (!activeGame) return;
  const idx = userProfile.favorites.indexOf(activeGame.id);
  if (idx === -1) userProfile.favorites.push(activeGame.id);
  else userProfile.favorites.splice(idx, 1);
  persistProfile();
  updateFavButton();
}

function updateFavButton() {
  if (!activeGame) return;
  const isFav = userProfile.favorites.includes(activeGame.id);
  document.getElementById("favToggleBtn").textContent = isFav ? "❤️ Favorited" : "🤍 Favorite";
}

function toggleTheater() {
  document.getElementById("iframeShell").classList.toggle("theater");
}

function goFullscreen() {
  const shell = document.getElementById("iframeShell");
  if (shell.requestFullscreen) shell.requestFullscreen();
}

let tempAvatar = userProfile.avatar;
let tempAccent = userProfile.accent;

function openProfileModal() {
  tempAvatar = userProfile.avatar;
  tempAccent = userProfile.accent;
  document.getElementById("usernameInput").value = userProfile.username;

  document.getElementById("avatarPicker").innerHTML = AVATARS.map(av => `
    <div class="avatar-option ${av === tempAvatar ? 'selected' : ''}" onclick="selectAvatar('${av}', this)">${av}</div>
  `).join("");

  document.getElementById("colorPicker").innerHTML = ACCENTS.map(col => `
    <div class="color-swatch ${col === tempAccent ? 'selected' : ''}" style="background:${col}" onclick="selectColor('${col}', this)"></div>
  `).join("");

  const recentEl = document.getElementById("recentGamesList");
  if (userProfile.recent.length === 0) {
    recentEl.innerHTML = `<span class="empty-msg">No games played yet.</span>`;
  } else {
    recentEl.innerHTML = userProfile.recent.map(id => {
      const g = GAMES_DATA.find(item => item.id === id);
      return g ? `<span class="recent-chip" onclick="closeProfileModal(); launchGame(${g.id})">${g.icon} ${g.title}</span>` : "";
    }).join("");
  }

  document.getElementById("profileModal").classList.add("open");
}

function closeProfileModal() {
  document.getElementById("profileModal").classList.remove("open");
}

function selectAvatar(av, el) {
  tempAvatar = av;
  document.querySelectorAll(".avatar-option").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
}

function selectColor(col, el) {
  tempAccent = col;
  document.querySelectorAll(".color-swatch").forEach(s => s.classList.remove("selected"));
  el.classList.add("selected");
}

function saveProfile() {
  const nameVal = document.getElementById("usernameInput").value.trim();
  userProfile.username = nameVal || "Player1";
  userProfile.avatar = tempAvatar;
  userProfile.accent = tempAccent;
  persistProfile();
  closeProfileModal();
}

applyProfileUI();
filterGames();
