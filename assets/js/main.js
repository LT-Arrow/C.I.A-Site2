// ==================== CORE FUNCTIONS ====================

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

  if (!modal) return;

  verifyBtn.disabled = true;
  verifyBtn.textContent = "VERIFYING CLEARANCE...";

  if (status) {
    status.textContent = "CLEARANCE VERIFIED ✓";
    status.style.color = "#4cff7a";
  }

  setTimeout(() => {
    modal.classList.add('hidden');
    modal.style.display = "none";
    
    setTimeout(() => {
      alert("✅ CLEARANCE APPROVED\nWelcome, Agent-7742.");
    }, 300);
  }, 1100);
}

// ==================== INTERACTIVE INCIDENTS ====================
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
      <button onclick="showIncident('${inc.title}', '${inc.details.replace(/'/g, "\\'")}')">VIEW FULL REPORT</button>
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

// ==================== DATABASE CATEGORIES ====================
function openCategory(name) {
  const title = document.getElementById('category-title');
  const body = document.getElementById('category-body');
  
  title.textContent = name;
  
  if (name === "Cryptid Database") {
    body.innerHTML = `
      <p><strong>47 Documented Entities</strong></p>
      <ul style="margin:15px 0; line-height:1.8;">
        <li onclick="viewFile('Entity-019 Howler')">• Entity-019 "Howler" - HIGH THREAT</li>
        <li onclick="viewFile('Entity-047 Shadow')">• Entity-047 "Shadow Lurker"</li>
        <li onclick="viewFile('Entity-112 Leviathan')">• Entity-112 "Leviathan Variant"</li>
      </ul>
    `;
  } else {
    body.innerHTML = `<p>Accessing ${name} archive...<br><br>Full records coming soon.</p>`;
  }
  
  document.getElementById('category-modal').classList.remove('hidden');
}

function closeCategoryModal() {
  document.getElementById('category-modal').classList.add('hidden');
}

function viewFile(name) {
  alert(`Opening classified file: ${name}\n\nThis would open a full dossier in the complete version.`);
}

// ==================== INITIALIZATION ====================
window.onload = function() {
  updateClock();
  
  // Run alerts if alert feed exists
  setInterval(addAlert, 4500);
  for (let i = 0; i < 3; i++) addAlert();

  // Run incidents if on incidents page
  if (document.getElementById('incident-cards')) {
    loadIncidents();
  }
};
