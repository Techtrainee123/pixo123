const GH = ".github.io/";
const UBG = "https://ubg77" + GH;
const TBG = "https://tbg95" + GH;
const KUB = "https://kubowania" + GH;

const ACTIVE_100_GAMES = [
  ["Slope", "Racing", UBG + "slope/"],
  ["Drift Hunters", "Racing", UBG + "drift-hunters/"],
  ["Moto X3M", "Racing", UBG + "moto-x3m/"],
  ["1v1.LOL", "Multiplayer", UBG + "1v1-lol/"],
  ["Madalin Stunt Cars 2", "Racing", UBG + "madalin-stunt-cars-2/"],
  ["Tunnel Rush", "Racing", UBG + "tunnel-rush/"],
  ["Run 3", "Racing", UBG + "run-3/"],
  ["Subway Surfers", "Arcade", UBG + "subway-surfers/"],
  ["Temple Run 2", "Arcade", UBG + "temple-run-2/"],
  ["Geometry Dash", "Arcade", UBG + "geometry-dash/"],
  ["Retro Bowl", "Action", UBG + "retro-bowl/"],
  ["Basketball Stars", "Multiplayer", UBG + "basketball-stars/"],
  ["Rooftop Snipers", "Multiplayer", UBG + "rooftop-snipers/"],
  ["Getaway Shootout", "Multiplayer", UBG + "getaway-shootout/"],
  ["Paper.io 2", "Multiplayer", UBG + "paper-io-2/"],
  ["Hole.io", "Multiplayer", UBG + "hole-io/"],
  ["Stickman Hook", "Arcade", UBG + "stickman-hook/"],
  ["Drive Mad", "Racing", UBG + "drive-mad/"],
  ["Eggy Car", "Racing", UBG + "eggy-car/"],
  ["Snow Rider 3D", "Racing", UBG + "snow-rider-3d/"],
  ["Tanuki Sunset", "Racing", UBG + "tanuki-sunset/"],
  ["Tomb of the Mask", "Arcade", UBG + "tomb-of-the-mask/"],
  ["Vex 5", "Action", UBG + "vex-5/"],
  ["Vex 6", "Action", UBG + "vex-6/"],
  ["Vex 7", "Action", UBG + "vex-7/"],
  ["Fireboy & Watergirl", "Multiplayer", UBG + "fireboy-and-watergirl/"],
  ["Happy Wheels", "Action", UBG + "happy-wheels/"],
  ["Jetpack Joyride", "Arcade", UBG + "jetpack-joyride/"],
  ["Crossy Road", "Arcade", UBG + "crossy-road/"],
  ["Monkey Mart", "Arcade", UBG + "monkey-mart/"],
  ["Smash Karts", "Multiplayer", TBG + "smash-karts/"],
  ["Shell Shockers", "Multiplayer", TBG + "shell-shockers/"],
  ["Krunker", "Multiplayer", TBG + "krunker/"],
  ["Moto X3M Winter", "Racing", TBG + "moto-x3m-winter/"],
  ["Moto X3M Pool Party", "Racing", TBG + "moto-x3m-pool-party/"],
  ["Moto X3M Spooky Land", "Racing", TBG + "moto-x3m-spooky-land/"],
  ["Superhot", "Action", TBG + "superhot/"],
  ["BitLife", "Arcade", TBG + "bitlife/"],
  ["Cookie Clicker", "Arcade", TBG + "cookie-clicker/"],
  ["Tiny Fishing", "Arcade", TBG + "tiny-fishing/"],
  ["Stack", "Arcade", TBG + "stack/"],
  ["Stickman Climb", "Arcade", TBG + "stickman-climb/"],
  ["Worlds Hardest Game", "Puzzle", TBG + "worlds-hardest-game/"],
  ["Bob The Robber", "Puzzle", TBG + "bob-the-robber/"],
  ["Cut the Rope", "Puzzle", TBG + "cut-the-rope/"],
  ["Fruit Ninja", "Arcade", TBG + "fruit-ninja/"],
  ["Doodle Jump", "Arcade", TBG + "doodle-jump/"],
  ["Bloxorz", "Puzzle", TBG + "bloxorz/"],
  ["Duck Life 4", "Arcade", TBG + "duck-life-4/"],
  ["Learn to Fly 2", "Arcade", TBG + "learn-to-fly-2/"],
  ["Riddle School", "Puzzle", TBG + "riddle-school/"],
  ["Among Us Online", "Multiplayer", TBG + "among-us/"],
  ["Agar.io", "Multiplayer", TBG + "agario/"],
  ["Slither.io", "Multiplayer", TBG + "slitherio/"],
  ["Cluster Rush", "Action", TBG + "cluster-rush/"],
  ["Death Run 3D", "Racing", TBG + "death-run-3d/"],
  ["eFootball / Soccer Skills", "Multiplayer", TBG + "soccer-skills-euro-cup/"],
  ["Boxing Random", "Multiplayer", TBG + "boxing-random/"],
  ["Soccer Random", "Multiplayer", TBG + "soccer-random/"],
  ["Volley Random", "Multiplayer", TBG + "volley-random/"],
  ["Basket Random", "Multiplayer", TBG + "basket-random/"],
  ["Funny Shooter 2", "Action", TBG + "funny-shooter-2/"],
  ["Time Shooter 2", "Action", TBG + "time-shooter-2/"],
  ["Time Shooter 3", "Action", TBG + "time-shooter-3/"],
  ["Drift Boss", "Racing", TBG + "drift-boss/"],
  ["Parking Fury 3D", "Racing", TBG + "parking-fury-3d/"],
  ["Burnout Drift", "Racing", TBG + "burnout-drift/"],
  ["Earn to Die", "Racing", TBG + "earn-to-die/"],
  ["Rocket Soccer Derby", "Racing", TBG + "rocket-soccer-derby/"],
  ["Iron Snout", "Action", TBG + "iron-snout/"],
  ["Bacon May Die", "Action", TBG + "bacon-may-die/"],
  ["Stick Merge", "Action", TBG + "stick-merge/"],
  ["Gun Mayhem 2", "Multiplayer", TBG + "gun-mayhem-2/"],
  ["Gun Mayhem Redux", "Multiplayer", TBG + "gun-mayhem-redux/"],
  ["Super Smash Flash", "Action", TBG + "super-smash-flash/"],
  ["Bad Ice Cream", "Puzzle", TBG + "bad-ice-cream/"],
  ["Bad Ice Cream 2", "Puzzle", TBG + "bad-ice-cream-2/"],
  ["Red Ball 4", "Arcade", TBG + "red-ball-4/"],
  ["Snail Bob", "Puzzle", TBG + "snail-bob/"],
  ["Papa's Pizzeria", "Arcade", TBG + "papas-pizzeria/"],
  ["Papa's Burgeria", "Arcade", TBG + "papas-burgeria/"],
  ["Papa's Freezeria", "Arcade", TBG + "papas-freezeria/"],
  ["OvO", "Action", TBG + "ovo/"],
  ["Johnny Trigger", "Action", TBG + "johnny-trigger/"],
  ["Mr Bullet", "Puzzle", TBG + "mr-bullet/"],
  ["Draw Climber", "Racing", TBG + "draw-climber/"],
  ["Aquapark.io", "Racing", TBG + "aquapark-io/"],
  ["Crowd City", "Arcade", TBG + "crowd-city/"],
  ["Archery World Tour", "Action", TBG + "archery-world-tour/"],
  ["8 Ball Pool", "Multiplayer", TBG + "8-ball-pool/"],
  ["Table Tennis World Tour", "Multiplayer", TBG + "table-tennis-world-tour/"],
  ["HexGL 3D Racing", "Racing", "https://bkcore.com"],
  ["Slow Roads 3D", "Racing", "https://slowroads.io"],
  ["Trigger Rally 3D", "Racing", "https://jareiko" + GH + "triggerrally/"],
  ["Diablo Web", "Action", "https://d07riv" + GH + "diabloweb/"],
  ["Mario HTML5", "Action", "https://robertkleffner" + GH + "mariohtml5/"],
  ["Hextris", "Puzzle", "https://hextris" + GH + "hextris/"],
  ["Astray 3D Maze", "Puzzle", "https://wwwtyro" + GH + "Astray/"],
  ["Doodle Jump JS", "Arcade", KUB + "Doodle-Jump/"],
  ["Space Invaders", "Action", KUB + "space-invaders/"]
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
