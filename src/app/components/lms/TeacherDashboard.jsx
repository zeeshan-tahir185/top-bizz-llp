"use client";
import React, { useEffect } from "react";

const TeacherDashboard = () => {
     useEffect(() => {
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const closeSidebar = document.getElementById("close-mobile-sidebar");
    const mobileSidebar = document.getElementById("mobile-sidebar");
    const overlay = document.getElementById("overlay");
    const saveBtn = document.getElementById("saveAnnouncement");

    // ✅ Sidebar Open
    if (sidebarToggle && mobileSidebar && overlay) {
      sidebarToggle.addEventListener("click", () => {
        mobileSidebar.classList.add("show");
        overlay.classList.add("show");
      });
    }

    // ✅ Sidebar Close
    if (closeSidebar && mobileSidebar && overlay) {
      closeSidebar.addEventListener("click", () => {
        mobileSidebar.classList.remove("show");
        overlay.classList.remove("show");
      });
    }

    // ✅ Overlay Click
    if (overlay && mobileSidebar) {
      overlay.addEventListener("click", () => {
        mobileSidebar.classList.remove("show");
        overlay.classList.remove("show");
      });
    }

    // ✅ Announcement Modal Handler
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        const title = document.getElementById("announcementTitle")?.value;
        const content = document.getElementById("announcementContent")?.value;
        const course = document.getElementById("announcementCourse")?.value;

        if (title && content) {
          alert(`Announcement "${title}" created successfully for ${course}!`);

          if (typeof bootstrap !== "undefined") {
            const modalElement = document.getElementById("announcementModal");
            const modal = bootstrap.Modal.getInstance(modalElement);
            modal?.hide();
          }

          const form = document.getElementById("announcementForm");
          form?.reset();
        } else {
          alert("Please fill in all required fields.");
        }
      });
    }

    // ✅ Initialize Tooltips
    if (typeof bootstrap !== "undefined") {
      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.map(
        (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
      );
    }

    // ✅ Cleanup listeners when component unmounts
    return () => {
      sidebarToggle?.removeEventListener("click", () => {});
      closeSidebar?.removeEventListener("click", () => {});
      overlay?.removeEventListener("click", () => {});
      saveBtn?.removeEventListener("click", () => {});
    };
  }, []);
  return (
    <div>
      <div className="overlay" id="overlay"></div>
      <div id="mobile-sidebar">
        <div className="sidebar-header p-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3>TeachPortal</h3>
              <p>Teacher Dashboard</p>
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
              <i className="bi bi-journal-text"></i> Courses
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-people"></i> Students
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-calendar-check"></i> Schedule
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-clipboard-data"></i> Gradebook
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-chat-left-text"></i> Messages
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-gear"></i> Settings
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
          <h3>TeachPortal</h3>
          <p>Teacher Dashboard</p>
        </div>
        <ul className="sidebar-menu">
          <li>
            <a href="#" className="active">
              <i className="bi bi-speedometer2"></i> Dashboard
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-journal-text"></i> Courses
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-people"></i> Students
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-calendar-check"></i> Schedule
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-clipboard-data"></i> Gradebook
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-chat-left-text"></i> Messages
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-gear"></i> Settings
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
              <i className="bi bi-list" style={{fontSize: "1.5rem"}}></i>
            </button>
            <div className="search-box">
              <i className="bi bi-search"></i>
              <input type="text" className="form-control" placeholder="Search..." />
            </div>
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
                  src="https://ui-avatars.com/api/?name=John+Doe&background=4361ee&color=fff"
                  alt="User"
                />
                <span className="d-none d-md-inline">John Doe</span>
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

        <div className="container-fluid p-4">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="card dashboard-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title text-muted">Students</h5>
                      <h2 className="mb-0">142</h2>
                      <p className="text-success">
                        <small>
                          <i className="bi bi-arrow-up"></i> 5.2% from last month
                        </small>
                      </p>
                    </div>
                    <div className="card-icon bg-primary-light">
                      <i className="bi bi-people"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card dashboard-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title text-muted">Courses</h5>
                      <h2 className="mb-0">8</h2>
                      <p className="text-muted">
                        <small>4 active this semester</small>
                      </p>
                    </div>
                    <div className="card-icon bg-success-light">
                      <i className="bi bi-journal-text"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card dashboard-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title text-muted">Assignments</h5>
                      <h2 className="mb-0">24</h2>
                      <p className="text-warning">
                        <small>3 pending grading</small>
                      </p>
                    </div>
                    <div className="card-icon bg-warning-light">
                      <i className="bi bi-clipboard-check"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card dashboard-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h5 className="card-title text-muted">Attendance</h5>
                      <h2 className="mb-0">94%</h2>
                      <p className="text-success">
                        <small>+2% this week</small>
                      </p>
                    </div>
                    <div className="card-icon bg-info-light">
                      <i className="bi bi-calendar-check"></i>
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
                  <h5 className="mb-0">Upcoming Classes</h5>
                  <a href="#" className="btn btn-sm btn-outline-primary">
                    View All
                  </a>
                </div>
                <div className="card-body">
                  <div className="class-item">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-1">Mathematics - Algebra</h6>
                        <p className="mb-0 text-muted">Room 204</p>
                      </div>
                      <div className="class-time">10:00 AM</div>
                    </div>
                  </div>
                  <div className="class-item">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-1">Science - Physics</h6>
                        <p className="mb-0 text-muted">Lab 3</p>
                      </div>
                      <div className="class-time">11:30 AM</div>
                    </div>
                  </div>
                  <div className="class-item">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-1">Computer Science</h6>
                        <p className="mb-0 text-muted">Computer Lab</p>
                      </div>
                      <div className="class-time">1:00 PM</div>
                    </div>
                  </div>
                  <div className="class-item">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="mb-1">Mathematics - Calculus</h6>
                        <p className="mb-0 text-muted">Room 204</p>
                      </div>
                      <div className="class-time">2:30 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card dashboard-card mt-4">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Recent Activity</h5>
                </div>
                <div className="card-body p-0">
                  <div className="activity-table">
                    <table className="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Student</th>
                          <th>Activity</th>
                          <th>Course</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Emily Johnson</td>
                          <td>Assignment Submission</td>
                          <td>Mathematics</td>
                          <td>10 May 2023</td>
                          <td>
                            <span className="badge badge-completed">Graded</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Michael Brown</td>
                          <td>Quiz Attempt</td>
                          <td>Science</td>
                          <td>9 May 2023</td>
                          <td>
                            <span className="badge badge-pending">Pending</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Sarah Williams</td>
                          <td>Assignment Submission</td>
                          <td>Computer Science</td>
                          <td>9 May 2023</td>
                          <td>
                            <span className="badge badge-completed">Graded</span>
                          </td>
                        </tr>
                        <tr>
                          <td>David Miller</td>
                          <td>Forum Post</td>
                          <td>Mathematics</td>
                          <td>8 May 2023</td>
                          <td>
                            <span className="badge badge-completed">Reviewed</span>
                          </td>
                        </tr>
                        <tr>
                          <td>Jessica Garcia</td>
                          <td>Assignment Submission</td>
                          <td>Science</td>
                          <td>8 May 2023</td>
                          <td>
                            <span className="badge badge-pending">Pending</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card dashboard-card">
                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Announcements</h5>
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
                    <h6>Midterm Exam Schedule</h6>
                    <p className="mb-2">
                      The midterm exam schedule has been posted. Please check
                      the course page for details.
                    </p>
                    <div className="announcement-date">Posted: 8 May 2023</div>
                  </div>
                  <div className="announcement-item">
                    <h6>Science Fair Projects</h6>
                    <p className="mb-2">
                      Science fair project proposals are due next Friday. Make
                      sure to submit yours on time.
                    </p>
                    <div className="announcement-date">Posted: 5 May 2023</div>
                  </div>
                  <div className="announcement-item">
                    <h6>Holiday Break</h6>
                    <p className="mb-2">
                      Reminder: No classes next Monday due to the public
                      holiday. Enjoy your long weekend!
                    </p>
                    <div className="announcement-date">Posted: 3 May 2023</div>
                  </div>
                </div>
              </div>

              <div className="card dashboard-card mt-4">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Quick Gradebook</h5>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Mathematics - Algebra</label>
                    <div className="progress grade-progress mb-2">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{width:"85%"}}
                      ></div>
                    </div>
                    <small className="text-muted">Average: 85%</small>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Science - Physics</label>
                    <div className="progress grade-progress mb-2">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{width:"78%"}}
                      ></div>
                    </div>
                    <small className="text-muted">Average: 78%</small>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Computer Science</label>
                    <div className="progress grade-progress mb-2">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{width:"92%"}}
                      ></div>
                    </div>
                    <small className="text-muted">Average: 92%</small>
                  </div>
                  <div>
                    <label className="form-label">Mathematics - Calculus</label>
                    <div className="progress grade-progress mb-2">
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{width:"70%"}}
                      ></div>
                    </div>
                    <small className="text-muted">Average: 70%</small>
                  </div>
                </div>
              </div>

              <div className="card dashboard-card mt-4">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Recent Students</h5>
                </div>
                <div className="card-body">
                  <div className="student-item">
                    <div className="student-avatar">EJ</div>
                    <div>
                      <h6 className="mb-0">Emily Johnson</h6>
                      <small className="text-muted">Mathematics</small>
                    </div>
                  </div>
                  <div className="student-item">
                    <div className="student-avatar">MB</div>
                    <div>
                      <h6 className="mb-0">Michael Brown</h6>
                      <small className="text-muted">Science</small>
                    </div>
                  </div>
                  <div className="student-item">
                    <div className="student-avatar">SW</div>
                    <div>
                      <h6 className="mb-0">Sarah Williams</h6>
                      <small className="text-muted">Computer Science</small>
                    </div>
                  </div>
                  <div className="student-item">
                    <div className="student-avatar">DM</div>
                    <div>
                      <h6 className="mb-0">David Miller</h6>
                      <small className="text-muted">Mathematics</small>
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
                  <label for="announcementCourse" className="form-label">
                    Course
                  </label>
                  <select className="form-select" id="announcementCourse">
                    <option selected>All Courses</option>
                    <option>Mathematics - Algebra</option>
                    <option>Science - Physics</option>
                    <option>Computer Science</option>
                    <option>Mathematics - Calculus</option>
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

export default TeacherDashboard;
