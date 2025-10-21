"use client";
import React, { useEffect } from "react";

const StemDashboard = () => {
      useEffect(() => {
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const overlay = document.getElementById("overlay");
    const closeSidebar = document.getElementById("close-mobile-sidebar");
    const actionCards = document.querySelectorAll(".action-card");
    const institutionCards = document.querySelectorAll(".institution-card");

    // ✅ Sidebar Open/Close
    const openSidebar = () => {
      mobileSidebar?.classList.add("show");
      overlay?.classList.add("show");
    };

    const closeSidebarFn = () => {
      mobileSidebar?.classList.remove("show");
      overlay?.classList.remove("show");
    };

    sidebarToggle?.addEventListener("click", openSidebar);
    closeSidebar?.addEventListener("click", closeSidebarFn);
    overlay?.addEventListener("click", closeSidebarFn);

    // ✅ Quick Actions
    actionCards.forEach((card) => {
      const handleCardClick = () => {
        const action = card.querySelector("span")?.textContent || "Unknown";
        alert(`Action: ${action} - This would open the appropriate section`);
      };
      card.addEventListener("click", handleCardClick);
      card._clickHandler = handleCardClick;
    });

    // ✅ Institution Cards Click
    institutionCards.forEach((card) => {
      const handleInstitutionClick = () => {
        const institutionName = card.querySelector("h6")?.textContent || "Institution";
        alert(`Viewing details for: ${institutionName}`);
      };
      card.addEventListener("click", handleInstitutionClick);
      card._clickHandler = handleInstitutionClick;
    });

    // ✅ Initialize Bootstrap Tooltips
    if (typeof bootstrap !== "undefined") {
      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.map((el) => new bootstrap.Tooltip(el));
    }

    // ✅ Cleanup all listeners when component unmounts
    return () => {
      sidebarToggle?.removeEventListener("click", openSidebar);
      closeSidebar?.removeEventListener("click", closeSidebarFn);
      overlay?.removeEventListener("click", closeSidebarFn);

      actionCards.forEach((card) => {
        if (card._clickHandler) {
          card.removeEventListener("click", card._clickHandler);
          delete card._clickHandler;
        }
      });

      institutionCards.forEach((card) => {
        if (card._clickHandler) {
          card.removeEventListener("click", card._clickHandler);
          delete card._clickHandler;
        }
      });
    };
  }, []);
  return (
    <div>
      <div class="overlay" id="overlay"></div>

      <div id="mobile-sidebar">
        <div class="sidebar-header p-4">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h3>STEM Officials</h3>
              <p>National STEM Portal</p>
            </div>
            <button class="btn btn-sm btn-light" id="close-mobile-sidebar">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
        <ul class="sidebar-menu">
          <li>
            <a href="#" class="active">
              <i class="bi bi-speedometer2"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-building"></i> Institutions
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-graph-up"></i> National Analytics
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-clipboard-check"></i> Compliance
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-shield-check"></i> Security
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-clock-history"></i> Audit Logs
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-gear"></i> System Settings
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-box-arrow-right"></i> Logout
            </a>
          </li>
        </ul>
      </div>

      <div id="sidebar">
        <div class="sidebar-header">
          <h3>STEM Officials</h3>
          <p>National STEM Portal</p>
        </div>
        <ul class="sidebar-menu">
          <li>
            <a href="#" class="active">
              <i class="bi bi-speedometer2"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-building"></i> Institutions
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-graph-up"></i> National Analytics
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-clipboard-check"></i> Compliance
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-shield-check"></i> Security
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-clock-history"></i> Audit Logs
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-gear"></i> System Settings
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-box-arrow-right"></i> Logout
            </a>
          </li>
        </ul>
      </div>
      <div id="content">
        <div
          id="topbar"
          class="d-flex justify-content-between align-items-center"
        >
          <div class="d-flex align-items-center">
            <button class="btn btn-sm me-3 d-lg-none" id="sidebar-toggle">
              <i class="bi bi-list" style={{fontSize:"1.5rem"}}></i>
            </button>
            <div class="search-box">
              <i class="bi bi-search"></i>
              <input
                type="text"
                class="form-control"
                placeholder="Search institutions, reports..."
              />
            </div>
          </div>
          <div class="d-flex align-items-center">
            <div class="position-relative me-4">
              <button class="btn btn-light position-relative">
                <i class="bi bi-bell"></i>
                <span class="notification-badge">7</span>
              </button>
            </div>
            <div class="user-menu d-flex align-items-center">
              <div class="dropdown">
                <a
                  href="#"
                  class="d-flex align-items-center text-decoration-none dropdown-toggle"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://ui-avatars.com/api/?name=STEM+Official&background=4361ee&color=fff"
                    alt="User"
                  />
                  <span class="d-none d-md-inline">Dr. Robert Chen</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-person me-2"></i> Profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-gear me-2"></i> Settings
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-box-arrow-right me-2"></i> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid p-4">
          <div class="row mb-4">
            <div class="col">
              <h1 class="h3 mb-0">National STEM Dashboard</h1>
              <p class="text-muted">
                Comprehensive overview of STEM education across all institutions
              </p>
            </div>
            <div class="col-auto">
              <div class="btn-group">
                <button class="btn btn-outline-primary">
                  Export National Report
                </button>
                <button class="btn btn-primary">
                  Generate Quarterly Review
                </button>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-3 col-md-6">
              <div class="card dashboard-card">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h5 class="card-title text-muted">Institutions</h5>
                      <h2 class="mb-0">142</h2>
                      <p class="text-success">
                        <small>
                          <i class="bi bi-arrow-up"></i> 8 new this quarter
                        </small>
                      </p>
                    </div>
                    <div class="card-icon bg-primary-light">
                      <i class="bi bi-building"></i>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="progress stats-progress">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{width:"85%"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card dashboard-card">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h5 class="card-title text-muted">Students Enrolled</h5>
                      <h2 class="mb-0">24,587</h2>
                      <p class="text-success">
                        <small>
                          <i class="bi bi-arrow-up"></i> 12.5% from last year
                        </small>
                      </p>
                    </div>
                    <div class="card-icon bg-success-light">
                      <i class="bi bi-people"></i>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="progress stats-progress">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style={{width:"75%"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card dashboard-card">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h5 class="card-title text-muted">Faculty Members</h5>
                      <h2 class="mb-0">1,842</h2>
                      <p class="text-success">
                        <small>
                          <i class="bi bi-arrow-up"></i> 5.2% from last year
                        </small>
                      </p>
                    </div>
                    <div class="card-icon bg-warning-light">
                      <i class="bi bi-person-badge"></i>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="progress stats-progress">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style={{width:"65%"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-6">
              <div class="card dashboard-card">
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <div>
                      <h5 class="card-title text-muted">Avg. Performance</h5>
                      <h2 class="mb-0">84.2%</h2>
                      <p class="text-success">
                        <small>
                          <i class="bi bi-arrow-up"></i> 3.7% from last year
                        </small>
                      </p>
                    </div>
                    <div class="card-icon bg-info-light">
                      <i class="bi bi-award"></i>
                    </div>
                  </div>
                  <div class="mt-3">
                    <div class="progress stats-progress">
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style={{width:"84%"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-lg-8">
              <div class="card dashboard-card">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">Regional Performance Overview</h5>
                  <a href="#" class="btn btn-sm btn-outline-primary">
                    View Details
                  </a>
                </div>
                <div class="card-body">
                  <div class="region-performance">
                    <div class="region-name">Punjab</div>
                    <div class="region-bar">
                      <div
                        class="region-fill bg-success"
                        style={{width:"92%"}}
                      ></div>
                    </div>
                    <div class="region-value">92%</div>
                  </div>
                  <div class="region-performance">
                    <div class="region-name">Sindh</div>
                    <div class="region-bar">
                      <div
                        class="region-fill bg-primary"
                        style={{width:"87%"}}
                      ></div>
                    </div>
                    <div class="region-value">87%</div>
                  </div>
                  <div class="region-performance">
                    <div class="region-name">Khyber Pakhtunkhwa</div>
                    <div class="region-bar">
                      <div class="region-fill bg-info" style={{width:"79%"}}></div>
                    </div>
                    <div class="region-value">79%</div>
                  </div>
                  <div class="region-performance">
                    <div class="region-name">Balochistan</div>
                    <div class="region-bar">
                      <div
                        class="region-fill bg-warning"
                        style={{width: "65%"}}
                      ></div>
                    </div>
                    <div class="region-value">65%</div>
                  </div>
                  <div class="region-performance">
                    <div class="region-name">Gilgit-Baltistan</div>
                    <div class="region-bar">
                      <div
                        class="region-fill bg-danger"
                        style={{width:"58%"}}
                      ></div>
                    </div>
                    <div class="region-value">58%</div>
                  </div>
                </div>
              </div>

              <div class="card dashboard-card mt-4">
                <div class="card-header bg-white d-flex justify-content-between align-items-center">
                  <h5 class="mb-0">Top Performing Institutions</h5>
                  <a href="#" class="btn btn-sm btn-outline-primary">
                    View All
                  </a>
                </div>
                <div class="card-body p-0">
                  <div class="data-table">
                    <table class="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Institution</th>
                          <th>Region</th>
                          <th>Students</th>
                          <th>Performance</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="institution-logo">LU</div>
                              <div>
                                <h6 class="mb-0">Lahore University STEM</h6>
                                <small class="text-muted">Lahore, Punjab</small>
                              </div>
                            </div>
                          </td>
                          <td>Punjab</td>
                          <td>1,247</td>
                          <td>94.5%</td>
                          <td>
                            <span class="status-badge badge-excellent">
                              Excellent
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="institution-logo">KU</div>
                              <div>
                                <h6 class="mb-0">Karachi STEM College</h6>
                                <small class="text-muted">Karachi, Sindh</small>
                              </div>
                            </div>
                          </td>
                          <td>Sindh</td>
                          <td>982</td>
                          <td>91.2%</td>
                          <td>
                            <span class="status-badge badge-excellent">
                              Excellent
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="institution-logo">PU</div>
                              <div>
                                <h6 class="mb-0">Peshawar STEM Institute</h6>
                                <small class="text-muted">Peshawar, KPK</small>
                              </div>
                            </div>
                          </td>
                          <td>KPK</td>
                          <td>754</td>
                          <td>87.8%</td>
                          <td>
                            <span class="status-badge badge-good">Good</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="institution-logo">QU</div>
                              <div>
                                <h6 class="mb-0">Quetta Science Academy</h6>
                                <small class="text-muted">
                                  Quetta, Balochistan
                                </small>
                              </div>
                            </div>
                          </td>
                          <td>Balochistan</td>
                          <td>432</td>
                          <td>76.5%</td>
                          <td>
                            <span class="status-badge badge-average">
                              Average
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center">
                              <div class="institution-logo">GBI</div>
                              <div>
                                <h6 class="mb-0">Gilgit STEM Center</h6>
                                <small class="text-muted">Gilgit, GB</small>
                              </div>
                            </div>
                          </td>
                          <td>Gilgit-Baltistan</td>
                          <td>298</td>
                          <td>68.9%</td>
                          <td>
                            <span class="status-badge badge-poor">
                              Needs Improvement
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="system-status">
                <h5 class="mb-3">National System Status</h5>
                <div class="status-item">
                  <div class="d-flex align-items-center">
                    <span class="status-indicator status-online"></span>
                    <span>LMS Platform</span>
                  </div>
                  <span class="text-success">Online</span>
                </div>
                <div class="status-item">
                  <div class="d-flex align-items-center">
                    <span class="status-indicator status-online"></span>
                    <span>Database Servers</span>
                  </div>
                  <span class="text-success">Online</span>
                </div>
                <div class="status-item">
                  <div class="d-flex align-items-center">
                    <span class="status-indicator status-warning"></span>
                    <span>Content Delivery</span>
                  </div>
                  <span class="text-warning">High Load</span>
                </div>
                <div class="status-item">
                  <div class="d-flex align-items-center">
                    <span class="status-indicator status-online"></span>
                    <span>Assessment System</span>
                  </div>
                  <span class="text-success">Online</span>
                </div>
                <div class="status-item">
                  <div class="d-flex align-items-center">
                    <span class="status-indicator status-offline"></span>
                    <span>Backup Services</span>
                  </div>
                  <span class="text-danger">Maintenance</span>
                </div>
              </div>

              <div class="card dashboard-card mt-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Compliance Status</h5>
                </div>
                <div class="card-body">
                  <div class="compliance-item">
                    <div class="compliance-icon compliance-compliant">
                      <i class="bi bi-check-lg"></i>
                    </div>
                    <div>
                      <h6 class="mb-0">Curriculum Standards</h6>
                      <small class="text-muted">132/142 compliant</small>
                    </div>
                  </div>
                  <div class="compliance-item">
                    <div class="compliance-icon compliance-compliant">
                      <i class="bi bi-check-lg"></i>
                    </div>
                    <div>
                      <h6 class="mb-0">Teacher Qualifications</h6>
                      <small class="text-muted">128/142 compliant</small>
                    </div>
                  </div>
                  <div class="compliance-item">
                    <div class="compliance-icon compliance-pending">
                      <i class="bi bi-clock"></i>
                    </div>
                    <div>
                      <h6 class="mb-0">Assessment Reporting</h6>
                      <small class="text-muted">98/142 compliant</small>
                    </div>
                  </div>
                  <div class="compliance-item">
                    <div class="compliance-icon compliance-noncompliant">
                      <i class="bi bi-exclamation-lg"></i>
                    </div>
                    <div>
                      <h6 class="mb-0">Infrastructure</h6>
                      <small class="text-muted">76/142 compliant</small>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card dashboard-card mt-4">
                <div class="card-header bg-white">
                  <h5 class="mb-0">Quick Actions</h5>
                </div>
                <div class="card-body">
                  <div class="quick-actions">
                    <div class="action-card">
                      <i class="bi bi-building"></i>
                      <span>Add Institution</span>
                    </div>
                    <div class="action-card">
                      <i class="bi bi-file-earmark-text"></i>
                      <span>Generate Report</span>
                    </div>
                    <div class="action-card">
                      <i class="bi bi-graph-up"></i>
                      <span>View Analytics</span>
                    </div>
                    <div class="action-card">
                      <i class="bi bi-shield-check"></i>
                      <span>Security Audit</span>
                    </div>
                    <div class="action-card">
                      <i class="bi bi-gear"></i>
                      <span>System Settings</span>
                    </div>
                    <div class="action-card">
                      <i class="bi bi-clock-history"></i>
                      <span>Audit Logs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StemDashboard;
