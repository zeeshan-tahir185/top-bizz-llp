"use client";
import React, { useEffect } from "react";

const AdminDashboard = () => {
  useEffect(() => {
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const overlay = document.getElementById("overlay");
    const closeSidebar = document.getElementById("close-mobile-sidebar");
    const actionCards = document.querySelectorAll(".action-card");

    if (sidebarToggle && mobileSidebar && overlay) {
      const openSidebar = () => {
        mobileSidebar.classList.add("show");
        overlay.classList.add("show");
      };
      const closeSidebarFn = () => {
        mobileSidebar.classList.remove("show");
        overlay.classList.remove("show");
      };

      sidebarToggle.addEventListener("click", openSidebar);
      closeSidebar?.addEventListener("click", closeSidebarFn);
      overlay.addEventListener("click", closeSidebarFn);

      // Action cards
      actionCards.forEach((card) => {
        card.addEventListener("click", function () {
          const action = this.querySelector("span")?.textContent;
          alert(`Action: ${action} - This would open the appropriate section`);
        });
      });

      // Bootstrap tooltips (if bootstrap is loaded globally)
      if (typeof bootstrap !== "undefined") {
        const tooltipTriggerList = [].slice.call(
          document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        tooltipTriggerList.map(function (el) {
          return new bootstrap.Tooltip(el);
        });
      }

      // ✅ Cleanup
      return () => {
        sidebarToggle.removeEventListener("click", openSidebar);
        closeSidebar?.removeEventListener("click", closeSidebarFn);
        overlay.removeEventListener("click", closeSidebarFn);
        actionCards.forEach((card) => {
          card.replaceWith(card.cloneNode(true)); // removes listeners safely
        });
      };
    }
  }, []);
  return (
    <div>
      <div className="overlay" id="overlay"></div>

      <div id="mobile-sidebar">
        <div className="sidebar-header p-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3>AdminPortal</h3>
              <p>Administrator Dashboard</p>
            </div>
            <button className="btn btn-sm btn-light" id="close-mobile-sidebar">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#" className="active">
              <i className="bi bi-speedometer2"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-people"></i> User Management
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-journal-text"></i> Content Management
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-graph-up"></i> Analytics
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-gear"></i> System Settings
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-shield-check"></i> Security
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-clock-history"></i> Audit Logs
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-box-arrow-right"></i> Logout
            </a>
          </li>
        </ul>
      </div>

      <div id="sidebar">
        <div className="sidebar-header">
          <h3>AdminPortal</h3>
          <p>Administrator Dashboard</p>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#" className="active">
              <i className="bi bi-speedometer2"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-people"></i> User Management
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-journal-text"></i> Content Management
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-graph-up"></i> Analytics
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-gear"></i> System Settings
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-shield-check"></i> Security
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-clock-history"></i> Audit Logs
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-box-arrow-right"></i> Logout
            </a>
          </li>
        </ul>
      </div>

      <div id="content">
        <div
          id="topbar"
          className="d-flex justify-content-between align-items-center"
        >
          <div className="d-flex align-items-center">
            <button className="btn btn-sm me-3 d-lg-none" id="sidebar-toggle">
              <i className="bi bi-list" style={{fontSize:"1.5rem"}}></i>
            </button>
            <div className="search-box">
              <i className="bi bi-search"></i>
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="position-relative me-4">
              <button className="btn btn-light position-relative">
                <i className="bi bi-bell"></i>
                <span className="notification-badge">5</span>
              </button>
            </div>
            <div className="user-menu d-flex align-items-center">
              <div className="dropdown">
                <a
                  href="#"
                  className="d-flex align-items-center text-decoration-none dropdown-toggle"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://ui-avatars.com/api/?name=Admin+User&background=4361ee&color=fff"
                    alt="User"
                  />
                  <span className="d-none d-md-inline">Admin User</span>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="userDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-person me-2"></i> Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-gear me-2"></i> Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-box-arrow-right me-2"></i> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-4">
          <div className="row mb-4">
            <div className="col">
              <h1 className="h3 mb-0">Admin Dashboard</h1>
              <p className="text-muted">
                Welcome back, Admin. Here's what's happening with your system
                today.
              </p>
            </div>
            <div className="col-auto">
              <div className="btn-group">
                <button className="btn btn-outline-primary">Export Report</button>
                <button className="btn btn-primary">Generate Report</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card dashboard-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title text-muted">Total Users</h5>
                      <h2 className="mb-0">2,847</h2>
                      <p className="text-success">
                        <small>
                          <i className="bi bi-arrow-up"></i> 12.5% from last month
                        </small>
                      </p>
                    </div>
                    <div className="card-icon bg-primary-light">
                      <i className="bi bi-people"></i>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress stats-progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{width:"75%"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card dashboard-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title text-muted">Revenue</h5>
                      <h2 className="mb-0">$24,580</h2>
                      <p className="text-success">
                        <small>
                          <i className="bi bi-arrow-up"></i> 8.3% from last month
                        </small>
                      </p>
                    </div>
                    <div className="card-icon bg-success-light">
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress stats-progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{width:"65%"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card dashboard-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title text-muted">Active Sessions</h5>
                      <h2 className="mb-0">1,243</h2>
                      <p className="text-danger">
                        <small>
                          <i className="bi bi-arrow-down"></i> 3.2% from last month
                        </small>
                      </p>
                    </div>
                    <div className="card-icon bg-warning-light">
                      <i className="bi bi-person-check"></i>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress stats-progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{width:"45%"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card dashboard-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title text-muted">Server Uptime</h5>
                      <h2 className="mb-0">99.8%</h2>
                      <p className="text-success">
                        <small>Last 30 days</small>
                      </p>
                    </div>
                    <div className="card-icon bg-info-light">
                      <i className="bi bi-server"></i>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress stats-progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{width:"99%"}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-8">
              <div className="card dashboard-card">
                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Recent Activity</h5>
                  <a href="#" className="btn btn-sm btn-outline-primary">
                    View All
                  </a>
                </div>
                <div className="card-body p-0">
                  <div className="data-table">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Action</th>
                          <th>Resource</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://ui-avatars.com/api/?name=John+Doe&background=4361ee&color=fff"
                                alt="User"
                                className="rounded-circle me-2"
                                width="30"
                                height="30"
                              />
                              <span>John Doe</span>
                            </div>
                          </td>
                          <td>User Login</td>
                          <td>Authentication</td>
                          <td>10 May 2023, 09:23 AM</td>
                          <td>
                            <span className="status-badge badge-active">
                              Success
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://ui-avatars.com/api/?name=Jane+Smith&background=4361ee&color=fff"
                                alt="User"
                                className="rounded-circle me-2"
                                width="30"
                                height="30"
                              />
                              <span>Jane Smith</span>
                            </div>
                          </td>
                          <td>Content Update</td>
                          <td>Article #245</td>
                          <td>10 May 2023, 08:15 AM</td>
                          <td>
                            <span className="status-badge badge-active">
                              Success
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://ui-avatars.com/api/?name=Robert+Johnson&background=4361ee&color=fff"
                                alt="User"
                                className="rounded-circle me-2"
                                width="30"
                                height="30"
                              />
                              <span>Robert Johnson</span>
                            </div>
                          </td>
                          <td>Password Reset</td>
                          <td>User Account</td>
                          <td>9 May 2023, 04:45 PM</td>
                          <td>
                            <span className="status-badge badge-pending">
                              Pending
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://ui-avatars.com/api/?name=Sarah+Williams&background=4361ee&color=fff"
                                alt="User"
                                className="rounded-circle me-2"
                                width="30"
                                height="30"
                              />
                              <span>Sarah Williams</span>
                            </div>
                          </td>
                          <td>User Registration</td>
                          <td>New Account</td>
                          <td>9 May 2023, 02:30 PM</td>
                          <td>
                            <span className="status-badge badge-active">
                              Success
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src="https://ui-avatars.com/api/?name=Michael+Brown&background=4361ee&color=fff"
                                alt="User"
                                className="rounded-circle me-2"
                                width="30"
                                height="30"
                              />
                              <span>Michael Brown</span>
                            </div>
                          </td>
                          <td>Permission Change</td>
                          <td>User Role</td>
                          <td>8 May 2023, 11:20 AM</td>
                          <td>
                            <span className="status-badge badge-inactive">
                              Failed
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="chart-container">
                    <h5 className="mb-3">User Registrations</h5>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{height:"200px", backgroundColor:"#f8f9fa", borderRadius:"8px"}}
                    >
                      <p className="text-muted">Chart would be displayed here</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="chart-container">
                    <h5 className="mb-3">Traffic Sources</h5>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{height:"200px", backgroundColor:"#f8f9fa", borderRadius:"8px"}}
                    >
                      <p className="text-muted">Chart would be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="system-status">
                <h5 className="mb-3">System Status</h5>
                <div className="status-item">
                  <div className="d-flex align-items-center">
                    <span className="status-indicator status-online"></span>
                    <span>Web Server</span>
                  </div>
                  <span className="text-success">Online</span>
                </div>
                <div className="status-item">
                  <div className="d-flex align-items-center">
                    <span className="status-indicator status-online"></span>
                    <span>Database</span>
                  </div>
                  <span className="text-success">Online</span>
                </div>
                <div className="status-item">
                  <div className="d-flex align-items-center">
                    <span className="status-indicator status-warning"></span>
                    <span>Cache Server</span>
                  </div>
                  <span className="text-warning">Slow Response</span>
                </div>
                <div className="status-item">
                  <div className="d-flex align-items-center">
                    <span className="status-indicator status-online"></span>
                    <span>API Gateway</span>
                  </div>
                  <span className="text-success">Online</span>
                </div>
                <div className="status-item">
                  <div className="d-flex align-items-center">
                    <span className="status-indicator status-offline"></span>
                    <span>Backup Service</span>
                  </div>
                  <span className="text-danger">Offline</span>
                </div>
              </div>

              <div className="card dashboard-card mt-4">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Quick Actions</h5>
                </div>
                <div className="card-body">
                  <div className="quick-actions">
                    <div className="action-card">
                      <i className="bi bi-person-plus"></i>
                      <span>Add User</span>
                    </div>
                    <div className="action-card">
                      <i className="bi bi-file-earmark-text"></i>
                      <span>Create Content</span>
                    </div>
                    <div className="action-card">
                      <i className="bi bi-gear"></i>
                      <span>Settings</span>
                    </div>
                    <div className="action-card">
                      <i className="bi bi-graph-up"></i>
                      <span>Reports</span>
                    </div>
                    <div className="action-card">
                      <i className="bi bi-shield-check"></i>
                      <span>Security</span>
                    </div>
                    <div className="action-card">
                      <i className="bi bi-clock-history"></i>
                      <span>Audit Logs</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card dashboard-card mt-4">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Recent Users</h5>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://ui-avatars.com/api/?name=Alex+Johnson&background=4361ee&color=fff"
                      alt="User"
                      className="rounded-circle me-3"
                      width="40"
                      height="40"
                    />
                    <div>
                      <h6 className="mb-0">Alex Johnson</h6>
                      <small className="text-muted">Registered: 10 May 2023</small>
                    </div>
                    <span className="badge bg-primary ms-auto">New</span>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://ui-avatars.com/api/?name=Maria+Garcia&background=4361ee&color=fff"
                      alt="User"
                      className="rounded-circle me-3"
                      width="40"
                      height="40"
                    />
                    <div>
                      <h6 className="mb-0">Maria Garcia</h6>
                      <small className="text-muted">Registered: 9 May 2023</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src="https://ui-avatars.com/api/?name=David+Wilson&background=4361ee&color=fff"
                      alt="User"
                      className="rounded-circle me-3"
                      width="40"
                      height="40"
                    />
                    <div>
                      <h6 className="mb-0">David Wilson</h6>
                      <small className="text-muted">Registered: 8 May 2023</small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://ui-avatars.com/api/?name=Lisa+Chen&background=4361ee&color=fff"
                      alt="User"
                      className="rounded-circle me-3"
                      width="40"
                      height="40"
                    />
                    <div>
                      <h6 className="mb-0">Lisa Chen</h6>
                      <small className="text-muted">Registered: 7 May 2023</small>
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

export default AdminDashboard;
