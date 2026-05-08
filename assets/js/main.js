<script>
// Live Clock
function updateClock() {
  const timeEl = document.getElementById('live-time');
  if (timeEl) {
    setInterval(() => {
      const now = new Date();
      timeEl.textContent = now.toLocaleTimeString('en-US', { hour12: false }) + " UTC";
    }, 1000);
  }
}

// Live Alert System
const alerts = [
  "WARNING: Containment breach detected in Sector-7 (Nevada)",
  "CRYPTID SIGHTING: Type-Omega reported in Oregon Forest",
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

// Login System
function showLogin() {
  const modal = document.getElementById('login-modal');
  if (modal) modal.classList.remove('hidden');
}

function attemptLogin() {
  const modal = document.getElementById('login-modal');
  const status = document.getElementById('login-status');
  const verifyBtn = document.querySelector('#login-modal button');

  if (!modal) {
    alert("Modal not found!");
    return;
  }

  verifyBtn.disabled = true;
  verifyBtn.textContent = "VERIFYING CLEARANCE...";

  if (status) {
    status.textContent = "CLEARANCE VERIFIED ✓";
    status.style.color = "#4cff7a";
  }

  // Force close the modal
  setTimeout(() => {
    modal.style.display = "none";        // Direct method
    modal.classList.add('hidden');
    
    setTimeout(() => {
      alert("✅ CLEARANCE APPROVED\nWelcome, Agent-7742.");
    }, 300);
  }, 1100);
}

// Terminal & Other Functions
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
      window.location.href = "database.html";
    } else {
      alert("Command received. Access logged.");
    }
  }
}

function viewFile(name) {
  alert(`Opening classified file: ${name}\n\n(This would open a full profile in the complete version)`);
}

// Initialize
window.onload = function() {
  updateClock();
  setInterval(addAlert, 4500);
  for (let i = 0; i < 3; i++) addAlert();
};
</script>

// Interactive Incident System
const incidentsData = [
  {
    title: "NEVADA DESERT - SECTOR 7",
    status: "ONGOING",
    threat: "Level III Cryptid Activity",
    update: "47 minutes ago",
    details: "Multiple sightings of a large bipedal entity approximately 3 meters tall. Containment Team Cerberus-4 engaged. 3 civilian witnesses processed under Memory Suppression Protocol."
  },
  {
    title: "OREGON FOREST - SECTOR 12",
    status: "HIGH ACTIVITY",
    threat: "Missing Persons Spike (17 cases)",
    update: "2 hours ago",
    details: "Confirmed Howler (Entity-019) activity. Audio mimicry recorded. Teams advised to use high-frequency disruptors."
  },
  {
    title: "BLACK SITE ECHO - ALASKA",
    status: "COMMUNICATION LOST",
    threat: "Possible Containment Failure",
    update: "11 hours ago",
    details: "All contact lost with research staff. Last transmission mentioned 'They are learning our voices.' Rescue team dispatched."
  }
];

function loadIncidents() {
  const container = document.getElementById('incident-cards');
  if (!container) return;

  container.innerHTML = '';

  incidentsData.forEach(inc => {
    const card = document.createElement('div');
    card.className = 'card red';
    card.innerHTML = `
      <h3>${inc.title}</h3>
      <p><strong>Status:</strong> <span class="red">${inc.status}</span></p>
      <p><strong>Threat:</strong> ${inc.threat}</p>
      <p><strong>Last Update:</strong> ${inc.update}</p>
      <button onclick="showIncident('${inc.title}', '${inc.details}')">VIEW FULL REPORT</button>
    `;
    container.appendChild(card);
  });
}

function showIncident(title, details) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = `
    <p>${details}</p>
    <br>
    <p style="color:#ffcc00;"><strong>CLASSIFICATION: RESTRICTED • EYES ONLY</strong></p>
  `;
  document.getElementById('incident-modal').classList.remove('hidden');
}

function closeIncidentModal() {
  document.getElementById('incident-modal').classList.add('hidden');
}

// Make sure this runs on incidents page
if (document.getElementById('incident-cards')) {
  window.onload = function() {
    updateClock();
    setInterval(addAlert, 4500);
    for (let i = 0; i < 3; i++) addAlert();
    loadIncidents();
  };
}
