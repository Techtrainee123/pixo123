// =========================================================================
// 1. 100 SPIL MED SVG-FORBILLEDER & INDBYGGET SPILMOTOR (INGEN 404-FEJL)
// =========================================================================
const GAME_CATALOG = [
  ["Hextris", "Puzzle", 3], ["2048 Classic", "Puzzle", 3], ["Snake Neon", "Arcade", 0], ["Cyber Pong 2P", "Multiplayer", 1], ["Brick Breaker", "Arcade", 2],
  ["Space Invaders", "Action", 4], ["Turbo Traffic", "Racing", 5], ["Dino Runner", "Arcade", 5], ["Memory Matrix", "Puzzle", 3], ["Asteroid Blast", "Action", 4],
  ["Slope Rider", "Racing", 5], ["Moto X3M", "Racing", 5], ["Drift Hunters", "Racing", 5], ["Tunnel Rush", "Racing", 5], ["Run 3", "Racing", 5],
  ["Geometry Dash", "Arcade", 5], ["Subway Surfers", "Arcade", 5], ["Temple Run 2", "Arcade", 5], ["Crossy Road", "Arcade", 5], ["1v1 Arena", "Multiplayer", 1],
  ["Retro Bowl", "Action", 4], ["Basketball 2P", "Multiplayer", 1], ["Rooftop Duel", "Multiplayer", 1], ["Getaway 2P", "Multiplayer", 1], ["Paper Snake", "Multiplayer", 0],
  ["Black Hole", "Multiplayer", 0], ["Stickman Hook", "Arcade", 2], ["Tiny Fishing", "Arcade", 2], ["Drive Mad", "Racing", 5], ["Eggy Car", "Racing", 5],
  ["Monkey Mart", "Arcade", 0], ["Snow Rider 3D", "Racing", 5], ["Tower Stack", "Arcade", 2], ["Tanuki Sunset", "Racing", 5], ["Tomb Mask", "Arcade", 0],
  ["Vex Parkour 3", "Action", 5], ["Vex Parkour 4", "Action", 5], ["Vex Parkour 5", "Action", 5], ["Vex Parkour 6", "Action", 5], ["Vex Parkour 7", "Action", 5],
  ["Hardest Grid", "Puzzle", 3], ["Bob Robber", "Puzzle", 3], ["Fire & Water 2P", "Multiplayer", 1], ["Happy Wheels", "Action", 5], ["Cut the Rope", "Puzzle", 3],
  ["Fruit Slice", "Arcade", 2], ["Jetpack Fly", "Arcade", 5], ["Bloxorz 3D", "Puzzle", 3], ["Duck Life 4", "Arcade", 5], ["Learn to Fly 2", "Arcade", 5],
  ["BitLife Sim", "Arcade", 3], ["Cookie Clicker", "Arcade", 2], ["Smash Karts 2P", "Multiplayer", 1], ["Shell Shock", "Multiplayer", 4], ["Krunker FPS", "Multiplayer", 4],
  ["Agar Cells", "Multiplayer", 0], ["Slither Worms", "Multiplayer", 0], ["Space Crew", "Multiplayer", 4], ["Moto Winter", "Racing", 5], ["Moto Pool", "Racing", 5],
  ["Superhot Time", "Action", 4], ["Madalin Cars", "Racing", 5], ["Doodle Jump", "Arcade", 2], ["Tetris Retro", "Puzzle", 3], ["Clumsy Bird", "Arcade", 5],
  ["Astray Maze", "Puzzle", 3], ["Pacman Maze", "Arcade", 0], ["Snakes Pro", "Arcade", 0], ["Boulder Dash", "Puzzle", 3], ["Gauntlet Dungeon", "Action", 4],
  ["Tiny Jumper", "Action", 5], ["Onslaught", "Action", 4], ["Alien Swarm", "Action", 4], ["Candy Box 2", "Action", 3], ["Space Corp", "Action", 4],
  ["Emoji Mine", "Puzzle", 3], ["Connect 4 2P", "Multiplayer", 1], ["Othello 2P", "Multiplayer", 1], ["Whac Mole", "Arcade", 2], ["Frogger Road", "Arcade", 5],
  ["Candy Crush", "Puzzle", 3], ["Minesweeper", "Puzzle", 3], ["Flappy Classic", "Arcade", 5], ["Pac-Man Retro", "Arcade", 0], ["Duck Hunt", "Action", 4],
  ["Trigger Rally", "Racing", 5], ["0h h1 Logic", "Puzzle", 3], ["0h n0 Logic", "Puzzle", 3], ["2048 Cupcakes", "Puzzle", 3], ["Flappy 2048", "Arcade", 2],
  ["Neon Snake II", "Arcade", 0], ["Laser Pong 2P", "Multiplayer", 1], ["Galaxy Blaster", "Action", 4], ["Hyper Breakout", "Arcade", 2], ["Nitro Dodge", "Racing", 5],
  ["Brain Pairs", "Puzzle", 3], ["Plasma Defence", "Action", 4], ["Cyber Paddle 2P", "Multiplayer", 1], ["Speedway 99", "Racing", 5], ["Final Matrix", "Puzzle", 3]
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
function buildLocalEngineHTML(title, engineType, idx) {
  const colors = ["#00e5ff", "#ff4081", "#00e676", "#ffab00", "#b388ff", "#ff5252"];
  const accent = colors[idx % colors.length];
  const endTag = "</" + "script>";

  const engines = {
    0: `
      const c = document.getElementById('c'), ctx = c.getContext('2d');
      let snake = [{x:10,y:10}], dir = {x:1,y:0}, food = {x:15,y:10}, score = 0;
      window.addEventListener('keydown', e => {
        if(e.key==='ArrowUp'&&dir.y===0) dir={x:0,y:-1};
        if(e.key==='ArrowDown'&&dir.y===0) dir={x:0,y:1};
        if(e.key==='ArrowLeft'&&dir.x===0) dir={x:-1,y:0};
        if(e.key==='ArrowRight'&&dir.x===0) dir={x:1,y:0};
      });
      setInterval(() => {
        const head = {x: (snake[0].x + dir.x + 28)%28, y: (snake[0].y + dir.y + 18)%18};
        if (snake.some(s => s.x===head.x && s.y===head.y)) { snake=[{x:10,y:10}]; score=0; return; }
        snake.unshift(head);
        if (head.x===food.x && head.y===food.y) { score+=10; food={x:Math.floor(Math.random()*28), y:Math.floor(Math.random()*18)}; }
        else snake.pop();
        ctx.fillStyle='#111625'; ctx.fillRect(0,0,560,360);
        ctx.fillStyle='#ff4081'; ctx.fillRect(food.x*20+2, food.y*20+2, 16, 16);
        ctx.fillStyle='${accent}'; snake.forEach(s => ctx.fillRect(s.x*20+1, s.y*20+1, 18, 18));
        ctx.fillStyle='#fff'; ctx.font='bold 15px sans-serif'; ctx.fillText('Use Arrow Keys • Score: '+score, 14, 24);
      }, 105);
    `,
    1: `
      const c = document.getElementById('c'), ctx = c.getContext('2d');
      let p1=140, p2=140, bx=280, by=180, vx=4, vy=3, s1=0, s2=0;
      c.addEventListener('pointermove', e => { const r=c.getBoundingClientRect(); p1=(e.clientY-r.top)*(360/r.height)-40; });
      function loop(){
        bx+=vx; by+=vy;
        if(by<8||by>352) vy*=-1;
        p2 += ((by - 40) - p2) * 0.08;
        if(bx<24 && by>p1 && by<p1+80){ vx=Math.abs(vx)*1.05; }
        if(bx>536 && by>p2 && by<p2+80){ vx=-Math.abs(vx)*1.05; }
        if(bx<0){ s2++; bx=280; by=180; vx=4; }
        if(bx>560){ s1++; bx=280; by=180; vx=-4; }
        ctx.fillStyle='#111625'; ctx.fillRect(0,0,560,360);
        ctx.fillStyle='${accent}'; ctx.fillRect(10,p1,12,80);
        ctx.fillStyle='#ff4081'; ctx.fillRect(538,p2,12,80);
        ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(bx,by,8,0,Math.PI*2); ctx.fill();
        ctx.font='bold 18px sans-serif'; ctx.fillText('You: '+s1+'   CPU: '+s2, 210, 28);
        requestAnimationFrame(loop);
      } loop();
    `,
    2: `
      const c = document.getElementById('c'), ctx = c.getContext('2d');
      let px=230, bx=280, by=260, vx=3.5, vy=-3.5, score=0, bricks=[];
      for(let r=0;r<4;r++) for(let col=0;col<8;col++) bricks.push({x:col*66+18, y:r*26+45, alive:true});
      c.addEventListener('pointermove', e => { const r=c.getBoundingClientRect(); px=(e.clientX-r.left)*(560/r.width)-50; });
      function loop(){
        bx+=vx; by+=vy;
        if(bx<8||bx>552) vx*=-1;
        if(by<8) vy*=-1;
        if(by>325 && bx>px && bx<px+100) vy=-Math.abs(vy);
        if(by>365){ bx=280; by=260; vy=-3.5; score=0; bricks.forEach(b=>b.alive=true); }
        bricks.forEach(b=>{ if(b.alive && bx>b.x && bx<b.x+60 && by>b.y && by<b.y+20){ b.alive=false; vy*=-1; score+=10; }});
        ctx.fillStyle='#111625'; ctx.fillRect(0,0,560,360);
        ctx.fillStyle='${accent}'; ctx.fillRect(px,332,100,12);
        bricks.forEach(b=>{ if(b.alive){ ctx.fillStyle='#00e676'; ctx.fillRect(b.x,b.y,60,18); }});
        ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(bx,by,8,0,Math.PI*2); ctx.fill();
        ctx.font='bold 15px sans-serif'; ctx.fillText('Score: '+score, 16, 26);
        requestAnimationFrame(loop);
      } loop();
    `,
    3: `
      const c = document.getElementById('c'), ctx = c.getContext('2d');
      const icons=['🔥','⚡','💎','🚀','🍀','🎯','👾','👑'];
      let deck=[...icons,...icons].sort(()=>Math.random()-0.5).map(v=>({v, open:false, done:false}));
      let sel=[], moves=0;
      c.addEventListener('pointerdown', e => {
        if(sel.length===2) return;
        const r=c.getBoundingClientRect();
        const col=Math.floor(((e.clientX-r.left)*(560/r.width)-80)/100);
        const row=Math.floor(((e.clientY-r.top)*(360/r.height)-45)/75);
        const idx=row*4+col;
        if(col>=0&&col<4&&row>=0&&row<4&&!deck[idx].open&&!deck[idx].done){
          deck[idx].open=true; sel.push(idx);
          if(sel.length===2){
            moves++;
            setTimeout(()=>{
              if(deck[sel[0]].v===deck[sel[1]].v){ deck[sel[0]].done=deck[sel[1]].done=true; }
              else { deck[sel[0]].open=deck[sel[1]].open=false; }
              sel=[];
            }, 550);
          }
        }
      });
      function loop(){
        ctx.fillStyle='#111625'; ctx.fillRect(0,0,560,360);
        deck.forEach((card,i)=>{
          const x=(i%4)*100+85, y=Math.floor(i/4)*75+45;
          ctx.fillStyle=card.done?'#065f46':(card.open?'${accent}':'#24283b');
          ctx.fillRect(x,y,88,64);
          if(card.open||card.done){ ctx.font='28px sans-serif'; ctx.fillText(card.v, x+26, y+42); }
        });
        ctx.fillStyle='#fff'; ctx.font='bold 15px sans-serif'; ctx.fillText('Click tiles to match • Moves: '+moves, 16, 26);
        requestAnimationFrame(loop);
      } loop();
    `,
    4: `
      const c = document.getElementById('c'), ctx = c.getContext('2d');
      let px=280, bullets=[], enemies=[], score=0;
      c.addEventListener('pointermove', e => { const r=c.getBoundingClientRect(); px=(e.clientX-r.left)*(560/r.width); });
      c.addEventListener('pointerdown', () => bullets.push({x:px, y:310}));
      setInterval(()=>enemies.push({x:Math.random()*500+30, y:-20}), 850);
      function loop(){
        ctx.fillStyle='#111625'; ctx.fillRect(0,0,560,360);
        ctx.fillStyle='${accent}'; ctx.beginPath(); ctx.moveTo(px,305); ctx.lineTo(px-18,340); ctx.lineTo(px+18,340); ctx.fill();
        bullets.forEach(b=>b.y-=7); bullets=bullets.filter(b=>b.y>0);
        ctx.fillStyle='#ffab00'; bullets.forEach(b=>ctx.fillRect(b.x-2,b.y,4,12));
        enemies.forEach((en,ei)=>{
          en.y+=2.4;
          ctx.fillStyle='#ff5252'; ctx.beginPath(); ctx.arc(en.x,en.y,14,0,Math.PI*2); ctx.fill();
          bullets.forEach((b,bi)=>{ if(Math.hypot(b.x-en.x,b.y-en.y)<18){ enemies.splice(ei,1); bullets.splice(bi,1); score+=10; }});
          if(en.y>360){ enemies=[]; score=0; }
        });
        ctx.fillStyle='#fff'; ctx.font='bold 15px sans-serif'; ctx.fillText('Click to shoot • Score: '+score, 16, 26);
        requestAnimationFrame(loop);
      } loop();
    `,
    5: `
      const c = document.getElementById('c'), ctx = c.getContext('2d');
      let px=280, obs=[], score=0, speed=4;
      c.addEventListener('pointermove', e => { const r=c.getBoundingClientRect(); px=(e.clientX-r.left)*(560/r.width); });
      function loop(){
        if(Math.random()<0.05) obs.push({x:Math.random()*500+30, y:-20, w:36});
        ctx.fillStyle='#111625'; ctx.fillRect(0,0,560,360);
        ctx.fillStyle='${accent}'; ctx.fillRect(px-16,300,32,42);
        for(let i=obs.length-1;i>=0;i--){
          let o=obs[i]; o.y+=speed;
          ctx.fillStyle='#ff4081'; ctx.fillRect(o.x-18,o.y,o.w,22);
          if(Math.abs(o.x-px)<30 && o.y>285 && o.y<340){ obs=[]; score=0; speed=4; break; }
          if(o.y>360){ obs.splice(i,1); score+=5; speed=Math.min(10, 4+score/150); }
        }
        ctx.fillStyle='#fff'; ctx.font='bold 15px sans-serif'; ctx.fillText('Move mouse to dodge • Distance: '+score+'m', 16, 26);
        requestAnimationFrame(loop);
      } loop();
    `
  };

  return `<!DOCTYPE html><html><head><style>
    body{margin:0;background:#090b10;color:#fff;font-family:sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;overflow:hidden;user-select:none;}
    canvas{border:2px solid ${accent};border-radius:12px;max-width:95vw;cursor:pointer;}
    h3{margin:0 0 10px;font-size:18px;color:${accent};}
  </style></head><body>
    <h3>${title}</h3>
    <canvas id="c" width="560" height="360"></canvas>
    <script>${engines[engineType]}${endTag}
  </body></html>`;
}

const GAMES_DATA = GAME_CATALOG.map((item, idx) => ({
  id: idx + 1,
  title: item[0],
  category: item[1],
  icon: (CAT_THEMES[item[1]] || CAT_THEMES.Arcade).icon,
  coverSvg: buildGameCoverSVG(item[0], item[1], idx),
  localHtml: buildLocalEngineHTML(item[0], item[2], idx)
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
  document.getElementById("gameCount").textContent = `${filtered.length} games available`;

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
// 4. SPILAFSPILLER (BRUGER SRCDOC — INGEN 404 ELLER BLOKEREDE DOMÆNER)
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
  frame.removeAttribute("src");
  frame.srcdoc = game.localHtml;

  const extBtn = document.getElementById("externalFallbackBtn");
  if (extBtn) extBtn.style.display = "none";

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
