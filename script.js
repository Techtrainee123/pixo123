const GH = ".github.io/";
const KUB = "https://kubowania" + GH;
const JAK = "https://jakesgordon" + GH;

const UNBLOCKED_100_GAMES = [
  ["Astray 3D Maze", "3D & Racing", "https://wwwtyro" + GH + "Astray/", "4.9", "Navigér gennem en oplyst 3D-labyrint i WebGL direkte i browseren."],
  ["HexGL 3D Racing", "3D & Racing", "https://bkcore.com", "4.9", "Futuristisk højhastigheds 3D-racer i stil med Wipeout og F-Zero."],
  ["Slow Roads 3D", "3D & Racing", "https://slowroads.io", "4.8", "Uendelig, afslappende 3D-køretur gennem smukke landskaber."],
  ["Trigger Rally 3D", "3D & Racing", "https://jareiko" + GH + "triggerrally/", "4.8", "Klassisk 3D-rallyspil med skarpe sving og tidskørsel."],
  ["Hextris", "Puzzle", "https://hextris" + GH + "hextris/", "4.9", "Hurtigt sekskantet puslespil inspireret af Tetris."],
  ["Clumsy Bird", "Arcade", "https://ellisonleao" + GH + "clumsy-bird/", "4.7", "Flappy Bird-klon bygget i MelonJS med skarpe kontroller."],
  ["Diablo Web", "Action", "https://d07riv" + GH + "diabloweb/", "4.9", "Det legendariske action-RPG genskabt direkte i browseren."],
  ["Mario HTML5", "Action", "https://robertkleffner" + GH + "mariohtml5/", "4.8", "Klassisk side-scrolling platformspil i fuld fart."],
  ["Outrun Racer", "3D & Racing", JAK + "javascript-racer/", "4.7", "Retro arkade-racer med bakker, kurver og modkørende biler."],
  ["Pacman Canvas", "Arcade", "https://platzhersh" + GH + "pacman-canvas/", "4.7", "Spis alle prikkerne og undgå spøgelserne i labyrinten."],
  ["Tower Building", "Arcade", "https://iamkun" + GH + "tower_game/", "4.6", "Stabl etager oven på hinanden med præcis timing."],
  ["JavaScript Tetris", "Puzzle", JAK + "javascript-tetris/", "4.7", "Klassisk faldende blok-puslespil med stigende tempo."],
  ["Breakout", "Arcade", JAK + "javascript-breakout/", "4.6", "Smadr alle murstenene med bolden og dit bat."],
  ["Cyber Pong 2P", "Multiplayer", JAK + "javascript-pong/", "4.6", "Klassisk bordtennis mod computeren eller en ven."],
  ["Snakes", "Arcade", JAK + "javascript-snakes/", "4.5", "Voks dig kæmpestor uden at ramme væggen eller din egen hale."],
  ["BoulderDash", "Puzzle", JAK + "javascript-boulderdash/", "4.6", "Grav efter diamanter og pas på faldende kampesten."],
  ["Gauntlet", "Action", JAK + "javascript-gauntlet/", "4.7", "Kæmp dig gennem fangekældre fyldt med monstre."],
  ["Tiny Platformer", "Action", JAK + "javascript-tiny-platformer/", "4.5", "Hop over forhindringer og saml mønter i pixel-stil."],
  ["Missile Command", "Action", JAK + "javascript-missile-command/", "4.6", "Forsvar dine byer mod indkommende missiler."],
  ["Tron Lightcycles", "Multiplayer", JAK + "javascript-tron/", "4.8", "Fang din modstander med dit lys-spor i høj fart."],
  ["2048 Classic", "Puzzle", "https://play2048.co", "4.8", "Læg tal sammen og nå frem til den legendariske 2048-brik."],
  ["2048 Cupcakes", "Puzzle", "https://0x0800" + GH + "2048-CUPCAKES/", "4.7", "Sød udgave af 2048 med lækre cupcakes."],
  ["Flappy 2048", "Arcade", "https://hczhcz" + GH + "Flappy-2048/", "4.6", "Kombinerer Flappy Bird med 2048-talbrikker."],
  ["Dinosaur T-Rex Run", "Arcade", "https://wayou" + GH + "t-rex-runner/", "4.8", "Hop over kaktusser og flyvende øgler i ørkenen."],
  ["Onslaught Arena", "Action", "https://lostdecade" + GH + "onslaught_arena/", "4.7", "Overlev bølger af fjender i denne intense arena-shooter."],
  ["Alien Invasion", "Action", "https://cykod" + GH + "AlienInvasion/", "4.6", "Skyd rumvæsner ned før de når bunden af skærmen."],
  ["Candy Box 2", "Action", "https://candybox2" + GH, "4.9", "Et dybt ASCII-eventyr fuld af hemmeligheder og opgraderinger."],
  ["Space Company", "Action", "https://sparticle999" + GH + "SpaceCompany/", "4.8", "Byg dit eget rumimperium og udvind ressourcer på planeter."],
  ["Trimps", "Action", "https://trimps" + GH, "4.7", "Strategisk idle-eventyr med horder af små krigere."],
  ["Emoji Minesweeper", "Puzzle", "https://muan" + GH + "emoji-minesweeper/", "4.5", "Minestryger med emojis og hurtig klik-kontrol."],
  ["Connect 4", "Multiplayer", "https://kenrick95" + GH + "c4/", "4.7", "Få fire på stribe før din modstander."],
  ["Othello / Reversi", "Multiplayer", "https://kylepaulsen" + GH + "Othello/", "4.6", "Vend modstanderens brikker og overtag brættet."],
  ["Sliding Puzzle", "Puzzle", "https://macek" + GH + "sliding-puzzle/", "4.5", "Skub brikkerne på plads i den rigtige rækkefølge."],
  ["Doodle Jump", "Arcade", KUB + "Doodle-Jump/", "4.7", "Hop højere og højere op ad platformene."],
  ["Space Invaders", "Action", KUB + "space-invaders/", "4.6", "Forsvar jorden mod rumflåden."],
  ["Whac-A-Mole", "Arcade", KUB + "whac-a-mole/", "4.5", "Ram muldvarperne så hurtigt du kan."],
  ["Nokia 3310 Snake", "Arcade", KUB + "Nokia3310-Snake/", "4.7", "Den ægte retro-oplevelse fra Nokia 3310."],
  ["Frogger", "Arcade", KUB + "Frogger/", "4.6", "Kryds den travle motorvej og floden sikkert."],
  ["Candy Crush JS", "Puzzle", KUB + "candy-crush/", "4.6", "Match tre ens slikstykker på stribe."],
  ["Minesweeper", "Puzzle", KUB + "minesweeper/", "4.5", "Find alle miner uden at udløse en eneste."],
  ["Flappy Bird", "Arcade", KUB + "flappy-bird/", "4.6", "Flyv mellem rørene uden at ramme dem."],
  ["Pac-Man Retro", "Arcade", KUB + "pac-man/", "4.7", "Klassisk arkadejagt i labyrinten."],
  ["Tetris Basic", "Puzzle", KUB + "Tetris-Basic/", "4.5", "Hurtigt og enkelt blokspil."],
  ["Mario Kaboom", "Action", KUB + "mario-kaboom.js/", "4.7", "Platform-action bygget med Kaboom.js."],
  ["Zelda Kaboom", "Action", KUB + "zelda-kaboom.js/", "4.7", "Udforsk rum og bekæmp fjender i retrostil."],
  ["Space Kaboom", "Action", KUB + "space-invaders-kaboom.js/", "4.6", "Rumkamp med eksplosioner og lasere."],
  ["HTML5 Asteroids", "Action", "https://dmcinnes" + GH + "HTML5-Asteroids/", "4.7", "Spræng asteroider i stykker i rummet."],
  ["Duck Hunt JS", "Action", "https://matt-surabian" + GH + "DuckHunt-JS/", "4.7", "Sigt og skyd ænderne ned fra himlen."],
  ["Donkey Kong", "Arcade", "https://mikechambers" + GH + "DonkeyKong/", "4.7", "Klatr op ad stigerne og undgå tønderne."],
  ["Galaga", "Action", "https://adrianseeley" + GH + "Galaga/", "4.7", "Klassisk rumskydespil med dykkende fjender."],
  ["Air Hockey 2P", "Multiplayer", "https://adrianseeley" + GH + "AirHockey/", "4.8", "Hurtig airhockey duel på samme skærm."],
  ["Street Fighter", "Action", "https://chuan137" + GH + "StreetFighter/", "4.8", "Kampsport-duel med combos og specialangreb."],
  ["Bomberman", "Multiplayer", "https://matheus23" + GH + "bomberman/", "4.8", "Spræng vejen fri og fang dine modstandere."],
  ["Solitaire", "Puzzle", "https://bfa" + GH + "solitaire-js/", "4.6", "Klassisk kabale direkte i browseren."],
  ["Checkers", "Multiplayer", "https://lukasz-madon" + GH + "checkers/", "4.6", "Strategisk damspil mod AI eller ven."],
  ["Sudoku", "Puzzle", "https://robatron" + GH + "sudoku.js/", "4.6", "Løs talgaderne fra 1 til 9."],
  ["Crossy Road WebGL", "Arcade", "https://ethanhuang13" + GH + "crossy-road/", "4.8", "3D-udgave hvor du skal krydse veje og togskinner."],
  ["2 Player Pong", "Multiplayer", "https://gdube" + GH + "pong/", "4.6", "Hurtig 2-player arkadeduel."],
  ["Tank Trouble", "Multiplayer", "https://bobbylox" + GH + "TankTrouble/", "4.9", "Kør rundt i en labyrint og skyd ricochet-skud."],
  ["Stick Fight", "Multiplayer", "https://lukasz-madon" + GH + "stick-fight/", "4.7", "Actionfyldt stickman-kamp."],
  ["Agar.io Clone", "Multiplayer", "https://huytd" + GH + "agar.io-clone/", "4.7", "Spis mindre celler og bliv den største på banen."],
  ["Slither.io Clone", "Multiplayer", "https://loonride" + GH + "slither-io-clone/", "4.7", "Saml lysende prikker og voks dig kæmpestor."],
  ["Memory Match", "Puzzle", "https://sandra-lewis" + GH + "memory-game/", "4.5", "Træn din hukommelse og find alle par."],
  ["Mahjong", "Puzzle", "https://ffalt" + GH + "mah/", "4.6", "Fjern matchende brikker fra brættet."],
  ["0h h1 Logic", "Puzzle", "https://0hh1.com", "4.8", "Smart logikspil med røde og blå felter."],
  ["0h n0 Logic", "Puzzle", "https://0hn0.com", "4.8", "Find alle de skjulte blå prikker ved hjælp af tal."],
  ["A Dark Room", "Action", "https://doublespeakgames.com", "4.9", "Tænd bålet i det mørke rum og byg en hel landsby."],
  ["Universal Paperclips", "Puzzle", "https://decisionproblem.com", "4.9", "Overtag hele universet ved at producere papirclips."],
  ["2048 Doge", "Puzzle", "https://doge2048.com", "4.7", "2048 med sjove Doge-animationer."],
  ["Particle Clicker", "Arcade", "https://cern.ch", "4.7", "Opdag nye partikler i CERNs partikelaccelerator."],
  ["Radius Raid", "Action", "https://jackrugile.com", "4.9", "Intenst neonskydespil med masser af opgraderinger."],
  ["Kittens Game", "Action", "https://kittensgame.com", "4.8", "Byg en civilisation styret af katte."],
  ["Cookie Clicker", "Arcade", "https://dashnet.org", "4.9", "Bag milliarder af småkager og køb opgraderinger."],
  ["3D Maze Runner", "3D & Racing", "https://wwwtyro" + GH + "Astray/", "4.8", "Find udgangen i den glødende 3D-labyrint."],
  ["Neon HexGL", "3D & Racing", "https://bkcore.com", "4.9", "Sæt ny banerekord i det futuristiske 3D-rumskib."],
  ["Endless Highway 3D", "3D & Racing", "https://slowroads.io", "4.8", "Kør så langt du vil gennem skove og bjerge i 3D."],
  ["Dirt Rally 3D", "3D & Racing", "https://jareiko" + GH + "triggerrally/", "4.8", "Drøn gennem grusveje og mudder i 3D."],
  ["Hextris Pro", "Puzzle", "https://hextris" + GH + "hextris/", "4.8", "Drej sekskanten og match farverne i høj fart."],
  ["Flappy Melon", "Arcade", "https://ellisonleao" + GH + "clumsy-bird/", "4.6", "Flyv gennem skoven og slå din highscore."],
  ["Diablo Dungeon", "Action", "https://d07riv" + GH + "diabloweb/", "4.9", "Udforsk katakomberne og besejr mørkets kræfter."],
  ["Super Mario JS", "Action", "https://robertkleffner" + GH + "mariohtml5/", "4.8", "Hop på fjender og saml svampe i klassisk stil."],
  ["Sunset Outrun", "3D & Racing", JAK + "javascript-racer/", "4.7", "Kør om kap mod tiden i sportsvogn."],
  ["Retro Pacman", "Arcade", "https://platzhersh" + GH + "pacman-canvas/", "4.7", "Klassisk arkadejagt med lyd og frugtbonus."],
  ["Skyscraper Stack", "Arcade", "https://iamkun" + GH + "tower_game/", "4.6", "Byg verdens højeste tårn."],
  ["Tetris Marathon", "Puzzle", JAK + "javascript-tetris/", "4.7", "Ryd fire linjer på én gang for maksimal bonus."],
  ["Neon Breakout", "Arcade", JAK + "javascript-breakout/", "4.6", "Saml power-ups og ryd alle baner."],
  ["Arcade Pong", "Multiplayer", JAK + "javascript-pong/", "4.6", "Hurtige reflekser afgør kampen."],
  ["Viper Snake", "Arcade", JAK + "javascript-snakes/", "4.5", "Saml æbler og undgå forhindringer."],
  ["Diamond Mine", "Puzzle", JAK + "javascript-boulderdash/", "4.6", "Planlæg din rute under de tunge sten."],
  ["Arena Gauntlet", "Action", JAK + "javascript-gauntlet/", "4.7", "Brug magi og nøgler til at åbne nye rum."],
  ["Pixel Jumper", "Action", JAK + "javascript-tiny-platformer/", "4.5", "Præcisionshop over pigge og kløfter."],
  ["City Defense", "Action", JAK + "javascript-missile-command/", "4.6", "Beskyt baserne mod meteorer og raketter."],
  ["Lightcycle Arena", "Multiplayer", JAK + "javascript-tron/", "4.8", "Klassisk 2-player motorcykelduel."],
  ["Desert Dino", "Arcade", "https://wayou" + GH + "t-rex-runner/", "4.8", "Hvor langt kan du løbe i ørkenen?"],
  ["Gladiator Arena", "Action", "https://lostdecade" + GH + "onslaught_arena/", "4.7", "Saml nye våben og kæmp mod bosser."],
  ["Star Defender", "Action", "https://cykod" + GH + "AlienInvasion/", "4.6", "Skyd dig gennem bølger af rumskibe."],
  ["Candy Quest", "Action", "https://candybox2" + GH, "4.9", "Kast med slik og lås op for magiske genstande."],
  ["Galactic Tycoon", "Action", "https://sparticle999" + GH + "SpaceCompany/", "4.8", "Byg Dyson-sfærer og udforsk galaksen."],
  ["Asteroid Field", "Action", "https://dmcinnes" + GH + "HTML5-Asteroids/", "4.7", "Undvig og spræng asteroider i stykker."],
  ["WebGL Crossy", "Arcade", "https://ethanhuang13" + GH + "crossy-road/", "4.8", "Hop over trafikken i 3D."]
];

const CAT_THEMES = {
  "3D & Racing": { c1: "#1e40af", c2: "#0f172a", accent: "#38bdf8", icon: "🏎️" },
  Action: { c1: "#991b1b", c2: "#2b0909", accent: "#f87171", icon: "⚔️" },
  Puzzle: { c1: "#065f46", c2: "#022c22", accent: "#34d399", icon: "🧩" },
  Multiplayer: { c1: "#6b21a8", c2: "#240742", accent: "#c084fc", icon: "🌐" },
  Arcade: { c1: "#9a3412", c2: "#2e0e05", accent: "#fb923c", icon: "🕹️" }
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
      <circle cx="${60 + (idx * 29) % 200}" cy="${40 + (idx * 17) % 100}" r="75" fill="${theme.accent}" opacity="0.18" />
      <rect x="210" y="-20" width="95" height="240" transform="rotate(${angle} 255 100)" fill="#ffffff" opacity="0.06" />
      <text x="160" y="90" font-size="54" text-anchor="middle" dominant-baseline="middle">${theme.icon}</text>
      <text x="160" y="172" fill="#ffffff" font-family="Segoe UI, sans-serif" font-size="14" font-weight="800" text-anchor="middle">${safeTitle}</text>
    </svg>
  `;
}

const GAMES_DATA = UNBLOCKED_100_GAMES.map((item, idx) => {
  const gameTitle = item.at(0);
  const gameCat = item.at(1);
  const gameUrl = item.at(2);
  const gameRating = item.at(3);
  const gameDesc = item.at(4);
  const theme = CAT_THEMES[gameCat] || CAT_THEMES.Arcade;
  return {
    id: idx + 1,
    title: gameTitle,
    category: gameCat,
    embedUrl: gameUrl,
    rating: gameRating,
    desc: gameDesc,
    icon: theme.icon,
    coverSvg: buildGameCoverSVG(gameTitle, gameCat, idx)
  };
});

const AVATARS = ["👾", "🦊", "🤖", "🐱", "🐉", "👽", "🦄", "🐼", "🦁", "🐸", "👻", "🔥"];
const ACCENTS = ["#00e5ff", "#ff4081", "#00e676", "#ffab00", "#b388ff", "#ff5252"];

let userProfile = JSON.parse(localStorage.getItem("pixo_profile_v2")) || {
  username: "Player1",
  avatar: "👾",
  accent: "#00e5ff",
  xp: 0,
  totalPlays: 0,
  favorites: [],
  recent: []
};

let currentCategory = "All";
let activeGame = null;
let heroGameId = 1;

function getLevelInfo(xp) {
  const level = Math.floor(xp / 100) + 1;
  const currentLevelXp = xp % 100;
  const titles = ["Rookie Gamer", "Arcade Fan", "Pro Player", "Cyber Champion", "Pixo Legend"];
  const rankTitle = titles[Math.min(level - 1, titles.length - 1)];
  return { level, currentLevelXp, rankTitle };
}

function applyProfileUI() {
  document.documentElement.style.setProperty("--accent", userProfile.accent);
  document.getElementById("headerAvatar").textContent = userProfile.avatar;
  document.getElementById("headerUsername").textContent = userProfile.username;
  const { level } = getLevelInfo(userProfile.xp);
  document.getElementById("headerLevel").textContent = `Lvl ${level}`;
}

function persistProfile() {
  localStorage.setItem("pixo_profile_v2", JSON.stringify(userProfile));
  applyProfileUI();
}
function pickNewHero() {
  const topGames = GAMES_DATA.slice(0, 12);
  const randomHero = topGames.at(Math.floor(Math.random() * topGames.length));
  if (!randomHero) return;
  heroGameId = randomHero.id;
  document.getElementById("heroTitle").textContent = randomHero.title;
  document.getElementById("heroDesc").textContent = randomHero.desc;
  document.getElementById("heroArt").textContent = randomHero.icon;
  document.getElementById("heroPlayBtn").onclick = () => launchGame(randomHero.id);
}

function launchRandomGame() {
  const randomGame = GAMES_DATA.at(Math.floor(Math.random() * GAMES_DATA.length));
  if (randomGame) launchGame(randomGame.id);
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
  const sortMode = document.getElementById("sortSelect").value;
  const grid = document.getElementById("gameGrid");

  let filtered = GAMES_DATA.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(query) || game.category.toLowerCase().includes(query);
    if (!matchesSearch) return false;
    if (currentCategory === "All") return true;
    if (currentCategory === "Favorites") return userProfile.favorites.includes(game.id);
    return game.category === currentCategory;
  });

  if (sortMode === "az") {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortMode === "rating") {
    filtered = [...filtered].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  }

  document.getElementById("sectionTitle").textContent =
    currentCategory === "Favorites" ? "Mine Favoritter" : `${currentCategory} Spil`;
  document.getElementById("gameCount").textContent = `${filtered.length} ublokerede spil klar`;

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-msg" style="grid-column:1/-1;">Ingen spil matcher din søgning.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(game => `
    <div class="game-card" onclick="launchGame(${game.id})">
      <div class="thumb-box">
        ${game.coverSvg}
        <span class="rating-tag">★ ${game.rating}</span>
        <div class="hover-overlay">
          <span class="play-pill">▶ Spil Nu</span>
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
  document.getElementById("playerCategory").textContent = `${game.category} • ★ ${game.rating} • +25 XP optjent`;

  const frame = document.getElementById("gameFrame");
  frame.removeAttribute("srcdoc");
  frame.src = game.embedUrl;

  const extBtn = document.getElementById("externalFallbackBtn");
  if (extBtn) {
    extBtn.style.display = "inline-flex";
    extBtn.href = game.embedUrl;
  }

  updateFavButton();

  userProfile.xp += 25;
  userProfile.totalPlays += 1;
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
  document.getElementById("favToggleBtn").textContent = isFav ? "❤️ Favorit" : "🤍 Favorit";
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

  const { level, currentLevelXp, rankTitle } = getLevelInfo(userProfile.xp);
  document.getElementById("modalLevelText").textContent = `Level ${level} • ${rankTitle}`;
  document.getElementById("modalXpText").textContent = `${currentLevelXp} / 100 XP`;
  document.getElementById("modalXpFill").style.width = `${currentLevelXp}%`;

  document.getElementById("avatarPicker").innerHTML = AVATARS.map(av => `
    <div class="avatar-option ${av === tempAvatar ? 'selected' : ''}" onclick="selectAvatar('${av}', this)">${av}</div>
  `).join("");

  document.getElementById("colorPicker").innerHTML = ACCENTS.map(col => `
    <div class="color-swatch ${col === tempAccent ? 'selected' : ''}" style="background:${col}" onclick="selectColor('${col}', this)"></div>
  `).join("");

  const badges = [
    { label: "🎮 Første Spil", unlocked: userProfile.totalPlays >= 1 },
    { label: "🔥 5 Spil Spillet", unlocked: userProfile.totalPlays >= 5 },
    { label: "❤️ Samler (3+ Favoritter)", unlocked: userProfile.favorites.length >= 3 },
    { label: "🏆 Level 3+", unlocked: level >= 3 }
  ];

  document.getElementById("achievementsList").innerHTML = badges.map(b => `
    <span class="ach-badge ${b.unlocked ? 'unlocked' : ''}">${b.label}</span>
  `).join("");

  const recentEl = document.getElementById("recentGamesList");
  if (userProfile.recent.length === 0) {
    recentEl.innerHTML = `<span class="empty-msg">Ingen spil spillet endnu.</span>`;
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
pickNewHero();
filterGames();
