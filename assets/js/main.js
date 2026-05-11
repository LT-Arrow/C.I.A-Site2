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

// ==================== DYNAMIC LIVE ALERTS ====================
const alertTemplates = [
  "WARNING: Containment breach detected in Sector-{n} ({loc})",
  "CRYPTID SIGHTING: Entity-{n} reported in {loc}",
  "MEMORY SUPPRESSION PROTOCOL activated on {n} civilians in {loc}",
  "Black Site {site} - Communication lost • Investigation ongoing",
  "UNKNOWN BIOLOGICAL ENTITY approaching Black Site {site}",
  "CONTAINMENT FAILURE at Sector-{n} • Multiple casualties reported",
  "DIMENSIONAL ANOMALY detected in {loc} • Class-{level} threat",
  "Howler activity confirmed in {loc} • Audio mimicry recorded",
  "BIOHAZARD STRAIN Ω-{n} mutation detected",
  "Cerberus Team {team} requesting immediate backup in {loc}",
  "UNAUTHORIZED ACCESS detected at Black Site {site}",
  "Entity-{n} has breached outer perimeter"
];

const locations = ["Nevada Desert", "Oregon Forest", "Alaska", "Appalachian Mountains", "Amazon Basin", "Antarctica", "Siberia", "Pacific Sector", "Rocky Mountains"];
const sites = ["Alpha", "Echo", "Delta", "Omega", "Gamma", "Theta", "Kappa"];
const levels = ["II", "III", "IV", "V"];

function getRandomAlert() {
  let template = alertTemplates[Math.floor(Math.random() * alertTemplates.length)];
  
  template = template.replace("{n}", Math.floor(Math.random() * 99) + 10);
  template = template.replace("{loc}", locations[Math.floor(Math.random() * locations.length)]);
  template = template.replace("{site}", sites[Math.floor(Math.random() * sites.length)]);
  template = template.replace("{level}", levels[Math.floor(Math.random() * levels.length)]);
  template = template.replace("{team}", Math.floor(Math.random() * 12) + 1);
  
  return template;
}

function addAlert() {
  const feed = document.getElementById('alert-feed');
  if (!feed) return;

  const alertText = getRandomAlert();
  
  const alert = document.createElement('div');
  alert.className = 'alert-item';
  alert.style.color = '#ff4444';
  alert.style.marginBottom = '10px';
  alert.style.padding = '10px 12px';
  alert.style.borderLeft = '4px solid #8b0000';
  alert.innerHTML = `● ${alertText}`;
  
  feed.appendChild(alert);

  if (feed.children.length > 7) {
    feed.removeChild(feed.children[0]);
  }
}

// ==================== LOGIN SYSTEM WITH REMEMBER USERNAME ====================

function showLogin() {
  const modal = document.getElementById('login-modal');
  if (modal) {
    modal.classList.remove('hidden');
    
    // Auto-fill saved Agent ID
    const savedAgent = localStorage.getItem('cia_agent_id');
    if (savedAgent) {
      document.getElementById('agent-id').value = savedAgent;
    }
  }
}

function attemptLogin() {
  const modal = document.getElementById('login-modal');
  const agentInput = document.getElementById('agent-id');
  const agentId = agentInput.value.trim() || "AGENT-7742";
  const status = document.getElementById('login-status');
  const verifyBtn = document.querySelector('#login-modal button');

  if (!modal) return;

  verifyBtn.disabled = true;
  verifyBtn.textContent = "VERIFYING CLEARANCE...";

  if (status) {
    status.textContent = "CLEARANCE VERIFIED ✓";
    status.style.color = "#4cff7a";
  }

  // Save username
  localStorage.setItem('cia_agent_id', agentId);

  setTimeout(() => {
    modal.classList.add('hidden');
    modal.style.display = "none";
    
    setTimeout(() => {
      alert(`✅ CLEARANCE APPROVED\nWelcome back, ${agentId}.`);
      updateLoggedInState();
    }, 300);
  }, 1100);
}

function updateLoggedInState() {
  const savedAgent = localStorage.getItem('cia_agent_id');
  if (savedAgent) {
    const securityBar = document.querySelector('.security-bar');
    if (securityBar) {
      securityBar.innerHTML = `
        <span>CRYPTIC INTELLIGENCE AGENCY • LEVEL 5 CLEARANCE</span>
        <span style="color:#4cff7a; margin-left:10px; font-weight:bold;">AGENT: ${savedAgent}</span>
        <span id="live-time"></span>
        <button class="hamburger" onclick="toggleSidebar()">☰</button>
      `;
    }
  }
}

function logout() {
  if (confirm("Log out and clear saved Agent ID?")) {
    localStorage.removeItem('cia_agent_id');
    location.reload();
  }
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
  
  // Check for saved username
  updateLoggedInState();

  // Dynamic alerts
  setInterval(addAlert, 3500);
  for (let i = 0; i < 5; i++) {
    setTimeout(addAlert, i * 600);
  }

  // Load incidents if on that page
  if (document.getElementById('incident-cards')) {
    loadIncidents();
  }
};
