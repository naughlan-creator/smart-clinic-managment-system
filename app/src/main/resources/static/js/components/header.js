function renderHeader() {
  const headerDiv = document.getElementById("header");

  if (!headerDiv) {
    console.error("Header div not found!");
    return;
  }

  if (window.location.pathname.endsWith("/")) {
    localStorage.removeItem("userRole");
    localStorage.removeItem("token");

    headerDiv.innerHTML = `
      <header class="header">
        <div class="logo-section">
          <img src="../assets/images/logo/logo.png" alt="Hospital CRM Logo" class="logo-img">
          <span class="logo-title">Hospital CMS</span>
        </div>
      </header>`;

    return;
  }

  const role = localStorage.getItem("userRole");
  const token = localStorage.getItem("token");

  if ((role === "loggedPatient" || role === "admin" || role === "doctor") && !token) {
    localStorage.removeItem("userRole");
    alert("Session expired or invalid login. Please log in again.");
    window.location.href = "/";
    return;
  }

  let headerContent = `
    <header class="header">
      <div class="logo-section">
        <img src="../assets/images/logo/logo.png" alt="Hospital CRM Logo" class="logo-img">
        <span class="logo-title">Hospital CMS</span>
      </div>
      <nav>`;

  if (role === "admin") {
    headerContent += `
      <button id="addDocBtn" class="adminBtn" onclick="openModal('addDoctor')">Add Doctor</button>
      <a href="#" id="logoutBtn" onclick="logout()">Logout</a>`;
  } else if (role === "doctor") {
    headerContent += `
      <button id="doctorHome" class="adminBtn" onclick="selectRole('doctor')">Home</button>
      <a href="#" id="logoutBtn" onclick="logout()">Logout</a>`;
  } else if (role === "patient") {
    headerContent += `
      <button id="patientLogin" class="adminBtn">Login</button>
      <button id="patientSignup" class="adminBtn">Sign Up</button>`;
  } else if (role === "loggedPatient") {
    headerContent += `
      <button id="home" class="adminBtn" onclick="window.location.href='/pages/loggedPatientDashboard.html'">Home</button>
      <button id="patientAppointments" class="adminBtn" onclick="window.location.href='/pages/patientAppointments.html'">Appointments</button>
      <a href="#" id="logoutPatientBtn" onclick="logoutPatient()">Logout</a>`;
  }

  headerContent += `
      </nav>
    </header>`;

  headerDiv.innerHTML = headerContent;
  attachHeaderButtonListeners();
}

function attachHeaderButtonListeners() {
  const addDocBtn = document.getElementById("addDocBtn");
  const patientLogin = document.getElementById("patientLogin");
  const patientSignup = document.getElementById("patientSignup");
  const logoutBtn = document.getElementById("logoutBtn");
  const logoutPatientBtn = document.getElementById("logoutPatientBtn");

  if (addDocBtn) {
    addDocBtn.addEventListener("click", function () {
      openModal("addDoctor");
    });
  }

  if (patientLogin) {
    patientLogin.addEventListener("click", function () {
      openModal("patientLogin");
    });
  }

  if (patientSignup) {
    patientSignup.addEventListener("click", function () {
      openModal("patientSignup");
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      logout();
    });
  }

  if (logoutPatientBtn) {
    logoutPatientBtn.addEventListener("click", function () {
      logoutPatient();
    });
  }
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userRole");
  window.location.href = "/";
}

function logoutPatient() {
  localStorage.removeItem("token");
  localStorage.setItem("userRole", "patient");
  window.location.href = "/pages/patientDashboard.html";
}

document.addEventListener("DOMContentLoaded", renderHeader);