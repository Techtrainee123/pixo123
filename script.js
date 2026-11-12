// =========================================================================
// 1. 100 RIGTIGE HTML5 & WEBGL SPIL (MED SVG-FORBILLEDER)
// =========================================================================
const GH = ".github.io/";
const WGM = "https://webglmath" + GH;
const KUB = "https://kubowania" + GH;
const JAK = "https://jakesgordon" + GH;

const REAL_100_GAMES = [
  ["Subway Surfers", "Arcade", WGM + "subway-surfers/"],
  ["Slope", "Racing", WGM + "slope/"],
  ["Moto X3M", "Racing", WGM + "moto-x3m/"],
  ["Drift Hunters", "Racing", WGM + "drift-hunters/"],
  ["Madalin Stunt Cars 2", "Racing", WGM + "madalin-stunt-cars-2/"],
  ["Tunnel Rush", "Racing", WGM + "tunnel-rush/"],
  ["Run 3", "Racing", WGM + "run-3/"],
  ["Temple Run 2", "Arcade", WGM + "temple-run-2/"],
  ["Crossy Road", "Arcade", WGM + "crossy-road/"],
  ["Geometry Dash", "Arcade", WGM + "geometry-dash/"],
  ["1v1.LOL", "Multiplayer", WGM + "1v1-lol/"],
  ["Retro Bowl", "Action", WGM + "retro-bowl/"],
  ["Basketball Stars", "Multiplayer", WGM + "basketball-stars/"],
  ["Rooftop Snipers", "Multiplayer", WGM + "rooftop-snipers/"],
  ["Getaway Shootout", "Multiplayer", WGM + "getaway-shootout/"],
  ["Paper.io 2", "Multiplayer", WGM + "paper-io-2/"],
  ["Hole.io", "Multiplayer", WGM + "hole-io/"],
  ["Among Us", "Action", WGM + "among-us/"],
  ["Stickman Hook", "Arcade", WGM + "stickman-hook/"],
  ["Tiny Fishing", "Arcade", WGM + "tiny-fishing/"],
  ["Drive Mad", "Racing", WGM + "drive-mad/"],
  ["Eggy Car", "Racing", WGM + "eggy-car/"],
  ["Monkey Mart", "Arcade", WGM + "monkey-mart/"],
  ["Moto X3M Winter", "Racing", WGM + "moto-x3m-winter/"],
  ["Moto X3M Pool Party", "Racing", WGM + "moto-x3m-pool-party/"],
  ["Moto X3M Spooky Land", "Racing", WGM + "moto-x3m-spooky-land/"],
  ["Snow Rider 3D", "Racing", WGM + "snow-rider-3d/"],
  ["Stack", "Arcade", WGM + "stack/"],
  ["Stickman Climb", "Arcade", WGM + "stickman-climb/"],
  ["Superhot Prototype", "Action", WGM + "superhot/"],
  ["Tanuki Sunset", "Racing", WGM + "tanuki-sunset/"],
  ["Tomb of the Mask", "Arcade", WGM + "tomb-of-the-mask/"],
  ["Vex 3", "Action", WGM + "vex-3/"],
  ["Vex 4", "Action", WGM + "vex-4/"],
  ["Vex 5", "Action", WGM + "vex-5/"],
  ["Vex 6", "Action", WGM + "vex-6/"],
  ["Vex 7", "Action", WGM + "vex-7/"],
  ["Worlds Hardest Game", "Puzzle", WGM + "worlds-hardest-game/"],
  ["Worlds Hardest Game 2", "Puzzle", WGM + "worlds-hardest-game-2/"],
  ["Bob The Robber", "Puzzle", WGM + "bob-the-robber/"],
  ["Fireboy and Watergirl", "Multiplayer", WGM + "fireboy-and-watergirl/"],
  ["Happy Wheels", "Action", WGM + "happy-wheels/"],
  ["Cut the Rope", "Puzzle", WGM + "cut-the-rope/"],
  ["Fruit Ninja", "Arcade", WGM + "fruit-ninja/"],
  ["Doodle Jump", "Arcade", WGM + "doodle-jump/"],
  ["Jetpack Joyride", "Arcade", WGM + "jetpack-joyride/"],
  ["Bloxorz", "Puzzle", WGM + "bloxorz/"],
  ["Duck Life", "Arcade", WGM + "duck-life/"],
  ["Duck Life 4", "Arcade", WGM + "duck-life-4/"],
  ["Learn to Fly", "Arcade", WGM + "learn-to-fly/"],
  ["Learn to Fly 2", "Arcade", WGM + "learn-to-fly-2/"],
  ["Riddle School", "Puzzle", WGM + "riddle-school/"],
  ["BitLife", "Arcade", WGM + "bitlife/"],
  ["Cookie Clicker", "Arcade", WGM + "cookie-clicker/"],
  ["Smash Karts", "Multiplayer", WGM + "smash-karts/"],
  ["Shell Shockers", "Multiplayer", WGM + "shell-shockers/"],
  ["Krunker", "Multiplayer", WGM + "krunker/"],
  ["Agar.io", "Multiplayer", WGM + "agario/"],
  ["Slither.io", "Multiplayer", WGM + "slitherio/"],
  ["Among Us Online", "Multiplayer", WGM + "among-us-online/"],
  ["Hextris", "Puzzle", "https://hextris" + GH + "hextris/"],
  ["2048", "Puzzle", "https://play2048.co"],
  ["2048 Cupcakes", "Puzzle", "https://0x0800" + GH + "2048-CUPCAKES/"],
  ["Flappy 2048", "Arcade", "https://hczhcz" + GH + "Flappy-2048/"],
  ["Clumsy Bird", "Arcade", "https://ellisonleao" + GH + "clumsy-bird/"],
  ["Astray 3D Maze", "Puzzle", "https://wwwtyro" + GH + "Astray/"],
  ["Tower Building", "Arcade", "https://iamkun" + GH + "tower_game/"],
  ["Dinosaur T-Rex Run", "Arcade", "https://wayou" + GH + "t-rex-runner/"],
  ["Pacman Canvas", "Arcade", "https://platzhersh" + GH + "pacman-canvas/"],
  ["JavaScript Tetris", "Puzzle", JAK + "javascript-tetris/"],
  ["Outrun Racer", "Racing", JAK + "javascript-racer/"],
  ["Breakout", "Arcade", JAK + "javascript-breakout/"],
  ["Pong", "Multiplayer", JAK + "javascript-pong/"],
  ["Snakes", "Arcade", JAK + "javascript-snakes/"],
  ["BoulderDash", "Puzzle", JAK + "javascript-boulderdash/"],
  ["Gauntlet", "Action", JAK + "javascript-gauntlet/"],
  ["Tiny Platformer", "Action", JAK + "javascript-tiny-platformer/"],
  ["Onslaught Arena", "Action", "https://lostdecade" + GH + "onslaught_arena/"],
  ["Alien Invasion", "Action", "https://cykod" + GH + "AlienInvasion/"],
  ["Candy Box 2", "Action", "https://candybox2" + GH],
  ["Space Company", "Action", "https://sparticle999" + GH + "SpaceCompany/"],
  ["Trimps", "Action", "https://trimps" + GH],
  ["Emoji Minesweeper", "Puzzle", "https://muan" + GH + "emoji-minesweeper/"],
  ["Connect 4", "Multiplayer", "https://kenrick95" + GH + "c4/"],
  ["Othello / Reversi", "Multiplayer", "https://kylepaulsen" + GH + "Othello/"],
  ["Sliding Puzzle", "Puzzle", "https://macek" + GH + "sliding-puzzle/"],
  ["Doodle Jump JS", "Arcade", KUB + "Doodle-Jump/"],
  ["Space Invaders", "Action", KUB + "space-invaders/"],
  ["Whac-A-Mole", "Arcade", KUB + "whac-a-mole/"],
  ["Nokia 3310 Snake", "Arcade", KUB + "Nokia3310-Snake/"],
  ["Frogger", "Arcade", KUB + "Frogger/"],
  ["Candy Crush", "Puzzle", KUB + "candy-crush/"],
  ["Minesweeper", "Puzzle", KUB + "minesweeper/"],
  ["Flappy Bird", "Arcade", KUB + "flappy-bird/"],
  ["Pac-Man", "Arcade", KUB + "pac-man/"],
  ["Tetris Basic", "Puzzle", KUB + "Tetris-Basic/"],
  ["HTML5 Asteroids", "Action", "https://dmcinnes" + GH + "HTML5-Asteroids/"],
  ["Duck Hunt", "Action", "https://matt-surabian" + GH + "DuckHunt-JS/"],
  ["Diablo Web", "Action", "https://d07riv" + GH + "diabloweb/"],
  ["Trigger Rally", "Racing", "https://jareiko" + GH + "triggerrally/"]
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
  const safeTitle = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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

const GAMES_DATA = REAL_100_GAMES.map((item, idx) => ({
  id: idx + 1,
  title: item[0],
  category: item[1],
  embedUrl: item[2],
  icon: (CAT_THEMES[item[1]] || CAT_THEMES.Arcade).icon,
  coverSvg: buildGameCoverSVG(item[0], item[1], idx)
}));
// =========================================================================
// 2. PROFIL & LOCALSTORAGE
// =========================================================================
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

// =========================================================================
// 3. KATALOG & SØGNING
// =========================================================================
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

// =========================================================================
// 4. SPILAFSPILLER (INDLÆSER RIGTIGE SPIL DIREKTE I IFRAME)
// =========================================================================
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

// =========================================================================
// 5. PROFIL MODAL
// =========================================================================
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
