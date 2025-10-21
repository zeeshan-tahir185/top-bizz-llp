"use client"
import React, { useEffect } from "react";

const PrincipalDashboard = () => {
     useEffect(() => {
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const overlay = document.getElementById("overlay");
    const closeSidebar = document.getElementById("close-mobile-sidebar");
    const actionCards = document.querySelectorAll(".action-card");
    const saveAnnouncementBtn = document.getElementById("saveAnnouncement");

    // ✅ Sidebar open/close
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
      card._clickHandler = handleCardClick; // store for cleanup
    });

    // ✅ Announcement Modal Handler
    const handleSaveAnnouncement = () => {
      const title = document.getElementById("announcementTitle")?.value;
      const content = document.getElementById("announcementContent")?.value;
      const audience = document.getElementById("announcementAudience")?.value;

      if (title && content) {
        alert(`Announcement "${title}" created successfully for ${audience}!`);

        // Hide modal if Bootstrap is loaded
        if (typeof bootstrap !== "undefined") {
          const modalEl = document.getElementById("announcementModal");
          const modalInstance = bootstrap.Modal.getInstance(modalEl);
          modalInstance?.hide();
        }

        // Reset form
        document.getElementById("announcementForm")?.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    };

    saveAnnouncementBtn?.addEventListener("click", handleSaveAnnouncement);

    // ✅ Initialize tooltips (Bootstrap)
    if (typeof bootstrap !== "undefined") {
      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.map((el) => new bootstrap.Tooltip(el));
    }

    // ✅ Cleanup
    return () => {
      sidebarToggle?.removeEventListener("click", openSidebar);
      closeSidebar?.removeEventListener("click", closeSidebarFn);
      overlay?.removeEventListener("click", closeSidebarFn);
      saveAnnouncementBtn?.removeEventListener("click", handleSaveAnnouncement);

      actionCards.forEach((card) => {
        if (card._clickHandler) {
          card.removeEventListener("click", card._clickHandler);
          delete card._clickHandler;
        }
      });
    };
  }, []);
  return (
    <div>
      <div className="overlay" id="overlay"></div>
      <div id="mobile-sidebar">
        <div className="sidebar-header p-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3>Principal Portal</h3>
              <p>School Management System</p>
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
              <i className="bi bi-people"></i> Faculty
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-person-video3"></i> Students
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-calendar-check"></i> Attendance
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-clipboard-data"></i> Academic Performance
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-megaphone"></i> Announcements
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-calendar-event"></i> Events
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
          <h3>Principal Portal</h3>
          <p>School Management System</p>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#" className="active">
              <i className="bi bi-speedometer2"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-people"></i> Faculty
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-person-video3"></i> Students
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-calendar-check"></i> Attendance
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-clipboard-data"></i> Academic Performance
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-megaphone"></i> Announcements
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-calendar-event"></i> Events
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
              <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
            </button>
            <div className="search-box">
              <i className="bi bi-search"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="position-relative me-4">
              <button className="btn btn-light position-relative">
                <i className="bi bi-bell"></i>
                <span className="notification-badge">3</span>
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
                    src="https://ui-avatars.com/api/?name=Principal+User&background=4361ee&color=fff"
                    alt="User"
                  />
                  <span className="d-none d-md-inline">Dr. Sarah Johnson</span>
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
              <h1 className="h3 mb-0">Principal Dashboard</h1>
              <p className="text-muted">
                Welcome back, Dr. Johnson. Here's an overview of your school.
              </p>
            </div>
            <div className="col-auto">
              <div className="btn-group">
                <button className="btn btn-outline-primary">
                  Export Report
                </button>
                <button className="btn btn-primary">Generate Summary</button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="card dashboard-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title text-muted">Total Students</h5>
                      <h2 className="mb-0">1,247</h2>
                      <p className="text-success">
                        <small>
                          <i className="bi bi-arrow-up"></i> 5.2% from last year
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
                        style={{ width: "85%" }}
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
                      <h5 className="card-title text-muted">Faculty Members</h5>
                      <h2 className="mb-0">68</h2>
                      <p className="text-success">
                        <small>
                          <i className="bi bi-arrow-up"></i> 2 new hires
                        </small>
                      </p>
                    </div>
                    <div className="card-icon bg-success-light">
                      <i className="bi bi-person-badge"></i>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress stats-progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "90%" }}
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
                      <h5 className="card-title text-muted">Attendance Rate</h5>
                      <h2 className="mb-0">94.5%</h2>
                      <p className="text-danger">
                        <small>
                          <i className="bi bi-arrow-down"></i> 1.2% from last
                          month
                        </small>
                      </p>
                    </div>
                    <div className="card-icon bg-warning-light">
                      <i className="bi bi-calendar-check"></i>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress stats-progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "94%" }}
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
                      <h5 className="card-title text-muted">Avg. GPA</h5>
                      <h2 className="mb-0">3.42</h2>
                      <p className="text-success">
                        <small>
                          <i className="bi bi-arrow-up"></i> 0.08 from last term
                        </small>
                      </p>
                    </div>
                    <div className="card-icon bg-info-light">
                      <i className="bi bi-award"></i>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="progress stats-progress">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "85%" }}
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
                  <h5 className="mb-0">Academic Performance by Department</h5>
                  <a href="#" className="btn btn-sm btn-outline-primary">
                    View Details
                  </a>
                </div>
                <div className="card-body p-0">
                  <div className="data-table">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Department</th>
                          <th>Average GPA</th>
                          <th>Performance</th>
                          <th>Top Performer</th>
                          <th>Improvement</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mathematics</td>
                          <td>3.65</td>
                          <td>
                            <span className="status-badge badge-excellent">
                              Excellent
                            </span>
                          </td>
                          <td>Emily Johnson (4.0)</td>
                          <td className="text-success">+0.12</td>
                        </tr>
                        <tr>
                          <td>Science</td>
                          <td>3.48</td>
                          <td>
                            <span className="status-badge badge-good">
                              Good
                            </span>
                          </td>
                          <td>Michael Brown (3.9)</td>
                          <td className="text-success">+0.08</td>
                        </tr>
                        <tr>
                          <td>English</td>
                          <td>3.32</td>
                          <td>
                            <span className="status-badge badge-average">
                              Average
                            </span>
                          </td>
                          <td>Sarah Williams (3.8)</td>
                          <td className="text-warning">+0.02</td>
                        </tr>
                        <tr>
                          <td>Social Studies</td>
                          <td>3.25</td>
                          <td>
                            <span className="status-badge badge-average">
                              Average
                            </span>
                          </td>
                          <td>David Miller (3.7)</td>
                          <td className="text-danger">-0.05</td>
                        </tr>
                        <tr>
                          <td>Arts</td>
                          <td>3.40</td>
                          <td>
                            <span className="status-badge badge-good">
                              Good
                            </span>
                          </td>
                          <td>Jessica Garcia (3.9)</td>
                          <td className="text-success">+0.10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="chart-container">
                    <h5 className="mb-3">Student Performance Trend</h5>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: "200px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                      }}
                    >
                      <p className="text-muted">
                        Performance chart would be displayed here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="chart-container">
                    <h5 className="mb-3">Attendance Overview</h5>
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        height: "200px",
                        backgroundColor: "#f8f9fa",
                        borderRadius: "8px",
                      }}
                    >
                      <p className="text-muted">
                        Attendance chart would be displayed here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card dashboard-card">
                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">School Announcements</h5>
                  <button
                    className="btn btn-sm btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#announcementModal"
                  >
                    <i className="bi bi-plus-lg"></i> New
                  </button>
                </div>
                <div className="card-body">
                  <div className="announcement-item">
                    <h6>Parent-Teacher Conference</h6>
                    <p className="mb-2">
                      The parent-teacher conference is scheduled for next week.
                      Please ensure all progress reports are updated.
                    </p>
                    <div className="announcement-date">Posted: 10 May 2023</div>
                  </div>
                  <div className="announcement-item">
                    <h6>Science Fair Winners</h6>
                    <p className="mb-2">
                      Congratulations to the winners of the annual science fair.
                      The award ceremony will be on Friday.
                    </p>
                    <div className="announcement-date">Posted: 8 May 2023</div>
                  </div>
                  <div className="announcement-item">
                    <h6>Staff Development Day</h6>
                    <p className="mb-2">
                      Reminder: No classes next Monday due to staff development
                      day. All teachers are expected to attend.
                    </p>
                    <div className="announcement-date">Posted: 5 May 2023</div>
                  </div>
                </div>
              </div>

              <div className="card dashboard-card mt-4">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Upcoming Events</h5>
                </div>
                <div className="card-body">
                  <div className="event-item">
                    <div className="event-date">
                      <div className="event-day">15</div>
                      <div className="event-month">May</div>
                    </div>
                    <div>
                      <h6 className="mb-0">Board Meeting</h6>
                      <small className="text-muted">
                        10:00 AM - Conference Room
                      </small>
                    </div>
                  </div>
                  <div className="event-item">
                    <div className="event-date">
                      <div className="event-day">18</div>
                      <div className="event-month">May</div>
                    </div>
                    <div>
                      <h6 className="mb-0">Science Fair</h6>
                      <small className="text-muted">All day - Gymnasium</small>
                    </div>
                  </div>
                  <div className="event-item">
                    <div className="event-date">
                      <div className="event-day">22</div>
                      <div className="event-month">May</div>
                    </div>
                    <div>
                      <h6 className="mb-0">Graduation Ceremony</h6>
                      <small className="text-muted">2:00 PM - Auditorium</small>
                    </div>
                  </div>
                  <div className="event-item">
                    <div className="event-date">
                      <div className="event-day">25</div>
                      <div className="event-month">May</div>
                    </div>
                    <div>
                      <h6 className="mb-0">Staff Appreciation Day</h6>
                      <small className="text-muted">
                        Lunch - Teacher's Lounge
                      </small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card dashboard-card mt-4">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Quick Actions</h5>
                </div>
                <div className="card-body">
                  <div className="quick-actions">
                    <div className="action-card">
                      <i className="bi bi-megaphone"></i>
                      <span>New Announcement</span>
                    </div>
                    <div className="action-card">
                      <i className="bi bi-calendar-plus"></i>
                      <span>Schedule Event</span>
                    </div>
                    <div className="action-card">
                      <i className="bi bi-file-earmark-text"></i>
                      <span>Generate Report</span>
                    </div>
                    <div className="action-card">
                      <i className="bi bi-person-plus"></i>
                      <span>Add Staff</span>
                    </div>
                    <div className="action-card">
                      <i className="bi bi-graph-up"></i>
                      <span>View Analytics</span>
                    </div>
                    <div className="action-card">
                      <i className="bi bi-gear"></i>
                      <span>Settings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="announcementModal"
        tabindex="-1"
        aria-labelledby="announcementModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="announcementModalLabel">
                Create New Announcement
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="announcementForm">
                <div className="mb-3">
                  <label for="announcementTitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="announcementTitle"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="announcementContent" className="form-label">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    id="announcementContent"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="announcementAudience" className="form-label">
                    Audience
                  </label>
                  <select className="form-select" id="announcementAudience">
                    <option selected>All School</option>
                    <option>Faculty Only</option>
                    <option>Students Only</option>
                    <option>Parents Only</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                id="saveAnnouncement"
              >
                Publish Announcement
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalDashboard;
