<script>
// Live Clock
function updateClock() {
  const timeEl = document.getElementById('live-time');
  setInterval(() => {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-US', { hour12: false }) + " UTC";
  }, 1000);
}

// Live Alert System
const alerts = [
  "WARNING: Containment breach detected in Sector-7 (Nevada)",
  "CRYTID SIGHTING: Type-Omega reported in Oregon Forest",
  "MEMORY SUPPRESSION PROTOCOL activated on 14 civilians",
  "Black Site Echo - Communication still offline",
  "UNKNOWN BIOLOGICAL ENTITY approaching Black Site Delta"
];

function addAlert() {
  const feed = document.getElementById('alert-feed');
  if (!feed) return;
  
  const alert = document.createElement('div');
  alert.className = 'alert-item';
  alert.style.color = '#ff4444';
  alert.style.marginBottom = '8px';
  alert.style.padding = '8px';
  alert.style.borderLeft = '3px solid #8b0000';
  alert.innerHTML = `● ${alerts[Math.floor(Math.random() * alerts.length)]}`;
  
  feed.appendChild(alert);
  
  if (feed.children.length > 5) {
    feed.removeChild(feed.children[0]);
  }
}

// Fake Recent Case Files
function loadRecentFiles() {
  const container = document.getElementById('recent-cards');
  if (!container) return;

  const files = [
    { title: "Entity-019 'Howler'", level: "HIGH", status: "CONTAINED" },
    { title: "Incident 47-B 'Forest Silence'", level: "CRITICAL", status: "UNDER INVESTIGATION" },
    { title: "Biohazard Strain Ω-9", level: "EXTREME", status: "CONTAINED" }
  ];

  files.forEach(file => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${file.title}</h3>
      <p>Threat Level: <span class="red">${file.level}</span></p>
      <p>Status: <span class="green">${file.status}</span></p>
      <button onclick="viewFile('${file.title}')" style="margin-top:10px; padding:6px 12px;">VIEW FILE</button>
    `;
    container.appendChild(card);
  });
}

// Login System
function showLogin() {
  document.getElementById('login-modal').classList.remove('hidden');
}

function attemptLogin() {
  const status = document.getElementById('login-status');
  status.textContent = "CLEARANCE VERIFIED ✓";
  status.style.color = "#4cff7a";

  setTimeout(() => {
    alert("Welcome, Agent. Access to classified sections granted.");
    document.getElementById('login-modal').classList.add('hidden');
    // In a real expansion you could unlock more pages here
  }, 1200);
}

// Terminal Mode
function enterTerminal() {
  const commands = [
    "ACCESSING TERMINAL...",
    "Welcome to C.I.A. Secure Terminal v0.8.4",
    "Type 'help' for available commands.",
    "-------------------------------"
  ];

  let output = commands.join('\n');
  const terminal = prompt(output + "\n\n> ", "");
  
  if (terminal) {
    if (terminal.toLowerCase() === "help") {
      alert("Available: /files, /entities, /breaches, /status");
    } else if (terminal.toLowerCase().includes("files")) {
      alert("Redirecting to Database... (In full version this opens database.html)");
      window.location.href = "database.html";
    } else {
      alert("Command received. Access logged.");
    }
  }
}

function viewFile(name) {
  alert(`Opening classified file: ${name}\n\n(This would open a full profile in the complete version)`);
}

// Initialize everything
window.onload = function() {
  updateClock();
  
  // Add random alerts
  setInterval(addAlert, 4500);
  for (let i = 0; i < 3; i++) addAlert();

  loadRecentFiles();
};

// Navigation helper
function navigateTo(page) {
  if (page === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
</script>
