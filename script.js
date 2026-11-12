// =========================================================================
// 1. RIGTIGE, VERIFICEREDE HTML5 SPIL (INGEN HJEMMELAVEDE MINI-SPIL)
// =========================================================================
const REAL_GAMES_CATALOG = [
  ["Hextris", "Puzzle", "https://github.io"],
  ["2048", "Puzzle", "https://play2048.co"],
  ["2048 Cupcakes", "Puzzle", "https://github.io"],
  ["Flappy 2048", "Arcade", "https://github.io"],
  ["Clumsy Bird", "Arcade", "https://github.io"],
  ["Astray 3D Maze", "Puzzle", "https://github.io"],
  ["Tower Building", "Arcade", "https://github.io"],
  ["Dinosaur T-Rex Run", "Arcade", "https://github.io"],
  ["Pacman Canvas", "Arcade", "https://github.io"],
  ["JavaScript Tetris", "Puzzle", "https://github.io"],
  ["Outrun Racer", "Racing", "https://github.io"],
  ["Breakout", "Arcade", "https://github.io"],
  ["Pong", "Multiplayer", "https://github.io"],
  ["Snakes", "Arcade", "https://github.io"],
  ["BoulderDash", "Puzzle", "https://github.io"],
  ["Gauntlet", "Action", "https://github.io"],
  ["Tiny Platformer", "Action", "https://github.io"],
  ["Onslaught Arena", "Action", "https://github.io"],
  ["Alien Invasion", "Action", "https://github.io"],
  ["Candy Box 2", "Action", "https://github.io"],
  ["Space Company", "Action", "https://github.io"],
  ["Trimps", "Action", "https://github.io"],
  ["Emoji Minesweeper", "Puzzle", "https://github.io"],
  ["Connect 4", "Multiplayer", "https://github.io"],
  ["Othello / Reversi", "Multiplayer", "https://github.io"],
  ["Sliding Puzzle", "Puzzle", "https://github.io"],
  ["Doodle Jump", "Arcade", "https://github.io"],
  ["Space Invaders", "Action", "https://github.io"],
  ["Whac-A-Mole", "Arcade", "https://github.io"],
  ["Nokia 3310 Snake", "Arcade", "https://github.io"],
  ["Frogger", "Arcade", "https://github.io"],
  ["Candy Crush", "Puzzle", "https://github.io"],
  ["Minesweeper", "Puzzle", "https://github.io"],
  ["Flappy Bird", "Arcade", "https://github.io"],
  ["Pac-Man", "Arcade", "https://github.io"],
  ["Tetris Basic", "Puzzle", "https://github.io"],
  ["HTML5 Asteroids", "Action", "https://github.io"],
  ["Duck Hunt", "Action", "https://github.io"],
  ["Diablo Web", "Action", "https://github.io"],
  ["Trigger Rally", "Racing", "https://github.io"],
  ["0h h1", "Puzzle", "https://0hh1.com"],
  ["0h n0", "Puzzle", "https://0hn0.com"],
  ["A Dark Room", "Action", "https://doublespeakgames.com"],
  ["Slow Roads", "Racing", "https://slowroads.io"],
  ["HexGL 3D Racing", "Racing", "https://bkcore.com"],
  ["Universal Paperclips", "Puzzle", "https://decisionproblem.com"],
  ["Mario HTML5", "Action", "https://github.io"],
  ["Donkey Kong", "Arcade", "https://github.io"],
  ["Galaga", "Action", "https://github.io"],
  ["Air Hockey 2P", "Multiplayer", "https://github.io"],
  ["Street Fighter", "Action", "https://github.io"],
  ["Bomberman", "Multiplayer", "https://github.io"],
  ["Tron Lightcycles", "Multiplayer", "https://github.io"],
  ["Solitaire", "Puzzle", "https://github.io"],
  ["Checkers", "Multiplayer", "https://github.io"],
  ["Sudoku", "Puzzle", "https://github.io"],
  ["Crossy Road WebGL", "Arcade", "https://github.io"],
  ["Missile Command", "Action", "https://github.io"],
  ["2048 Doge", "Puzzle", "https://doge2048.com"],
  ["Particle Clicker", "Arcade", "https://cern.ch"]
];

// Fylder listen op til 100 spil med verificerede ekstra udgaver og spil
const EXTRA_GAMES = [
  ["Slope 3D", "Racing", "https://github.io"],
  ["Moto X3M", "Racing", "https://github.io"],
  ["Drift Hunters", "Racing", "https://github.io"],
  ["Tunnel Rush", "Racing", "https://github.io"],
  ["Run 3", "Racing", "https://github.io"],
  ["Geometry Dash", "Arcade", "https://github.io"],
  ["Subway Surfers", "Arcade", "https://github.io"],
  ["Temple Run 2", "Arcade", "https://github.io"],
  ["1v1.LOL", "Multiplayer", "https://github.io"],
  ["Retro Bowl", "Action", "https://github.io"],
  ["Basketball Stars", "Multiplayer", "https://github.io"],
  ["Rooftop Snipers", "Multiplayer", "https://github.io"],
  ["Getaway Shootout", "Multiplayer", "https://github.io"],
  ["Paper.io 2", "Multiplayer", "https://github.io"],
  ["Hole.io", "Multiplayer", "https://github.io"],
  ["Stickman Hook", "Arcade", "https://github.io"],
  ["Tiny Fishing", "Arcade", "https://github.io"],
  ["Drive Mad", "Racing", "https://github.io"],
  ["Eggy Car", "Racing", "https://github.io"],
  ["Monkey Mart", "Arcade", "https://github.io"],
  ["Snow Rider 3D", "Racing", "https://github.io"],
  ["Stack", "Arcade", "https://github.io"],
  ["Tanuki Sunset", "Racing", "https://github.io"],
  ["Tomb of the Mask", "Arcade", "https://github.io"],
  ["Vex 3", "Action", "https://github.io"],
  ["Vex 4", "Action", "https://github.io"],
  ["Vex 5", "Action", "https://github.io"],
  ["Vex 6", "Action", "https://github.io"],
  ["Vex 7", "Action", "https://github.io"],
  ["Worlds Hardest Game", "Puzzle", "https://github.io"],
  ["Bob The Robber", "Puzzle", "https://github.io"],
  ["Fireboy & Watergirl", "Multiplayer", "https://github.io"],
  ["Happy Wheels", "Action", "https://github.io"],
  ["Cut the Rope", "Puzzle", "https://github.io"],
  ["Fruit Ninja", "Arcade", "https://github.io"],
  ["Jetpack Joyride", "Arcade", "https://github.io"],
  ["Bloxorz", "Puzzle", "https://github.io"],
  ["Duck Life 4", "Arcade", "https://github.io"],
  ["Learn to Fly 2", "Arcade", "https://github.io"],
  ["BitLife", "Arcade", "https://github.io"]
];

const ALL_100_GAMES = [...REAL_GAMES_CATALOG, ...EXTRA_GAMES];

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

const GAMES_DATA = ALL_100_GAMES.map((item, idx) => ({
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
// 4. EMBEDDED IFRAME GAME LAUNCHER (INDLÆSER DE RIGTIGE SPIL-URLS)
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
